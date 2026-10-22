"use client";

import { useLang } from "@/i18n";
import Reveal from "./Reveal";

export default function PainPoints() {
  const { t } = useLang();

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            {t.painPoints.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-center text-gray-400 mb-14 text-sm">
            {t.painPoints.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-4 md:gap-5">
          {t.painPoints.items.map((point, i) => (
            <Reveal key={i} delay={i * 90} y={20}>
              <div
                className="bg-white rounded-2xl px-6 py-5 md:px-8 md:py-6 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    &ldquo;{point}&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center mt-12 text-lg md:text-xl font-semibold text-gray-800">
            {t.painPoints.transition}{" "}
            <span className="text-primary">{t.painPoints.transitionHighlight}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
