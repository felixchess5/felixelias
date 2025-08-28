import me from '../images/Me.jpg'
import work from '../images/work.webp'
import universities from '../images/Universities.webp'
import skills from '../images/skills.webp'

export const aboutData = {
  title: "About",
  paragraphs: [
    "Hi, I’m Felix 👋—a Management Consulting Principal with a passion for helping organizations reimagine what’s possible with technology. Over the past 11+ years, I’ve worked with global banks, capital markets firms, and legal departments to bring Intelligent Automation, Generative AI, and Agentic AI to life in ways that truly move the needle.",
    "I’ve had the privilege of building platforms that streamline legal operations, creating AI-powered compliance solutions, and even experimenting with VR to spark innovation. Along the way, I founded a Legal Technology Center of Excellence, trained hundreds of practitioners, and developed solutions that opened over $1M in new opportunities.",
    "What excites me most is exploring how emerging AI can transform the way people work—whether it’s automating regulatory reviews, building multi-agent systems, or designing smarter workflows.",
    "Outside of work, you’ll probably find me traveling, playing chess, or tinkering with personal tech projects. I’m always curious, always learning, and always looking for new ways to bring bold ideas into reality."
  ],
  image: {
    src: me,
    alt: "Felix Elias - Management Consulting Principal"
  }
}

export const experienceData = {
  title: "Experience",
  description: "Management Consulting Principal at Accenture (June 2014 – July 2025) with expertise in Legal Technology, Intelligent Automation, and AI solutions. Founded a Legal Technology Center of Excellence and led transformational programs for tier-1 global banks.",
  projects: {
    title: "Key Achievements & Selected Experience",
    items: [
      {
        title: "Legal Technology Center of Excellence",
        description: "Founded and led a Legal Technology Center of Excellence at Accenture, significantly enhancing team capabilities and market presence.",
        keyActivities: [
          "Successfully trained over 200 practitioners in CLM and legal technology within first six months",
          "Developed 'Legal Front Door' proof of concept platform generating $1M+ sales pipeline",
          "Established critical vendor relationships across CLM, eSignature, workflow, and AI domains",
          "Led strategic RFP responses6 securing multiple client engagements"
        ]
      },
      {
        title: "Generative AI Risk and Compliance",
        description: "Led Gen AI implementation for a large global bank to perform control to regulation mapping and assess control coverage.",
        keyActivities: [
          "Implemented GPT-4 based solution for control coverage assessment",
          "Analyzed controls for completeness using 5W1H methodology",
          "Assisted with re-writing missing control elements leveraging advanced AI",
          "Delivered comprehensive risk and compliance automation solution"
        ]
      },
      {
        title: "Legal Transformation Program",
        description: "Led multiple work streams for a large global capital markets firm across Legal Hold, Litigation Operations, Board Management, and Outside Counsel Management.",
        keyActivities: [
          "Analyzed and innovated across multiple legal operational areas",
          "Designed comprehensive legal transformation roadmap",
          "Implemented collaborative solutions for outside counsel management",
          "Led to broader organizational legal transformation initiative"
        ]
      },
      {
        title: "Intelligent Automation Platform Development",
        description: "Initiated development of comprehensive platform for global bank to streamline regulatory contract remediation process.",
        keyActivities: [
          "Integrated document management, RPA, workflow automation, and business intelligence",
          "Implemented complete platform in 4 months",
          "Realized efficiency gains equivalent to 2+ FTEs",
          "Delivered end-to-end intelligent automation solution"
        ]
      },
      {
        title: "Enterprise Automation Assessment",
        description: "Conducted comprehensive assessment of nearly 500 applications at tier-1 global bank to identify automation opportunities.",
        keyActivities: [
          "Analyzed applications using Intelligent Automation, RPA, NLP, NLG, and BI",
          "Created detailed technology investment roadmap",
          "Optimized operational efficiencies across enterprise",
          "Delivered strategic automation implementation plan"
        ]
      },
      {
        title: "Innovation & Emerging Technologies",
        description: "Developed cutting-edge solutions including VR transaction monitoring and privacy lifecycle management platforms.",
        keyActivities: [
          "Created transaction monitoring proof of concept in Virtual Reality (VR)",
          "Developed Privacy Lifecycle Solution leveraging Appian platform",
          "Implemented privacy regulatory tracking and metrics dashboarding",
          "Demonstrated innovative technology capabilities during campaigns"
        ]
      }
    ]
  },
  image: {
    src: work,
    alt: "Professional Experience"
  }
}

export const educationData = {
  title: "Education",
  degrees: [
    {
      degree: "Master of Science in Computer Information Systems",
      concentration: "Specialization in Security, Business Intelligence and Databases",
      institution: "Boston University, MA",
      graduationDate: "September 2014 – May 2017"
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Universidad del Turabo, PR", 
      graduationDate: "August 2008 – May 2014"
    }
  ],
  certifications: [
    {
      certification: "Agentic AI Training & Certification",
      provider: "Ready Tensor",
      date: "September 2025",
      details: [
        "Foundations of Agentic AI - Built RAG assistant mastering vector embeddings and prompt engineering",
        "Multi-Agent System Architecture - Designed collaborative agent workflows with communication protocols",
        "Productionization & Deployment - Developed end-to-end pipelines with CI/CD practices for AI agents",
        "Real-World Applications - Applied agentic AI to compliance automation and intelligent process orchestration"
      ]
    }
  ],
  image: {
    src: universities,
    alt: "Education & Certifications"
  }
}

export const skillsData = {
  title: "Skills & Expertise",
  categories: [
    {
      category: "Professional Skills",
      skills: [
        "Fully bilingual in English and Spanish",
        "Experienced in managing onshore and offshore teams",
        "Strategic consulting and client engagement",
        "RFP development and proposal writing",
        "Project management and delivery",
        "Vendor relationship management"
      ]
    },
    {
      category: "Technical Expertise", 
      skills: [
        "RPA Platforms: Blue Prism, UiPath, Automation Anywhere",
        "Workflow Automation: Appian, Pega",
        "Contract Lifecycle Management: Icertis, DocuSign, Conga, SirionLabs",
        "AI/ML Technologies: Databricks, LLMs, GPT-4",
        "Database & Analytics: UNIX scripting, ETL, Business Intelligence",
        "Cloud & Infrastructure: Enterprise architecture, API integrations"
      ]
    },
    {
      category: "Specialized Domains",
      skills: [
        "Legal Technology & CLM Solutions",
        "Generative AI & Agentic AI Systems", 
        "Intelligent Automation & Process Optimization",
        "Risk & Compliance Management",
        "Privacy & Regulatory Technology",
        "Financial Services Technology"
      ]
    },
    {
      category: "Emerging Technologies",
      skills: [
        "Vector Embeddings & RAG Systems",
        "Multi-Agent AI Architecture",
        "Virtual Reality (VR) Applications",
        "Prompt Engineering & AI Orchestration",
        "CI/CD for AI Systems",
        "Agentic AI Tooling & Frameworks"
      ]
    }
  ],
  image: {
    src: skills,
    alt: "Skills & Expertise"
  }
}

export const contactData = {
  title: "Contact",
  socialLinks: [
    {
      url: "https://www.linkedin.com/in/felixelias5/",
      icon: "fa fa-linkedin",
      label: "Linkedin"
    },
    {
      url: "mailto:felixelias5@gmail.com",
      icon: "fa-envelope",
      label: "Email"
    },
    {
      url: "https://github.com/felixchess5",
      icon: "fa-github",
      label: "Github"
    }
  ]
}