import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const INITIAL_CRYPTOS = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    current_price: 856505.01,
    price_change_percentage_24h: 0.33
  },
  {
    id: "ethereum",
    name: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    current_price: 25321.76,
    price_change_percentage_24h: -0.27
  },
  {
    id: "tether",
    name: "Tether",
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
    current_price: 11.19,
    price_change_percentage_24h: 0.00
  },
  {
    id: "ripple",
    name: "XRP",
    image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
    current_price: 15.30,
    price_change_percentage_24h: -0.94
  },
  {
    id: "binancecoin",
    name: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
    current_price: 6893.75,
    price_change_percentage_24h: -0.60
  },
  {
    id: "usd-coin",
    name: "USDC",
    image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
    current_price: 11.20,
    price_change_percentage_24h: -0.01 
  }
];

function CryptoPriceTable() {
  const [cryptos, setCryptos] = useState(INITIAL_CRYPTOS);
  const [activeTab, setActiveTab] = useState("Tradable");

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptos((prevCryptos) =>
        prevCryptos.map((crypto) => {
          // Random price change between -0.5% and +0.5%
          const changeFactor = 1 + (Math.random() * 0.01 - 0.005);
          const newPrice = crypto.current_price * changeFactor;
          
          // Slightly tweak the 24h percentage
          const changeDiff = (Math.random() * 0.2 - 0.1);
          const newChange = crypto.price_change_percentage_24h + changeDiff;

          return {
            ...crypto,
            current_price: newPrice,
            price_change_percentage_24h: newChange,
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    return `GHS ${price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: price >= 1 ? 2 : 6,
    })}`;
  };

  const formatChange = (change) => {
    if (change === null || change === undefined) return "0.00%";
    return `${Math.abs(change).toFixed(2)}%`;
  };

  const displayCryptos = cryptos.slice(0, 6);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-[#0a0b0d] rounded-3xl overflow-hidden shadow-2xl border border-gray-800/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Tabs Header */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center gap-2">
          {["Tradable", "Top gainers", "New on Coinbase"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-semibold transition-colors px-4 py-2 rounded-full ${
                activeTab === tab
                  ? "bg-[#2b2f36] text-white"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col py-2">
        {displayCryptos.map((crypto, index) => {
          const change = crypto.price_change_percentage_24h;
          const isPositive = change >= 0;
          const changeColor = isPositive ? "text-[#00d859]" : "text-[#ff5a5a]";

          return (
            <motion.div
              key={crypto.id || index}
              className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              {/* Left: Icon & Name */}
              <div className="flex items-center gap-4">
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  loading="lazy"
                />
                <span className="text-white font-medium text-2xl tracking-tight">
                  {crypto.name}
                </span>
              </div>

              {/* Right: Price & Change */}
              <div className="text-right flex-shrink-0">
                <p className="text-white font-medium text-2xl tracking-tight">
                  {formatPrice(crypto.current_price)}
                </p>
                <div className={`text-sm font-medium mt-0.5 flex items-center justify-end gap-1 ${changeColor}`}>
                  {isPositive ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="7" x2="17" y2="17"></line>
                      <polyline points="17 7 17 17 7 17"></polyline>
                    </svg>
                  )}
                  <span>{formatChange(change)}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default CryptoPriceTable;
