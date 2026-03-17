import { Link } from "react-router-dom";

import logo from "../assets/coinbase-logo.svg";

function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <div className="flex justify-center">
          <img src={logo} alt="Coinbase Logo" className="h-10 w-10" />
        </div>
        <h1 className="text-2xl font-bold text-center">Sign in to Coinbase</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            Sign in
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignInPage;
