"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  duration = 700,
  as = "div",
  className = "",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: CSSProperties = {
    transform: visible ? "translate3d(0,0,0)" : `translate3d(${x}px, ${y}px, 0)`,
    opacity: visible ? 1 : 0,
    transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
    willChange: "transform, opacity",
  };

  const Tag = as as "div";
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className} style={style}>
      {children}
    </Tag>
  );
}
