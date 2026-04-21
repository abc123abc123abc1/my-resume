"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"
import { WaSectionHeading } from "@/components/wa-section-heading"

export function ContactSection() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send contact message")
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setFormData({ name: "", email: "", message: "" })
      setIsMessageSent(true)

      setTimeout(() => {
        setIsMessageSent(false)
      }, 3000)
    } catch (error) {
      console.error("Contact form submission failed", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 section-background wa-seigaiha">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <WaSectionHeading
          kanji="縁"
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t.contact.letsConnect}</h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed">{t.contact.connectDesc}</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sm sm:text-base">{t.contact.email}</div>
              <div className="text-muted-foreground text-sm sm:text-base break-all">eitoshinokura118@outlook.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sm sm:text-base">{t.contact.phone}</div>
              <div className="text-muted-foreground text-sm sm:text-base">+81 80-7194-6496</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sm sm:text-base">{t.contact.location}</div>
              <div className="text-muted-foreground text-sm sm:text-base">Tokyo, Japan</div>
            </div>
          </div>
        </div>

      </div>

      <Card className="glass-strong border-adaptive shadow-strong">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">{t.contact.sendMessage}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          {isMessageSent && (
            <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    {t.contact.successTitle}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    {t.contact.successDesc}
                  </p>
                </div>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm sm:text-base">{t.contact.nameLabel}</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                className="form-input text-sm sm:text-base h-10 sm:h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">{t.contact.emailLabel}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.emailPlaceholder}
                className="form-input text-sm sm:text-base h-10 sm:h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm sm:text-base">{t.contact.messageLabel}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
                className="form-input resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                rows={4}
                required
              />
            </div>

            <Button
              type="submit"
              className={`w-full border-0 shadow-colored h-10 sm:h-11 text-sm sm:text-base ${
                isMessageSent 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'button-gradient text-white'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-gray-900 dark:border-white mr-2" />
                  Sending...
                </>
              ) : isMessageSent ? (
                <>
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  {t.contact.sent}
                </>
              ) : (
                <>
                  <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  {t.contact.send}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
  )
}
