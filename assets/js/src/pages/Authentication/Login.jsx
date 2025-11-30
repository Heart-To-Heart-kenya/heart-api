import React, { useState } from "react";
import { SocialAuth } from "./SocialAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      // toast.error("Please fill in both email and password.");
      return;
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-12">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Heart to Heart Kenya</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Welcome back! Please login to your account.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email / username
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="form-input appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-background-light dark:bg-background-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                className="form-input appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-background-light dark:bg-background-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base"
              />
            </div>

            <div class="flex items-center justify-end">
              <Link to="/auth/forgot-password" class="text-sm text-black hover:underline">
                Forgot password?
              </Link>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Log in
              </button>
            </div>
          </form>

          {/* Social Auth */}
          <SocialAuth />
          {/* Already have account */}
          <div>
            <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link to="/auth/signup" className="font-medium text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* Terms */}
          <div>
            <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Heart to Heart Kenya Kenya. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          alt="Volunteers handing out food to people in need"
          class="absolute inset-0 h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDijr3Dv2PlWcF5HujLDprb-ZUR5L-f7K7AySj6O4jVh6KbDcWkHj4tM6jRZGq9ai5RzV_DGnsZghrJn3ET2ykwX-dxQuS2j7q0MjylhI3-dC8iQcz1y8VqXk0yoaJS_u3zA6m4Oc3tTQHvx9psmeYfiaIMSUI2KzliIvR2Pw8RyzcMfSOvQj-0myfZSYINn-M1iReckROnFv2O1AQmcnr1g1N_t10dA2D5HJBwsGrkTEcnVuk2LzyanUE9SkICIzocjVAkrQJemjI"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  );
}

export default Login;
