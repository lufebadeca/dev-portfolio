import { motion } from "framer-motion";
import { Download, Mail, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const cvUrl =
      language === "en"
        ? "https://drive.google.com/file/d/19U4CqjC_sND4XFN7XFVEwg98XCsiIOCi/view?usp=sharing"
        : "https://drive.google.com/file/d/1NXgYB_NXTU9uAibke9c5L-hAd8NyLOVL/view?usp=sharing";
    window.open(cvUrl, "_blank");
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-float" />
              <img
                src={profileImage}
                alt="Developer Profile"
                className="relative w-32 h-32 rounded-full border-4 border-primary shadow-xl object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="gap-2" onClick={() => handleDownloadCV()}>
              <Download className="h-5 w-5" />
              {t.downloadCV}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="h-5 w-5" />
              {t.contactMe}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => scrollToSection("#projects")}
            >
              <FolderGit2 className="h-5 w-5" />
              {t.viewProjects}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
