import { useEffect, useState } from "react";

const CrimsonHeader = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toISOString().slice(11, 19) + " UTC");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-16 border-b border-primary/20 flex items-center justify-between px-6 bg-background/90 backdrop-blur sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <div className="h-2 w-2 bg-primary rounded-full tally-light" />
        <h1 className="text-xl font-bold tracking-widest uppercase text-foreground">
          Protocol: <span className="text-primary crimson-text-glow">CRIMSON</span>
          <span className="text-xs align-top text-muted-foreground ml-1">v.2.0</span>
        </h1>
      </div>
      <div className="hidden md:flex items-center gap-8 font-mono text-xs text-primary/70">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          NET_UPLINK: ACTIVE
        </div>
        <div className="flex items-center gap-2">
          🔒 ENCRYPTION: 256-BIT
        </div>
        <div className="text-muted-foreground">{time}</div>
      </div>
    </header>
  );
};

export default CrimsonHeader;
