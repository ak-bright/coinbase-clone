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
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
