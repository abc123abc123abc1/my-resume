"use client"

interface Props {
  kanji: string
  title: string
  subtitle?: string
  className?: string
  align?: "center" | "left"
}

export function WaSectionHeading({ kanji, title, subtitle, className = "", align = "center" }: Props) {
  const isCenter = align === "center"

  return (
    <div className={`relative mb-16 ${isCenter ? "text-center" : ""} ${className}`}>
      {/* Large faint kanji watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="notranslate font-black leading-none"
          translate="no"
          lang="ja"
          style={{
            fontSize: "clamp(8rem, 18vw, 16rem)",
            color: "rgba(198,40,40,0.05)",
            fontFamily: "serif",
          }}
        >
          {kanji}
        </span>
      </div>

      {/* Hanko stamp kanji + flanking rules */}
      <div className={`flex items-center gap-4 mb-6 ${isCenter ? "justify-center" : ""}`}>
        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-red-800/35" />

        {/* The stamp */}
        <div
          className="notranslate w-10 h-10 flex items-center justify-center select-none flex-shrink-0 text-lg font-black"
          translate="no"
          lang="ja"
          style={{
            border: "2px solid rgba(198,40,40,0.5)",
            borderRadius: "3px",
            color: "rgba(198,40,40,0.7)",
            background: "rgba(198,40,40,0.04)",
            transform: "rotate(-5deg)",
            fontFamily: "serif",
            boxShadow: "inset 0 0 0 1px rgba(198,40,40,0.08)",
          }}
        >
          {kanji}
        </div>

        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-red-800/35" />
      </div>

      {/* Main title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 gradient-text">{title}</h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-lg text-muted-foreground leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Ink brush SVG underline */}
      <div className={`mt-5 overflow-hidden ${isCenter ? "flex justify-center" : ""}`}>
        <svg width="180" height="12" viewBox="0 0 180 12" fill="none" aria-hidden>
          <path
            d="M4 8 C40 3, 100 2, 176 6"
            stroke="rgba(198,40,40,0.3)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M16 10 C60 6, 120 5, 170 8"
            stroke="rgba(198,40,40,0.12)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
