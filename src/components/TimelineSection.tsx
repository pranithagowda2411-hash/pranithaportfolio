import { Briefcase, GraduationCap } from "lucide-react";
import { useInView } from "../hooks/useInView";

const timelineItems = [
  {
    type: "experience" as const,
    title: "Quality Engineering | Working Student",
    subtitle: "Cinemo",
    period: "May 2025 - Present",
    points: [
      "Manual and automated testing",
      "Python / GitHub / Bitbucket / Jira / Confluence / Linux environments / shell scripting / Jenkins",
      "Audio/video testing for media playback, latency and synchronization.",
    ],
  },
  {
    type: "experience" as const,
    title: "Grid Operation | Intern",
    subtitle: "Karnataka Power Transmission Corporation Limited",
    period: "Feb 2024 - Mar 2024",
    points: [
      "Grid infrastructure and automated control systems.",
      "SCADA / MATLAB/Simulink",
    ],
  },
  {
    type: "education" as const,
    title: "Master of Science | Electrical Engineering",
    subtitle: "University of Stuttgart",
    period: "Oct 2024 - Present",
    detail: "Major in Power Electronics.",
    points: [],
  },
  {
    type: "education" as const,
    title: "Bachelor of Engineering | Electrical and Electronics Engineering",
    subtitle: "NIE Institute of Technology",
    period: "Dec 2020 - Apr 2024",
    detail: "Bachelor thesis in Dynamic Charging of Electric Vehicles.",
    points: [
      "EMC/Wireless Power Transfer",
    ],
  },
];

const TimelineSection = () => {
  const { ref: expRef, inView: expInView } = useInView();
  const { ref: eduRef, inView: eduInView } = useInView();

  const experiences = timelineItems.filter((i) => i.type === "experience");
  const education = timelineItems.filter((i) => i.type === "education");

  return (
    <section id="experience" className="pt-24 px-6">
        <div className="max-w-4xl mx-auto relative">
          {/* Continuous vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />
          {/* End circle */}
          <div className="absolute left-[14px] bottom-0 w-[11px] h-[11px] rounded-full border-2 border-border bg-background" />

          <div className="space-y-12 pb-8">
            {/* Experience heading inline in timeline */}
            <div className="relative pl-14" ref={expRef}>
              <div className="absolute left-[11.5px] top-1 w-4 h-4 rounded-full border-2 border-primary bg-primary/20" />
              <div className={`transition-all duration-700 ${expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Experience</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-0">
                  Where I've <span className="text-gradient">Worked</span>
                </h3>
              </div>
            </div>

            {/* Experience items */}
            {experiences.map((item, i) => (
              <TimelineItem key={`exp-${i}`} item={item} index={i} />
            ))}

            {/* Education heading inline in timeline */}
            <div className="relative pl-14" ref={eduRef} id="education">
              <div className="absolute left-[11.5px] top-1 w-4 h-4 rounded-full border-2 border-primary bg-primary/20" />
              <div className={`transition-all duration-700 ${eduInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Education</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-0">
                  Academic <span className="text-gradient">Background</span>
                </h3>
              </div>
            </div>

            {/* Education items */}
            {education.map((item, i) => (
              <TimelineItem key={`edu-${i}`} item={item} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof timelineItems)[number];
  index: number;
}) => {
  const Icon = item.type === "experience" ? Briefcase : GraduationCap;

  return (
    <div className="relative pl-14" style={{ transitionDelay: `${index * 200}ms` }}>
      {/* Dot */}
      <div className="absolute left-[11.5px] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />

      <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:glow-border transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
          <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
          <span className="text-xs font-mono text-primary">{item.period}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1.5">
          <Icon className="w-3.5 h-3.5" />
          {item.subtitle}
        </p>
        {"detail" in item && item.detail && (
          <p className="text-sm text-muted-foreground mb-3">{item.detail}</p>
        )}
        {item.points.length > 0 && (
          <ul className="space-y-2">
            {item.points.map((p, j) => (
              <li key={j} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">▸</span>
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineSection;
