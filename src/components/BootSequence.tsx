import { useState, useEffect } from "react";

const BOOT_LINES = [
  { text: "PROTOCOL_CRIMSON v2.0 // TACTICAL OS", delay: 0 },
  { text: "═══════════════════════════════════════", delay: 150 },
  { text: "", delay: 300 },
  { text: "> BIOS CHECK................ OK", delay: 400 },
  { text: "> MEMORY ALLOCATION......... 64GB VERIFIED", delay: 600 },
  { text: "> NEURAL LINK............... SYNCING", delay: 800 },
  { text: "> ENCRYPTION LAYER.......... AES-256 ACTIVE", delay: 1000 },
  { text: "> FIREWALL STATUS........... ARMED", delay: 1150 },
  { text: "> THREAT DETECTION.......... ONLINE", delay: 1300 },
  { text: "", delay: 1400 },
  { text: "LOADING OPERATOR PROFILE...", delay: 1500 },
  { text: ">> KAMRUL_HASAN_UJJAL", delay: 1700 },
  { text: ">> AI_ENGINEER // DHAKA, BD", delay: 1850 },
  { text: "", delay: 1950 },
  { text: "ALL SYSTEMS NOMINAL. INITIALIZING INTERFACE...", delay: 2100 },
];

const TOTAL_DURATION = 2800;

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    BOOT_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), line.delay));
    });

    timers.push(setTimeout(() => setFadeOut(true), TOTAL_DURATION));
    timers.push(setTimeout(() => onComplete(), TOTAL_DURATION + 600));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="scanlines pointer-events-none" />
      <div className="w-full max-w-2xl px-6 font-mono text-xs md:text-sm leading-relaxed">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`${
              line.text.startsWith(">>")
                ? "text-primary crimson-text-glow"
                : line.text.startsWith(">")
                ? "text-foreground"
                : line.text.startsWith("═")
                ? "text-primary/40"
                : line.text === ""
                ? "h-3"
                : "text-muted-foreground"
            }`}
          >
            {line.text}
          </div>
        ))}
        {!fadeOut && visibleLines > 0 && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse mt-1" />
        )}
      </div>
    </div>
  );
};

export default BootSequence;
