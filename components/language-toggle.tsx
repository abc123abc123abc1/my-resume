"use client"

import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Japanese" : "英語に切り替え"}
      className="
        relative flex items-center gap-0.5 px-2 py-1.5
        rounded-md text-xs font-bold tracking-wider
        border border-primary/30
        bg-transparent
        text-foreground hover:text-primary
        hover:border-primary/60 hover:bg-primary/5
        transition-all duration-300
        select-none cursor-pointer
      "
    >
      <span
        className={`transition-all duration-200 ${
          language === "en" ? "text-primary font-black" : "text-muted-foreground"
        }`}
      >
        EN
      </span>
      <span className="mx-0.5 text-muted-foreground/40">｜</span>
      <span
        className={`transition-all duration-200 ${
          language === "ja" ? "text-primary font-black" : "text-muted-foreground"
        }`}
      >
        日本語
      </span>
    </button>
  )
}
