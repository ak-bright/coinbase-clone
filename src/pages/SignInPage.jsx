<<<<<<< HEAD
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/coinbase-logo.svg";
import googleIcon from "../assets/google-icon.svg";
import passkey from "../assets/passkey.svg";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={logo} alt="Coinbase Logo" className="h-10 w-10" />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Sign in to Coinbase
        </h1>

        {/* Google Sign In */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition mb-4">
          <img src={googleIcon} alt="Google" className="w-5 h-5" />
          <span className="font-semibold text-gray-700">Continue with Google</span>
        </button>

        {/* Passkey Sign In */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition mb-6">
          <img src={passkey} alt="Passkey" className="w-5 h-5" />
          <span className="font-semibold text-gray-700">Continue with a passkey</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
>>>>>>> 2843caa77a53ff891ae4167376ea226feb206f15
          >
            Sign in
          </button>
        </form>
<<<<<<< HEAD
        <p className="text-center text-gray-500">
          Don&apos;t have an account?{" "}
=======

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
>>>>>>> 2843caa77a53ff891ae4167376ea226feb206f15
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
<<<<<<< HEAD
        <p className="text-center text-gray-500">
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to home
          </Link>
        </p>
      </motion.div>
=======
      </div>
>>>>>>> 2843caa77a53ff891ae4167376ea226feb206f15
    </div>
  );
}

export default SignInPage;
