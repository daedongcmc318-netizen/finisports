"use client";

import { useState } from "react";
import { useLang } from "@/i18n";
import Reveal from "./Reveal";

export default function Categories() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const cat = t.categoriesSection.items[active];

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
            {t.categoriesSection.items.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                  i === active
                    ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary hover:shadow-sm"
                }`}
              >
                <span className="mr-1.5 inline-block transition-transform duration-300" style={{ transform: i === active ? "scale(1.2)" : "scale(1)" }}>{c.emoji}</span>
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active category card — key change triggers CSS re-animation */}
        <div
          key={active}
          className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          style={{ animation: "pop-in 500ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          <div className="text-5xl mb-4">{cat.emoji}</div>
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
    </section>
  );
}
