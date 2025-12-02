import { Languages, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Language } from "@/hooks/useLanguage";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' }
];

export function LanguageToggle() {
  const { language, changeLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1.5"
          size="sm"
        >
          <Languages className="h-4 w-4" />
          <span className="font-medium">
            {language === 'en' ? 'EN' : 'ES'}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`cursor-pointer ${
              language === lang.code ? 'bg-accent font-medium' : ''
            }`}
            onClick={() => changeLanguage(lang.code as Language)}
          >
            {lang.name}
            {language === lang.code && (
              <span className="ml-auto text-xs opacity-60">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
