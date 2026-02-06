"use client";
import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    function animateCount() {
      const startTime = performance.now();

      function update(currentTime: number) {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        setCount(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
}
