import { ClientWrapper, ClientSections } from "@/components/client-wrapper"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { CertificatesSection } from "@/components/certificates-section"
import { NoSSR } from "@/components/no-ssr"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NoSSR fallback={<div className="min-h-screen bg-background animate-pulse" />}>
        <ClientWrapper />
        <div className="wa-ink-rule" />
        <AboutSection />
        <div className="wa-ink-rule" />
        <ExperienceSection />
        <div className="wa-ink-rule" />
        <ProjectsSection />
        <div className="wa-ink-rule" />
        <EducationSection />
        <div className="wa-ink-rule" />
        <CertificatesSection />
        <div className="wa-ink-rule" />
        <ClientSections />
      </NoSSR>
    </main>
  )
}
