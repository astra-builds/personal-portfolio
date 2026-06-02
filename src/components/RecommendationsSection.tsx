import { useState } from "react";
import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";
import lorImg from "@/assets/lor-humanjudge.jpeg";

const recommendations = [
  {
    id: "REC_001",
    issuer: "Co-founder of HumanJudge",
    title: "AI Expert Reviewer",
    desc: "Earned AI Expert Reviewer status through contributions to AI evaluation research at HumanJudge.",
    image: lorImg,
  },
];

const RecommendationsSection = () => {
  const { ref, activated } = useScrollActivation(0.1);
  const [viewing, setViewing] = useState<string | null>(null);

  return (
    <div ref={ref}>
      <SectionActivation>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm">▶</span>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
              <TerminalText text="Recommendations" activated={activated} delay={300} />
            </h3>
            <div className="h-[1px] flex-grow bg-primary/20" />
          </div>

          <div className="space-y-4">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                style={{
                  background: "linear-gradient(135deg, rgba(15,15,25,0.5), rgba(30,10,20,0.3))",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                }}
                className="rounded-xl p-5 md:p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(220,38,38,0.05))",
                      border: "1px solid rgba(220,38,38,0.2)",
                    }}
                  >
                    <span className="text-xl">📜</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-primary border border-primary/30 px-1 font-mono">{rec.id}</span>
                      <span className="text-[10px] text-muted-foreground font-mono">LETTER_OF_RECOMMENDATION</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      LOR by {rec.issuer}
                    </h4>
                    <p className="text-xs text-primary/60 font-mono mb-2">{rec.title}</p>
                    <p className="text-xs text-muted-foreground font-mono leading-relaxed">{rec.desc}</p>

                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 tracking-widest font-mono">
                        STATUS: VERIFIED
                      </span>
                      <button
                        onClick={() => setViewing(rec.id)}
                        className="text-[10px] px-3 py-1 font-mono tracking-widest transition-all duration-200 cursor-pointer"
                        style={{
                          background: "rgba(220,38,38,0.1)",
                          border: "1px solid rgba(220,38,38,0.3)",
                          color: "hsl(1,93%,50%)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(220,38,38,0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(220,38,38,0.1)";
                        }}
                      >
                        📄 VIEW LETTER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {viewing && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
              onClick={() => setViewing(null)}
            >
              <div
                className="relative max-w-2xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setViewing(null)}
                  className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm font-mono cursor-pointer"
                >
                  [CLOSE]
                </button>
                {recommendations.find((r) => r.id === viewing)?.image && (
                  <img
                    src={recommendations.find((r) => r.id === viewing)!.image}
                    alt="Letter of Recommendation"
                    className="max-w-full max-h-[85vh] rounded-lg object-contain"
                    style={{ boxShadow: "0 0 40px rgba(220,38,38,0.15)" }}
                  />
                )}
              </div>
            </div>
          )}
        </section>
      </SectionActivation>
    </div>
  );
};

export default RecommendationsSection;