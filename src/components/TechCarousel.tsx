import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

const technologies = [
  { name: "JavaScript", logo: "/js_logo.webp" },
  { name: "TypeScript", logo: "/ts_logo.webp" },
  { name: "Node.js", logo: "/node_logo.webp" },
  { name: "React", logo: "/react_logo2.webp" },
  { name: "Next.js", logo: "/next_logo.webp" },
  { name: "PostgreSQL", logo: "/postgres_logo.webp" },
  { name: "MongoDB", logo: "/mongo_logo.webp" },
  { name: "Convex", logo: "/convex_logo.webp" },
  { name: "Firebase", logo: "/firebase_logo.webp" },
  { name: "Supabase", logo: "/supabase_logo.webp" },
  { name: "Tailwind CSS", logo: "/tailwind_logo.webp" },
  { name: "Docker", logo: "/docker_logo.webp" },
  { name: "Git", logo: "/git_logo.webp" },
  { name: "Github", logo: "/github_logo.webp" },
  { name: "Bolt", logo: "/bolt_logo.webp" },
  { name: "Lovable", logo: "/lovable_logo.webp" },
  { name: "Cursor", logo: "/cursor_logo.webp" },
  { name: "Windsurf", logo: "/windsurf_logo.webp" },
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
          <div className="flex animate-scroll py-4">
            {[...technologies].map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-4"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border min-w-[160px]">
                  <div className="flex justify-center items-center h-16">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-sm font-semibold text-center mt-2">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 relative overflow-hidden">
          <div className="flex animate-reverse-scroll py-4">
            {[...technologies].reverse().map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-4"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border min-w-[160px]">
                  <div className="flex justify-center items-center h-16">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-sm font-semibold text-center mt-2">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
