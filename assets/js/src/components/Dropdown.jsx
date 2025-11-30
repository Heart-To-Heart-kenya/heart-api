import React, { useRef, useEffect } from "react";

const Dropdown = ({
  name,
  icon: Icon,
  label,
  options,
  openDropdown,
  toggleDropdown,
  dropdownRefs,
  onSelect,
}) => {
  return (
    <div ref={(el) => (dropdownRefs.current[name] = el)} className="relative">
      <button
        onClick={() => toggleDropdown(name)}
        className="flex whitespace-nowrap items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/30 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all"
      >
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </button>

      {openDropdown === name && (
        <div className="absolute right-0 mt-2 w-40 z-50 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg animate-in fade-in zoom-in-95">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect?.(name, option);
                toggleDropdown(null);
              }}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-200"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
