import React, { useState } from "react";

function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const OTPVerificationImage = "/images/OTPVerification.png";

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      // toast.error("Please enter your OTP code.");
      return;
    }

    if (otp.length !== 6) {
      // toast.error("OTP must be 6 digits long.");
      return;
    }

    setLoading(true);

    try {
      // Simulate verification delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Replace this with your actual API request:
      // await axios.post("/api/auth/verify-otp", { otp });

      // toast.success("OTP verified successfully!");
      // navigate("/auth/reset-password");

      // toast.error("Invalid OTP. Please try again.");
    } finally {
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
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Verify OTP</h1>
            <p className="text-gray-600 text-sm dark:text-gray-300 mt-2">Enter the 6-digit code sent to your email.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="otp" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                OTP Code
              </label>
              <input
                id="otp"
                type="text"
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} // allow only digits
                placeholder="Enter 6-digit code"
                className="form-input appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-background-light dark:bg-background-dark focus:outline-none focus:ring-primary focus:border-primary text-base tracking-widest text-center"
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
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </form>

          {/* Resend OTP */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Didn’t receive the code?{" "}
            <button className="text-primary font-medium hover:underline" type="button">
              Resend OTP
            </button>
          </p>

          {/* Back to Login */}
          <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
            Remember your password?{" "}
            <Link to="/auth/login" className="font-medium text-primary hover:text-primary/90">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img alt="Person entering verification code on phone" className="absolute inset-0 h-full w-full object-cover" src={OTPVerificationImage} />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </div>
  );
}

export default OTPVerification;
