import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  features: string[];
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription: "Full-stack online store with cart and payment integration",
    description:
      "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing via Stripe, and an intuitive admin dashboard.",
    thumbnail: project1,
    images: [project1],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    features: [
      "Secure authentication with JWT",
      "Real-time inventory updates",
      "Stripe payment integration",
      "Admin dashboard for product management",
      "Responsive design for mobile and desktop",
    ],
    demoLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    shortDescription: "Instant messaging app with WebSocket support",
    description:
      "A real-time chat application built with React and Firebase, featuring instant messaging, online status indicators, and group chat functionality.",
    thumbnail: project2,
    images: [project2],
    techStack: ["React", "Firebase", "Firestore", "WebSocket", "Material UI"],
    features: [
      "Real-time messaging with WebSocket",
      "User authentication with Firebase Auth",
      "Group chat functionality",
      "Online/offline status indicators",
      "Message read receipts",
    ],
    demoLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    shortDescription: "Data visualization dashboard with AI-powered insights",
    description:
      "An advanced analytics dashboard leveraging AI for predictive analytics, built with Next.js and integrated with multiple data sources for comprehensive business intelligence.",
    thumbnail: project3,
    images: [project3],
    techStack: ["Next.js", "TypeScript", "MongoDB", "Chart.js", "AI APIs"],
    features: [
      "AI-powered predictive analytics",
      "Interactive data visualizations",
      "Real-time data processing",
      "Multiple data source integrations",
      "Customizable dashboard widgets",
    ],
    demoLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
];
