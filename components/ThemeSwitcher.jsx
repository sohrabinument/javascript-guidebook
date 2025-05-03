"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed right-5 z-50 max-lg:bottom-5 lg:top-1/3 transition-all duration-300 ease-in-out">
      <button
        onClick={toggleTheme}
        type="button"
        aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        {resolvedTheme === "dark" ? (
          <img 
            src="/icons/sun.svg" 
            alt="Light mode" 
            width={20} 
            height={20}
          />
        ) : (
          <img 
            src="/icons/moon.svg" 
            alt="Dark mode" 
            width={20} 
            height={20}
          />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
