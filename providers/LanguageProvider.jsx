"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const LanguageContext = createContext({
  language: "bn",
  setLanguage: () => null,
  mounted: false
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
      setLanguage(pathname.includes("-en") ? "en" : "bn");
    }
  }, [pathname]);

  const value = {
    language,
    setLanguage: (newLang) => {
      if (!mounted) return;
      
      setLanguage(newLang);
      const newPath = newLang === "en" 
        ? "/javascript-guidebook-en"
        : "/javascript-guidebook-bn";
      
      router.push(newPath);
    },
    mounted
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