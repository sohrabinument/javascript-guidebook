"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  language: "bn",
  setLanguage: () => null,
  mounted: false,
});

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("bn");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname) {
      if (/javascript-guidebook-en/.test(pathname)) {
        setLanguage("en");
      } else if (/javascript-guidebook-bn/.test(pathname)) {
        setLanguage("bn");
      } else {
        setLanguage(pathname.includes("-en") ? "en" : "bn");
      }
    }
  }, [pathname]);

  const value = {
    language,
    setLanguage: (newLang) => {
      if (!mounted) return;

      setLanguage(newLang);

      // Determine the current path and maintain it when switching languages
      if (pathname) {
        let newPath;
        if (newLang === "en") {
          newPath = pathname.replace(
            "javascript-guidebook-bn",
            "javascript-guidebook-en"
          );
        } else {
          newPath = pathname.replace(
            "javascript-guidebook-en",
            "javascript-guidebook-bn"
          );
        }

        // If no replacement happened (e.g., we're at root), use the default path
        if (newPath === pathname) {
          newPath =
            newLang === "en"
              ? "/javascript-guidebook-en"
              : "/javascript-guidebook-bn";
        }

        router.push(newPath);
      }
    },
    mounted,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
