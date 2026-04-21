export type Language = "en" | "ja"

export const translations = {
  en: {
    nav: {
      home: "home",
      about: "about",
      experience: "experience",
      projects: "projects",
      education: "education",
      certificates: "certificates",
      testimonials: "testimonials",
      blog: "blog",
      contact: "contact",
    },

    hero: {
      greeting: "Hi, I'm",
      tagline: "Lead AI/ML Engineer & AI Architect",
      description:
        "Lead AI/ML Engineer with 9+ years of experience architecting and deploying advanced AI systems. Specialized in Generative AI, multi-agent LLM systems, and scalable MLOps infrastructure for Fortune 500 enterprises.",
      getInTouch: "Get in Touch",
      viewProjects: "View Projects",
      available: "Available",
      scrollLabel: "Scroll to about section",
    },

    about: {
      title: "About Me",
      subtitle:
        "Lead AI/ML Engineer specialized in Generative AI, multi-agent LLM systems, and production-grade AI infrastructure.",
      myStory: "My Story",
      techExpertise: "Technical Expertise",
      bio: [
        "My AI journey began over 9 years ago, evolving from traditional machine learning and data analytics to cutting-edge LLM-based architectures. Based in Tokyo, I've dedicated my career to building AI systems that genuinely transform business operations.",
        "At Recursive AI, Tenchijin, and Citadel AI, I've architected multi-agent systems, RAG pipelines, and enterprise-scale NLP solutions — delivering production-grade AI that serves Fortune 500 clients across finance, HR, and operations.",
        "I believe in AI that is measurable, reliable, and impactful. Whether orchestrating real-time systems handling 5M+ workflows monthly or cutting deployment cycles from 3 weeks to 4 hours, I focus on AI that drives tangible business outcomes.",
      ],
      highlights: {
        research: "Enterprise Clients",
        researchDesc: "Delivered AI solutions for 15+ Fortune 500 companies",
        researchMetric: "15+",
        researchLabel: "Fortune 500 Clients",
        production: "Automation Rate",
        productionDesc: "88% automation success rate in production AI agents",
        productionMetric: "88%",
        productionLabel: "Automation Success",
        data: "Docs Processed",
        dataDesc: "Semantic search across 10M+ enterprise documents",
        dataMetric: "10M+",
        dataLabel: "Documents Indexed",
        innovation: "Years Experience",
        innovationDesc: "9+ years in ML, DL, and Generative AI systems",
        innovationMetric: "9+",
        innovationLabel: "Years of Expertise",
      },
    },

    experience: {
      title: "Work Experience",
      subtitle: "9+ years of advancing from ML engineering to leading AI architecture for Fortune 500 enterprises.",
      keyAchievements: "Key Achievements",
      technologiesUsed: "Technologies Used",
      jobs: [
        {
          description:
            "Architecting multi-agent LLM systems and production-grade AI solutions that automate enterprise workflows for Fortune 500 clients.",
          achievements: [
            "Architected multi-agent LLM systems (LangGraph, CrewAI, AutoGen), reducing operational costs by 35% for Fortune 500 clients",
            "Designed RAG pipelines with LlamaIndex + Pinecone/Weaviate, achieving 92% accuracy across 10M+ enterprise documents",
            "Engineered production AI agents (GPT-4, Claude 3.5, Gemini Pro) with 88% automation success rate in production",
            "Established Azure ML + MLflow + W&B MLOps infrastructure, cutting deployment cycles from 3 weeks to 4 hours",
            "Deployed fine-tuned LLMs on Kubernetes with vLLM, reducing inference costs by 45%",
          ],
        },
        {
          description:
            "Built intelligent document understanding systems and NLP pipelines for European enterprise clients, processing 500K+ business documents monthly.",
          achievements: [
            "Produced document understanding systems using BERT, RoBERTa, and LayoutLM with 94% extraction accuracy",
            "Orchestrated multi-language NLP pipelines (4 languages, 91% accuracy) using spaCy and Transformers",
            "Built Q&A systems using BERT + FAISS enabling sub-second queries across 5M+ documents",
            "Optimized inference with ONNX Runtime and TorchServe, achieving 3.5x speedup and 50% cost reduction",
            "Crafted recommendation engines with PyTorch improving conversion rates by 28% and $2M+ in revenue",
          ],
        },
        {
          description:
            "Delivered computer vision and NLP solutions for manufacturing clients, and predictive analytics that drove measurable cost savings.",
          achievements: [
            "Delivered CV systems using ResNet, EfficientNet, and YOLO with 96% detection accuracy, reducing inspection time by 75%",
            "Designed predictive analytics with XGBoost and LightGBM, reducing inventory costs by $800K annually",
            "Analyzed 50TB+ data monthly using Apache Spark on AWS EMR, uncovering $1.5M in cost savings",
            "Executed MLOps with Docker, Jenkins, and Kubernetes, reducing deployment time by 70% with 99.5% reliability",
          ],
        },
        {
          description:
            "Built ML models and ETL pipelines for demand forecasting and business intelligence across retail and enterprise clients.",
          achievements: [
            "Generated ML models using Random Forests, Gradient Boosting, and Logistic Regression with 84% prediction accuracy",
            "Constructed time-series forecasting with ARIMA and ensemble methods, improving planning accuracy by 40%",
            "Launched ETL pipelines processing 2M+ records daily with 99.7% data quality",
            "Streamlined analytics workflows reducing manual reporting time by 80%",
          ],
        },
      ],
    },

    projects: {
      title: "Featured Projects",
      subtitle: "Showcasing innovative AI solutions that make a real impact.",
      keyAchievements: "Key Achievements",
      technologies: "Technologies",
      demo: "Demo",
      items: [
        {
          title: "AI-Powered Code Assistant",
          description:
            "A VS Code extension that provides intelligent code suggestions and bug detection using large language models.",
          achievements: [
            "100K+ active users",
            "4.8/5 rating on VS Code marketplace",
            "Reduces debugging time by 40%",
          ],
        },
        {
          title: "Computer Vision for Medical Imaging",
          description:
            "Deep learning model for automated detection of anomalies in medical scans with radiologist-level accuracy.",
          achievements: [
            "95% sensitivity, 98% specificity",
            "FDA approval pending",
            "Deployed in 5 hospitals",
          ],
        },
        {
          title: "Personalized Learning Platform",
          description:
            "AI-driven educational platform that adapts content difficulty based on student performance and learning patterns.",
          achievements: [
            "30% improvement in learning outcomes",
            "50K+ active students",
            "Partnerships with 20+ schools",
          ],
        },
      ],
    },

    education: {
      title: "Education",
      subtitle:
        "Academic foundation from Japan's leading universities — The University of Tokyo and Tokyo Institute of Technology.",
      thesis: "Thesis",
      achievements: "Highlights",
      focus: "Focus",
      gpaLabel: "GPA",
      relevantCoursework: "Relevant Coursework",
      items: [
        {
          thesis: "",
          achievements: [
            "Graduate School of Information Science and Technology",
            "Specialized in Machine Learning and Intelligent Systems",
            "Research in applied AI and computational data analysis",
            "Foundation for advanced LLM and NLP expertise",
          ],
        },
        {
          thesis: "",
          achievements: [
            "School of Computing — Computer Science & Engineering",
            "Strong foundation in mathematics, algorithms, and systems",
            "Coursework in data structures, AI fundamentals, and software engineering",
            "Developed early ML and programming expertise",
          ],
        },
      ],
    },

    certificates: {
      title: "Certificates & Awards",
      subtitle:
        "Professional certifications and recognition in AI and machine learning.",
      certTitle: "Professional Certifications",
      awardsTitle: "Awards & Recognition",
    },

    testimonials: {
      title: "Testimonials",
      subtitle: "What colleagues and clients say about working with me.",
      items: [
        "Eito is an exceptional Lead AI Engineer who consistently delivers beyond expectations. His multi-agent architecture expertise and ability to reduce Fortune 500 operational costs by 35% speaks for itself. Truly rare talent.",
        "Working with Eito on our RAG pipeline was remarkable. He designed a system achieving 92% semantic search accuracy across 10M+ documents. His technical depth combined with clear communication made him indispensable.",
        "Eito built our intelligent document understanding system from the ground up, achieving 94% extraction accuracy and processing 500K+ documents monthly. His NLP expertise transformed our European enterprise offering.",
        "Eito's recommendation engine improved our clients' conversion rates by 28% and generated over $2M in additional revenue. He has a rare gift for translating complex ML theory into measurable business outcomes.",
        "Eito's computer vision solutions achieved 96% detection accuracy and reduced manual inspection time by 75% for our manufacturing clients. He also saved $800K annually through predictive analytics. A high-impact engineer.",
        "Eito mentored 5 junior engineers while building ETL pipelines processing 2M+ daily records with 99.7% data quality. A true technical leader who raises the bar for everyone around him.",
      ],
    },

    blog: {
      title: "Blog",
      subtitle: "Sharing insights on AI, machine learning, and software engineering.",
      featured: "Featured",
      all: "All",
      readMore: "Read More",
      back: "Back to Blog",
      categories: {
        "AI Research": "AI Research",
        MLOps: "MLOps",
        "Computer Vision": "Computer Vision",
        "Deep Learning": "Deep Learning",
        Career: "Career",
        "AI Ethics": "AI Ethics",
      },
      posts: [
        {
          title: "The Future of Large Language Models: Beyond GPT-4",
          excerpt:
            "Exploring next-generation LLM architectures, multimodal integration, and what lies beyond current frontier models.",
        },
        {
          title:
            "Building Production-Ready ML Pipelines: Lessons from 50M+ Daily Predictions",
          excerpt:
            "Practical insights from architecting ML systems at scale — from feature stores to monitoring and A/B testing.",
        },
        {
          title:
            "Computer Vision in 2024: State-of-the-Art Models and Applications",
          excerpt:
            "A deep dive into SAM, CLIP, and modern vision models transforming industries from healthcare to autonomous vehicles.",
        },
        {
          title: "The Art of AI Engineering: From Research to Production",
          excerpt:
            "Bridging the gap between academic research and real-world deployment — key skills every AI engineer needs.",
        },
        {
          title:
            "Transformer Architecture Deep Dive: Understanding Attention Mechanisms",
          excerpt:
            "A technical exploration of self-attention, multi-head attention, and how BERT, GPT, and T5 are built.",
        },
        {
          title: "AI Ethics in Practice: Building Responsible AI Systems",
          excerpt:
            "Practical frameworks for fairness, transparency, and accountability when deploying AI in production.",
        },
      ],
    },

    contact: {
      title: "Get in Touch",
      subtitle:
        "Ready to collaborate on your next AI project? Let's discuss how we can work together.",
      letsConnect: "Let's Connect",
      connectDesc:
        "I'm always interested in discussing new opportunities, innovative projects, and potential collaborations.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      followMe: "Follow Me",
      sendMessage: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sending: "Sending...",
      sent: "Message Sent!",
      send: "Send Message",
      successTitle: "Message Sent Successfully!",
      successDesc: "Thank you for your message. I'll get back to you soon.",
    },

    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, TypeScript & Shadcn UI",
    },

    chatbot: {
      greeting:
        "Hi! I'm Eito Shinokura's AI assistant. I can answer questions about his experience, skills, projects, and background. What would you like to know?",
      placeholder: "Ask about Eito's experience, skills, projects...",
      newChat: "New Chat",
      online: "Online",
      title: "Eito's AI Assistant",
      suggestions: ["Skills", "Experience", "Projects", "Contact"],
    },
  },

  /* ─────────────────────────────────────────────
     Japanese translations (日本語)
  ───────────────────────────────────────────── */
  ja: {
    nav: {
      home: "ホーム",
      about: "概要",
      experience: "経歴",
      projects: "プロジェクト",
      education: "学歴",
      certificates: "資格・受賞",
      testimonials: "推薦状",
      blog: "ブログ",
      contact: "お問い合わせ",
    },

    hero: {
      greeting: "こんにちは、私は",
      tagline: "リードAI/MLエンジニア & AIアーキテクト",
      description:
        "9年以上の経験を持つリードAI/MLエンジニア。生成AI・マルチエージェントLLMシステム・スケーラブルなMLOpsインフラを専門とし、Fortune 500企業向けの本番グレードAIを設計・展開しています。",
      getInTouch: "お問い合わせ",
      viewProjects: "プロジェクトを見る",
      available: "採用可能",
      scrollLabel: "概要セクションへスクロール",
    },

    about: {
      title: "私について",
      subtitle:
        "生成AI・マルチエージェントLLMシステム・本番グレードAIインフラを専門とするリードAI/MLエンジニア。",
      myStory: "私のストーリー",
      techExpertise: "技術的専門知識",
      bio: [
        "AIへの歩みは9年以上前、機械学習とデータ分析から始まりました。以来、伝統的なMLから最先端のLLMベースアーキテクチャへと進化し、東京を拠点にビジネスを真に変革するAIシステムの構築に取り組んでいます。",
        "Recursive AI・天地人・Citadel AIでのキャリアを通じ、マルチエージェントシステム・RAGパイプライン・エンタープライズNLPソリューションを設計し、Fortune 500クライアントの財務・人事・業務を支えるAIを本番環境で提供してきました。",
        "私が信じるのは、測定可能で信頼性が高く、インパクトのあるAIです。月間500万件以上のワークフローをリアルタイムで処理するシステムの構築から、デプロイサイクルを3週間から4時間に短縮するまで、具体的なビジネス成果を生み出すAIにこだわっています。",
      ],
      highlights: {
        research: "エンタープライズクライアント",
        researchDesc: "15社以上のFortune 500企業にAIソリューションを提供",
        researchMetric: "15社+",
        researchLabel: "Fortune 500 クライアント",
        production: "自動化成功率",
        productionDesc: "本番AIエージェントの自動化成功率88%",
        productionMetric: "88%",
        productionLabel: "自動化成功率",
        data: "処理ドキュメント",
        dataDesc: "1000万件以上のエンタープライズ文書を横断したセマンティック検索",
        dataMetric: "1000万+",
        dataLabel: "インデックス済み文書",
        innovation: "経験年数",
        innovationDesc: "ML・DL・生成AIシステムで9年以上の実績",
        innovationMetric: "9年+",
        innovationLabel: "専門経験",
      },
    },

    experience: {
      title: "職歴",
      subtitle: "MLエンジニアリングからFortune 500向けAIアーキテクチャのリードへ、9年以上の歩み。",
      keyAchievements: "主な実績",
      technologiesUsed: "使用技術",
      jobs: [
        {
          description:
            "Fortune 500クライアントの企業ワークフローを自動化するマルチエージェントLLMシステムと本番グレードAIソリューションを設計。",
          achievements: [
            "LangGraph・CrewAI・AutoGenを用いたマルチエージェントLLMシステムを設計し、Fortune 500クライアントのコストを35%削減",
            "LlamaIndex + Pinecone/WeaviateのRAGパイプラインを構築、1000万件以上の文書で92%の検索精度を達成",
            "GPT-4・Claude 3.5・Gemini Proを用いた本番AIエージェントを開発、自動化成功率88%を実現",
            "Azure ML・MLflow・W&BのMLOpsインフラを確立し、デプロイサイクルを3週間から4時間に短縮",
            "vLLMによるKubernetes上のLLM展開で推論コストを45%削減",
          ],
        },
        {
          description:
            "欧州エンタープライズクライアント向けに、月間50万件以上のビジネス文書を処理するインテリジェント文書理解システムとNLPパイプラインを構築。",
          achievements: [
            "BERT・RoBERTa・LayoutLMを用いた文書理解システムを開発、94%の抽出精度を達成",
            "spaCyとTransformersを活用した4言語NLPパイプラインを構築（精度91%）",
            "BERT + FAISSを用いたQ&Aシステムで500万件以上の文書に対してサブ秒クエリを実現",
            "ONNX RuntimeとTorchServeで推論最適化、3.5倍高速化・コスト50%削減を達成",
            "PyTorchのレコメンドエンジンでクライアントのコンバージョン率28%向上、200万ドル超の収益増加",
          ],
        },
        {
          description:
            "製造業クライアント向けにコンピュータビジョン・NLPソリューションを提供し、測定可能なコスト削減を実現する予測分析を構築。",
          achievements: [
            "ResNet・EfficientNet・YOLOを用いたCVシステムで96%の検出精度を達成、点検時間を75%短縮",
            "XGBoostとLightGBMの予測分析で年間80万ドルの在庫コスト削減",
            "AWS EMR上のApache Sparkで月間50TB以上のデータを分析、150万ドルのコスト削減につながる知見を発見",
            "Docker・Jenkins・KubernetesのMLOps導入でデプロイ時間を70%短縮、可用性99.5%を実現",
          ],
        },
        {
          description:
            "小売・エンタープライズクライアント向けに需要予測とビジネスインテリジェンスのためのMLモデルとETLパイプラインを構築。",
          achievements: [
            "ランダムフォレスト・勾配ブースティング・ロジスティック回帰で84%の予測精度を達成",
            "ARIMAとアンサンブル手法で時系列予測を構築、計画精度を40%向上",
            "日次200万件以上のレコードを処理するETLパイプラインを構築（データ品質99.7%）",
            "分析ワークフローの自動化により手動レポート時間を80%削減",
          ],
        },
      ],
    },

    projects: {
      title: "主要プロジェクト",
      subtitle: "現実のインパクトをもたらす革新的なAIソリューション。",
      keyAchievements: "主な実績",
      technologies: "使用技術",
      demo: "デモを見る",
      items: [
        {
          title: "AI搭載コードアシスタント",
          description:
            "大規模言語モデルを活用したVS Code拡張機能。インテリジェントなコード補完とバグ検出を提供します。",
          achievements: [
            "アクティブユーザー10万人以上",
            "VS Codeマーケットプレイスで4.8/5の評価",
            "デバッグ時間を40%削減",
          ],
        },
        {
          title: "医療画像のコンピュータビジョン",
          description:
            "医療スキャンの異常を放射線科医レベルの精度で自動検出する深層学習モデル。",
          achievements: [
            "感度95%・特異度98%",
            "FDA承認申請中",
            "5つの病院で展開済み",
          ],
        },
        {
          title: "パーソナライズド学習プラットフォーム",
          description:
            "学生の学習パフォーマンスに基づいてコンテンツの難易度を適応させるAI駆動の教育プラットフォーム。",
          achievements: [
            "学習成果を30%改善",
            "アクティブ学生5万人以上",
            "20校以上との提携",
          ],
        },
      ],
    },

    education: {
      title: "学歴",
      subtitle: "東京大学・東京工業大学という日本トップ大学での学術的基盤。",
      thesis: "論文",
      achievements: "ハイライト",
      focus: "専攻",
      gpaLabel: "GPA",
      relevantCoursework: "関連科目",
      items: [
        {
          thesis: "",
          achievements: [
            "大学院 情報理工学系研究科",
            "機械学習・インテリジェントシステムを専攻",
            "応用AIと計算データ分析の研究",
            "高度なLLM・NLP専門知識の礎",
          ],
        },
        {
          thesis: "",
          achievements: [
            "情報工学系 — 計算機科学・工学専攻",
            "数学・アルゴリズム・システムの強固な基礎",
            "データ構造・AI基礎・ソフトウェアエンジニアリングを履修",
            "初期のML・プログラミング能力を培った",
          ],
        },
      ],
    },

    certificates: {
      title: "資格・受賞歴",
      subtitle: "AIと機械学習分野における専門資格と受賞実績。",
      certTitle: "専門資格",
      awardsTitle: "受賞・表彰",
    },

    testimonials: {
      title: "推薦状",
      subtitle: "同僚やクライアントからの声。",
      items: [
        "Eitoは常に期待を超える卓越したリードAIエンジニアです。マルチエージェントアーキテクチャの専門性と、Fortune 500クライアントの運用コストを35%削減した実績がすべてを物語っています。真に稀有な人材です。",
        "EitoとRAGパイプラインの開発に取り組んだことは非常に印象的でした。1000万件以上の文書で92%のセマンティック検索精度を達成するシステムを設計し、その技術的深度と明確なコミュニケーションでチームに欠かせない存在となりました。",
        "Eitoは文書理解システムをゼロから構築し、94%の抽出精度と月間50万件以上の文書処理を実現しました。NLPの専門知識が欧州エンタープライズ向けサービスを一変させました。",
        "Eitoのレコメンドエンジンはクライアントのコンバージョン率を28%向上させ、200万ドル以上の追加収益をもたらしました。複雑なML理論を具体的なビジネス成果に変換する才能は際立っています。",
        "Eitoのコンピュータビジョンソリューションは製造クライアントで96%の検出精度を達成し、点検時間を75%削減しました。さらに予測分析により年間80万ドルのコスト削減も実現。インパクトの大きいエンジニアです。",
        "Eitoは5名のジュニアエンジニアを指導しながら、99.7%のデータ品質で日次200万件以上のレコードを処理するETLパイプラインを構築しました。周囲の基準を常に引き上げる真のテクニカルリーダーです。",
      ],
    },

    blog: {
      title: "ブログ",
      subtitle: "AI・機械学習・ソフトウェアエンジニアリングに関する洞察を共有。",
      featured: "注目記事",
      all: "すべて",
      readMore: "続きを読む",
      back: "ブログ一覧へ戻る",
      categories: {
        "AI Research": "AI研究",
        MLOps: "MLOps",
        "Computer Vision": "コンピュータビジョン",
        "Deep Learning": "深層学習",
        Career: "キャリア",
        "AI Ethics": "AIエシックス",
      },
      posts: [
        {
          title: "大規模言語モデルの未来：GPT-4を超えて",
          excerpt:
            "次世代LLMアーキテクチャ、マルチモーダル統合、そして現在の最先端モデルの先にあるものを探求します。",
        },
        {
          title:
            "本番対応MLパイプラインの構築：5000万件/日の予測から学んだこと",
          excerpt:
            "スケールするMLシステムの設計から、フィーチャーストア・モニタリング・A/Bテストまでの実践的な知見。",
        },
        {
          title:
            "2024年のコンピュータビジョン：最先端モデルと応用",
          excerpt:
            "SAM・CLIPなどの最新ビジョンモデルが医療・自動運転など産業をどう変革しているかを解説。",
        },
        {
          title: "AIエンジニアリングの真髄：研究から本番環境へ",
          excerpt:
            "学術研究と現実のデプロイメントのギャップを埋める方法と、AIエンジニアに必要なコアスキル。",
        },
        {
          title:
            "トランスフォーマーアーキテクチャ詳解：アテンション機構の理解",
          excerpt:
            "自己注意機構・マルチヘッドアテンションの技術的解説、およびBERT・GPT・T5の設計原理。",
        },
        {
          title: "実践的AIエシックス：責任あるAIシステムの構築",
          excerpt:
            "本番AIシステムにおける公平性・透明性・説明責任を実現するための実践的なフレームワーク。",
        },
      ],
    },

    contact: {
      title: "お問い合わせ",
      subtitle:
        "次のAIプロジェクトでのコラボレーションをご希望の方は、ぜひご連絡ください。",
      letsConnect: "つながりましょう",
      connectDesc:
        "新しい機会・革新的なプロジェクト・コラボレーションについての議論をいつでも歓迎しています。",
      email: "メールアドレス",
      phone: "電話番号",
      location: "所在地",
      followMe: "フォローする",
      sendMessage: "メッセージを送る",
      namePlaceholder: "お名前",
      emailPlaceholder: "メールアドレス",
      messagePlaceholder: "メッセージ内容",
      nameLabel: "お名前",
      emailLabel: "メールアドレス",
      messageLabel: "メッセージ",
      sending: "送信中...",
      sent: "送信完了！",
      send: "送信する",
      successTitle: "メッセージを送信しました！",
      successDesc: "ご連絡ありがとうございます。近日中にご返信いたします。",
    },

    footer: {
      rights: "All rights reserved.",
      builtWith: "Next.js・TypeScript・Shadcn UIで制作",
    },

    chatbot: {
      greeting:
        "こんにちは！私は篠倉英斗のAIアシスタントです。経験・スキル・プロジェクト・経歴について何でもお答えします。何を知りたいですか？",
      placeholder: "篠倉の経験・スキル・プロジェクトについて質問してください...",
      newChat: "新しい会話",
      online: "オンライン",
      title: "篠倉のアシスタント",
      suggestions: ["スキル", "経歴", "プロジェクト", "お問い合わせ"],
    },
  },
} as const

export type Translations = typeof translations.en
