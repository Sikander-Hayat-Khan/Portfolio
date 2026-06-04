export const projects = [
  {
    href: 'https://trail-tales-project.vercel.app/',
    media: { type: 'image', src: '/Assets/Images/TrailTales.png', alt: 'Journaling App' },
    period: "Sep '25 - Dec '25",
    title: 'Location-Based Journaling Platform',
    description:
      'Architected a full-stack Web Engineering project with real-time chat, geotagged memory posts, map pins, and client-side encrypted private memories. Designed REST APIs with access-control, WebSocket messaging, and a scalable cloud media upload pipeline.',
    tags: ['React', 'Node.js / Express', 'MongoDB', 'WebSockets'],
    colSpan: 'lg:col-span-2',
    theme: 'primary',
  },
  {
    href: 'https://spillage-search.vercel.app/',
    media: { type: 'image', src: '/Assets/Images/spillage.png', alt: 'Search Engine' },
    period: "Sep '24 - Jan '25",
    title: 'Search Engine for Medium Articles',
    description:
      'Built end-to-end over 190k+ scraped articles with an inverted index and BM25 ranking. Integrated Google Gemini AI summarization and a Flask API layer with Redis caching.',
    tags: ['Python / Flask', 'Redis', 'React'],
    colSpan: 'lg:col-span-1',
    theme: 'secondary',
    delay: '100ms',
  },
  {
    href: 'https://inf-19.vercel.app/',
    media: {
      type: 'video',
      src: '/Assets/Videos/INFVideo.mp4',
      alt: 'Interactive Infectious Network',
    },
    period: "Feb '25 - May '26",
    title: 'Interactive Infectious Network',
    description:
      'Real-time disease spread simulator over configurable community graphs with dynamic evolution and a multi-parameter disease model including vaccination mapping using D3.js.',
    tags: ['D3.js', 'TypeScript', 'Tailwind'],
    colSpan: 'lg:col-span-1',
    theme: 'accent',
    delay: '150ms',
  },
  {
    href: 'https://github.com/Sikander-Hayat-Khan/AI-Business-Research-Assistant',
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Agentic AI',
    },
    period: 'May 2026',
    title: 'Multi-Agent Business Research Assistant',
    description:
      'Engineered a 4-agent LangGraph pipeline with conditional routing, Human-in-the-Loop interrupts, and MemorySaver checkpointing. Integrated Groq LLaMA 3.3 and Tavily API for self-validating, real-time web intelligence and research synthesis.',
    tags: ['LangGraph', 'Python', 'Groq / LLaMA 3', 'Tavily Search'],
    colSpan: 'lg:col-span-2',
    theme: 'purple',
    delay: '200ms',
  },
  {
    href: 'https://github.com/Sikander-Hayat-Khan/Campus-Pathfinder.git',
    media: {
      type: 'image',
      src: '/Assets/Images/pathfinder.png',
      alt: 'Pathfinder Agentic AI',
    },
    period: 'June 2026',
    title: 'Campus Pathfinder–Intake Triage Bot',
    description:
      'Campus Pathfinder is an intelligent, autonomous agent designed to streamline university helpdesks and student services by automating the initial intake and triage workflow. The bot engages students in supportive, natural language conversations to securely gather critical details, understand their unique needs and classify request urgency.',
    tags: [
      'Streamlit',
      'Python',
      'Groq / LLaMA 3',
      'SQLite',
      'Prompt Engineering',
    ],
    colSpan: 'lg:col-span-2',
    theme: 'purple',
    delay: '200ms',
  },
];

export const projectThemes = {
  primary: {
    shadow: 'hover:shadow-primary/20',
    border: 'hover:border-primary/50 dark:hover:border-primary/50',
    badge: 'bg-primary/40 border-primary/50',
  },
  secondary: {
    shadow: 'hover:shadow-secondary/20',
    border: 'hover:border-secondary/50 dark:hover:border-secondary/50',
    badge: 'bg-secondary/40 border-secondary/50',
  },
  accent: {
    shadow: 'hover:shadow-accent/20',
    border: 'hover:border-accent/50 dark:hover:border-accent/50',
    badge: 'bg-accent/40 border-accent/50',
  },
  purple: {
    shadow: 'hover:shadow-purple-500/20',
    border: 'hover:border-purple-500/50 dark:hover:border-purple-500/50',
    badge: 'bg-purple-500/40 border-purple-500/50',
  },
};
