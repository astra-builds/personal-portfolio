import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const certs = [
  { name: "AI Foundations Associate", issuer: "Oracle", year: "2024", code: "CERT_ORA_AI" },
  { name: "Intermediate Python for Developers", issuer: "DataCamp", year: "2024", code: "CERT_DC_PY" },
  { name: "MLOps Concepts", issuer: "DataCamp", year: "2024", code: "CERT_DC_MLOPS" },
  { name: "Intermediate SQL", issuer: "DataCamp", year: "2024", code: "CERT_DC_SQL" },
  { name: "AI Agent Fundamentals", issuer: "DataCamp", year: "2025", code: "CERT_DC_AGENT" },
  { name: "Data Manipulation with pandas", issuer: "DataCamp", year: "2025", code: "CERT_DC_PANDAS" },
  { name: "Understanding Machine Learning", issuer: "DataCamp", year: "2025", code: "CERT_DC_ML" },
  { name: "Building Scalable Agentic Systems", issuer: "DataCamp", year: "2025", code: "CERT_DC_AGENTIC" },
];

const CertificationsSection = () => {
  const { ref, activated } = useScrollActivation(0.1);

  return (
    <div ref={ref}>
      <SectionActivation>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm">▶</span>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
              <TerminalText text="Clearance_Credentials" activated={activated} delay={300} />
            </h3>
            <div className="h-[1px] flex-grow bg-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certs.map((cert) => (
              <div
                key={cert.code}
                className="sa-card molten-hover group border border-primary/20 bg-card/50 p-4 flex items-start gap-4 cursor-default"
              >
                <div className="w-10 h-10 border border-primary/40 bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-primary/50 mb-1">{cert.code} // {cert.year}</div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{cert.name}</h4>
                  <p className="text-[10px] text-muted-foreground font-mono mt-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default CertificationsSection;
