"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, BookOpen, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WaSectionHeading } from "@/components/wa-section-heading"


const education = [
  {
    degree: "Master's Degree",
    school: "The University of Tokyo",
    location: "Tokyo, Japan",
    period: "2016 – 2018",
    gpa: "",
    focus: "Information Science & Technology",
    thesis: "",
    achievements: [
      "Graduate School of Information Science and Technology",
      "Specialized in Machine Learning and Intelligent Systems",
      "Research in applied AI and computational data analysis",
      "Foundation for advanced LLM and NLP expertise",
    ],
    icon: "🏛️",
    color: "from-red-800 to-rose-600",
    level: "Master's",
  },
  {
    degree: "Bachelor's Degree",
    school: "Tokyo Institute of Technology",
    location: "Tokyo, Japan",
    period: "2012 – 2016",
    gpa: "",
    focus: "Computer Science & Engineering",
    thesis: "",
    achievements: [
      "School of Computing — Computer Science & Engineering",
      "Strong foundation in mathematics, algorithms, and systems",
      "Coursework in data structures, AI fundamentals, and software engineering",
      "Developed early ML and programming expertise",
    ],
    icon: "🏫",
    color: "from-amber-600 to-yellow-500",
    level: "Bachelor's",
  },
]

const relevantCourses = [
  {
    category: "Core AI / ML",
    courses: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
  },
  {
    category: "Generative AI",
    courses: ["Large Language Models", "Transformer Architecture", "Prompt Engineering", "RAG Systems"],
  },
  { category: "Systems & Engineering", courses: ["Distributed Systems", "Database Systems", "MLOps & CI/CD", "Cloud Architecture"] },
  { category: "Mathematics", courses: ["Linear Algebra", "Probability & Statistics", "Optimization Theory", "Information Theory"] },
]

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-20 relative overflow-hidden wa-graph-paper">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/25 via-transparent to-amber-50/20 dark:from-red-950/10 dark:via-transparent dark:to-amber-950/08"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <WaSectionHeading
          kanji="学"
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-700 via-rose-500 to-amber-500 md:-translate-x-px"></div>

          <div className="space-y-12">
            {education.map((edu, index: number) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 md:left-1/2 w-6 h-6 md:-translate-x-3 z-10">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} shadow-lg flex items-center justify-center text-white text-xs font-bold animate-pulse-slow`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} animate-ping opacity-20`}
                  ></div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="card-hover glass border-white/10 shadow-strong overflow-hidden group">
                    {/* Card header with gradient */}
                    <div className={`h-3 bg-gradient-to-r ${edu.color}`}></div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl animate-float">{edu.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className={`bg-gradient-to-r ${edu.color} text-white border-0`}>
                              {edu.level}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mb-2 gradient-text">{edu.degree}</CardTitle>
                          <div className="text-lg font-semibold text-muted-foreground mb-3">{edu.school}</div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.period}</span>
                            </div>
                            {edu.gpa && (
                              <Badge
                                variant="outline"
                                className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300"
                              >
                                GPA: {edu.gpa}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium gradient-text-secondary">
                              {t.education.focus}: {edu.focus}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        {(t.education.items[index]?.thesis ?? edu.thesis) && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <BookOpen className="h-4 w-4 text-primary" />
                              <h4 className="font-semibold gradient-text">{t.education.thesis}</h4>
                            </div>
                            <p className="text-muted-foreground text-sm mb-4 italic bg-muted/30 p-3 rounded-lg">
                              「{t.education.items[index]?.thesis ?? edu.thesis}」
                            </p>
                          </div>
                        )}

                        <div className={(t.education.items[index]?.thesis ?? edu.thesis) ? "" : "md:col-span-2"}>
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="h-4 w-4 text-amber-500" />
                            <h4 className="font-semibold gradient-text-secondary">{t.education.achievements}</h4>
                          </div>
                          <ul className="space-y-2">
                            {(t.education.items[index]?.achievements ?? edu.achievements).map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-3 text-sm">
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Coursework Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="glass border-white/10 shadow-strong overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-red-700 via-rose-500 to-amber-500"></div>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="h-6 w-6 text-blue-500" />
                <CardTitle className="text-2xl gradient-text">{t.education.relevantCoursework}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relevantCourses.map((courseGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-center gradient-text-secondary border-b border-muted pb-2">
                      {courseGroup.category}
                    </h4>
                    <div className="space-y-2">
                      {courseGroup.courses.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="secondary"
                          className="w-full justify-center bg-white/10 text-foreground border border-white/20 hover:bg-white/20 transition-colors text-xs py-1"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
