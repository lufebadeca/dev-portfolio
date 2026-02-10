import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechCarousel } from "@/components/TechCarousel";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { VideoSection } from "@/components/VideoSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TechCarousel />
      <Projects />
      <Experience />
      <About />
      <VideoSection />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
