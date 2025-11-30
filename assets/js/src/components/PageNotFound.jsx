import { Link, useNavigate } from "react-router-dom";
import { HeartCrack } from "lucide-react";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen flex-1 items-center justify-center bg-gradient-to-b from-[var(--color-background-light)] via-white to-[var(--color-content-light)] dark:from-[var(--color-background-dark)] dark:via-[var(--color-content-dark)] dark:to-[var(--color-background-dark)] p-6 overflow-hidden">
      {/* Floating 404 Background */}
      <h1 className="absolute z-0 text-[200px] sm:text-[300px] lg:text-[400px] font-black leading-none tracking-tighter text-[var(--color-border-light)] dark:text-[var(--color-border-dark)] select-none">
        404
      </h1>

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto flex flex-col items-center text-center max-w-2xl">
        {/* Illustration */}
        <div className="flex items-center justify-center mb-8">
          <div className="p-6 rounded-full bg-[var(--color-primary-light)]/10 dark:bg-[var(--color-primary-dark)]/10 shadow-inner animate-pulse-slow">
            <HeartCrack className="w-24 h-24 text-[var(--color-primary)] dark:text-[var(--color-primary-dark)] drop-shadow-md" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary-light)] dark:text-[var(--color-text-primary-dark)] mb-3">
          Oops! This page has a broken heart
        </h2>

        <p className="text-[var(--color-text-secondary-light)] dark:text-[var(--color-text-secondary-dark)] text-base sm:text-lg leading-relaxed max-w-lg mb-8">
          The page you’re looking for might have moved or doesn’t exist. Let’s get you back to where love lives.
        </p>

        {/* Button */}
        <Link to="/">
          <button
            onClick={() => navigate("/")}
            className="relative inline-flex items-center justify-center h-12 px-8 rounded-xl text-white font-semibold bg-[var(--color-primary)] hover:bg-[#1e3a28] dark:hover:bg-[#2e7d32] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Go Home
          </button>
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
