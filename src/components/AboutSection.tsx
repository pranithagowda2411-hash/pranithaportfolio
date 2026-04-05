import { useInView } from "../hooks/useInView";

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">About Me</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          Engineering the <span className="text-gradient">Future of Power</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an Electrical and Electronics Engineer specializing in Power Electronics, EV's and EMI technologies. 
              Currently pursuing my Master's at the University of Stuttgart with a major in Power Electronics.
            </p>
            <p>
              My experience spans from grid operations with SCADA software to quality engineering 
              for automotive infotainment systems, combining hardware expertise with software automation skills.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Location", value: "Stuttgart, Germany" },
              { label: "Focus", value: "Power Electronics & EV Charging" },
              { label: "Degree", value: "MS Electrical Engineering" },
              { label: "University", value: "University of Stuttgart" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-xs font-mono text-primary uppercase tracking-wider w-24 shrink-0">{item.label}</span>
                <span className="text-foreground text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
