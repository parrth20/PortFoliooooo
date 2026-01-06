import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
  nextjs,
  nodejs,
  cpp,
  bootstrap,
  kubernetes,
  docker,
  tailwind,
  git,
  mongodb,
  typescript,
  clang,
  solidity,
  rust,
  express,
  mysql,
  solana,
  ethereum,
  web3,
  github,
  vscode,
  terminal,
  qrifyme,
  solverse,
  nyaysaarthi,
  linkIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "competitive",
    title: "Competitive",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "responsibility",
    title: "Responsibility",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Web3 Development",
    icon: mobile,
  },
  {
    title: "GenAI Applications",
    icon: backend,
  },
  {
    title: "Competitive Programming",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C/C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Solana",
    icon: solana,
  },
  {
    name: "Ethereum",
    icon: ethereum,
  },
  {
    name: "Web3.js",
    icon: web3,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Terminal",
    icon: terminal,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Clang",
    icon: clang,
  },
];

const competitiveProfiles = [
  {
    platform: "Codeforces",
    handle: "dnrlvparth",
    solved: "900+ problems solved",
    rating: "1501 (Specialist)",
    link: "https://codeforces.com/profile/dnrlvparth",
  },
  {
    platform: "LeetCode",
    handle: "parrth20",
    solved: "250+ problems solved",
    rating: "1874 (Knight)",
    link: "https://leetcode.com/u/parrth20/",
  },
  {
    platform: "CodeChef",
    handle: "parrth20",
    solved: "300+ problems solved",
    rating: "1853 (4-star)",
    link: "https://www.codechef.com/users/parrth20",
  },
];

const achievements = [
  "Hacktoberfest 2025 — Super Contributor (6+ accepted PRs).",
  "Qualified for Summer of Bitcoin (SoB) — assignments + proposal round.",
  "GenAI Hackathon 2025 — Finalist (Nyay-Saarthi).",
  "Codeforces: Specialist, max rating 1414.",
  "CodeChef: 4-star, max rating 1753.",
  "LeetCode: Knight, max rating 1874.",
  "Contest ranks: CC Starters 179 (GR 37/21.3K), Starters 172 (GR 52/19.7K), Starters 217 (GR 192/26.6K), LC Biweekly 164 (GR 399/21.8K), Edu CF Round 174 Div2 (GR 1473/17.3K).",
  "100+ contests, 1500+ problems solved overall.",
];

const responsibilities = [
  {
    role: "Senior Member",
    org: "Eifer Sports Society, IIIT Lucknow",
    date: "Aug 2023 – Present",
    points: [
      "Coordinated Infinoto Sports Fest logistics for 450+ participants; led a 16-member team.",
      "Managed outreach, vendor negotiation, scheduling; captained inter-college table-tennis team (top-4).",
    ],
  },
];

const projects = [
  {
    name: "QrifyMe",
    description:
      "Digital menu platform converting menus into QR-based digital menus for street vendors.",
    points: [
      "Responsive UI with Tailwind + Material UI to improve engagement.",
      "Backend services using Node/Express + Django with MongoDB.",
      "Automated QR generation pipeline in Python.",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: qrifyme,
    source_code_link: "https://github.com/parrth20/QrifyMe",
  },
  {
    name: "SolVerse",
    description:
      "Solana-based Web3 dashboard with polished UX and Framer Motion animations.",
    points: [
      "Integrated Wallet Adapter for auth, airdrops, tokens, and transaction signing.",
      "Modular architecture with optimized state management for faster responses.",
      "Real-time updates and performance tuning across the dashboard.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Solana",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: solverse,
    source_code_link: "https://github.com/parrth20/SolVerse",
  },
  {
    name: "Nyay-Saarthi",
    description:
      "GenAI platform translating complex legal documents into simpler Hindi with interactive Q&A.",
    points: [
      "Hybrid backend using FastAPI + LangChain + Qdrant for RAG.",
      "Gemini Pro for answer synthesis, Supabase auth, responsive Next.js UI.",
      "Interactive AI chat for document Q&A with citations.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
    ],
    image: nyaysaarthi,
    source_code_link: "https://github.com/parrth20/Nyay-Saarthi",
    live_link: "https://nyay-saarthi-sable.vercel.app/",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/parrth20/",
  },
  {
    name: "GitHub",
    url: "https://github.com/parrth20",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/dnrlvparth",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/parrth20",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/parrth20/",
  },
];

const contactInfo = [
  { label: "Location", value: "Nagda, Madhya Pradesh, India" },
  { label: "Phone", value: "+91 8839252582" },
  { label: "Email", value: "parthbandwal3@gmail.com" },
];

const projectLinks = {
  github,
  linkIcon,
};

export {
  services,
  technologies,
  competitiveProfiles,
  achievements,
  responsibilities,
  projects,
  socialLinks,
  contactInfo,
  projectLinks,
};
