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
  { group: "Applied AI", items: ["LLM apps", "RAG", "Prompt engineering", "Agents", "Model evaluation"] },
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "C#"] },
  { group: "Frontend", items: ["React", "Angular", "HTML/CSS"] },
  { group: "Cloud & APIs", items: ["Azure", "REST APIs", "Kubernetes", "Entra ID"] },
  { group: "Delivery", items: ["CI/CD", "GitHub Actions", "Docker", "Azure CLI"] },
];

export const about = {
  paragraphs: [
    "I'm a Software Engineer II at Microsoft, where I've spent four years on Azure App Configuration: the React interfaces, CLI and CI/CD integrations customers use every day, and lately the AI features inside them.",
    "I build LLM tools, RAG assistants and AI-assisted workflows, and I care about the part after the demo: evaluation, Responsible AI review, and shipping safely to production.",
    "I'm studying for an MS in Computer Science (AI) at Georgia Tech. When I'm not shipping, I'm mentoring women in tech across Kenya.",
  ],
  stats: [
    { value: "4+ yrs", label: "shipping at Microsoft" },
    { value: "15+", label: "customer-facing features" },
    { value: "30+", label: "open-source PRs" },
    { value: "5,000+", label: "customers on my CI/CD tools" },
  ],
  painting: { src: "/art/starry-night.jpg", title: "The Starry Night", year: "1889" },
};

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
