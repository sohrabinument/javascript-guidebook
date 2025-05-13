"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

const LanguageButton = ({
  language,
  currentLanguage,
  onClick,
  label,
  flagIcon,
  disabled,
}) => {
  const isSelected = language === currentLanguage;

  return (
    <button
      onClick={() => onClick(language)}
      className={`
        flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-md transition-colors
        ${
          isSelected
            ? "bg-blue-500 text-white dark:bg-blue-600"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      aria-label={`Switch to ${label}`}
      disabled={disabled}
    >
      <span
        className="flex items-center justify-center w-5 h-5"
        aria-hidden="true"
      >
        <Image
          src={flagIcon}
          alt={`${label} flag`}
          width={20}
          height={20}
          priority
        />
      </span>
      <span className="hidden font-medium sm:inline">{label}</span>
    </button>
  );
};

export function LanguageSwitcher() {
  const { language, setLanguage, mounted } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything until mounted on client
  if (!isClient) return null;

  const handleLanguageChange = (newLang) => {
    if (!mounted) return;
    setLanguage(newLang);
  };

  const languages = [
    {
      code: "en",
      label: "English",
      flagIcon: "/icons/flags/uk.svg",
    },
    {
      code: "bn",
      label: "বাংলা",
      flagIcon: "/icons/flags/bd.svg",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <LanguageButton
          key={lang.code}
          language={lang.code}
          currentLanguage={language}
          onClick={handleLanguageChange}
          label={lang.label}
          flagIcon={lang.flagIcon}
          disabled={!mounted}
        />
      ))}
    </div>
  );
}
