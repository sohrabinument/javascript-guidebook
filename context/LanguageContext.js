// context/LanguageContext.js
"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { pathname } = useRouter();
  const [language, setLanguage] = useState(
    pathname.includes("-bn") ? "bn" : "en"
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
