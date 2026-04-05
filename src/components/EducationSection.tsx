import { GraduationCap } from "lucide-react";
import { useInView } from "../hooks/useInView";

const education = [
  {
    degree: "Master of Science | Electrical Engineering",
    school: "University of Stuttgart",
    period: "Oct 2024 - Present",
    detail: "Major in Power Electronics.",
    points: [],
  },
  {
    degree: "Bachelor of Engineering | Electrical and Electronics Engineering",
    school: "NIE Institute of Technology",
    period: "Dec 2020 - Apr 2024",
    detail: "Bachelor thesis in Dynamic Charging of Electric Vehicles.",
    points: [
      "EMC/Wireless Power Transfer",
    ],
  },
];

const EducationSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Education</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Academic <span className="text-gradient">Background</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:glow-border transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground leading-tight">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                  <span className="text-xs font-mono text-primary">{edu.period}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{edu.detail}</p>
              {edu.points.length > 0 && (
                <ul className="space-y-2 mt-auto">
                  {edu.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
