import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const education = [
  {
    period: "Nov 2025 — Dec 2029",
    degree: "Bachelor's in Data Science",
    institution: "United_International_University",
    desc: "CGPA: 4.00/4.00 (as of 1st trimester). Active member of the UIU Data Science Club.",
  },
  {
    period: " — 2024",
    degree: "High School Diploma, Science",
    institution: "Adamjee_Cantonment_College",
    desc: "Grade: 90.15% (GPA: 5.00/5.00). Section Representative at ACC Eco Amica Club. General Member at ACC Photography Club.",
  },
];

const EducationSection = () => {
  const { ref, activated } = useScrollActivation(0.1);

  return (
    <div ref={ref}>
      <SectionActivation>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm">▶</span>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
              <TerminalText text="Academic_Record" activated={activated} delay={300} />
            </h3>
            <div className="h-[1px] flex-grow bg-primary/20" />
          </div>

          <div className="space-y-0">
            {education.map((edu, i) => (
              <div
                key={i}
                className="sa-card group border-l-2 border-primary/30 hover:border-primary pl-6 py-6 relative transition-colors duration-300"
              >
                <div className="absolute left-[-5px] top-8 w-2 h-2 bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_hsl(1,93%,50%)] transition-all" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-primary tracking-widest">{edu.period}</span>
                </div>
                <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-xs font-mono text-primary/60 mb-2">{edu.institution}</p>
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">{edu.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default EducationSection;