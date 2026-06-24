// ============================================================================
//  ALL YOUR WEBSITE CONTENT LIVES HERE.
//  Edit this one file to update the entire site. Replace the PLACEHOLDER
//  values below with your real info. Images go in the /public folder and are
//  referenced by path, e.g. "/profile.jpg" -> public/profile.jpg
// ============================================================================

export const site = {
  // Used for the browser tab, SEO and social share previews
  name: "Your Name",
  role: "Your Title / Role",
  // Short one-liner shown under your name in the hero
  tagline: "A short sentence about what you do and what you care about.",
  // Longer description for SEO / social cards
  description:
    "Personal website of Your Name — Your Title. Projects, experience and achievements.",
  // Profile photo: drop the file in /public and put its path here (e.g. "/profile.jpg")
  photo: "/profile.svg",
  // Optional: a resume/CV PDF placed in /public
  resume: "/resume.pdf",
  location: "City, Country",
  email: "you@example.com",
};

export const socials: { label: string; href: string; icon: SocialIcon }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/your-handle", icon: "github" },
  { label: "Email", href: "mailto:you@example.com", icon: "email" },
  // { label: "Twitter", href: "https://x.com/your-handle", icon: "twitter" },
  // { label: "Google Scholar", href: "https://scholar.google.com/...", icon: "scholar" },
];

export type SocialIcon =
  | "linkedin"
  | "github"
  | "email"
  | "twitter"
  | "scholar"
  | "link";

// Short paragraphs for the About section
export const about: string[] = [
  "Write a paragraph about who you are, your background and what drives you. This is the place to give visitors a sense of your story.",
  "Add a second paragraph about your focus areas, the kind of problems you like to solve, and what you are looking for next.",
];

// Quick stats / highlights shown as a row of numbers (optional — leave empty [])
export const stats: { value: string; label: string }[] = [
  { value: "5+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Awards" },
];

export type Experience = {
  role: string;
  company: string;
  period: string; // e.g. "2022 — Present"
  location?: string;
  description: string;
  highlights?: string[];
  logo?: string; // optional /public path
};

export const experience: Experience[] = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "2023 — Present",
    location: "City, Country",
    description:
      "One or two sentences describing your role and impact at this company.",
    highlights: [
      "A key accomplishment with a measurable result.",
      "Another responsibility or achievement.",
    ],
  },
  {
    role: "Previous Title",
    company: "Previous Company",
    period: "2021 — 2023",
    location: "City, Country",
    description: "What you did here and why it mattered.",
    highlights: ["Notable achievement.", "Another highlight."],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string; // /public path
  link?: string; // live demo / page
  repo?: string; // source code
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A clear, compelling description of what this project is and what makes it interesting.",
    tags: ["React", "TypeScript", "Node"],
    image: "/projects/project-one.svg",
    link: "https://example.com",
    repo: "https://github.com/your-handle/project-one",
    featured: true,
  },
  {
    title: "Project Two",
    description: "Describe the problem this solves and your contribution.",
    tags: ["Python", "ML"],
    image: "/projects/project-two.svg",
    repo: "https://github.com/your-handle/project-two",
  },
  {
    title: "Project Three",
    description: "Another project worth showcasing.",
    tags: ["Design", "Next.js"],
    image: "/projects/project-three.svg",
    link: "https://example.com",
  },
];

export type Achievement = {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Award or Achievement Name",
    issuer: "Issuing Organization",
    year: "2024",
    description: "A short note about what this recognizes.",
    link: "https://example.com",
  },
  {
    title: "Certification / Honor",
    issuer: "Organization",
    year: "2023",
  },
];

// Education (optional — leave empty [] to hide the section)
export const education: {
  degree: string;
  school: string;
  period: string;
  note?: string;
}[] = [
  {
    degree: "Your Degree, Field of Study",
    school: "University Name",
    period: "2017 — 2021",
    note: "Optional honors, GPA or focus.",
  },
];

// Skills grouped by category (optional)
export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["TypeScript", "Python", "JavaScript"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js"] },
  { category: "Tools", items: ["Git", "Docker", "Figma"] },
];
