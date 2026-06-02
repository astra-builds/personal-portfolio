import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const experiences = [
  {
    period: "2024 — 2 MONTHS",
    role: "Data Visualization Associate Intern",
    org: "Saint_Louis_University",
    clearance: "INTERN",
    desc: "Worked on data visualization projects, creating insightful dashboards and visual reports to support research and decision-making processes using Python, SQL, and Power BI.",
  },
  {
    period: "2025 — 2029",
    role: "BSc in Data Science",
    org: "United_International_University",
    clearance: "STUDENT",
    desc: "Pursuing a Bachelor's degree in Data Science. Active member of the UIU Data Science Club. Exploring AI-powered analytics, agentic AI, and automation.",
  },
];

const ExperienceSection = () => {
  const { ref, activated } = useScrollActivation(0.1);

  return (
    <div ref={ref}>
      <SectionActivation>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm">▶</span>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
              <TerminalText text="Service_Record" activated={activated} delay={300} />
            </h3>
            <div className="h-[1px] flex-grow bg-primary/20" />
          </div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="sa-card group border-l-2 border-primary/30 hover:border-primary pl-6 py-6 relative transition-colors duration-300"
              >
                <div className="absolute left-[-5px] top-8 w-2 h-2 bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_hsl(1,93%,50%)] transition-all" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-primary tracking-widest">{exp.period}</span>
                  <span className="text-[10px] px-2 py-0.5 border border-primary/30 bg-primary/10 text-primary tracking-widest">
                    {exp.clearance}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </h4>
                <p className="text-xs font-mono text-primary/60 mb-2">{exp.org}</p>
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default ExperienceSection;
