import React from "react";
import {
  Heart,
  MapPin,
  Users,
  Trophy,
  Info,
  Award,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

function Profile() {
  const badges = [
    { Icon: Trophy, label: "First Donation" },
    { Icon: Users, label: "Community Helper" },
    { Icon: TrendingUp, label: "Top 10% Donor" },
    { Icon: Award, label: "5-Year Veteran" },
    { Icon: CheckCircle, label: "Verified" },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display transition-colors duration-300 pt-20">
      <main className="flex flex-1 flex-col gap-8 max-w-6xl mx-auto px-4 py-10">
        {/* Header Section */}
        <header className="relative  rounded-2xl overflow-hidden  bg-cover bg-center min-h-[280px]">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small/abstract-polygonal-banner-background.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Profile Picture & Info */}
          <div className="absolute bottom-6 left-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqJeGgIgHmIZc0d9ySFtz8AMTHT6h89NYyzreNiItBYqvDE4FATvGODGXrY4ox0hH6tYB8LRQsXOz-ed7ANxIIRod_JPhE9W_h8Gj_ro8fmrS-Obx1XjFQVninPW586xuGjT0yKfHaWG2LYajn5PoOyEUCBs43g9657gCTXoa7xaFeyBKStvAjhSoYel7xTu4uZw29dCe2vodTGFNPNwDoJAuiadHnAPUbeSL__gd76FuCV8l2J2JxZ3dr5-vJtcCptG0Bm9R6tbdN"
                alt="Profile of Alex Doe"
                className="w-32 h-32 rounded-2xl border-4 border-white dark:border-gray-900 object-cover shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Profile Info */}
            <div className="flex flex-col text-white">
              <h1 className="text-3xl font-bold">Alex Doe</h1>
              <div className="flex items-center gap-2 mt-1 text-sm text-white/90">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, USA</span>
              </div>

              {/* Roles & Organization Type */}
              <div className="flex flex-wrap gap-2 mt-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-medium">Donor</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-medium">
                    Non-Profit Organization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Right Content */}
        <section className="lg:col-span-2 space-y-6 mt-6">
          {/* About Section */}
          <div className="rounded-2xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">About Us</h2>
            </div>
            <p className="text-base leading-relaxed text-text-main dark:text-gray-300">
              We are a non-profit organization dedicated to supporting
              underserved communities through sustainable programs and
              compassionate action. Join us in making a difference.
            </p>
          </div>

          {/* Badges Section */}
          <div className="rounded-2xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Badges & Achievements</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20">
                    <badge.Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-text-main dark:text-white text-center">
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
