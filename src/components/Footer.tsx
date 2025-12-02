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
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} {t.copyright}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="whitespace-nowrap">{t.builtWith}</span>
              <Lightbulb className="h-4 w-4 text-warning fill-warning flex-shrink-0" />
              <span className="whitespace-nowrap">{t.using}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="whitespace-nowrap">{t.usedTools}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="whitespace-nowrap">{`&`}</span>
              <span className="whitespace-nowrap">{t.poweredBy}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
