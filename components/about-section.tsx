"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Zap, Award, Users, Lightbulb, Target } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WaSectionHeading } from "@/components/wa-section-heading"

const skills = [
  {
    category: "LLM & GenAI",
    items: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "AutoGen"],
    icon: Brain,
    color: "from-red-800 to-red-600",       /* 紅 beni */
  },
  {
    category: "ML / Deep Learning",
    items: ["PyTorch", "TensorFlow", "Transformers", "Scikit-learn", "XGBoost"],
    icon: Zap,
    color: "from-purple-900 to-violet-700", /* 紫 murasaki */
  },
  {
    category: "MLOps & DevOps",
    items: ["MLflow", "Weights & Biases", "Kubeflow", "Docker", "Kubernetes"],
    icon: Code,
    color: "from-emerald-900 to-green-700", /* 緑 midori */
  },
  {
    category: "Cloud Platforms",
    items: ["Azure ML", "AWS SageMaker", "Google Cloud", "Azure OpenAI", "AKS"],
    icon: Database,
    color: "from-indigo-900 to-blue-700",   /* 藍 ai */
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Django", "Flask", "PostgreSQL", "Redis"],
    icon: Target,
    color: "from-rose-800 to-red-700",      /* 茜 akane */
  },
  {
    category: "Vector Databases",
    items: ["Pinecone", "Weaviate", "FAISS", "Qdrant", "Milvus"],
    icon: Lightbulb,
    color: "from-amber-700 to-orange-600",  /* 橙 daidai */
  },
]

const highlightIcons = [Brain, Code, Database, Award]

export function AboutSection() {
  const { t } = useLanguage()
  const h = t.about.highlights

  return (
    <section id="about" className="py-20 section-background wa-seigaiha relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 animate-float opacity-10">
        <Users className="h-16 w-16" style={{ color: 'rgba(198,40,40,0.5)' }} />
      </div>
      <div className="absolute bottom-20 left-10 animate-float-delayed opacity-10">
        <Lightbulb className="h-12 w-12" style={{ color: 'rgba(232,196,184,0.6)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <WaSectionHeading
          kanji="人"
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story Section */}
          <div>
            <div className="glass-strong p-8 rounded-2xl wa-stationery transition-all duration-300">
              <h3 className="text-3xl font-semibold mb-8 gradient-text flex items-center gap-3">
                <Users className="h-8 w-8" />
                {t.about.myStory}
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {t.about.bio.map((paragraph, i) => (
                  <p key={i} className="text-lg hover:text-foreground transition-colors duration-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: highlightIcons[0], metric: h.researchMetric, label: h.researchLabel, title: h.research, desc: h.researchDesc },
                { icon: highlightIcons[1], metric: h.productionMetric, label: h.productionLabel, title: h.production, desc: h.productionDesc },
                { icon: highlightIcons[2], metric: h.dataMetric, label: h.dataLabel, title: h.data, desc: h.dataDesc },
                { icon: highlightIcons[3], metric: h.innovationMetric, label: h.innovationLabel, title: h.innovation, desc: h.innovationDesc },
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="card-hover bg-card border border-border/60 group cursor-pointer p-5 text-center"
                  style={{ borderRadius: '2px' }}
                >
                  {/* Red number — like a Japanese seal number */}
                  <div
                    className="text-3xl font-black mb-1 font-serif"
                    style={{ color: '#C62828' }}
                  >
                    {highlight.metric}
                  </div>
                  <div className="wa-ink-rule mx-auto mb-3 opacity-40" style={{ maxWidth: '60px' }} />
                  <div className="text-xs tracking-widest text-muted-foreground uppercase mb-2">
                    {highlight.label}
                  </div>
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {highlight.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold gradient-text-secondary flex items-center justify-center gap-3">
              <Code className="h-8 w-8" />
              {t.about.techExpertise}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon
              return (
                <div
                  key={index}
                  className="card-hover bg-card border border-border/60 group overflow-hidden"
                  style={{ borderRadius: '2px' }}
                >
                  {/* Colored top bar — category color */}
                  <div className={`h-[3px] bg-gradient-to-r ${skillGroup.color}`} />

                  <div className="p-5">
                    {/* Category label — Japanese product tag style */}
                    <div className="flex items-center gap-2 mb-4">
                      <IconComponent className="h-4 w-4 flex-shrink-0" style={{ color: 'rgba(198,40,40,0.6)' }} />
                      <span
                        className="text-xs font-bold tracking-[0.18em] uppercase"
                        style={{ color: 'rgba(198,40,40,0.75)' }}
                      >
                        {skillGroup.category}
                      </span>
                    </div>

                    {/* Thin red rule under label */}
                    <div className="wa-ink-rule mb-4 opacity-60" />

                    {/* Skill chips — clean bordered tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-2.5 py-1 border border-border/70 text-muted-foreground hover:text-foreground hover:border-red-700/50 hover:bg-red-50/50 dark:hover:bg-red-950/20 transition-all duration-200"
                          style={{ borderRadius: '1px', letterSpacing: '0.02em' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
