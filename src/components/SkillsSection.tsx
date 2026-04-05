import { useInView } from "../hooks/useInView";
import { Code, Wrench, GitBranch, Globe, Award, Users } from "lucide-react";

const skillGroups = [
  {
    icon: Code,
    title: "Programming",
    skills: ["C", "Python", "PLC Programming", "Assembly"],
  },
  {
    icon: Wrench,
    title: "Software & Tools",
    skills: ["VS Code", "Git", "Jira", "Confluence", "MATLAB","LTSpice", "Altium"],
  },
  {
    icon: GitBranch,
    title: "CI & Automation",
    skills: ["GitHub", "Bitbucket", "Jenkins", "Selenium"],
  },
  {
    icon: Globe,
    title: "Languages",
    skills: ["English" , "Kannada", "Hindi"],
  },
  {
    icon: Award,
    title: "Certifications",
    skills: ["Python Crash Course @ Google", "C for Beginners @ Great Learning"],
  },
  {
    icon: Users,
    title: "Activities",
    skills: ["Chairperson @ IEEE (student branch)"],
  },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Skills</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Technical <span className="text-gradient">Arsenal</span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <group.icon className="w-4 h-4 text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--glow)/0.6)] transition-all" />
                <h4 className="font-semibold text-foreground text-sm">{group.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
