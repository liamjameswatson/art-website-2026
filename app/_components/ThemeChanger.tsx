"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const options = [
    { value: "light", icon: <FiSun />, colour: "yellow-500" },
    { value: "dark", icon: <FiMoon />, colour: "gray-800" },
  ];

  return (
    <div className="relative inline-block ">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 border rounded bg-light-primary-1 dark:bg-dark-primary-4"
      >
        {theme}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-1 bg-white border rounded shadow-lg z-10 ">
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer dark:text-white dark:bg-dark-primary-4`}
              onClick={() => {
                setTheme(option.value);
                setOpen(false);
              }}
            >
              {option.icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
