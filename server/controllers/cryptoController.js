import Crypto from "../models/Crypto.js";
import axios from "axios";

// In-memory cache for CoinMarketCap data
let priceCache = {
  data: null,
  lastFetch: 0,
  TTL: 5 * 60 * 1000, // 5 minutes
};

// Fetch live prices from CoinMarketCap
const fetchLivePrices = async () => {
  const now = Date.now();

  // Return cached data if still fresh
  if (priceCache.data && now - priceCache.lastFetch < priceCache.TTL) {
    return priceCache.data;
  }

  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
          Accept: "application/json",
        },
        params: {
          start: 1,
          limit: 20,
          convert: "USD",
        },
      }
    );

    // Transform CMC data into a consistent format for the frontend
    const transformed = response.data.data.map((coin) => ({
      id: coin.slug,
      name: coin.name,
      symbol: coin.symbol,
      current_price: coin.quote.USD.price,
      price_change_percentage_24h: coin.quote.USD.percent_change_24h,
      market_cap: coin.quote.USD.market_cap,
      total_volume: coin.quote.USD.volume_24h,
      image: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`,
      cmc_rank: coin.cmc_rank,
    }));

    priceCache.data = transformed;
    priceCache.lastFetch = now;
    return transformed;
  } catch (error) {
    console.error(
      "CoinMarketCap API error:",
      error.response?.data?.status?.error_message || error.message
    );
    // Return cached data even if stale, or empty array
    return priceCache.data || [];
  }
};

// @desc    Get all cryptocurrencies from DB
// @route   GET /api/crypto
// @access  Public
export const getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    console.error("Get all crypto error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching cryptocurrencies.",
    });
  }
};

// @desc    Get top gainers (sorted by change24h desc)
// @route   GET /api/crypto/gainers
// @access  Public
export const getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } })
      .sort({ change24h: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: gainers.length,
      data: gainers,
    });
  } catch (error) {
    console.error("Get gainers error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching top gainers.",
    });
  }
};

// @desc    Get new listings (sorted by createdAt desc)
// @route   GET /api/crypto/new
// @access  Public
export const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: newListings.length,
      data: newListings,
    });
  } catch (error) {
    console.error("Get new listings error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching new listings.",
    });
  }
};

// @desc    Add a new cryptocurrency
// @route   POST /api/crypto
// @access  Private
export const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    // Validate required fields
    if (!name || !symbol || price === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, symbol, and price.",
      });
    }

    const crypto = await Crypto.create({
      name,
      symbol: symbol.toUpperCase(),
      price: Number(price),
      image: image || "",
      change24h: Number(change24h) || 0,
    });

    res.status(201).json({
      success: true,
      message: `${crypto.name} (${crypto.symbol}) added successfully!`,
      data: crypto,
    });
  } catch (error) {
    console.error("Add crypto error:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(". "),
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error adding cryptocurrency.",
    });
  }
};

// @desc    Get live crypto prices from CoinMarketCap
// @route   GET /api/crypto/live-prices
// @access  Public
export const getLivePrices = async (req, res) => {
  try {
    const prices = await fetchLivePrices();

    res.status(200).json({
      success: true,
      count: prices.length,
      data: prices,
    });
  } catch (error) {
    console.error("Get live prices error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching live prices.",
    });
  }
};
