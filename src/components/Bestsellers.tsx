"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, STORE_URL } from "@/data/products";
import { useLang } from "@/i18n";
import Reveal from "./Reveal";

const FEATURED = PRODUCTS.slice(0, 4);

export default function Bestsellers() {
  const { t } = useLang();
  const featuredTranslations = t.products.slice(0, 4);

  return (
    <section id="bestsellers" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold text-primary tracking-widest text-center mb-3 uppercase">
            {t.bestsellers.badge}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            {t.bestsellers.title}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
            {t.bestsellers.desc}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURED.map((p, i) => (
            <Reveal key={i} delay={i * 100} y={30}>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-400 h-full"
              >
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={featuredTranslations[i].name}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold text-primary bg-white/80 rounded-full backdrop-blur-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    {p.category}
                  </span>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="font-bold text-sm md:text-base mb-2 group-hover:text-primary transition-colors">{featuredTranslations[i].name}</h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {featuredTranslations[i].desc}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="text-center mt-12">
            <Link
              href="/wado"
              className="btn-shimmer group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/25 text-sm"
            >
              {t.bestsellers.viewAll}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
