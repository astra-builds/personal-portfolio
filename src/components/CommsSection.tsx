import { useState } from "react";
import SectionActivation from "./SectionActivation";
import TerminalText from "./TerminalText";
import { useScrollActivation } from "@/hooks/useScrollActivation";

const CommsSection = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const { ref, activated } = useScrollActivation(0.1);

  return (
    <div ref={ref}>
      <SectionActivation>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm">▶</span>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">
              <TerminalText text="Encrypted_Comms" activated={activated} delay={300} />
            </h3>
            <div className="h-[1px] flex-grow bg-primary/20" />
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <a
              href="https://www.linkedin.com/in/kamrul-hasan-ujjal-467b0736a"
              target="_blank"
              rel="noopener noreferrer"
              className="sa-card molten-hover group border border-primary/20 bg-card/50 p-4 flex items-center gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 border border-primary/40 bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-primary text-xs font-bold">in</span>
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-mono text-primary/50 mb-0.5">CHANNEL_01</div>
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">LinkedIn</span>
              </div>
            </a>
            <a
              href="https://github.com/astra-builds"
              target="_blank"
              rel="noopener noreferrer"
              className="sa-card molten-hover group border border-primary/20 bg-card/50 p-4 flex items-center gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 border border-primary/40 bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-primary text-xs font-bold">gh</span>
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-mono text-primary/50 mb-0.5">CHANNEL_02</div>
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">GitHub</span>
              </div>
            </a>
            <a
              href="mailto:kamrul.hasan82747@gmail.com"
              className="sa-card molten-hover group border border-primary/20 bg-card/50 p-4 flex items-center gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 border border-primary/40 bg-primary/10 flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-primary text-xs font-bold">@</span>
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-mono text-primary/50 mb-0.5">CHANNEL_03</div>
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">Email</span>
              </div>
            </a>
          </div>

          <div className="border border-primary/20 bg-card/50 p-6">
            <div className="text-xs font-mono text-primary/50 mb-6">
              &gt; ESTABLISHING SECURE LINE...<br />
              &gt; ENCRYPTION: AES-256-GCM<br />
              &gt; STATUS: <span className="text-emerald-500">READY_FOR_INPUT</span>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-primary tracking-widest font-bold mb-1 block">CALLSIGN</label>
                  <input
                    type="text"
                    className={`w-full bg-secondary border ${focused === 'name' ? 'border-primary crimson-glow' : 'border-primary/20'} text-foreground text-sm font-mono p-3 outline-none transition-all`}
                    placeholder="Enter designation..."
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label className="text-[10px] text-primary tracking-widest font-bold mb-1 block">FREQ_CHANNEL</label>
                  <input
                    type="email"
                    className={`w-full bg-secondary border ${focused === 'email' ? 'border-primary crimson-glow' : 'border-primary/20'} text-foreground text-sm font-mono p-3 outline-none transition-all`}
                    placeholder="comm@channel.net"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] text-primary tracking-widest font-bold mb-1 block">TRANSMISSION</label>
                <textarea
                  rows={4}
                  className={`w-full bg-secondary border ${focused === 'msg' ? 'border-primary crimson-glow' : 'border-primary/20'} text-foreground text-sm font-mono p-3 outline-none resize-none transition-all`}
                  placeholder="Begin encrypted transmission..."
                  onFocus={() => setFocused('msg')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <button
                type="submit"
                className="molten-hover bg-primary/10 border border-primary text-primary px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors relative overflow-hidden"
              >
                <span className="relative z-10">▶ TRANSMIT</span>
              </button>
            </form>
          </div>
        </section>
      </SectionActivation>
    </div>
  );
};

export default CommsSection;
