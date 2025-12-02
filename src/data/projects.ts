import project1 from "@/assets/project-1.jpg";
import project1a from "@/assets/project-1a.jpg";
import project1b from "@/assets/project-1b.jpg";
import project1c from "@/assets/project-1c.jpg";
import project1d from "@/assets/project-1d.jpg";
import project2 from "@/assets/project-2.jpg";
import project2a from "@/assets/project-2a.jpg";
import project2b from "@/assets/project-2b.jpg";
import project2c from "@/assets/project-2c.jpg";
import project2d from "@/assets/project-2d.jpg";
import project3 from "@/assets/project-3.jpg";
import project3a from "@/assets/project-3a.jpg";
import project4 from "@/assets/project-4.jpg";
import project4a from "@/assets/project-4a.gif";
import project4b from "@/assets/project-4b.jpg";
import project5 from "@/assets/project-5.gif";

export interface Project {
  id: number;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  shortDescription: {
    en: string;
    es: string;
  };
  thumbnail: string;
  images: string[];
  techStack: string[];
  features: {
    en: string[];
    es: string[];
  };
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "Bauly AI", 
      es: "Bauly AI"
    },
    shortDescription: {
      en: "Powered by AI Social platform for collectors", 
      es: "Plataforma social impulsada por IA para coleccionistas"
    },
    description: {
      en: "A mobile-first platform for collectors to organize, value, and showcase physical items using AI-powered tools and a social-driven experience.", 
      es: "Una plataforma móvil para coleccionistas para organizar, tasar y exhibir objetos físicos usando herramientas impulsadas por IA y una experiencia impulsada por la red social."
    },
    thumbnail: project1,
    images: [project1, project1a, project1b, project1c, project1d],
    techStack: ["React", "Next.js", "Node.js", "Tailwind CSS", "Firebase", "Supabase", "Gemini API", "Shadcn UI"],
    features: {
      en: [
      "Secure authentication with Supabase Auth",
      "Real-time profile and item management",
      "AI-powered item valuation",
      "Admin dashboard for item management",
      "Chatbot for topic recommendations",
      "Responsive design for mobile and desktop",
      "Dark mode support",
      "Chat for user interaction and exchange"
    ],
    es: [
      "Autenticación segura con Supabase Auth",
      "Gestión en tiempo real de perfiles y objetos",
      "Valoración de objetos impulsada por IA",
      "Panel de administración para la gestión de objetos",
      "Chatbot para recomendaciones de temas",
      "Diseño responsive para móvil y escritorio",
      "Soporte para modo oscuro",
      "Chat para interacción y intercambio de usuarios"
    ]
    },
    demoLink: "https://bauly.co/",
  },
  {
    id: 2,
    title: {
      en: "Neat English", 
      es: "Neat English"
    },
    shortDescription: {
      en: "English learning platform with pronunciation practice",
      es: "Plataforma de aprendizaje de inglés con práctica de pronunciación"
    },
    description: {
      en: "Neat English is an English learning platform with pronunciation practice tailored for hispanohablantes.",
      es: "Neat English es una plataforma de aprendizaje de inglés con práctica de pronunciación adaptada para hispanohablantes."
    },
    thumbnail: project2,
    images: [project2, project2a, project2b, project2c, project2d],
    techStack: ["HTML", "CSS", "JavaScript"],
    features: {
      en: [
      "Pronunciation practice",
      "English learning platform",
      "Vocabulary builder",
      "Grammar exercises",
      "Listening practice",
      "Reading practice",
      "Writing practice",
      "Achievements system",
    ],
    es: [
      "Práctica de pronunciación",
      "Plataforma de aprendizaje de inglés",
      "Constructor de vocabulario",
      "Ejercicios de gramática",
      "Práctica de escucha",
      "Práctica de lectura",
      "Práctica de escritura",
      "Sistema de logros",
    ],
    },
    demoLink: "https://english-nitido.vercel.app/",
    githubLink: "https://github.com/lufebadeca/english-nitido",
  },
  {
    id: 3,
    title: {
      en: "Loan and Investment Calculator", 
      es: "Calculadora de préstamos y inversiones"
    },
    shortDescription: {
      en: "Loan and investment calculator with amortization table",
      es: "Calculadora de préstamos y inversiones con tabla de amortización"
    },
    description: {
      en: "A loan and investment calculator built with HTML, CSS and Vanilla JS ",
      es: "Una calculadora de préstamos y inversiones con tabla de amortización"
    },
    thumbnail: project3,
    images: [project3, project3a],
    techStack: ["HTML", "CSS", "JavaScript"],
    features: {
      en: [
      "Credit calculator",
      "Investment calculator",
      "Amortization table",
      "Installment projection",
      "Interest rate convertion",
      "Payment schedule",
      "Cash flow projection",
    ],
    es: [
      "Calculadora de préstamos",
      "Calculadora de inversiones",
      "Tabla de amortización",
      "Proyección de cuotas",
      "Conversión de tasas de interés",
      "Programación de pagos",
      "Proyección de flujo de efectivo",
    ],
    },
    demoLink: "https://lufebadeca.github.io/loan_investment/",
    githubLink: "https://github.com/lufebadeca/loan_investment",
  },
  {
    id: 4,
    title: {
      en: "Hangman Game", 
      es: "Juego de ahorcado"
    },
    shortDescription: {
      en: "Hangman game with multi-theme words",
      es: "Juego de ahorcado con palabras multi-temáticas"
    },
    description: {
      en: "A hangman game built with HTML, CSS and Vanilla JS ",
      es: "Un juego de ahorcado con palabras multi-temáticas"
    },
    thumbnail: project4,
    images: [project4a, project4b, project4],
    techStack: ["HTML", "CSS", "JavaScript"],
    features: {
      en: [
      "Multi-theme words",
      "Hangman game",
    ],
    es: [
      "Palabras multi-temáticas",
      "Juego de ahorcado",
    ],
    },
    demoLink: "https://lufebadeca.github.io/hangman/",
    githubLink: "https://github.com/lufebadeca/hangman",
  },
  {
    id: 5,
    title: {
      en: "IoT prototypes compilation", 
      es: "Compilación de prototipos de IoT"
    },
    shortDescription: {
      en: "Projects of IoT and embedded devices prototypes compilation",
      es: "Compilación de prototipos de proyectos de IoT y embebidos"
    },
    description: {
      en: "Projects of IoT and embedded devices prototypes compilation",
      es: "Compilación de prototipos de proyectos de IoT y embebidos"
    },
    thumbnail: project5,
    images: [project5],
    techStack: ["HTML", "CSS", "JavaScript"],
    features: {
      en: [
      "Embedded prototyping",
      "Arduino",
      "Raspberry Pi",
      "ESP32",
      "NodeMCU",
      "IR remote control",
      "EMQX broker",
      "MQTT protocol",
      "Serial, I2C, UART, Bluetooth, WiFi, Ethernet",
      "IR motion sensor",
      "Remote control via Web server"
    ],
    es: [
      "Prototipado de dispositivos embebidos",
      "Arduino",
      "Raspberry Pi",
      "ESP32",
      "NodeMCU",
      "Control remoto via Web server",
      "Sensor de movimiento por infrarrojo",
      "Protocolo MQTT",
      "Serial, I2C, UART, Bluetooth, WiFi, Ethernet",
      "Sensor de movimiento por infrarrojo",
      "Control remoto via Web server",
    ],
    },
    demoLink: "https://www.youtube.com/shorts/RM_qj8776Xc",
    githubLink: "https://github.com/lufebadeca/c_programming/",
  },
];
