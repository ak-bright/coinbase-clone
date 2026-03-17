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
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
