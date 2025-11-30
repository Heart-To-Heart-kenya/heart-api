import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../../../context/SidebarContext";
import { 
  ShieldUser, 
  Users, 
  Settings, 
  LogOut,
  LayoutDashboard,
  BarChart3,
  Tag,
  UserLock,
  List,
  History,
  HandHeart,
  Box,
  UserRoundCog
} from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/dashboard",
  },
  {
    name: "Roles",
    icon: <ShieldUser size={20} />,
    href: "/dashboard/roles",
  },
  {
    name: "Permissions",
    icon: <UserRoundCog size={20} />,
    href: "/dashboard/permissions",
  },
  {
    name: "Account Types",
    icon: <UserLock size={20} />,
    href: "/dashboard/account-types",
  },
  {
    name: "Categories",
    icon: <Tag size={20} />,
    href: "/dashboard/categories",
  },
   {
    name: "Item Condition",
    icon: <Box size={20} />,
    href: "/dashboard/item-condition",
  },
  {
    name: "User Management",
    icon: <Users size={20} />,
    href: "/dashboard/user-management",
  },
  {
    name: "Donations",
    icon: <List size={20} />,
    href: "/dashboard/donations",
  },
  {
    name: "Reports",
    icon: <BarChart3 size={20} />,
    href: "/dashboard/reports",
  },
  {
    name: "Donations",
    icon: <List size={20} />,
    href: "/dashboard/donation",
  },
  {
    name: "Donation History",
    icon: <History size={20} />,
    href: "/dashboard/donation-history",
  },
  {
    name: "Donation Requests",
    icon: <HandHeart size={20} />,
    href: "/dashboard/donation-requests",
  },
  {
    name: "Received History",
    icon: <History size={20} />,
    href: "/dashboard/received-history",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-30" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          w-64 flex-shrink-0 bg-white dark:bg-gray-900/50 border-r border-slate-200 dark:border-gray-800 flex flex-col fixed lg:relative z-40 h-screen
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-gray-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-green-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-slate-800 dark:text-white">Heart to Heart</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            {SIDEBAR_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    onClick={() => {
                      // Close sidebar on mobile when item is clicked
                      if (window.innerWidth < 1024) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <div 
                      className={`
                        flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-colors
                        ${active 
                          ? "bg-primary/10 text-primary font-semibold" 
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                        }
                      `}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-gray-800 space-y-2">
          <Link 
            to="/dashboard/settings"
            onClick={() => {
              if (window.innerWidth < 1024) {
                toggleSidebar();
              }
            }}
          >
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors">
              <Settings size={20} />
              <span>Settings</span>
            </div>
          </Link>
          
          {/* Logout Button */}
          <button 
            onClick={() => {
              // Add your logout logic here
              console.log("Logout clicked");
              if (window.innerWidth < 1024) {
                toggleSidebar();
              }
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;