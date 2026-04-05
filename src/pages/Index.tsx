import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import CircuitBackground from "@/components/CircuitBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CircuitBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
