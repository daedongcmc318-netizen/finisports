"use client";

import { useLang } from "@/i18n";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
            {t.testimonials.title} <span className="text-primary">{t.testimonials.titleHighlight}</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.testimonials.reviews.map((r, i) => (
            <Reveal key={i} delay={i * 120} y={28}>
              <div className="bg-gray-50 rounded-2xl p-7 md:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group h-full">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {r.tag}
                </span>

                {/* Stars - stagger pulse on hover */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-yellow-400 transition-transform duration-300 group-hover:scale-125"
                      style={{ transitionDelay: `${j * 50}ms` }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <p className="text-sm font-semibold text-gray-400">
                  &mdash; {r.author}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
