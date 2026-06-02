import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const projects = [
  {
    id: "OPS_001",
    module: "MODULE_A",
    title: "Miyu-san",
    desc: "Desktop overlay AI assistant with floating widget, voice I/O, screen OCR, clipboard monitoring, Pomodoro timer, and web search.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "⬡",
    link: "https://github.com/astra-builds/anime-ai-assistant-miyu-san",
  },
  {
    id: "OPS_002",
    module: "MODULE_B",
    title: "AI Research Crew",
    desc: "Multi-agent AI research system using crewAI — two agents collaborate to research topics and produce structured reports.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "◈",
    link: "https://github.com/astra-builds/ai-research-crew",
  },
  {
    id: "OPS_003",
    module: "MODULE_C",
    title: "Persona LinkedIn Post Generator",
    desc: "AI-powered tool that generates LinkedIn posts tailored to specific personas and audiences.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "◎",
    link: "https://github.com/astra-builds/persona-linkedin-post-generator",
  },
  {
    id: "OPS_004",
    module: "MODULE_D",
    title: "JhutLink",
    desc: "Full-stack marketplace for textile waste in Bangladesh — AI listing descriptions, smart bidding, escrow payments, and real-time tracking.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "◉",
    link: "https://github.com/astra-builds/JHUTLINK_ai-native-textilewaste-marketplace",
  },
  {
    id: "OPS_005",
    module: "MODULE_E",
    title: "Meme Matcher",
    desc: "Real-time CV app matching facial expressions and hand gestures to internet memes using MediaPipe face/hand detection.",
    status: "ACTIVE",
    date: "2025 // ONGOING",
    icon: "◆",
    link: "https://github.com/astra-builds/expression2meme-opencv-ai",
  },
  {
    id: "OPS_006",
    module: "MODULE_F",
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

          <div className="border border-primary/20 bg-background/50 backdrop-blur p-1">
            <div className="bg-primary/5 p-4 md:p-6 space-y-4">
              {projects.map((project) => {
                const Wrapper = project.link ? "a" : "div";
                const wrapperProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                <Wrapper
                  key={project.id}
                  {...wrapperProps}
                  className="sa-card molten-hover flex flex-col md:flex-row gap-4 group cursor-pointer p-3 border border-primary/10 bg-card/50 transition-colors"
                >
                  <div className="w-full md:w-32 h-20 bg-secondary border border-primary/30 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <span className="text-4xl text-primary/30 group-hover:text-primary transition-colors duration-300">{project.icon}</span>
                    <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground text-[8px] px-1 font-bold z-10">
                      {project.status}
                    </div>
                    <div className="absolute inset-0 hazard-stripes opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-primary border border-primary px-1">{project.id}</span>
                      <span className="text-xs text-muted-foreground font-mono">{project.date}</span>
                    </div>
                    <h5 className="text-foreground font-bold text-lg mb-1 group-hover:text-primary transition-colors">{project.title}</h5>
                    <p className="text-xs text-muted-foreground font-mono">{project.desc}</p>
                  </div>
                </Wrapper>
              );})}
            </div>
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default ProjectsSection;
