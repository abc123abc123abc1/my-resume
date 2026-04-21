"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WaSectionHeading } from "@/components/wa-section-heading"


const testimonials = [
  {
    name: "Kenji Watanabe",
    role: "CTO",
    company: "Recursive AI",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Eito is an exceptional Lead AI Engineer who consistently delivers beyond expectations. His multi-agent architecture expertise and ability to reduce Fortune 500 operational costs by 35% speaks for itself. Truly rare talent.",
  },
  {
    name: "Yuki Tanaka",
    role: "VP of Product",
    company: "Recursive AI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Working with Eito on our RAG pipeline was remarkable. He designed a system achieving 92% semantic search accuracy across 10M+ documents. His technical depth combined with clear communication made him indispensable.",
  },
  {
    name: "Haruto Nishimura",
    role: "Director of Engineering",
    company: "Tenchijin",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Eito built our intelligent document understanding system from the ground up, achieving 94% extraction accuracy and processing 500K+ documents monthly. His NLP expertise transformed our European enterprise offering.",
  },
  {
    name: "Sakura Ito",
    role: "Senior Data Scientist",
    company: "Tenchijin",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Eito's recommendation engine improved our clients' conversion rates by 28% and generated over $2M in additional revenue. He has a rare gift for translating complex ML theory into measurable business outcomes.",
  },
  {
    name: "Takashi Mori",
    role: "Head of AI",
    company: "Citadel AI",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Eito's computer vision solutions achieved 96% detection accuracy and reduced manual inspection time by 75% for our manufacturing clients. He also saved $800K annually through predictive analytics. A high-impact engineer.",
  },
  {
    name: "Aiko Yamamoto",
    role: "Engineering Manager",
    company: "Preferred Networks",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Eito mentored 5 junior engineers while building ETL pipelines processing 2M+ daily records with 99.7% data quality. As a team lead he is inspiring, thorough, and always raises the bar. A true technical leader.",
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 wa-graph-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <WaSectionHeading
          kanji="声"
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index: number) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-4 flex-shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-red-600 text-red-600" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 italic flex-grow line-clamp-6">
                  「{t.testimonials.items[index] ?? testimonial.testimonial}」
                </blockquote>

                <div className="flex items-center gap-3 mt-auto flex-shrink-0">
                  <Avatar className="flex-shrink-0">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-grow">
                    <div className="font-semibold truncate">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground truncate">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground truncate">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
