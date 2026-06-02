import { useState, useCallback } from "react";
import TacticalSidebar from "@/components/TacticalSidebar";
import CrimsonHeader from "@/components/CrimsonHeader";
import SectionActivation from "@/components/SectionActivation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import CommsSection from "@/components/CommsSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import VerticalMarquee from "@/components/VerticalMarquee";
import BootSequence from "@/components/BootSequence";

const Index = () => {
  const [booted, setBooted] = useState(false);
  const handleBootComplete = useCallback(() => setBooted(true), []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {!booted && <BootSequence onComplete={handleBootComplete} />}
      {/* Scanlines overlay */}
      <div className="scanlines" />

      {/* Marquee strip at top */}
      <MarqueeStrip />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left tactical sidebar */}
        <TacticalSidebar />

        {/* Main content */}
        <main className="flex-1 flex flex-col relative overflow-y-auto bg-grid-pattern">
          <CrimsonHeader />

          <div className="p-6 md:p-12 max-w-7xl mx-auto w-full flex flex-col gap-12 relative">
            <HeroSection />

            {/* Quick access modules */}
            <SectionActivation>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { module: "MODULE_A", title: "Tactical_Ops", icon: "⬡", subtitle: "6 ACTIVE PROJECTS", target: "projects" },
                  { module: "MODULE_B", title: "Skill_Matrix", icon: "◉", subtitle: "AI/ML PROFICIENCY", target: "skills" },
                  { module: "MODULE_C", title: "Encrypted_Comms", icon: "◈", subtitle: "SECURE CHANNEL READY", target: "comms" },
                ].map((card) => (
                  <div
                    key={card.module}
                    className="sa-card molten-hover group bg-card border border-primary/20 p-6 relative cursor-pointer"
                    onClick={() => document.getElementById(card.target)?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <div className="absolute top-2 right-2 text-primary/20 group-hover:text-primary/60 transition-colors text-4xl">
                      {card.icon}
                    </div>
                    <div className="h-full flex flex-col justify-end relative z-10">
                      <span className="text-[10px] text-primary mb-1 tracking-widest">{card.module}</span>
                      <h3 className="text-2xl font-bold text-foreground uppercase group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      <div className="w-8 h-1 bg-primary mt-4 group-hover:w-full transition-all duration-300" />
                      <p className="mt-4 text-xs text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        &gt; {card.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            </SectionActivation>

            <div id="projects"><ProjectsSection /></div>
            <div id="skills"><SkillsSection /></div>
            <div id="experience"><ExperienceSection /></div>
            <div id="education"><EducationSection /></div>
            <div id="certifications"><CertificationsSection /></div>
            <div id="recommendations"><RecommendationsSection /></div>
            <div id="comms"><CommsSection /></div>

            {/* Footer */}
            <div className="mt-auto border-t border-primary/20 pt-4 flex flex-wrap gap-4 justify-between items-end font-mono text-[10px] text-primary/60 uppercase">
              <div className="space-y-1">
                <div>Loc: <span className="text-foreground">Dhaka, BD [Active]</span></div>
                <div>Email: <span className="text-foreground">kamrul.hasan82747@gmail.com</span></div>
              </div>
              <div className="text-right space-y-1">
                <div>Edu: <span className="text-foreground">UIU // CGPA 4.00</span></div>
                <div>Core_Temp: <span className="text-emerald-500">OPTIMAL</span></div>
              </div>
            </div>
          </div>
        </main>

        {/* Right vertical marquee bar */}
        <VerticalMarquee />
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-background border-t border-primary/30 z-50 flex justify-around py-3 text-primary text-xs font-mono uppercase tracking-widest backdrop-blur-md">
        <button className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100">
          <span>⬡</span>
          <span>Ops</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-100 text-foreground drop-shadow-[0_0_5px_hsl(1,93%,50%)]">
          <span>⌂</span>
          <span>Base</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100">
          <span>◉</span>
          <span>Data</span>
        </button>
      </nav>
    </div>
  );
};

export default Index;
