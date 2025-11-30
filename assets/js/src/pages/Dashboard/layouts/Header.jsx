import { useState, useEffect, useRef, useCallback } from "react";
import { Bell } from "lucide-react";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSidebar } from "../../../context/SidebarContext";

const Header = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { toggleSidebar } = useSidebar();

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-20 lg:pl-64">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden text-gray-600 hover:text-gray-900 p-2 mr-2 transition-colors"
            aria-label="Toggle sidebar"
          >
            <IoIosMenu size={24} />
          </button>
          
          <h1 className="text-lg font-semibold text-gray-800 capitalize">
            {title}
          </h1>
        </div>

         <div className="flex items-center gap-6">
        <button className="relative text-slate-500 dark:text-slate-400 hover:text-[var(--color-primary)] transition">
          <Bell />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
          </span>
        </button>
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATeRV6FbhDWzMQ2aWHqrV1OYJv7DQwoxm_dgRPZlmpRonNLJzswY9jA-JHJ7kO5nfAicuri9WKRiTJXnV1F92vUbaaU3GV-x22Rbcvi7TlAKXvWRpF7TFmTJgc5T_8o410G-jEAdFbCq29rxAxmiSXM4gDm92qpvi1-46hHbbCcYKP-aeShc20eIo3gEJg0ElT4FyUiDrnMOQsolk1Q7mHhcpIVRTCpcUsD3qX6fiiWLwde356av6c6B1cjjBqkVN9MC2ZygB4fE5_"
            alt="Admin user avatar"
          />
          <div>
            <Link to='/dashboard/profile'>
            <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">Alex Morgan</p>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;