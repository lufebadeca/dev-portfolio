import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import aboutImage from "@/assets/about-image.jpg";

export function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="About Me"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.paragraph1}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.paragraph2}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.paragraph3}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.paragraph4}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="text-3xl font-bold text-primary mb-1">1+</div>
                <div className="text-sm text-muted-foreground">{t.stats.experience}</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">{t.stats.projects}</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">{t.stats.technologies}</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">{t.stats.satisfaction}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
