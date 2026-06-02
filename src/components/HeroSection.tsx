import profileImg from "@/assets/profile.jpg";
import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const HeroSection = () => {
  const { ref, activated } = useScrollActivation(0.1);

  return (
    <div ref={ref}>
      <SectionActivation>
        <section className="relative border-l-2 border-primary pl-6 md:pl-12 py-8 group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-transparent -z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

          <div className="mb-4 flex items-center gap-3">
            <span className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-bold tracking-widest border border-primary/30 uppercase">
              Identity Confirmed
            </span>
            <div className="h-[1px] flex-grow bg-primary/20" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-44 border-2 border-primary/40 overflow-hidden relative group/photo">
                <img
                  src={profileImg}
                  alt="Kamrul Hasan Ujjal"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 text-[8px] font-mono text-primary text-center py-0.5 tracking-widest">
                  OPERATOR_ID: KHU-2005
                </div>
              </div>
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />
            </div>

            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-mono font-bold text-foreground tracking-widest mb-3 glitch-text cursor-default">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
                  <TerminalText text="KAMRUL_HASAN_UJJAL" activated={activated} speed={45} delay={400} />
                </span>
              </h2>

              <p className="text-primary font-mono text-lg md:text-xl tracking-[0.2em] mb-8 uppercase crimson-text-glow">
                <TerminalText text="DATA_SCIENCE_UNDERGRAD" activated={activated} speed={60} delay={1200} />
              </p>

              <div className="text-xs font-mono text-muted-foreground max-w-2xl leading-relaxed space-y-1">
                <p>&gt; INITIALIZING_NEURAL_LINK... SUCCESS</p>
                <p>&gt; AGE: 20 // LOCATION: DHAKA, BD</p>
                <p>&gt; EDUCATION: BSC DATA SCIENCE // UNITED INTERNATIONAL UNIVERSITY (UIU)</p>
                <p>&gt; LOADING_SKILL_MATRIX... [PYTHON, SQL, POWER_BI, DOCKER, FASTAPI, PYTORCH, PANDAS]</p>
                <p>&gt; CURRENT_OBJECTIVE: EXPLORING AI-POWERED DATA ANALYTICS &amp; AGENTIC SYSTEMS.</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-10 hidden lg:block opacity-20">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="hsl(1, 93%, 50%)" strokeWidth="1">
              <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
              <path d="M50 10 V20 M50 90 V80 M10 50 H20 M90 50 H80" />
              <rect x="45" y="45" width="10" height="10" />
            </svg>
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default HeroSection;
