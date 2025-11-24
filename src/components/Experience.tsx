import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    responsibilities: [
      "Architected and developed scalable web applications using React, Node.js, and PostgreSQL",
      "Led team of 5 developers in implementing microservices architecture",
      "Integrated AI tools (Cursor, Bolt) to accelerate development workflow by 40%",
      "Implemented CI/CD pipelines with Docker and GitHub Actions",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    responsibilities: [
      "Built real-time applications using Firebase and WebSocket technology",
      "Developed RESTful APIs and GraphQL endpoints with Node.js",
      "Optimized database queries, reducing response times by 60%",
      "Mentored junior developers on best practices and code reviews",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartupHub",
    period: "2018 - 2020",
    responsibilities: [
      "Created responsive user interfaces with React and Next.js",
      "Implemented modern design systems using Tailwind CSS",
      "Collaborated with UX designers to improve user experience",
      "Maintained 95%+ test coverage using Jest and React Testing Library",
    ],
  },
];

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experience" className="py-20 bg-accent/20">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8">{t.workExperience}</h3>
            <div className="space-y-8">
              {t.jobs.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Briefcase className="h-3 w-3 text-primary-foreground" />
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                    <p className="text-primary font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8">{t.technicalSkills}</h3>
            <div className="space-y-6">
              {t.skillCategories.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-md border border-border"
                >
                  <h4 className="text-lg font-bold mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
