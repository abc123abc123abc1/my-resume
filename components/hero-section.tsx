"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { t } = useLanguage()

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 hero-background relative overflow-hidden"
    >
      {/* Sakura Petals */}
      <div className="particles">
        {[
          { left: 8,  delay: 0,   dur: 10, size: 12, dir: 1 },
          { left: 15, delay: 2.5, dur: 13, size: 9,  dir: -1 },
          { left: 25, delay: 5,   dur: 11, size: 14, dir: 1 },
          { left: 33, delay: 1,   dur: 9,  size: 8,  dir: -1 },
          { left: 42, delay: 7,   dur: 14, size: 11, dir: 1 },
          { left: 50, delay: 3,   dur: 12, size: 10, dir: -1 },
          { left: 58, delay: 9,   dur: 10, size: 13, dir: 1 },
          { left: 67, delay: 0.5, dur: 11, size: 9,  dir: -1 },
          { left: 73, delay: 6,   dur: 13, size: 15, dir: 1 },
          { left: 80, delay: 4,   dur: 9,  size: 8,  dir: -1 },
          { left: 88, delay: 8,   dur: 12, size: 12, dir: 1 },
          { left: 93, delay: 2,   dur: 10, size: 10, dir: -1 },
          { left: 20, delay: 11,  dur: 14, size: 11, dir: 1 },
          { left: 62, delay: 13,  dur: 9,  size: 9,  dir: -1 },
          { left: 45, delay: 15,  dur: 12, size: 13, dir: 1 },
        ].map((p, i) => (
          <div
            key={i}
            className="sakura-petal"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: `rgba(232, 196, 184, ${0.55 + (i % 4) * 0.1})`,
              animation: `${p.dir === 1 ? 'sakura-fall' : 'sakura-fall-left'} ${p.dur}s ${p.delay}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Enso circles — ink brush circle motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full border border-foreground/[0.035]"
          style={{ width: 'min(72vw, 680px)', height: 'min(72vw, 680px)' }}
        />
        <div
          className="absolute rounded-full border border-red-700/[0.05]"
          style={{ width: 'min(52vw, 480px)', height: 'min(52vw, 480px)' }}
        />
        <div
          className="absolute rounded-full border border-red-700/[0.08]"
          style={{ width: 'min(20vw, 180px)', height: 'min(20vw, 180px)' }}
        />
      </div>

      {/* Large centred 道 kanji — more visible, more Japanese */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="notranslate font-black select-none leading-none"
          translate="no"
          lang="ja"
          style={{
            fontSize: 'clamp(18rem, 38vw, 42rem)',
            color: 'rgba(198, 40, 40, 0.045)',
            fontFamily: 'serif',
            transform: 'translateY(8%)',
          }}
        >
          道
        </span>
      </div>

      {/* Floating ink-drop circles — replace tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 animate-float w-3 h-3 rounded-full opacity-20" style={{ background: '#C62828' }} />
        <div className="absolute top-32 left-12 animate-float-delayed w-1.5 h-1.5 rounded-full opacity-15" style={{ background: '#C62828' }} />
        <div className="absolute top-48 right-24 animate-float-delayed w-2 h-2 rounded-full opacity-15" style={{ background: '#C62828' }} />
        <div className="absolute bottom-48 left-24 animate-float w-2.5 h-2.5 rounded-full opacity-20" style={{ background: 'rgba(232,196,184,1)' }} />
        <div className="absolute bottom-32 right-16 animate-float w-2 h-2 rounded-full opacity-15" style={{ background: '#C62828' }} />
      </div>

      {/* Vertical Japanese text — left side */}
      <div className="absolute left-5 xl:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 pointer-events-none select-none">
        <div className="h-24 w-px bg-gradient-to-b from-transparent to-red-700/50" />
        <span
          className="notranslate wa-vertical text-xs font-bold tracking-[0.5em]"
          translate="no"
          lang="ja"
          style={{ color: 'rgba(198, 40, 40, 0.5)', fontFamily: 'serif' }}
        >
          技・創・道
        </span>
        <div className="h-24 w-px bg-gradient-to-t from-transparent to-red-700/50" />
      </div>

      {/* Vertical Japanese text — right side */}
      <div className="absolute right-5 xl:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 pointer-events-none select-none">
        <div className="h-24 w-px bg-gradient-to-b from-transparent to-red-700/40" />
        <span
          className="notranslate wa-vertical text-xs font-medium tracking-[0.5em]"
          translate="no"
          lang="ja"
          style={{ color: 'rgba(198, 40, 40, 0.35)', fontFamily: 'serif' }}
        >
          挑戦・革新
        </span>
        <div className="h-24 w-px bg-gradient-to-t from-transparent to-red-700/40" />
      </div>

      {/* Interactive red ink cursor glow */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(198, 40, 40, 0.07), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[75vh] sm:min-h-[80vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center w-full max-w-6xl mx-auto">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center text-center lg:text-left space-y-6">
              {/* Status Badge */}

              {/* Main Title */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block text-foreground mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium">
                    {t.hero.greeting}
                  </span>
                  <span className="block mb-3 sm:mb-4 relative">
                    <span className="font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-red-800 via-red-600 to-rose-400 dark:from-red-500 dark:via-red-400 dark:to-rose-300 bg-clip-text text-transparent animate-gradient-fast cursor-default">
                      Eito Shinokura
                    </span>
                  </span>
                  <span className="block text-foreground hover:text-shimmer transition-all duration-500 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                    {t.hero.tagline}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              >
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {t.hero.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="button-gradient text-white border-0 shadow-colored text-lg px-8 py-4 magnetic-button group"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Mail className="mr-3 h-5 w-5 group-hover:animate-bounce-gentle" />
                    {t.hero.getInTouch}
                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">✨</div>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-strong border-white/30 hover:bg-white/20 shadow-medium bg-transparent text-lg px-8 py-4 magnetic-button group"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {t.hero.viewProjects}
                    <ArrowDown className="ml-3 h-5 w-5 group-hover:animate-bounce-gentle rotate-[-90deg]" />
                  </Button>
                </div>
              </div>

            </div>

            {/* Right Column - Photo */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right" : "opacity-0"} flex justify-center mt-8 lg:mt-0`}
            >
              <div className="relative group">
                {/* Main Photo Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Hanko outer dashed ring — slowly rotates */}
                  <div
                    className="absolute -inset-5 rounded-full border border-dashed border-red-700/25 animate-rotate-slow"
                    style={{ animationDuration: '40s' }}
                  />
                  {/* Hanko inner solid ring */}
                  <div className="absolute -inset-2 rounded-full wa-hanko-ring" />

                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse-slow opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

                  {/* Photo */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-red-700/30 group-hover:border-red-600/50 transition-all duration-500 shadow-strong group-hover:shadow-glow">
                    <img
                      src="/profile.png"
                      alt="Eito Shinokura - Lead AI/ML Engineer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Subtle red ink overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Kanji seal overlay — top right */}
                  <div
                    className="absolute -top-1 -right-1 w-10 h-10 rounded-full border-2 border-red-700/50 flex items-center justify-center select-none"
                    style={{ background: 'rgba(198,40,40,0.08)' }}
                  >
                    <span className="notranslate text-xs font-black" translate="no" lang="ja" style={{ color: 'rgba(198,40,40,0.7)' }}>道</span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-4 right-4 glass-strong px-3 py-1 rounded-full border border-white/30 animate-fade-in">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-foreground font-medium">{t.hero.available}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Centered */}
        <div
          className={`text-center mt-8 transition-all duration-1000 delay-1100 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToAbout}
            className="animate-bounce-gentle hover:animate-pulse group"
          >
            <ArrowDown className="h-6 w-6 group-hover:animate-heartbeat" />
            <span className="sr-only">Scroll to about section</span>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </section>
  )
}
