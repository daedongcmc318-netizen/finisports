"use client";

import { useLang } from "@/i18n";
import MouseParallax from "./MouseParallax";
import Reveal from "./Reveal";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      <MouseParallax strength={30} className="absolute inset-0 pointer-events-none">
        {/* Decorative shapes with parallax depth */}
        <div
          data-parallax="1.4"
          className="absolute top-32 left-[8%] w-16 h-28 md:w-20 md:h-36 rounded-full border-4 border-primary/30 -rotate-[15deg] animate-float-y"
        />
        <div
          data-parallax="-1.6"
          className="absolute top-24 right-[10%] w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-primary/80 rotate-12 animate-pulse-slow"
        />
        <div
          data-parallax="0.9"
          className="absolute bottom-32 left-[15%] w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent/60 animate-pulse-slow"
        />
        <div
          data-parallax="-2.2"
          className="absolute bottom-40 right-[18%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-200 to-white shadow-lg animate-float-y"
        />
        <div
          data-parallax="0.6"
          className="absolute top-1/2 left-[4%] w-6 h-6 rounded-full bg-primary/40 animate-float-x hidden md:block"
        />
        <div
          data-parallax="-0.8"
          className="absolute top-[35%] right-[6%] w-4 h-4 rounded-full bg-accent/70 animate-float-x hidden md:block"
        />
      </MouseParallax>

      {/* Bottom warm gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-warm to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <Reveal delay={0} y={16}>
          <p className="text-sm md:text-base font-semibold text-primary tracking-widest mb-4 uppercase">
            {t.hero.badge}
          </p>
        </Reveal>
        <Reveal delay={120} y={28}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            {t.hero.headline1}
            <br />
            <span className="text-primary bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text animate-gradient">
              {t.hero.headline2}
            </span>
          </h1>
        </Reveal>
        <Reveal delay={240} y={20}>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
            {t.hero.sub1}
            <br className="hidden sm:block" />
            {t.hero.sub2}
          </p>
        </Reveal>
        <Reveal delay={360} y={16}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://smartstore.naver.com/finisports" target="_blank" rel="noopener noreferrer"
              className="btn-shimmer px-8 py-4 bg-primary text-white font-bold rounded-full text-sm md:text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] duration-200"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#bestsellers"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full text-sm md:text-base hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] duration-200"
            >
              {t.hero.cta2}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Category tabs at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="flex justify-center gap-6 md:gap-10 text-xs md:text-sm font-semibold text-gray-400 tracking-wider">
          {t.hero.categories.map((cat, i) => (
            <Reveal
              as="span"
              key={cat}
              delay={500 + i * 80}
              y={10}
              className="hover:text-primary cursor-pointer transition-colors hidden sm:inline"
            >
              {cat}
            </Reveal>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none sm:hidden">
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-gray-400 animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
