import { useEffect, useState } from "react";

const TacticalSidebar = () => {
  const [temp, setTemp] = useState(58);
  const [cpu, setCpu] = useState(45);
  const [mem, setMem] = useState(62);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(55 + Math.floor(Math.random() * 8));
      setCpu(40 + Math.floor(Math.random() * 20));
      setMem(58 + Math.floor(Math.random() * 12));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="hidden lg:flex w-24 border-r border-primary/20 flex-col justify-between items-center py-6 bg-surface/50 backdrop-blur-sm relative z-10">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 border border-primary flex items-center justify-center bg-primary/10">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-fast" />
        </div>
        <div className="writing-vertical-lr text-[10px] tracking-[0.3em] text-primary/60 font-bold uppercase rotate-180 h-48 flex items-center gap-4">
          <span>Sys_Diag_Stable</span>
          <span className="text-primary">///</span>
          <span>Protocol_Crimson</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-[10px] font-mono text-primary/40 text-center">
        <div>TEMP<br /><span className="text-foreground">{temp}°C</span></div>
        <div>CPU<br /><span className="text-foreground">{cpu}%</span></div>
        <div>MEM<br /><span className="text-foreground">{mem}%</span></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </aside>
  );
};

export default TacticalSidebar;
