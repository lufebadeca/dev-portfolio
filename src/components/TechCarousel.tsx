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
  { name: "Windsurf", logo: "/windsurf_logo.jpeg" },
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
          <div className="flex py-4" style={{ animation: 'scroll 15s linear infinite' }} data-mobile-scroll>
            {[...technologies].map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-2 sm:mx-4"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-card rounded-lg sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-border min-w-[120px] sm:min-w-[160px]">
                  <div className="flex justify-center items-center h-12 sm:h-16">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-center mt-1 sm:mt-2">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 relative overflow-hidden">
          <div className="flex py-4" style={{ animation: 'reverse-scroll 15s linear infinite' }} data-mobile-reverse-scroll>
            {[...technologies].reverse().map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-2 sm:mx-4"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-card rounded-lg sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-border min-w-[120px] sm:min-w-[160px]">
                  <div className="flex justify-center items-center h-12 sm:h-16">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-center mt-1 sm:mt-2">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1rem)); }
        }
        
        @keyframes reverse-scroll {
          0% { transform: translateX(calc(-100% + 1rem)); }
          100% { transform: translateX(0); }
        }
        
        [data-mobile-scroll],
        [data-mobile-reverse-scroll] {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        
        @media (min-width: 641px) {
          [data-mobile-scroll] {
            animation: scroll 40s linear infinite !important;
          }
          [data-mobile-reverse-scroll] {
            animation: reverse-scroll 40s linear infinite !important;
          }
        }
        
        @media (max-width: 640px) {
          [data-mobile-scroll] {
            animation: scroll 15s linear infinite !important;
          }
          [data-mobile-reverse-scroll] {
            animation: reverse-scroll 15s linear infinite !important;
          }
        }
      `}</style>
    </section>
  );
}
