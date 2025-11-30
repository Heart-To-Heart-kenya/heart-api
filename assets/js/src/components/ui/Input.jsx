import React from "react";

const Input = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder = "",
  disabled = false,
  required = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col space-y-2">
        <label htmlFor={id} className="text-sm font-medium text-text-light dark:text-text-dark">
          {label}
        </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`w-full rounded-lg border border-border-light dark:border-border-dark px-4 py-3 text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all ${className}`}
      />
    </div>
  );
};

export default Input;
