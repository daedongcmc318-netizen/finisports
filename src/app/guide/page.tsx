"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/i18n";

type CategoryKey = "barospine" | "kids" | "golf" | "foamroller";

interface CategoryMeta {
  key: CategoryKey;
  href: string;
  image: string | null;
  // Tailwind color classes for gradient and accent
  gradientFrom: string;
  gradientTo: string;
  accent: string;
  accentText: string;
}

const CATEGORIES: CategoryMeta[] = [
  {
    key: "barospine",
    href: "/guide/barospine",
    image: "/images/barospine.png",
    gradientFrom: "from-emerald-50",
    gradientTo: "to-teal-100",
    accent: "bg-emerald-500",
    accentText: "text-emerald-600",
  },
  {
    key: "kids",
    href: "/guide/kids",
    image: "/images/baros-mat.png",
    gradientFrom: "from-amber-50",
    gradientTo: "to-orange-100",
    accent: "bg-amber-500",
    accentText: "text-amber-600",
  },
  {
    key: "golf",
    href: "/guide/golf",
    image: "/images/barospine-pro.png",
    gradientFrom: "from-slate-100",
    gradientTo: "to-slate-200",
    accent: "bg-slate-700",
    accentText: "text-slate-700",
  },
  {
    key: "foamroller",
    href: "/guide/foamroller",
    image: "/images/mini-foamroller.jpg",
    gradientFrom: "from-violet-50",
    gradientTo: "to-fuchsia-100",
    accent: "bg-violet-500",
    accentText: "text-violet-600",
  },
];

export default function GuidePage() {
  const { t } = useLang();
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/videos")
      .then((r) => (r.ok ? r.json() : []))
      .then((videos: { category: string }[]) => {
        const next: Record<string, number> = {};
        for (const v of videos) next[v.category] = (next[v.category] || 0) + 1;
        setCounts(next);
      })
      .catch(() => setCounts({}));
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-primary tracking-[0.3em] uppercase mb-4">
              {t.guideHub.badge}
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              {t.guideHub.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.guideHub.desc}
            </p>
          </div>
          {/* Decorative lines */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </section>

        {/* Category Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
              {t.guideHub.categories.map((cat, i) => {
                const meta = CATEGORIES[i];
                const count = counts[meta.key] || 0;

                return (
                  <Link
                    key={meta.href}
                    href={meta.href}
                    className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
                  >
                    {/* Visual area */}
                    <div
                      className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${meta.gradientFrom} ${meta.gradientTo}`}
                    >
                      {meta.image && (
                        <Image
                          src={meta.image}
                          alt={cat.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain p-10 md:p-14 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      )}

                      {/* Video count badge */}
                      {count > 0 && (
                        <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/60 shadow-sm">
                          <svg className={`w-3.5 h-3.5 ${meta.accentText}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span className="text-xs font-bold text-gray-700">
                            {count}
                          </span>
                        </div>
                      )}

                      {/* Subtle corner tag */}
                      <div className="absolute top-5 left-5">
                        <span className={`inline-block w-2 h-2 rounded-full ${meta.accent}`} />
                        <span className={`ml-2 text-[10px] font-bold ${meta.accentText} tracking-[0.2em] uppercase align-middle`}>
                          {cat.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Text area */}
                    <div className="p-6 md:p-7 flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-xl md:text-2xl font-extrabold mb-1 tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {cat.desc}
                        </p>
                      </div>

                      <div className={`shrink-0 w-11 h-11 rounded-full ${meta.accent} text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-10deg] transition-transform duration-300`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Help / CTA bottom strip */}
            <div className="mt-14 md:mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 md:p-12">
              <div className="relative max-w-2xl">
                <p className="text-sm font-semibold text-primary tracking-widest mb-2 uppercase">
                  Need Help?
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
                  어떤 가이드부터 시작할지 고민되시나요?
                </h2>
                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                  고객센터로 문의 주시면 체형과 운동 목적에 맞는 가이드를 추천해 드립니다.
                </p>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  고객센터 바로가기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Decorative dots */}
              <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute right-16 top-6 w-24 h-24 rounded-full bg-white/5" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
