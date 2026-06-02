import { useState } from "react";
import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const projects = [
  {
    id: "OPS_001",
    title: "Miyu-san",
    desc: "Desktop overlay AI assistant with floating widget, voice I/O, screen OCR, clipboard monitoring, Pomodoro timer, and web search.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "⬡",
    link: "https://github.com/astra-builds/anime-ai-assistant-miyu-san",
  },
  {
    id: "OPS_002",
    title: "AI Research Crew",
    desc: "Multi-agent AI research system using crewAI — two agents collaborate to research topics and produce structured reports.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "◈",
    link: "https://github.com/astra-builds/ai-research-crew",
  },
  {
    id: "OPS_003",
    title: "Persona LinkedIn Post Generator",
    desc: "AI-powered tool that generates LinkedIn posts tailored to specific personas and audiences.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "◎",
    link: "https://github.com/astra-builds/persona-linkedin-post-generator",
  },
  {
    id: "OPS_004",
    title: "JhutLink",
    desc: "Full-stack marketplace for textile waste in Bangladesh — AI listing descriptions, smart bidding, escrow payments, and real-time tracking.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "◉",
    link: "https://github.com/astra-builds/JHUTLINK_ai-native-textilewaste-marketplace",
  },
  {
    id: "OPS_005",
    title: "Meme Matcher",
    desc: "Real-time CV app matching facial expressions and hand gestures to internet memes using MediaPipe face/hand detection.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "◆",
    link: "https://github.com/astra-builds/expression2meme-opencv-ai",
  },
  {
    id: "OPS_006",
    title: "AI Interview Tool",
    desc: "AI-driven interview preparation and assessment tool.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "⬢",
    link: "https://github.com/astra-builds/ai-interview-tool",
  },
];

const ProjectsSection = () => {
  const { ref, activated } = useScrollActivation(0.1);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  const goTo = (i: number) => setActiveIndex((i + total) % total);
  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  const cardTransform = (i: number) => {
    let offset = (i - activeIndex + total) % total;
    if (offset > total / 2) offset -= total;
    if (Math.abs(offset) > 2) return { display: "none" as const };

    const abs = Math.abs(offset);
    const sign = offset > 0 ? 1 : -1;
    return {
      transform: `translateX(${sign * abs * 140}px) translateZ(${-abs * 100}px) scale(${1 - abs * 0.12})`,
      opacity: 1 - abs * 0.35,
      zIndex: 10 - abs,
    };
  };

  return (
    <div ref={ref}>
      <SectionActivation>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm">▶</span>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
              <TerminalText text="Tactical_Operations" activated={activated} delay={300} />
            </h3>
            <div className="h-[1px] flex-grow bg-primary/20" />
            <span className="text-[10px] font-mono text-primary tally-light">LIVE_FEED</span>
          </div>

          <div style={{ perspective: "1200px" }} className="relative overflow-hidden py-8">
            <div className="relative flex items-center justify-center min-h-[320px]">
              {projects.map((project, i) => {
                const sty = cardTransform(i);
                const isActive = i === activeIndex;
                const Wrapper = isActive && project.link ? "a" : "div";
                const wrapperProps = isActive && project.link
                  ? { href: project.link, target: "_blank" as const, rel: "noopener noreferrer" as const }
                  : {};

                return (
                  <Wrapper
                    key={project.id}
                    {...wrapperProps}
                    style={{
                      ...sty,
                      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      background: "linear-gradient(135deg, rgba(15,15,25,0.6), rgba(30,10,20,0.4))",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: isActive ? "1px solid rgba(220, 38, 38, 0.4)" : "1px solid rgba(255,255,255,0.08)",
                      boxShadow: isActive
                        ? "0 8px 32px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
                        : "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                    className="absolute w-[260px] md:w-[320px] rounded-xl p-5 cursor-pointer select-none"
                    onClick={(e: React.MouseEvent) => {
                      if (!isActive) { e.preventDefault(); setActiveIndex(i); }
                    }}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{project.icon}</span>
                        <span className="text-[10px] text-primary border border-primary/30 px-1 font-mono">{project.id}</span>
                        <span className="text-[10px] text-muted-foreground font-mono">{project.date}</span>
                      </div>
                      <h5 className="text-lg font-bold text-foreground">{project.title}</h5>
                      <p className="text-xs text-muted-foreground font-mono leading-relaxed">{project.desc}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 tracking-widest font-mono">
                          {project.status}
                        </span>
                        {project.link && (
                          <span className="text-[10px] text-primary/50 font-mono">
                            {isActive ? "↗ OPEN" : "↔ SWIPE"}
                          </span>
                        )}
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <button
              onClick={prev}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-background/60 backdrop-blur border border-white/10 text-primary hover:bg-primary/20 transition-all text-sm"
            >
              ◀
            </button>
            <button
              onClick={next}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-background/60 backdrop-blur border border-white/10 text-primary hover:bg-primary/20 transition-all text-sm"
            >
              ▶
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default ProjectsSection;
