"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WaSectionHeading } from "@/components/wa-section-heading"


const experiences = [
  {
    title: "Lead AI Engineer",
    company: "Recursive AI",
    location: "Tokyo, Japan",
    period: "April 2024 – Present",
    duration: "1+ year",
    description: "Architecting multi-agent LLM systems and production-grade AI solutions that automate enterprise workflows for Fortune 500 clients.",
    achievements: [
      "Architected multi-agent LLM systems (LangGraph, CrewAI, AutoGen), reducing operational costs by 35% for Fortune 500 clients",
      "Designed RAG pipelines with LlamaIndex + Pinecone/Weaviate, achieving 92% accuracy across 10M+ enterprise documents",
      "Engineered production AI agents (GPT-4, Claude 3.5, Gemini Pro) with 88% automation success rate in production",
      "Established Azure ML + MLflow + W&B MLOps infrastructure, cutting deployment cycles from 3 weeks to 4 hours",
      "Deployed fine-tuned LLMs on Kubernetes with vLLM, reducing inference costs by 45%",
    ],
    technologies: ["LangGraph", "CrewAI", "LlamaIndex", "GPT-4", "Claude 3.5", "Azure ML", "FastAPI", "Kubernetes"],
    companyLogo: "🤖",
    color: "from-red-700 to-rose-500",
  },
  {
    title: "Senior AI Engineer",
    company: "Tenchijin",
    location: "Minato, Tokyo, Japan",
    period: "February 2022 – April 2024",
    duration: "2 years",
    description: "Built intelligent document understanding systems and NLP pipelines for European enterprise clients, processing 500K+ business documents monthly.",
    achievements: [
      "Produced document understanding systems using BERT, RoBERTa, and LayoutLM with 94% extraction accuracy",
      "Orchestrated multi-language NLP pipelines (4 languages, 91% accuracy) using spaCy and Transformers",
      "Built Q&A systems using BERT + FAISS enabling sub-second queries across 5M+ documents",
      "Optimized inference with ONNX Runtime and TorchServe, achieving 3.5x speedup and 50% cost reduction",
      "Crafted recommendation engines with PyTorch improving client conversion rates by 28% and $2M+ revenue",
    ],
    technologies: ["BERT", "RoBERTa", "LayoutLM", "spaCy", "FastAPI", "MLflow", "ONNX", "AWS", "PostgreSQL"],
    companyLogo: "🏭",
    color: "from-purple-800 to-violet-600",
  },
  {
    title: "AI Engineer & Data Scientist",
    company: "Citadel AI",
    location: "Shibuya-ku, Tokyo, Japan",
    period: "February 2018 – January 2022",
    duration: "4 years",
    description: "Delivered computer vision and NLP solutions for manufacturing clients, and predictive analytics that drove measurable cost savings.",
    achievements: [
      "Delivered CV systems using ResNet, EfficientNet, and YOLO with 96% detection accuracy, reducing inspection time by 75%",
      "Designed predictive analytics with XGBoost and LightGBM, reducing inventory costs by $800K annually",
      "Analyzed 50TB+ data monthly using Apache Spark on AWS EMR, uncovering insights that drove $1.5M in savings",
      "Executed MLOps with Docker, Jenkins, and Kubernetes, reducing deployment time by 70% with 99.5% reliability",
    ],
    technologies: ["PyTorch", "YOLO", "XGBoost", "LightGBM", "Apache Spark", "Flask", "Docker", "Kubernetes"],
    companyLogo: "🔬",
    color: "from-emerald-800 to-green-600",
  },
  {
    title: "ML Developer & Data Analyst",
    company: "Preferred Networks",
    location: "Chiyoda-ku, Tokyo, Japan",
    period: "April 2016 – January 2018",
    duration: "2 years",
    description: "Built ML models and ETL pipelines for demand forecasting and business intelligence across retail and enterprise clients.",
    achievements: [
      "Generated ML models using Random Forests, Gradient Boosting, and Logistic Regression with 84% prediction accuracy",
      "Constructed time-series forecasting with ARIMA and ensemble methods, improving planning accuracy by 40%",
      "Launched ETL pipelines processing 2M+ records daily with 99.7% data quality",
      "Streamlined analytics workflows reducing manual reporting time by 80%",
    ],
    technologies: ["Python", "Scikit-learn", "ARIMA", "SQL", "Pandas", "Tableau", "Matplotlib", "Seaborn"],
    companyLogo: "📊",
    color: "from-amber-700 to-orange-500",
  },
]

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 relative overflow-hidden wa-graph-paper">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-orange-50/20 dark:from-red-950/10 dark:via-transparent dark:to-amber-950/08"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <WaSectionHeading
          kanji="歴"
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-700 via-red-500 to-rose-400 md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 md:-translate-x-2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg animate-pulse-slow`}
                  ></div>
                  <div
                    className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-20`}
                  ></div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="card-hover glass border-white/10 shadow-strong overflow-hidden group">
                    {/* Card header with gradient */}
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{exp.companyLogo}</span>
                            <div>
                              <CardTitle className="text-xl mb-1 gradient-text">{exp.title}</CardTitle>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Building className="h-4 w-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-0">
                              {exp.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{t.experience.jobs[index]?.description ?? exp.description}</p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <h4 className="font-semibold gradient-text-secondary">{t.experience.keyAchievements}</h4>
                          </div>
                          <ul className="space-y-2">
                            {(t.experience.jobs[index]?.achievements ?? exp.achievements).map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-3 text-sm">
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 gradient-text">{t.experience.technologiesUsed}</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="bg-white/10 text-foreground border border-white/20 hover:bg-white/20 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
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
      </div>
    </section>
  )
}
