import { Briefcase } from "lucide-react";
import { useInView } from "../hooks/useInView";

const experiences = [
  {
    title: "Quality Engineering | Working Student",
    company: "Cinemo",
    period: "May 2025 - Present",
    points: [
      "Manual and automated testing",
      "Python / GitHub / Bitbucket / Jira / Confluence / Linux environments / shell scripting / Jenkins",
      "Audio/video testing for media playback, latency and synchronization.",
    ],
  },
  {
    title: "Grid Operation | Intern",
    company: "Karnataka Power Transmission Corporation Limited",
    period: "Feb 2024 - Mar 2024",
    points: [
      "Grid infrastructure and automated control systems.",
      "SCADA / MATLAB/Simulink",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Experience</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Where I've <span className="text-gradient">Worked</span>
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-14" style={{ transitionDelay: `${i * 200}ms` }}>
                {/* Dot */}
                <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />

                <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:glow-border transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                    <span className="text-xs font-mono text-primary">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
