import { useState } from "react";
import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const categoryIcons: Record<string, string> = {
  "CORE_LANGUAGES_&_DATA": "⌨",
  "AI_AGENT_FRAMEWORKS": "◈",
  "DATA_ANALYTICS_&_DEPLOY": "◉",
  "INFRASTRUCTURE": "⚙",
};

const skillCategories = [
  {
    label: "CORE_LANGUAGES_&_DATA",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    label: "AI_AGENT_FRAMEWORKS",
    skills: [
      { name: "LangChain", level: 82 },
      { name: "Crew AI", level: 78 },
      { name: "n8n", level: 75 },
      { name: "Hugging Face", level: 72 },
    ],
  },
  {
    label: "DATA_ANALYTICS_&_DEPLOY",
    skills: [
      { name: "Pandas", level: 88 },
      { name: "Power BI", level: 85 },
      { name: "Streamlit", level: 78 },
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
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => {
              const isHovered = hoveredCat === cat.label;
              return (
                <div
                  key={cat.label}
                  onMouseEnter={() => setHoveredCat(cat.label)}
                  onMouseLeave={() => setHoveredCat(null)}
                  style={{
                    background: isHovered
                      ? "linear-gradient(135deg, rgba(220,38,38,0.12), rgba(15,15,25,0.6))"
                      : "linear-gradient(135deg, rgba(15,15,25,0.5), rgba(30,10,20,0.3))",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: isHovered
                      ? "1px solid rgba(220, 38, 38, 0.3)"
                      : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: isHovered
                      ? "0 8px 32px rgba(220, 38, 38, 0.1)"
                      : "0 4px 16px rgba(0,0,0,0.2)",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                  className="rounded-xl p-5 space-y-4 group"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                    <span className="text-lg text-primary/80">{categoryIcons[cat.label]}</span>
                    <span className="text-[10px] text-primary tracking-widest font-bold">
                      {cat.label}
                    </span>
                    <span className="ml-auto text-[9px] text-primary/40 font-mono">
                      [{cat.skills.length}]
                    </span>
                  </div>

                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className="text-primary/80 font-bold"
                          style={{
                            textShadow: isHovered ? "0 0 8px rgba(220,38,38,0.4)" : "none",
                            transition: "text-shadow 0.3s",
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: activated ? `${skill.level}%` : "0%",
                            background: isHovered
                              ? "linear-gradient(90deg, hsl(1,93%,50%), hsl(1,80%,70%))"
                              : "linear-gradient(90deg, hsl(1,80%,40%), hsl(1,70%,55%))",
                            boxShadow: isHovered
                              ? "0 0 12px rgba(220,38,38,0.5), 0 0 4px rgba(220,38,38,0.3)"
                              : "none",
                            transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  {isHovered && (
                    <div className="text-[9px] font-mono text-primary/40 pt-1 border-t border-white/5 transition-all duration-300">
                      &gt; module_loaded // ready
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default SkillsSection;
