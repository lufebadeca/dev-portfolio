import { Heart, Lightbulb } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} {t.copyright}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t.builtWith}</span>
            <Lightbulb className="h-4 w-4 text-warning fill-warning" />
            <span>{t.using}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
