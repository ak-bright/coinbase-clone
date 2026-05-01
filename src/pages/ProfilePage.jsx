import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { userAPI, cryptoAPI } from "../services/api";
import Toast from "../components/Toast";
import logo from "../assets/coinbase-logo.svg";

function ProfilePage() {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Add Crypto form state
  const [cryptoForm, setCryptoForm] = useState({
    name: "",
    symbol: "",
    price: "",
    image: "",
    change24h: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // My added cryptos
  const [myCryptos, setMyCryptos] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);

  useEffect(() => {
    fetchProfile();
    fetchMyCryptos();
    fetchGainers();
    fetchNewListings();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await userAPI.getProfile();
      if (response.data.success) {
        setProfile(response.data.user);
      }
    } catch (err) {
      console.error("Failed to fetch profile:", err);
      setToast({ type: "error", message: "Failed to load profile." });
    } finally {
      setLoading(false);
    }
  };

  const fetchMyCryptos = async () => {
    try {
      const response = await cryptoAPI.getAll();
      if (response.data.success) {
        setMyCryptos(response.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch cryptos:", err);
    }
  };

  const fetchGainers = async () => {
    try {
      const response = await cryptoAPI.getGainers();
      if (response.data.success) {
        setGainers(response.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch gainers:", err);
    }
  };

  const fetchNewListings = async () => {
    try {
      const response = await cryptoAPI.getNewListings();
      if (response.data.success) {
        setNewListings(response.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch new listings:", err);
    }
  };

  const handleCryptoSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await cryptoAPI.addCrypto({
        name: cryptoForm.name,
        symbol: cryptoForm.symbol,
        price: Number(cryptoForm.price),
        image: cryptoForm.image,
        change24h: Number(cryptoForm.change24h) || 0,
      });

      if (response.data.success) {
        setToast({ type: "success", message: response.data.message });
        setCryptoForm({ name: "", symbol: "", price: "", image: "", change24h: "" });
        fetchMyCryptos();
        fetchGainers();
        fetchNewListings();
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to add cryptocurrency.";
      setToast({ type: "error", message: msg });
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  const displayUser = profile || user;
  const joinDate = new Date(displayUser?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const renderCryptoTable = (title, icon, data) => {
    if (!data || data.length === 0) return null;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          {icon}
          {title} ({data.length})
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm font-semibold border-b border-gray-100">
                <th className="pb-3 pr-4">Name</th>
                <th className="pb-3 pr-4">Symbol</th>
                <th className="pb-3 pr-4">Price</th>
                <th className="pb-3 pr-4">24h Change</th>
                <th className="pb-3">Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.map((crypto) => (
                <tr key={crypto._id} className="hover:bg-gray-50 transition">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-3">
                      {crypto.image ? (
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                          {crypto.symbol?.charAt(0)}
                        </div>
                      )}
                      <span className="font-semibold text-gray-900">
                        {crypto.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-gray-600 font-medium">
                    {crypto.symbol}
                  </td>
                  <td className="py-3 pr-4 text-gray-900 font-semibold">
                    ${Number(crypto.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </td>
                  <td
                    className={`py-3 pr-4 font-semibold ${
                      crypto.change24h >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {crypto.change24h >= 0 ? "+" : ""}
                    {crypto.change24h}%
                  </td>
                  <td className="py-3 text-gray-500 text-sm">
                    {new Date(crypto.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Top Bar */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Coinbase" className="h-8 w-8" />
            <span className="font-bold text-xl text-gray-900">Coinbase</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Home
            </Link>
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition text-sm"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white text-3xl font-bold">
                {displayUser?.name?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {displayUser?.name}
              </h1>
              <p className="text-gray-500 font-medium">{displayUser?.email}</p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                Member since
              </p>
              <p className="text-gray-700 font-semibold">{joinDate}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Account Details
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Full Name</span>
                <span className="text-gray-900 font-semibold">{displayUser?.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Email</span>
                <span className="text-gray-900 font-semibold">{displayUser?.email}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Account ID</span>
                <span className="text-gray-600 font-mono text-sm">
                  {displayUser?._id?.slice(-8).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-500 font-medium">Joined</span>
                <span className="text-gray-900 font-semibold">{joinDate}</span>
              </div>
            </div>
          </motion.div>

          {/* Add Cryptocurrency Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Cryptocurrency
            </h2>

            <form onSubmit={handleCryptoSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name (e.g. Bitcoin)"
                  value={cryptoForm.name}
                  onChange={(e) =>
                    setCryptoForm({ ...cryptoForm, name: e.target.value })
                  }
                  required
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
                />
                <input
                  type="text"
                  placeholder="Symbol (e.g. BTC)"
                  value={cryptoForm.symbol}
                  onChange={(e) =>
                    setCryptoForm({ ...cryptoForm, symbol: e.target.value })
                  }
                  required
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  step="any"
                  placeholder="Price (USD)"
                  value={cryptoForm.price}
                  onChange={(e) =>
                    setCryptoForm({ ...cryptoForm, price: e.target.value })
                  }
                  required
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
                />
                <input
                  type="number"
                  step="any"
                  placeholder="24h Change (%)"
                  value={cryptoForm.change24h}
                  onChange={(e) =>
                    setCryptoForm({ ...cryptoForm, change24h: e.target.value })
                  }
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Image URL (optional)"
                value={cryptoForm.image}
                onChange={(e) =>
                  setCryptoForm({ ...cryptoForm, image: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition text-sm"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adding...
                  </span>
                ) : (
                  "Add Cryptocurrency"
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {renderCryptoTable(
          "Added Cryptocurrencies",
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>,
          myCryptos
        )}

        {renderCryptoTable(
          "Top Gainers",
          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>,
          gainers
        )}

        {renderCryptoTable(
          "New Listings",
          <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>,
          newListings
        )}

      </div>
    </div>
  );
}

export default ProfilePage;
