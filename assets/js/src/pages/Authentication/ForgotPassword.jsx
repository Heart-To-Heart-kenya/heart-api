import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const ForgotPasswordImage = "/images/ForgotPassword.png";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      // toast.error("Please enter your email.");
      return;
    } else if (!emailRegex.test(email)) {
      // toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Simulate backend request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you’ll integrate your actual API call, e.g.:
      // await axios.post('/api/auth/forgot-password', { email });

      // toast.success("Password reset link sent to your email.");
      setEmail("");
    } finally {
      // toast.error("Failed to send reset link. Please try again later.");
      setLoading(false);
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
            <p className="text-gray-600 text-sm dark:text-gray-300 mt-2">Enter your email to receive a password reset link.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="form-input appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-background-light dark:bg-background-dark focus:outline-none focus:ring-primary focus:border-primary text-base"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </div>
          </form>

          {/* Signup Link */}
          <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link to="/auth/signup" className="font-medium text-primary hover:text-primary/90">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img alt="Volunteers handing out food to people in need" className="absolute inset-0 h-full w-full object-cover" src={ForgotPasswordImage} />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  );
}

export default ForgotPassword;
