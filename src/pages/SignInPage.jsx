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
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
