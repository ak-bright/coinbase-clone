import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../assets/coinbase-logo.svg";
import googleIcon from "../assets/google-icon.svg";
import passkey from "../assets/passkey.svg";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={logo} alt="Coinbase Logo" className="h-10 w-10" />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Create your account
        </h1>

        {/* Google Sign Up */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition mb-4">
          <img src={googleIcon} alt="Google" className="w-5 h-5" />
          <span className="font-semibold text-gray-700">Continue with Google</span>
        </button>

        {/* Passkey Sign Up */}
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
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
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
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignUpPage;
