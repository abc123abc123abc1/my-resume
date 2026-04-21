"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WaSectionHeading } from "@/components/wa-section-heading"

const certificates = [
  {
    title: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-AI-102",
  },
  {
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-305",
  },
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-MLS-2023",
  },
  {
    title: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-MLE-2023",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    date: "2021",
    credentialId: "DL-SPEC-2021",
  },
]

const achievements = [
  {
    title: "Fortune 500 AI Innovation Award",
    issuer: "Recursive AI — Enterprise Client Recognition",
  },
  {
    title: "Best AI Solution — Enterprise AI Summit",
    issuer: "Japan AI & Tech Expo 2023",
  },
  {
    title: "Outstanding Engineer Award",
    issuer: "Tenchijin — Internal Engineering Excellence",
  },
]

export function CertificatesSection() {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="py-20 section-background wa-seigaiha">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <WaSectionHeading
          kanji="賞"
          title={t.certificates.title}
          subtitle={t.certificates.subtitle}
        />

    <div className="mb-16">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">{t.certificates.certTitle}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" style={{ gridAutoRows: '1fr' }}>
        {certificates.map((cert, index) => (
          <Card key={index} className="h-full min-h-[200px] flex flex-col">
            <CardHeader className="p-4 sm:p-6 flex-1 flex flex-col">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <div className="flex-1">
                    <CardTitle className="text-base sm:text-lg leading-tight mb-2 break-words">{cert.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground mb-2">
                      <span className="font-medium break-words">{cert.issuer}</span>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Calendar className="h-3 w-3" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs w-fit mt-auto">
                    ID: {cert.credentialId}
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">{t.certificates.awardsTitle}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" style={{ gridAutoRows: '1fr' }}>
        {achievements.map((achievement, index) => (
          <Card key={index} className="h-full min-h-[160px] flex flex-col">
            <CardHeader className="p-4 sm:p-6 flex-1 flex flex-col">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-red-600/10 rounded-lg flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
                  <CardTitle className="text-base sm:text-lg leading-tight mb-2 break-words">{achievement.title}</CardTitle>
                  <span className="text-sm text-muted-foreground font-medium break-words">{achievement.issuer}</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}
