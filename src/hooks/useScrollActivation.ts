import { useEffect, useRef, useState } from "react";

export const useScrollActivation = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !activated) {
          setActivated(true);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, activated]);

  return { ref, activated };
};
