"use client";

import { useLang } from "@/i18n";
import Reveal from "./Reveal";

export default function FinalCTA() {
  const { t } = useLang();

  return (
    <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Animated decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 animate-float-y" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5 animate-float-x" />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white/5 animate-pulse-slow hidden md:block" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1), transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {t.finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {t.finalCta.desc1}
            <br />
            {t.finalCta.desc2}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#bestsellers"
              className="btn-shimmer px-8 py-4 bg-white text-primary font-bold rounded-full text-sm md:text-base hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-0.5 active:scale-[0.98] duration-200"
            >
              {t.finalCta.cta1}
            </a>
            <a
              href="https://smartstore.naver.com/finisports" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full text-sm md:text-base hover:border-white hover:bg-white/10 transition-all hover:-translate-y-0.5 active:scale-[0.98] duration-200"
            >
              {t.finalCta.cta2}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
