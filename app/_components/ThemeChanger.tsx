"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isLight = resolvedTheme === "light";

  if (!resolvedTheme)
    return (
      <button
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className="hover:cursor-pointer hover:scale-105 transition-all"
      >
        {isLight ? <FiSun /> : <FiMoon />}
      </button>
    );
};

export default ThemeSwitch;


