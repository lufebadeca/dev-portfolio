import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { VideoModal } from "./VideoModal";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Replace with your actual video URL
  const videoUrl = "https://www.youtube.com/embed/pkKQc2QLUuw";
  const thumbnailUrl = "https://img.youtube.com/vi/pkKQc2QLUuw/maxresdefault.jpg";

  return (
    <>
      <section id="video" className="py-20 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.video.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.video.subtitle}
            </p>
          </div>

          {/* Video Card */}
          <div className="max-w-3xl mx-auto">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              {/* Thumbnail */}
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-auto object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="rounded-full gap-2 bg-red-600 hover:bg-red-700"
                >
                  <Play className="w-6 h-6" />
                  {t.video.playVideo}
                </Button>
              </div>

              {/* Click to play button at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full gap-2"
                  size="lg"
                >
                  <Play className="w-5 h-5" />
                  {t.video.playVideo}
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-lg">
                {t.video.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
        title={t.video.title}
        description={t.video.description}
      />
    </>
  );
};
