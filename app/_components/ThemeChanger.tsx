"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:cursor-pointer hover:scale-105 transition-all"
    >
      {theme === "light" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeSwitch;
