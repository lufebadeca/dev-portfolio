import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

const technologies = [
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "💚" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Convex", icon: "🔄" },
  { name: "Firebase", icon: "🔥" },
  { name: "Firestore", icon: "📊" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🔧" },
  { name: "Bolt", icon: "⚡" },
  { name: "Lovable", icon: "💙" },
  { name: "Cursor", icon: "🖱️" },
  { name: "Windsurf", icon: "🏄" },
];

export function TechCarousel() {
  const { language } = useLanguage();
  const t = translations[language].tech;

  return (
    <section id="technologies" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted-foreground">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-4"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border min-w-[160px]">
                  <div className="text-4xl mb-2 text-center">{tech.icon}</div>
                  <div className="text-sm font-semibold text-center">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
