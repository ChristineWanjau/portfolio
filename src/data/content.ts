export const profile = {
  name: "Christine Wanjau",
  role: "Software Engineer · Full-Stack · AI",
  headline: "AI Engineer with full-stack roots.",
  email: "wanjauchristine0@gmail.com",
  github: "https://github.com/ChristineWanjau",
  linkedin: "https://linkedin.com/in/christine-wambui-29307319b",
};

export const heroStack = ["LLMs & RAG", "Python", "TypeScript", "React", "Azure"];

export const stack = [
  { group: "AI", items: ["LLM apps", "RAG", "Agents", "Prompt engineering", "Evaluation"] },
  { group: "Build", items: ["Python", "TypeScript", "C#", "React", "Angular"] },
  { group: "Ship", items: ["Azure", "Kubernetes", "Docker", "CI/CD", "GitHub Actions"] },
];

export const about = {
  paragraphs: [
    "Four-plus years shipping cloud products, from the interfaces customers click to the CLIs and pipelines behind them. Today I build AI into Azure App Configuration at Microsoft, a service behind 100,000+ configuration stores, and I work AI-first, with agents and custom skills in my daily loop. Before that, I shipped tools for Windows server admins and a startup's first product in Nairobi. I like owning a feature end to end, and I care most about the part after the demo: evaluation, safety review and shipping to production.",
    "I'm also studying for an MS in Computer Science, specializing in AI, at Georgia Tech, and mentoring women in tech across Kenya.",
  ],
  painting: { src: "/art/starry-night.jpg", title: "The Starry Night", year: "1889" },
};

export interface Credential {
  name: string;
  detail: string;
  url?: string; // add a Microsoft Learn verification link here when available
}

export const credentials: Credential[] = [
  { name: "Microsoft Certified: Azure AI Fundamentals", detail: "Microsoft · 2026",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/ChristineWanjau-9748/FDF2FDD1C9B62B16?sharingId=63F32B317EA1820A" },
  { name: "Microsoft Certified: Azure Fundamentals", detail: "Microsoft · 2021",
    url: "https://www.credly.com/badges/4802a004-7f1c-4fc6-874a-e17d263d04a7/public_url" },
  { name: "ML Fundamentals Champion", detail: "Microsoft Africa Development Center, 18-week program · 2023",
    url: "https://www.credly.com/badges/4904c2ea-6305-4432-96f1-947ee6712fcf/public_url" },
  { name: "Microsoft Student Hackathon", detail: "Grand Prize, Global Winner · 2021",
    url: "https://www.credly.com/badges/39dd8ab3-49d1-47bc-a8f2-45847becb41e/public_url" },
];

export const education = [
  { school: "Georgia Institute of Technology", detail: "MS Computer Science, AI specialization · expected 2028" },
  { school: "University of Nairobi", detail: "BSc Computer Science · 2022" },
];

export interface Role {
  title: string;
  org: string;
  dates: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Software Engineer II",
    org: "Microsoft · Azure App Configuration",
    dates: "Aug 2022 – now",
    points: [
      "Applied AI: led an AI configuration risk assessment prototype, built a RAG incident assistant that writes KQL, and shipped a natural-language bulk editor.",
      "Product & frontend: built the React feature management experience used by ~50% of App Configuration stores, scaled to 10,000+ key-values.",
      "Open source & DevOps: owned the App Configuration CLI (30+ PRs) and CI/CD integrations serving 5,000+ customers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "Microsoft · Windows Admin Center",
    dates: "May – Aug 2021",
    points: ["Shipped Angular experiences for server admins and helped move services from .NET Framework to .NET Core."],
  },
  {
    title: "Software Engineer",
    org: "Mobilit Africa",
    dates: "Jan – Apr 2021",
    points: ["Built the first React product with the founding team for its initial launch."],
  },
];

export const experiencePainting = { src: "/art/sunflowers.jpg", title: "Sunflowers", year: "1889" };

export interface CommunityItem {
  org: string;
  role: string;
  text: string;
}

export const community: CommunityItem[] = [
  { org: "WINS", role: "Two-time mentor", text: "Served two separate years as a mentor in a year-long program connecting women in Kenyan university tech courses with Microsoft professionals." },
  { org: "Game of Learners", role: "Coach", text: "Guided students across Africa through ideation, coding, design feedback and pitch preparation." },
  { org: "Microsoft Garage", role: "Volunteer", text: "Supported children and AkiraChix participants with IoT and maker projects." },
  { org: "Microsoft Hackathon", role: "Planning committee", text: "Promoted the event, presented at an ADC all-hands, and contributed to an honorable-mention project." },
];

export const communityPainting = { src: "/art/cafe-terrace.jpg", title: "Café Terrace at Night", year: "1888" };
export const projectsPainting = { src: "/art/wheatfield-cypresses.jpg", title: "Wheat Field with Cypresses", year: "1889" };

export const blog = {
  tagline: "Writing on AI engineering — launching soon",
  text: "Notes on LLM evaluation, RAG, and shipping AI features to production. First posts coming soon.",
};
export const blogPainting = { src: "/art/almond-blossoms.jpg", title: "Almond Blossoms", year: "1890" };
