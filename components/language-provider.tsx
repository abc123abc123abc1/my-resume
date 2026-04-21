"use client"

import { createContext, useContext, useState, useCallback } from "react"
import type { Language, Translations } from "@/lib/i18n"
import { translations } from "@/lib/i18n"

interface LanguageContextValue {
  language: Language
  t: Translations
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  t: translations.en,
  toggleLanguage: () => {},
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLang] = useState<Language>("en")

  const setLanguage = useCallback((lang: Language) => setLang(lang), [])

  const toggleLanguage = useCallback(
    () => setLang((prev) => (prev === "en" ? "ja" : "en")),
    []
  )

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], toggleLanguage, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
