import { useScrollActivation } from "@/hooks/useScrollActivation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const SectionActivation = ({ children, className = "", delay = 0 }: Props) => {
  const { ref, activated } = useScrollActivation(0.1);

  return (
    <div
      ref={ref}
      className={`section-activation ${activated ? "sa-active" : ""} ${className}`}
      style={{ "--sa-delay": `${delay}ms` } as React.CSSProperties}
    >
      {/* Glitch flicker overlay */}
      <div className="sa-glitch-overlay" />
      {/* Scanline sweep */}
      <div className="sa-scanline" />
      {/* Grid pulse */}
      <div className="sa-grid-pulse" />
      {/* Content */}
      <div className="sa-content">{children}</div>
    </div>
  );
};

export default SectionActivation;
