import { Mail, Linkedin, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-glow-muted/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src={profilePhoto}
            alt="Pranitha Mysore Vasanth Kumar"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mx-auto border-3 border-primary/30 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
          />
        </div>
           
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          
          Hello! I'm
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-foreground">Pranitha</span>
        </h1>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Mysore Vasanth Kumar</span>
        </h1>

        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 font-mono text-sm text-primary animate-pulse-glow">
           Electrical Engineer
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Electrical & Electronics Engineer specializing in Power Electronics. 
          MS student at the University of Stuttgart.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="mailto:mail@pranitha.de"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--glow)/0.5)] hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/pranithamv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium transition-all hover:border-primary/50 hover:bg-primary/5"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        <a href="#about" className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
