<<<<<<< HEAD
import { motion } from "framer-motion";
import heroImage1 from "../assets/hero-1-image.avif";
import heroImage2png from "../assets/hero2.png";
import heroImage2avif from "../assets/hero-2.avif";
import heroImage4 from "../assets/hero-4.avif";
import coinbaseLogo from "../assets/coinbase-logo.svg";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

function LandingPage() {
  return (
    <main className="pt-20">
      {/* Section 1: Hero */}
      <section className="bg-white text-gray-900 py-16 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 w-full order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={heroImage1}
              alt="Coinbase App on Phone"
              className="w-full max-w-2xl xl:max-w-[120%] mx-auto lg:ml-0 rounded-3xl"
            />
          </motion.div>

          <motion.div
            className="flex-1 space-y-6 order-1 lg:order-2 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              The future of finance is here.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Trade crypto and more on a platform you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="px-6 py-4 border border-gray-300 rounded-lg w-full sm:w-auto flex-1 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-lg transition-all"
              />
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-lg whitespace-nowrap">
                Sign up
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Explore crypto */}
      <section className="bg-[#f5f8fa] py-24 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 tracking-tight"
            >
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-gray-600"
            >
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="pt-4">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-lg">
                See more assets
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={heroImage2png}
              alt="Crypto Assets List"
              className="w-full max-w-2xl mx-auto rounded-[2rem] shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Advanced Trader */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 w-full order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={heroImage2avif}
              alt="Advanced Trading Interface"
              className="w-full max-w-2xl mx-auto rounded-[2rem]"
            />
          </motion.div>

          <motion.div
            className="flex-1 space-y-6 order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 tracking-tight"
            >
              Powerful tools, designed for the advanced trader.
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Powerful analytical tools with the safety and security of Coinbase
              deliver the ultimate trading experience. Tap into sophisticated
              charting capabilities, real-time order books, and deep liquidity
              across hundreds of markets.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="pt-4">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-lg">
                Start trading
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Base App */}
      <section className="bg-white py-24 px-6 lg:px-12 pb-32">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 w-full order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={heroImage4}
              alt="Base App Earnings"
              className="w-full max-w-xl mx-auto rounded-3xl"
            />
          </motion.div>

          <motion.div
            className="flex-1 space-y-6 order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-full shadow-sm mb-2">
              <img src={coinbaseLogo} alt="Base" className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest text-[#5b616e] uppercase">Base App</span>
            </motion.div>
            
            <motion.h2
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 tracking-tight"
            >
              Countless ways to earn crypto with the Base App.
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-gray-600"
            >
              An everything app to trade, create, discover, and chat, all in one place.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="pt-4">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-lg">
                Learn more
              </button>
            </motion.div>
          </motion.div>
=======
import { useState } from "react";
import heroImage from "../assets/cryto-image.avif";
import hero2 from "../assets/hero-2.avif";
import hero3 from "../assets/hero-3.avif";
import hero4 from "../assets/hero-4.avif";
import bitcoinIcon from "../assets/bitcoin-icon.png";
import ethIcon from "../assets/eth-icon.png";
import tetherIcon from "../assets/tether-icon.png";
import bnbIcon from "../assets/bnb-icon.png";
import xrpIcon from "../assets/xrp-icon.png";
import usdcIcon from "../assets/usdc-icon.png";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("Tradable");

  const tabs = ["Tradable", "Top gainers", "New on Coinbase"];

  const cryptoData = {
    Tradable: [
      { name: "Bitcoin", icon: bitcoinIcon, price: "GHS 741,728.12", change: "4.51%" },
      { name: "Ethereum", icon: ethIcon, price: "GHS 21,808.52", change: "4.79%" },
      { name: "Tether", icon: tetherIcon, price: "GHS 10.79", change: "0.01%" },
      { name: "BNB", icon: bnbIcon, price: "GHS 6,895.98", change: "4.46%" },
      { name: "XRP", icon: xrpIcon, price: "GHS 14.78", change: "2.71%" },
      { name: "USDC", icon: usdcIcon, price: "GHS 10.79", change: "--" },
    ],
    "Top gainers": [
      { name: "Ethereum", icon: ethIcon, price: "GHS 21,808.52", change: "4.79%" },
      { name: "Bitcoin", icon: bitcoinIcon, price: "GHS 741,728.12", change: "4.51%" },
      { name: "BNB", icon: bnbIcon, price: "GHS 6,895.98", change: "4.46%" },
      { name: "XRP", icon: xrpIcon, price: "GHS 14.78", change: "2.71%" },
      { name: "Tether", icon: tetherIcon, price: "GHS 10.79", change: "0.01%" },
      { name: "USDC", icon: usdcIcon, price: "GHS 10.79", change: "--" },
    ],
    "New on Coinbase": [
      { name: "BNB", icon: bnbIcon, price: "GHS 6,895.98", change: "4.46%" },
      { name: "XRP", icon: xrpIcon, price: "GHS 14.78", change: "2.71%" },
      { name: "Tether", icon: tetherIcon, price: "GHS 10.79", change: "0.01%" },
      { name: "Ethereum", icon: ethIcon, price: "GHS 21,808.52", change: "4.79%" },
      { name: "Bitcoin", icon: bitcoinIcon, price: "GHS 741,728.12", change: "4.51%" },
      { name: "USDC", icon: usdcIcon, price: "GHS 10.79", change: "--" },
    ],
  };

  return (
    <main className="pt-[72px]">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Phone mockup */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[620px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#0b1426] to-[#0a1e3d]">
              <img
                src={heroImage}
                alt="Coinbase app preview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right — Text + CTA */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              The future of finance is here.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Trade crypto and more on a platform you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="satoshi@nakamoto.com"
                className="flex-1 px-5 py-3 border border-gray-300 rounded-full text-base focus:outline-none focus:border-blue-500"
              />
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition whitespace-nowrap text-base">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="w-full bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <img
                src={hero2}
                alt="Crypto portfolio"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Buy, sell, and trade crypto
                </h3>
                <p className="text-gray-600">
                  Access hundreds of assets — from Bitcoin to the latest tokens.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <img
                src={hero3}
                alt="Earn rewards"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Earn rewards on your crypto
                </h3>
                <p className="text-gray-600">
                  Put your crypto to work and earn staking rewards.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <img
                src={hero4}
                alt="Secure storage"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Stay secure and in control
                </h3>
                <p className="text-gray-600">
                  Your assets are protected by industry-leading security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Crypto Section */}
      <section className="w-full bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="text-base sm:text-lg text-gray-500">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <div className="mt-2">
              <button className="px-7 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition text-base">
                See more assets
              </button>
            </div>
          </div>

          {/* Right — Crypto Price Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8">
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      activeTab === tab
                        ? "bg-gray-700 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Crypto List */}
              <div className="space-y-1">
                {cryptoData[activeTab].map((coin) => (
                  <div
                    key={coin.name}
                    className="flex items-center justify-between py-4 border-b border-gray-800 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={coin.icon}
                        alt={coin.name}
                        className="w-9 h-9 rounded-full"
                      />
                      <span className="text-white font-semibold text-lg">
                        {coin.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold text-base">
                        {coin.price}
                      </p>
                      <p className={`text-sm ${coin.change === "--" ? "text-gray-400" : "text-green-400"}`}>
                        {coin.change !== "--" && "↗ "}{coin.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
>>>>>>> 2843caa77a53ff891ae4167376ea226feb206f15
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
