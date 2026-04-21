"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-6 border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Eito Shinokura. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
