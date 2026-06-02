import { useEffect, useState } from "react";

interface Props {
  text: string;
  activated: boolean;
  speed?: number;
  className?: string;
  delay?: number;
}

const TerminalText = ({ text, activated, speed = 35, className = "", delay = 0 }: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!activated) return;
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [activated, delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <span className={className}>
      {started ? displayed : "\u00A0"}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-primary ml-[1px] animate-[terminal-cursor_0.6s_step-end_infinite] align-middle" />
      )}
    </span>
  );
};

export default TerminalText;
