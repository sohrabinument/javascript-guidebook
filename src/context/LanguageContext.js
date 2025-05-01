'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('selectedLanguage')
      if (savedLang) {
        setLanguage(savedLang)
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }, [])

  const value = {
    language,
    setLanguage: (lang) => {
      try {
        setLanguage(lang)
        localStorage.setItem('selectedLanguage', lang)
      } catch (error) {
        console.error('Error setting language:', error)
      }
    }
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 