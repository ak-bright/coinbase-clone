import { useState, useEffect, useCallback, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { cryptoAPI } from "../services/api";

const ROWS = 6; // Fixed number of rows to always display

const TABS = [
  { key: "Tradable", label: "Tradable", fetcher: () => cryptoAPI.getLivePrices() },
  { key: "Top gainers", label: "Top gainers", fetcher: () => cryptoAPI.getGainers() },
  { key: "New on Coinbase", label: "New on Coinbase", fetcher: () => cryptoAPI.getNewListings() },
];

// Normalize different API response shapes into a consistent format
const normalizeCrypto = (item) => {
  return {
    id: item._id || item.id || item.slug,
    name: item.name,
    symbol: item.symbol,
    current_price: item.current_price ?? item.price ?? 0,
    price_change_percentage_24h: item.price_change_percentage_24h ?? item.change24h ?? 0,
    image:
      item.image ||
      `https://ui-avatars.com/api/?name=${item.symbol}&background=1a1a2e&color=fff&size=64&bold=true`,
    createdAt: item.createdAt,
  };
};

function CryptoPriceTable() {
  const [activeTab, setActiveTab] = useState("Tradable");
  const [tabData, setTabData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const livePricesRef = useRef([]); // Cache of live prices used to fill empty slots

  const fetchTabData = useCallback(async (tabKey) => {
    setLoading(true);
    setError(null);

    const tab = TABS.find((t) => t.key === tabKey);
    if (!tab) return;

    try {
      const response = await tab.fetcher();
      if (response.data.success) {
        const normalized = response.data.data.map(normalizeCrypto);
        setTabData(normalized);

        // Cache live prices so we can use them to fill other tabs
        if (tabKey === "Tradable") {
          livePricesRef.current = normalized;
        }
      } else {
        setTabData([]);
      }
    } catch (err) {
      console.error(`Failed to fetch ${tabKey} data:`, err);
      setError(`Unable to load ${tabKey.toLowerCase()} data`);
      setTabData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Pre-fetch live prices on mount so they're available as filler
  useEffect(() => {
    const prefetch = async () => {
      try {
        const response = await cryptoAPI.getLivePrices();
        if (response.data.success) {
          livePricesRef.current = response.data.data.map(normalizeCrypto);
        }
      } catch {
        // Silently ignore — filler just won't be available
      }
    };
    prefetch();
  }, []);

  // Fetch data whenever the active tab changes
  useEffect(() => {
    fetchTabData(activeTab);
  }, [activeTab, fetchTabData]);

  // Auto-refresh every 5 minutes for the Tradable tab
  useEffect(() => {
    if (activeTab !== "Tradable") return;
    const interval = setInterval(() => fetchTabData("Tradable"), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [activeTab, fetchTabData]);

  const handleTabChange = (tabKey) => {
    if (tabKey === activeTab) return;
    setActiveTab(tabKey);
  };

  // Build the display list: use tab data, fill remaining slots with live prices
  const getDisplayCryptos = () => {
    const primary = tabData.slice(0, ROWS);

    if (primary.length >= ROWS) return primary;

    // Get IDs already shown so we don't duplicate
    const shownIds = new Set(primary.map((c) => c.id));
    const shownSymbols = new Set(primary.map((c) => c.symbol));

    const fillers = livePricesRef.current.filter(
      (c) => !shownIds.has(c.id) && !shownSymbols.has(c.symbol)
    );

    const needed = ROWS - primary.length;
    return [...primary, ...fillers.slice(0, needed)];
  };

  const displayCryptos = loading ? [] : getDisplayCryptos();

  const formatPrice = (price) => {
    if (!price || price === 0) return "$0.00";
    return `$${price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: price >= 1 ? 2 : 6,
    })}`;
  };

  const formatChange = (change) => {
    if (change === null || change === undefined) return "0.00%";
    return `${Math.abs(change).toFixed(2)}%`;
  };

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
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`text-sm font-semibold transition-colors px-4 py-2 rounded-full ${
                activeTab === tab.key
                  ? "bg-[#2b2f36] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fixed-height content area for exactly 6 rows */}
      <div className="min-h-[432px] flex flex-col justify-center">
        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <span className="ml-3 text-gray-400 text-sm">Loading...</span>
          </div>
        )}

        {/* Error Banner */}
        {error && !loading && (
          <div className="mx-6 mb-2 px-4 py-2 bg-yellow-900/30 border border-yellow-700/40 rounded-lg">
            <p className="text-yellow-400 text-xs">{error}</p>
          </div>
        )}

        {/* Table */}
        {!loading && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="flex flex-col py-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
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
                        className="w-10 h-10 rounded-full flex-shrink-0 bg-gray-800"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${crypto.symbol}&background=1a1a2e&color=fff&size=40&bold=true`;
                        }}
                      />
                      <div className="flex flex-col">
                        <span className="text-white font-medium text-xl tracking-tight">
                          {crypto.name}
                        </span>
                        <span className="text-gray-500 text-xs font-medium">
                          {crypto.symbol}
                        </span>
                      </div>
                    </div>

                    {/* Right: Price & Change */}
                    <div className="text-right flex-shrink-0">
                      <p className="text-white font-medium text-xl tracking-tight">
                        {formatPrice(crypto.current_price)}
                      </p>
                      <div
                        className={`text-sm font-medium mt-0.5 flex items-center justify-end gap-1 ${changeColor}`}
                      >
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
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}

export default CryptoPriceTable;
