import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language } = useLanguage();
  const t = translations[language].projects;

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title[language]}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {project.images.length > 1 ? (
  <Carousel className="w-full">
    <CarouselContent>
      {project.images.map((image, index) => (
        <CarouselItem key={index}>
          <img
            src={image}
            alt={`${project.title[language]} - ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-4" />
    <CarouselNext className="right-4" />
  </Carousel>
) : (
  <img
    src={project.images[0]}
    alt={project.title[language]}
    className="w-full h-auto object-cover rounded-lg"
  />
)}

          <div>
            <h3 className="text-lg font-semibold mb-2">{t.description}</h3>
            <p className="text-muted-foreground">{project.description[language]}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">{t.techStack}</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">{t.keyFeatures}</h3>
            <ul className="space-y-2">
              {project.features[language].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            {project.demoLink && (
              <Button className="gap-2" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t.liveDemo}
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button variant="outline" className="gap-2" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  {t.viewCode}
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
