import heroImage1 from "../assets/hero-1-image.avif";
import heroImage2avif from "../assets/hero-2.avif";
import heroImage3 from "../assets/hero-3.avif";
import heroImage4 from "../assets/hero-4.avif";
import heroImage5 from "../assets/hero-5.png";
import heroImage6 from "../assets/hero-6.png";
import heroImage7 from "../assets/hero-7.png";
import coinbaseLogo from "../assets/coinbase-logo.svg";
import cryptoLogos from "../assets/crypto-logos.png";
import CryptoPriceTable from "../components/CryptoPriceTable";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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

          <CryptoPriceTable />
        </div>
      </section>

      {/* Section 3: Advanced Trader */}
      <section className="bg-white py-24 px-6 lg:px-16 xl:px-32">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
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

      {/* Section 4: Coinbase One */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-full shadow-sm mb-2">
              <img src={coinbaseLogo} alt="Coinbase One" className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest text-[#5b616e] uppercase">Coinbase One</span>
            </motion.div>
            
            <motion.h2
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 tracking-tight"
            >
              Zero trading fees,<br className="hidden md:block" />
              more rewards.
            </motion.h2>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              Get more out of crypto with one membership: zero trading fees,
              boosted rewards, priority support, and more.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="pt-4">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-lg">
                Claim free trial
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full bg-[#f5f8fa] hover:bg-[#edf2f6] transition-colors duration-300 rounded-[2rem] p-8 lg:p-12 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={heroImage3}
              alt="Coinbase One Benefits"
              className="w-full max-w-md xl:max-w-lg mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 5: Base App */}
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
        </div>
      </section>
      {/* Section 6: New to crypto */}
      <section className="bg-[#eef0f3] py-24 px-6 lg:px-16 xl:px-32">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <motion.h2 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight max-w-lg"
            >
              New to crypto? <br /> Learn some crypto basics
            </motion.h2>

            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-md space-y-6"
            >
              <p className="text-lg text-gray-600">
                Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
              </p>
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-base">
                Read More
              </button>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="group cursor-pointer flex flex-col"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="overflow-hidden rounded-3xl mb-6 shadow-sm">
                <img src={heroImage5} alt="USDC" className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors max-w-sm leading-tight">USDC: The digital dollar for the global crypto economy</h3>
              <p className="text-gray-600 leading-relaxed">
                Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="group cursor-pointer flex flex-col"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="overflow-hidden rounded-3xl mb-6 shadow-sm">
                <img src={heroImage6} alt="Crypto replace bank account" className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors max-w-sm leading-tight">Can crypto really replace your bank account?</h3>
              <p className="text-gray-600 leading-relaxed">
                If you're a big enough fan of crypto, you've probably heard the phrase "be your own bank" or the term "bankless" — the idea being that...
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="group cursor-pointer flex flex-col"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="overflow-hidden rounded-3xl mb-6 shadow-sm">
                <img src={heroImage7} alt="Best time to invest" className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors max-w-sm leading-tight">When is the best time to invest in crypto?</h3>
              <p className="text-gray-600 leading-relaxed">
                Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section 7: Take control of your money */}
      <section className="bg-white text-gray-900 py-24 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Take control <br /> of your money
            </h2>
            <p className="text-lg md:text-xl text-gray-800 font-medium">
              Start your portfolio today and discover crypto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 max-w-lg">
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

          <motion.div
            className="flex-1 w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img 
              src={cryptoLogos} 
              alt="Crypto Logos" 
              className="w-full max-w-md xl:max-w-lg object-contain mx-auto drop-shadow-sm" 
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
