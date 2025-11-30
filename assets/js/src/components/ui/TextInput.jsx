import React from 'react'

const TextInput = ({
  label,
  id,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  disabled = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col space-y-2">
        <label  htmlFor={id} className="text-sm font-medium text-text-light dark:text-text-dark"
        >
          {label}
        </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`w-full rounded-lg border border-border-light dark:border-border-dark px-4 py-3 text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all resize-none ${className}`}
      />
    </div>
  );
};

export default TextInput