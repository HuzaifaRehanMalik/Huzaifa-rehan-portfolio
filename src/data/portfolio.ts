import type {
  ExpertiseCategory,
  FooterNavItem,
  NavItem,
  Project,
  Service,
  SocialLink,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export const profile = {
  name: "Huzaifa Rehan",
  logo: "/logo.jpg",
  logoAlt: "logo",
  heroTitle: "I'm Huzaifa Rehan",
  heroDescription:
    `I am a Software Developer and aspiring AI Engineer passionate about building intelligent, scalable, and user-centric digital solutions. My expertise spans modern web development and Artificial Intelligence, with a strong focus on Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Agentic AI systems. Using technologies such as Python, JavaScript, TypeScript, React, Next.js, HTML, and CSS, I develop high-performance applications that solve real-world problems and deliver exceptional user experiences. I am continuously expanding my knowledge in AI Engineering, multi-agent systems, and full-stack development, with the goal of creating innovative products that bridge the gap between cutting-edge technology and practical business needs.`
,
  image: "/mypic.jpg",
  imageAlt: "My pic",
} as const;

export const skillsContent = {
  badge: "Tech Stack",
  title: "Technologies & AI Expertise",
  description:
    "I build modern web applications and AI-powered solutions using a combination of full-stack development technologies and cutting-edge artificial intelligence tools. My expertise spans Python, TypeScript, React, Next.js, and modern frontend development, alongside Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, APIs, and automation systems. This blend of software engineering and AI enables me to create scalable, intelligent, and user-focused digital experiences.",
} as const;

export const expertiseCategories: ExpertiseCategory[] = [
  {
    icon: "ai",
    title: "AI & Machine Learning",
    skills: [
      "Generative AI",
      "OpenAI APIs",
      "AI Agents",
      "RAG Systems",
      "Prompt Engineering",
    ],
  },
  {
    icon: "frontend",
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    icon: "backend",
    title: "Backend Development",
    skills: ["Python", "Node.js", "FastAPI", "REST APIs", "Server Actions"],
  },
  {
    icon: "database",
    title: "Databases & Storage",
    skills: ["PostgreSQL", "Neon", "Vector Databases", "Qdrant", "SQL"],
  },
  {
    icon: "tools",
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Cursor"],
  },
  {
    icon: "automation",
    title: "Automation & AI Systems",
    skills: [
      "Workflow Automation",
      "Multi-Agent Systems",
      "AI Workflows",
      "API Integration",
      "Custom Solutions",
    ],
  },
];

export const servicesContent = {
  title: "What I can build for you",
  description:
    "I help teams and founders turn modern web interfaces, AI workflows, and business data into practical products that are fast, useful, and ready to grow.",
} as const;

export const services: Service[] = [
  {
    icon: "ai",
    title: "AI-Powered Applications",
    description:
      "Build intelligent web applications using Generative AI, Large Language Models (LLMs), and modern AI technologies to automate tasks and enhance user experiences.",
  },
  {
    icon: "web",
    title: "Custom Web Development",
    description:
      "Develop fast, responsive, and scalable websites and web applications using Next.js, React, TypeScript, and modern frontend technologies.",
  },
  {
    icon: "chatbot",
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Create custom AI chatbots and assistants capable of answering questions, handling customer support, and interacting with business data.",
  },
  {
    icon: "knowledge",
    title: "RAG & Knowledge Base Systems",
    description:
      "Develop Retrieval-Augmented Generation (RAG) solutions that allow users to search, retrieve, and chat with documents and organizational knowledge.",
  },
  {
    icon: "agents",
    title: "Multi-Agent AI Systems",
    description:
      "Build advanced agent-based workflows where multiple AI agents collaborate to automate processes, research tasks, and decision-making.",
  },
  {
    icon: "automation",
    title: "API Integration & Automation",
    description:
      "Integrate third-party APIs, AI services, and automation workflows to streamline operations and improve business efficiency.",
  },
];

export const projects: Project[] = [
  {
    title: "Todo-app",
    description:
      "Built a modern full-stack Todo App with RAG-powered AI chatbot integration, enabling users to organize, track, and manage daily tasks efficiently through a responsive, intuitive, and productivity-focused interface.",
    image: "/Todo_app.png",
    url: "https://todoappwithwebuichatbotphase3.vercel.app/",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    title: "Physical AI & Humanoid Robotics Textbook",
    description:
      "A comprehensive guide to Physical AI and Humanoid Robotics, covering intelligent perception, autonomous decision-making, robot control, and real-world applications of embodied AI systems.",
    image: "/My_ai_Book.png",
    url: "https://book-humanoid-robotics-hackathon-website-22j1nlfrq.vercel.app/",
    techStack: [
      "React.js",
      "Docusaurus",
      "FastAPI",
      "Python",
      "RAG",
      "OpenAI Agents SDK",
      "Neon PostgreSQL",
      "Qdrant",
    ],
  },
  {
    title: "Dynamic Resume Builder",
    description:
      "An interactive platform where users can generate polished, professional resumes by inputting their information in a structured form.",
    image: "/p-1.png",
    url: "https://resuma-builder-milestone-2.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Car Marketplace Platform",
    description:
      "A responsive website for buying and selling vehicles, inspired by platforms like PakWheels, featuring listings, filters, and user-friendly navigation.",
    image: "/p-2.png",
    url: "https://class-6-project-pakwheels-web.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "React.js"],
  },
  {
    title: "Full-featured E-commerce Store",
    description:
      "A complete e-commerce solution with product pages, a shopping cart, and user authentication built with modern web technologies.",
    image: "/p-4.png",
    url: "https://marketplace-builder-hackathon-omega.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "React.js"],
  },
];

export const projectsContent = {
  title: "Featured Projects",
} as const;

export const contactContent = {
  title: "Let's Build Something Great",
  description: "Have a project, AI idea, or collaboration in mind? Reach out directly and let's turn it into a polished digital product.",
  emailLabel: "Email",
  email: "rehanhuzaifa035@gmail.com",
  linkedInLabel: "LinkedIn",
  linkedInDisplayName: "Huzaifa Rehan",
  googleFormLabel: "Google Form",
  googleFormHref: "https://forms.gle/n8X9NZKjUMsQqh499",
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/HuzaifaRehanMalik",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/huzaifa-rehan-9815882a9",
    icon: "linkedin",
  },
];

export const footerNavItems: FooterNavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Technologies", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const footerServices = [
  "AI-Powered Applications",
  "Full-Stack Web Development",
  "AI Chatbots",
  "RAG Systems",
  "Multi-Agent AI Solutions",
  "Workflow Automation",
] as const;

export const footerBranding = {
  name: "Huzaifa Rehan",
  role: "Software Developer & AI Engineer",
  description:
    "Building AI-powered applications, intelligent automation systems, and modern web experiences that solve real-world problems.",
  status: "Open to New Opportunities",
} as const;

export const footerContent = {
  title: "Let’s Build Something Intelligent Together",
  description:
    "Whether you need an AI-powered application, a modern web platform, or an intelligent automation solution, I’m always excited to work on impactful projects.",
  copyright: "© 2026 Huzaifa Rehan",
  tagline: "Crafted with Next.js, TypeScript, and AI.",
} as const;
