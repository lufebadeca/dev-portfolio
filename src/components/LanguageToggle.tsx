import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full"
      title={language === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only ml-1 text-xs font-semibold">
        {language.toUpperCase()}
      </span>
    </Button>
  );
}
