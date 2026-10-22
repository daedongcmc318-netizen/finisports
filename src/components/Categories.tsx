"use client";

import { useState } from "react";
import { useLang } from "@/i18n";
import Reveal from "./Reveal";

type IconProps = { className?: string };

// Clean line-art icons, 24x24, currentColor
const ICONS: ((p: IconProps) => React.ReactElement)[] = [
  // 0 — Home training: dumbbell
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 8v8" />
      <path d="M17.5 8v8" />
      <rect x="4" y="9" width="2.5" height="6" rx="0.6" />
      <rect x="17.5" y="9" width="2.5" height="6" rx="0.6" />
      <path d="M6.5 12h11" />
      <path d="M3 10.5v3" />
      <path d="M21 10.5v3" />
    </svg>
  ),
  // 1 — Yoga / Pilates: lotus/meditation
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="2.2" />
      <path d="M12 8.2v4.2" />
      <path d="M12 12.4c-3 0-5.5 2-6.5 4.6 2.2.6 4.3.8 6.5.8s4.3-.2 6.5-.8c-1-2.6-3.5-4.6-6.5-4.6Z" />
      <path d="M8.5 13.6c-2 .4-3.6 1.5-4.5 3" />
      <path d="M15.5 13.6c2 .4 3.6 1.5 4.5 3" />
    </svg>
  ),
  // 2 — Rehab / Posture: spine
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M9 5.5h6" />
      <path d="M8.5 9h7" />
      <path d="M8 12.5h8" />
      <path d="M8.5 16h7" />
      <path d="M9 19.5h6" />
    </svg>
  ),
  // 3 — Diet: flame
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c1.5 2.5 4 4.3 4 7.5a4 4 0 1 1-8 0c0-1.6.8-2.9 1.6-4 .2 1 .7 1.6 1.4 2 0-2 .3-3.6 1-5.5Z" />
      <path d="M10.5 14.5c.3.6.9 1 1.5 1s1.2-.4 1.5-1" />
    </svg>
  ),
  // 4 — PT / Trainer: person with whistle
  ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5.5" r="2.2" />
      <path d="M8 11.5c0-1.7 1.8-3 4-3s4 1.3 4 3v1l-2 1v6h-4v-6l-2-1v-1Z" />
      <circle cx="17" cy="13.5" r="1.4" />
      <path d="M16.1 12.6l-1.6-1" />
    </svg>
  ),
];

export default function Categories() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const cat = t.categoriesSection.items[active];
  const ActiveIcon = ICONS[active] ?? ICONS[0];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
            {t.categoriesSection.title} <span className="text-primary">{t.categoriesSection.titleHighlight}</span>
          </h2>
        </Reveal>

        {/* Tab buttons */}
        <Reveal delay={120}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {t.categoriesSection.items.map((c, i) => {
              const Icon = ICONS[i] ?? ICONS[0];
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary hover:shadow-sm"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active category card */}
        <div
          key={active}
          className="relative max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden"
          style={{ animation: "pop-in 500ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          {/* decorative background icon */}
          <ActiveIcon className="pointer-events-none absolute -right-6 -bottom-6 w-40 h-40 text-primary/[0.06]" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
              <ActiveIcon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{cat.label}</h3>
            <blockquote className="text-lg md:text-xl text-gray-500 italic mb-6 border-l-4 border-primary/30 pl-4">
              {cat.quote}
            </blockquote>
            <p className="text-gray-600 leading-relaxed mb-8">{cat.desc}</p>
            <a
              href="https://smartstore.naver.com/finisports" target="_blank" rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark hover:-translate-y-0.5 transition-all text-sm group"
            >
              {cat.cta}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
