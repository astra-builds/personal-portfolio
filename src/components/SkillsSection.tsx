import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const skillCategories = [
  {
    label: "CORE_LANGUAGES",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    label: "AI_AGENT_FRAMEWORKS",
    skills: [
      { name: "LangChain", level: 82 },
      { name: "Crew AI", level: 78 },
      { name: "n8n", level: 75 },
    ],
  },
  {
    label: "DATA_ANALYTICS",
    skills: [
      { name: "Pandas", level: 88 },
      { name: "Power BI", level: 85 },
    ],
  },
  {
    label: "INFRASTRUCTURE",
    skills: [
      { name: "Docker", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, activated } = useScrollActivation(0.1);

  return (
    <div ref={ref}>
      <SectionActivation delay={50}>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm">▶</span>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
              <TerminalText text="Technical_Proficiency" activated={activated} delay={300} />
            </h3>
            <div className="h-[1px] flex-grow bg-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={cat.label} className="sa-card border border-primary/20 bg-card/50 p-4 space-y-4">
                <div className="text-[10px] text-primary tracking-widest font-bold border-b border-primary/20 pb-2">
                  {cat.label}
                </div>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-crimson-glow transition-all duration-1000"
                        style={{ width: activated ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default SkillsSection;
