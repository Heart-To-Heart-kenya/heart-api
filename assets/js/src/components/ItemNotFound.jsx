import React from "react";
import { Link } from "react-router-dom";

function ItemNotFound({
  icon,
  title = "Nothing Found",
  description = "We couldn't find any results for your request.",
  buttonText = "Go Back",
  buttonLink = "/",
  showActions = true,
  showPrimaryButton = true,
}) {

  return (
    <div className="font-display">
      <div className="relative flex min-h-[60vh] w-full flex-col">
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl text-center">
            <div className="flex flex-col items-center gap-6">

              {/* Icon / Illustration */}
              {icon ? (
                <div className="text-primary">{icon}</div>
              ) : (
                <div
                  className="bg-center bg-no-repeat aspect-video bg-contain w-full max-w-sm"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjsBLiCsmvTkleahfVoYWY4BBeKCi7vRrl48bO3agcP-qX49SlbGioPWbns6kTvLt-LFJS9STVKHqfarOR6yBIDUMnrkowX1UHlk6YNwkQZJb7IYESA5DlE1gKvf57EB52ghAl4j1rAjtNywPvjBjdQeagQzAwg3DbGITczguqc5Z0meF6J_YdcEOsXkAgG8wuJL8yf7yh0bSX_Alf6rtwlLsIUq9vqYmh8kKd1ykpqFjUOeJHVAkDh5sVrnmlWXeThLuMhvYd46j5")',
                  }}
                />
              )}

              {/* Title + Description */}
              <div className="flex max-w-lg flex-col items-center gap-2">
                <h1 className="text-text-heading dark:text-gray-50 text-3xl font-bold tracking-tight">
                  {title}
                </h1>
                <p className="text-text-body dark:text-gray-400">{description}</p>
              </div>

              {/* Actions */}
        {showActions && (
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">

                {showPrimaryButton && (
                  <Link to={buttonLink}>
                    <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold shadow-sm transition-opacity hover:opacity-90">
                      <span className="truncate">{buttonText}</span>
                    </button>
                  </Link>
                )}

              </div>
            )}


            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ItemNotFound;
