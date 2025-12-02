import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t.successTitle,
        description: t.successDescription,
      });
      const greet = language === "en" ? "Hello, Luis" : "Hola, Luis";
      const namePart = formData.name ? `My name is ${formData.name}. ` : "";
      const emailPart = formData.email ? `You can reach me at ${formData.email}. ` : "";
      const messagePart = formData.message ? `Here is my message: ${formData.message}` : "";
      formData.message = `${greet}! ${namePart}${emailPart}${messagePart}`;
      const baseURL = `https://wa.me/${+573017470755}`;
      const action_url = formData.message ? `${baseURL}?text=${encodeURIComponent(formData.message)}` : baseURL;
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      window.open(action_url, "_blank");
    }, 1000);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/lufebadeca", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/fernando-baldovino-bdc/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:lufebadeca@gmail.com", label: "Email" },
    { icon: Twitter, href: "https://x.com/LuisFer81160518", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-accent/20">
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">{t.letsConnect}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <social.icon className="h-6 w-6 text-primary" />
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  // required
                  className="bg-card"
                />
              </div>

              <div>
                <Textarea
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t.sending : t.sendButton}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
