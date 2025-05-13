"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
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

  if (!isMounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        resolvedTheme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      className="flex items-center justify-center w-10 h-10 text-gray-800 transition-colors bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      {resolvedTheme === "dark" ? (
        <Image
          src="/icons/sun.svg"
          alt="Light mode"
          width={20}
          height={20}
          priority
        />
      ) : (
        <Image
          src="/icons/moon.svg"
          alt="Dark mode"
          width={20}
          height={20}
          priority
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
