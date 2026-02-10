import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  description?: string;
}

export const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoUrl,
  title = "Video",
  description
}: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[80vh]">
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
        <div className="relative w-full aspect-video mt-4">
          <iframe
            src={videoUrl}
            title={title}
            className="absolute inset-0 w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
