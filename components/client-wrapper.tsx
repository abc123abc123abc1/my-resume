"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export function ClientWrapper() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  )
}

export function ClientSections() {
  return (
    <>
      <ContactSection />
      <Footer />
    </>
  )
} 