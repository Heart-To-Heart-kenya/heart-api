import React, { useState } from "react";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { SocialAuth } from "./SocialAuth";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const SignupImage = "/images/Signup.png";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim()) {
      // toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // toast.error("Please enter a valid email address.");
      return;
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                />
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285Z"
                  fill="currentColor"
                />
              </svg>
              <span>Heart to Heart Kenya</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Create your account</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Username
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="form-input appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-background-light dark:bg-background-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
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
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign up with Email
              </button>
            </div>
          </form>

          {/* Social Auth */}
          <SocialAuth />

          {/* Already have account */}
          <div>
            <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/auth/login" className="font-medium text-primary hover:underline">
                Log in
              </Link>
            </p>
          </div>

          {/* Terms */}
          <div>
            <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="font-medium text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/policy" className="font-medium text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block relative">
        <img
          src={SignupImage}
          alt="People holding hands in a circle, symbolizing compassion and community for donations."
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-12 text-center">
          <h2 className="text-4xl font-bold">Join Our Community of Givers</h2>
          <p className="mt-4 max-w-lg text-lg">
            Your compassion can make a world of difference. Sign up to start your journey of giving with Heart to Heart Kenya.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
