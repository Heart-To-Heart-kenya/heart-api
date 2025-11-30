import { Link } from "react-router-dom";
import { Facebook, Instagram, X, Mail, Phone, Clock } from "lucide-react";
import Logo from '../assets/Images/Logo.png'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#14261A] via-[#1E3A29] to-[#284E36] text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand + Description */}
          <div className="lg:col-span-2 space-y-6">
       <Link to="/" className="group">
  <div className="flex items-center gap-3 pb-3">
    <div className="relative">
      <img src={Logo} className="w-20 h-20 text-primary relative z-10" />
    </div>

    <div className="relative inline-block">
      {/* Main text */}
      <h2 className="text-3xl font-bold text-white tracking-tight group-hover:text-white transition-colors duration-200">
        Heart<span className="text-primary">To</span>Heart
      </h2>

      {/* Small 'Ke' tag on the top-right */}
      <span
        title="Heart to Heart Kenya"
        className="absolute -top-1 -right-5 text-[10px] font-extrabold text-white uppercase tracking-wider"
      >
        Ke
      </span>
    </div>
  </div>
</Link>

            <p className="text-gray-300 leading-relaxed text-md max-w-xl">
              Revolutionizing resource sharing in Kenya through a safe, sustainable donation platform.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: X, href: "https://twitter.com", label: "X" },
                { Icon: Mail, href: "mailto:info@hearttoheart.org", label: "Email" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/5 rounded-xl hover:bg-primary/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">{label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-primary/30 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/about", label: "About Us" },
                { to: "/our-story", label: "Our Story" },
                { to: "/partners", label: "Partnerships" },
                { to: "/faqs", label: "FAQs" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 group py-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-primary/30 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <span className="text-gray-400 text-sm">Email</span>
                  <a
                    href="mailto:info@hearttoheart.org"
                    className="text-gray-300 hover:text-white transition-colors duration-200 block hover:underline"
                  >
                    info@hearttoheart.org
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <span className="text-gray-400 text-sm">Phone</span>
                  <a href="tel:+254700000000" className="text-gray-300 hover:text-white transition-colors duration-200 block hover:underline">
                    +254 700 000 000
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <span className="text-gray-400 text-sm">Response Time</span>
                  <p className="text-gray-300 text-sm">Within 24 hours</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Heart to Heart Kenya Kenya. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Building stronger communities through compassion and action</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm text-gray-400">
              <Link to="/policy" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Making a difference</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
