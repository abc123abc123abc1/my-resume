"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useLanguage } from "@/components/language-provider"


interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const portfolioKnowledge = {
  personal: {
    name: "Eito Shinokura",
    title: "Lead AI/ML Engineer & AI Architect",
    experience: "9+ years",
    location: "Tokyo, Japan",
    email: "eitoshinokura118@outlook.com",
    phone: "+81 80-7194-6496",
    availability: "Available for work",
  },
  skills: {
    "LLM & GenAI": ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "AutoGen", "LangSmith"],
    "ML / Deep Learning": ["PyTorch", "TensorFlow", "Transformers", "Scikit-learn", "XGBoost", "LightGBM"],
    "MLOps & DevOps": ["MLflow", "Weights & Biases", "Kubeflow", "Docker", "Kubernetes", "GitHub Actions"],
    "Cloud Platforms": ["Azure ML", "AWS SageMaker", "GCP", "Azure OpenAI", "AKS", "AWS EKS"],
    "Backend & APIs": ["FastAPI", "Django", "Flask", "PostgreSQL", "Redis", "Celery"],
    "Vector Databases": ["Pinecone", "Weaviate", "FAISS", "Qdrant", "Milvus", "Elasticsearch"],
  },
  experience: [
    {
      title: "Lead AI Engineer",
      company: "Recursive AI",
      period: "April 2024 – Present",
      achievements: [
        "Architected multi-agent LLM systems (LangGraph, CrewAI, AutoGen), reducing costs by 35% for Fortune 500 clients",
        "Designed RAG pipelines with LlamaIndex + Pinecone/Weaviate, 92% accuracy across 10M+ documents",
        "Engineered production AI agents (GPT-4, Claude 3.5, Gemini Pro) with 88% automation success rate",
        "Cut MLOps deployment cycles from 3 weeks to 4 hours using Azure ML + MLflow",
      ],
    },
    {
      title: "Senior AI Engineer",
      company: "Tenchijin",
      period: "February 2022 – April 2024",
      achievements: [
        "Built BERT/RoBERTa/LayoutLM document understanding systems with 94% extraction accuracy",
        "Orchestrated 4-language NLP pipelines with 91% accuracy using spaCy and Transformers",
        "Developed PyTorch recommendation engines improving conversion rates by 28% and $2M+ revenue",
      ],
    },
  ],
  projects: [
    {
      title: "AI-Powered Code Assistant",
      description: "VS Code extension with intelligent code suggestions",
      technologies: ["TypeScript", "OpenAI API", "VS Code API", "Node.js"],
      achievements: ["100K+ active users", "4.8/5 rating", "40% debugging time reduction"],
    },
    {
      title: "Real-time Fraud Detection System",
      description: "ML system detecting fraudulent transactions with sub-100ms latency",
      technologies: ["Python", "Apache Kafka", "Redis", "TensorFlow", "Kubernetes"],
      achievements: ["1M+ transactions/day", "$50M+ fraud prevention", "Sub-100ms response"],
    },
  ],
  education: [
    {
      degree: "Master's Degree",
      school: "The University of Tokyo",
      period: "2016 – 2018",
      focus: "Information Science & Technology",
    },
    {
      degree: "Bachelor's Degree",
      school: "Tokyo Institute of Technology",
      period: "2012 – 2016",
      focus: "Computer Science & Engineering",
    },
  ],
  certifications: [
    "Microsoft Azure AI Engineer Associate (AZ-102)",
    "Azure Solutions Architect Expert (AZ-305)",
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional ML Engineer",
    "Certified Kubernetes Administrator (CKA)",
  ],
}

function generateBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  // Personal information
  if (message.includes("name") || message.includes("who are you")) {
    return `Hi! I'm Eito Shinokura, a Lead AI/ML Engineer & AI Architect with 9+ years of experience specializing in Generative AI, multi-agent LLM systems, and production-grade MLOps infrastructure. Based in Tokyo, Japan, I've delivered AI solutions for Fortune 500 enterprises across finance, HR, and operations.`
  }

  if (message.includes("contact") || message.includes("email") || message.includes("phone")) {
    return `You can reach Eito at:\n📧 Email: eitoshinokura118@outlook.com\n📞 Phone: +81 80-7194-6496\n📍 Location: Tokyo, Japan\n\nEito is currently available for new opportunities!`
  }

  if (message.includes("available") || message.includes("hire") || message.includes("work")) {
    return `Yes! Eito is currently available for work and open to new opportunities. He's particularly interested in Lead AI/ML Engineering roles, AI Architecture consulting, and enterprise AI transformation projects. Feel free to reach out to discuss potential collaborations!`
  }

  // Skills and expertise
  if (message.includes("skill") || message.includes("technology") || message.includes("programming")) {
    return `Eito has expertise in:

🤖 **LLM & GenAI**: LangChain, LangGraph, LlamaIndex, CrewAI, AutoGen, LangSmith

🧠 **ML / Deep Learning**: PyTorch, TensorFlow, Transformers, Scikit-learn, XGBoost, LightGBM

☁️ **Cloud Platforms**: Azure ML, AWS SageMaker, GCP, Azure OpenAI, AKS

🔧 **MLOps & DevOps**: MLflow, Weights & Biases, Kubeflow, Docker, Kubernetes

💾 **Vector Databases**: Pinecone, Weaviate, FAISS, Qdrant, Milvus

🖥️ **Backend & APIs**: FastAPI, Django, Flask, PostgreSQL, Redis`
  }

  if (message.includes("python") || message.includes("tensorflow") || message.includes("pytorch")) {
    return `Eito is highly proficient in Python and deep learning frameworks! He has extensive experience with PyTorch and TensorFlow, building production LLM agents, RAG pipelines, and NLP systems. He also uses LangChain, LlamaIndex, and HuggingFace Transformers extensively for Generative AI work.`
  }

  if (message.includes("aws") || message.includes("cloud") || message.includes("azure") || message.includes("gcp")) {
    return `Eito has strong multi-cloud expertise! He holds Azure AI Engineer Associate and Azure Solutions Architect Expert certifications, plus AWS ML Specialty. He's built production AI systems on Azure ML, AWS SageMaker, and GCP, deploying fine-tuned LLMs on Kubernetes with vLLM reducing inference costs by 45%.`
  }

  // Experience
  if (message.includes("experience") || message.includes("work") || message.includes("job")) {
    return `Eito has 9+ years of AI/ML experience:

🤖 **Lead AI Engineer** at Recursive AI (April 2024–Present)
- Multi-agent LLM systems reducing costs by 35% for Fortune 500 clients
- RAG pipelines achieving 92% accuracy across 10M+ documents
- 88% automation success rate in production

🏭 **Senior AI Engineer** at Tenchijin (Feb 2022–Apr 2024)
- Document understanding systems with 94% extraction accuracy
- PyTorch recommendation engines generating $2M+ revenue

🔬 **AI Engineer** at Citadel AI (Feb 2018–Jan 2022)
- Computer vision with 96% detection accuracy
- $800K annual cost savings via predictive analytics`
  }

  if (message.includes("research") || message.includes("paper") || message.includes("publication")) {
    return `Eito's expertise is focused on applied AI engineering rather than academic research. He builds production-grade AI systems — from multi-agent LLM architectures and RAG pipelines to computer vision systems and NLP engines — that drive measurable business outcomes for Fortune 500 companies.`
  }

  // Projects
  if (message.includes("project") || message.includes("portfolio") || message.includes("built")) {
    return `Eito has worked on impactful AI projects! Here are highlights from his portfolio:

🤖 **Multi-Agent LLM System**: Automates finance/HR workflows for Fortune 500 clients, 35% cost reduction

📄 **RAG Pipeline**: 92% semantic search accuracy across 10M+ enterprise documents using LlamaIndex + Pinecone

🏭 **Document Intelligence**: BERT/LayoutLM system processing 500K+ business documents monthly at 94% accuracy

👁️ **Computer Vision**: YOLO/ResNet system with 96% detection accuracy reducing inspection time by 75%

💡 **Recommendation Engine**: PyTorch model improving conversion rates by 28% and generating $2M+ revenue`
  }

  if (message.includes("rag") || message.includes("llm") || message.includes("langchain") || message.includes("agent")) {
    return `Eito is an expert in LLM and Generative AI! At Recursive AI he architected multi-agent systems using LangGraph, CrewAI, and AutoGen to automate enterprise workflows. He also built RAG pipelines with LlamaIndex integrating Pinecone and Weaviate vector databases, achieving 92% accuracy across 10M+ enterprise documents.`
  }

  // Education
  if (message.includes("education") || message.includes("degree") || message.includes("university")) {
    return `Eito's academic background from Japan's top universities:

🏛️ **Master's Degree** - The University of Tokyo (2016–2018)
   Focus: Information Science & Technology

🏫 **Bachelor's Degree** - Tokyo Institute of Technology (2012–2016)
   Focus: Computer Science & Engineering`
  }

  if (message.includes("tokyo") || message.includes("japan") || message.includes("university")) {
    return `Eito is based in Tokyo, Japan, and studied at two of Japan's most prestigious universities — The University of Tokyo (Master's in Information Science) and Tokyo Institute of Technology (Bachelor's in Computer Science & Engineering). His deep roots in Japan's tech ecosystem inform his work across enterprise AI projects throughout Asia and Europe.`
  }

  // Certifications
  if (message.includes("certification") || message.includes("certificate") || message.includes("certified")) {
    return `Alex holds several prestigious certifications:

🏆 AWS Certified Machine Learning - Specialty

🏆 Google Cloud Professional ML Engineer

🏆 TensorFlow Developer Certificate

🏆 Deep Learning Specialization (Coursera - Andrew Ng)

🏆 Certified Kubernetes Administrator

🏆 Microsoft Azure AI Engineer Associate

He's also received awards like the AI Innovation Award and Best Paper Award at ICML 2022!`
  }

  // General AI/ML questions
  if (message.includes("machine learning") || message.includes("artificial intelligence") || message.includes("ai")) {
    return `Alex is passionate about AI and machine learning! With 9 years of experience, he's worked on everything from research to production systems. He believes in building ethical, responsible AI that benefits humanity. His expertise spans computer vision, NLP, deep learning, and MLOps.`
  }

  if (message.includes("team") || message.includes("leadership") || message.includes("manage")) {
    return `Alex is an experienced technical leader! He currently leads a team of 8 engineers at TechCorp AI, focusing on computer vision solutions. He's also mentored 5+ junior researchers and received an Outstanding Mentor Award. He believes in collaborative leadership and knowledge sharing.`
  }

  // Achievements and metrics
  if (message.includes("achievement") || message.includes("accomplishment") || message.includes("success")) {
    return `Alex has impressive achievements:

📊 **15+ publications** in top-tier conferences

👥 **10M+ users** served by his ML models

💾 **Petabytes** of data processed

🏆 **3 patents** in AI and machine learning

⚡ **60% reduction** in model inference time

💰 **$50M+ fraud** prevented by his systems

⭐ **10K+ GitHub stars** on open-source projects`
  }

  // Greetings
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return `Hello! 👋 I'm Alex Chen's AI assistant. I can tell you all about Alex's experience, skills, projects, and background. What would you like to know about Alex's AI engineering expertise?`
  }

  if (message.includes("thank") || message.includes("thanks")) {
    return `You're welcome! 😊 If you have any other questions about Alex's background, experience, or projects, feel free to ask. I'm here to help you learn more about his AI engineering expertise!`
  }

  // Default response
  return `I'd be happy to help you learn more about Alex Chen! You can ask me about:

🔹 His technical skills and expertise

🔹 Work experience and achievements

🔹 AI/ML projects and research

🔹 Education and certifications

🔹 Contact information

🔹 Availability for new opportunities

What specific aspect interests you most?`
}

export function ChattingComponent() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: t.chatbot.greeting,
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleNewChat = () => {
    setMessages([
      {
        id: "1",
        content: t.chatbot.greeting,
        isBot: true,
        timestamp: new Date(),
      },
    ])
    setInputValue("")
    setIsTyping(false)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = generateBotResponse(inputValue)
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          isBot: true,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="button-gradient text-white border-0 shadow-colored rounded-full w-16 h-16 p-0 group hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6 group-hover:animate-wiggle" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="glass-strong border-adaptive shadow-strong transition-all duration-300 w-96 h-[500px]">
        {/* Header */}
        <CardHeader className="pb-3 border-b border-adaptive-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-full">
                <Bot className="h-4 w-4 text-foreground dark:text-white" />
              </div>
              <div>
                <CardTitle className="text-sm gradient-text">{t.chatbot.title}</CardTitle>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>{t.chatbot.online}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleNewChat}
                className="h-8 px-2 text-xs hover:bg-adaptive-hover text-muted-foreground hover:text-foreground transition-colors"
                title="Start new chat"
              >
                {t.chatbot.newChat}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-adaptive-hover"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.isBot ? "justify-start" : "justify-end"}`}>
              {message.isBot && (
                <div className="p-1.5 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                  <Bot className="h-3 w-3 text-foreground dark:text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  message.isBot
                    ? "bg-adaptive text-foreground border border-adaptive"
                    : "bg-gradient-primary text-foreground dark:text-white"
                }`}
              >
                {message.isBot ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                      ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mb-2">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 mb-2">{children}</ol>,
                      li: ({ children }) => <li className="ml-2">{children}</li>,
                      code: ({ children }) => (
                        <code className="bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded text-xs font-mono">
                          {children}
                        </code>
                      ),
                      h1: ({ children }) => <h1 className="font-bold text-base mb-2">{children}</h1>,
                      h2: ({ children }) => <h2 className="font-bold text-sm mb-2">{children}</h2>,
                      h3: ({ children }) => <h3 className="font-semibold text-sm mb-1">{children}</h3>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-2 border-primary pl-2 italic opacity-80">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                )}
                <div className={`text-xs mt-1 opacity-70 ${message.isBot ? "text-muted-foreground" : "text-foreground/70 dark:text-white/70"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
              {!message.isBot && (
                <div className="p-1.5 bg-gradient-secondary rounded-full flex-shrink-0 mt-1">
                  <User className="h-3 w-3 text-foreground dark:text-white" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="p-1.5 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <Bot className="h-3 w-3 text-foreground dark:text-white" />
              </div>
              <div className="bg-adaptive border border-adaptive p-3 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        {/* Input */}
        <div className="p-4 border-t border-adaptive-subtle">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.chatbot.placeholder}
              className="form-input flex-1 text-sm"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="button-gradient text-white border-0 px-3"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick suggestions */}
          <div className="flex flex-wrap gap-1 mt-2">
            {t.chatbot.suggestions.map((suggestion) => (
              <Badge
                key={suggestion}
                variant="outline"
                className="text-xs cursor-pointer hover:bg-adaptive-hover transition-colors bg-adaptive border-adaptive"
                onClick={() => setInputValue(`Tell me about Alex's ${suggestion.toLowerCase()}`)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
