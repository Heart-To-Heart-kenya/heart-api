import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, LogIn } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const Logo = "/images/Logo.png";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Favorite", href: "/favorite" },
    { label: "About", href: "/about" },
    { label: "Partner With Us", href: "/partners" },
    { label: "Our Story", href: "/our-story" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-100/50 dark:border-gray-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src={Logo} className="w-20 h-20 text-primary relative z-10" />
            </div>

            <div className="flex flex-col leading-tight">
              <div className="relative inline-block">
                <span className="font-extrabold text-lg lg:text-2xl tracking-tight text-gray-800 dark:text-gray-100 group-hover:scale-105 transition-transform duration-200">
                  Heart<span className="text-primary">To</span>Heart
                </span>
                {/* Small 'Ke' on top right */}
                <span title="heart to heart kenya" className="absolute -top-1 text-md text-primary font-bold uppercase tracking-wider">
                  Ke
                </span>
              </div>

              <span className="text-xs text-primary font-semibold tracking-wide mt-0.5 opacity-80">Community • Compassion • Connection</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center text-sm  gap-1 px-4 py-2 font-semibold rounded-xl transition-all duration-300 ${
                        isActive ? "text-primary bg-primary/10" : "text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>

                  {/* Active indicator line */}
                  <div
                    className={`absolute bg-primary rounded-full transition-all duration-300 ${
                      window.location.pathname === item.href ? "w-8" : "w-0 group-hover:w-8"
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center whitespace-nowrap  gap-3">
            <a href="/auth/login">
              <button className="flex items-center gap-2 px-6 py-2.5 text-gray-700 dark:text-gray-200 font-semibold hover:text-primary transition-all duration-300 rounded-xl hover:bg-primary/5 group">
                <LogIn className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Sign In
              </button>
            </a>
            <a href="/auth/signup">
              <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group">
                <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Join Now
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 text-primary focus:outline-none group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transition-all duration-300 ${menuOpen ? "rotate-180" : ""}`}>
              {menuOpen ? (
                <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
              ) : (
                <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute w-full bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl border-t border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 ease-out ${
          menuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navItems.map((item) => (
            <div key={item.label} className="group">
              <a
                href={item.href}
                className="flex items-center justify-between px-4 py-3 text-gray-800 dark:text-gray-200 font-semibold hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 group"
                onClick={() => !item.submenu && setMenuOpen(false)}
              >
                <span>{item.label}</span>
                {item.submenu && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}
              </a>

              {/* Mobile Submenu */}
              {item.submenu && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-4">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2.5 text-gray-600 dark:text-gray-300 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="pt-4 mt-4 border-t border-gray-200/50 dark:border-gray-700/50 space-y-3">
            <div>
              <a href="/auth/login" onClick={() => setMenuOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-gray-700 dark:text-gray-200 font-semibold border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-primary hover:text-primary transition-all duration-300">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              </a>
            </div>
            <div>
              <a href="/auth/signup" onClick={() => setMenuOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <User className="w-4 h-4" />
                  Join Our Community
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
