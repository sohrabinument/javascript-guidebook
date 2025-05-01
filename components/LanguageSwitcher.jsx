"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useRouter } from "next/router";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  const routeMappings = {
    bn: "/javascript-guidebook-bn",
    en: "/javascript-guidebook-en",
  };

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    router.push(routeMappings[newLang]);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`flex items-center gap-1 px-2 py-1 text-sm rounded ${
          language === "en"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        aria-label="Switch to English"
      >
        <span role="img" aria-label="English">
          <Image
            src="https://img.icons8.com/?size=100&id=Halaubi1vvya&format=png&color=000000"
            width={20}
            height={20}
            alt="en"
          />
        </span>
        <span className="hidden sm:inline">English</span>
      </button>
      <button
        onClick={() => handleLanguageChange("bn")}
        className={`flex items-center gap-1 px-2 py-1 text-sm rounded ${
          language === "bn"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        aria-label="Switch to Bengali"
      >
        <span role="img" aria-label="Bengali">
          <Image
            src="https://img.icons8.com/?size=100&id=TyDZNgOeTyqW&format=png&color=000000"
            width={20}
            height={20}
            alt="bd"
          />
        </span>
        <span className="hidden sm:inline">বাংলা</span>
      </button>
    </div>
  );
}
