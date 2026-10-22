"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useLang } from "@/i18n";

interface Exercise {
  title: string;
  desc: string;
  image: string;
}

interface Props {
  category: string;
  categoryKey: string;
  subtitle: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

interface Video {
  id: string;
  title: string;
  youtube_url: string | null;
  sort_order: number;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?#]+)/
  );
  return match ? match[1] : null;
}

function getGoogleDriveId(url: string): string | null {
  const patterns = [
    /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/,
    /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/,
    /drive\.google\.com\/uc\?(?:export=\w+&)?id=([a-zA-Z0-9_-]+)/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

type EmbedInfo = {
  provider: "youtube" | "drive";
  embedUrl: string;
  thumbnail: string | null;
  autoplayUrl: string;
};

function getEmbed(url: string): EmbedInfo | null {
  const ytId = getYouTubeId(url);
  if (ytId) {
    return {
      provider: "youtube",
      embedUrl: `https://www.youtube.com/embed/${ytId}`,
      thumbnail: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
      autoplayUrl: `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`,
    };
  }
  const gdId = getGoogleDriveId(url);
  if (gdId) {
    const base = `https://drive.google.com/file/d/${gdId}/preview`;
    return {
      provider: "drive",
      embedUrl: base,
      thumbnail: null,
      autoplayUrl: base,
    };
  }
  return null;
}

export default function GuidePageTemplate({
  category,
  categoryKey,
  subtitle,
  title,
  description,
  exercises,
}: Props) {
  const { t } = useLang();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/videos?category=${categoryKey}`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => setVideos(data))
      .catch(() => setVideos([]))
      .finally(() => setLoading(false));
  }, [categoryKey]);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-sm font-semibold text-primary tracking-widest mb-3 uppercase">
              {subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Exercise Cards */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-14">
                <span className="text-primary">{category}</span> {t.guideTemplate.stretchTitle}
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {exercises.map((ex, i) => (
                <Reveal key={i} delay={i * 100} y={24}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-400 h-full">
                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                      <Image src={ex.image} alt={ex.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute top-3 left-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 backdrop-blur text-primary text-xs font-extrabold shadow">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{ex.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{ex.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Video
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                  {t.guideTemplate.videoTitle}
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto" />
              </div>
            </Reveal>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="rounded-2xl bg-gray-100 animate-pulse">
                    <div className="aspect-video" />
                    <div className="h-14" />
                  </div>
                ))}
              </div>
            ) : videos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {videos.map((v, i) => {
                  const embed = v.youtube_url ? getEmbed(v.youtube_url) : null;
                  const isPlaying = playing === v.id;

                  return (
                    <Reveal key={v.id} delay={i * 80} y={24}>
                      <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-400 h-full">
                        {/* Number badge */}
                        <div className="absolute top-3 left-3 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-extrabold shadow-lg shadow-primary/40 ring-2 ring-white">
                          {i + 1}
                        </div>

                        {embed ? (
                          <div className="relative aspect-video bg-black overflow-hidden">
                            {isPlaying ? (
                              <iframe
                                src={embed.autoplayUrl}
                                className="absolute inset-0 w-full h-full"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                title={v.title}
                              />
                            ) : (
                              <button
                                type="button"
                                onClick={() => setPlaying(v.id)}
                                aria-label={`Play ${v.title}`}
                                className="absolute inset-0 w-full h-full"
                              >
                                {embed.thumbnail ? (
                                  <Image
                                    src={embed.thumbnail}
                                    alt={v.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    unoptimized
                                  />
                                ) : (
                                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900" />
                                )}
                                {/* dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 group-hover:from-black/70 transition-colors" />
                                {/* play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                                    <span className="absolute inset-0 rounded-full bg-white/30 blur-md group-hover:bg-primary/50 transition-colors" />
                                    <span className="absolute inset-0 rounded-full bg-white/90 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-xl" />
                                    <svg
                                      className="relative w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white ml-1 transition-colors"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                    <span className="absolute inset-0 rounded-full border-2 border-white/80 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                  </span>
                                </div>
                                {/* corner tag */}
                                <span className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold">
                                  {embed.provider === "youtube" ? (
                                    <>
                                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
                                      </svg>
                                      YouTube
                                    </>
                                  ) : (
                                    <>
                                      <svg className="w-3 h-3" viewBox="0 0 48 48" fill="currentColor">
                                        <path d="M17.1 4L4 28l6.3 11 13.1-23z" />
                                        <path d="M30.9 4H17.1l13.1 23h13.6z" />
                                        <path d="M23.4 29L17.1 40h26.7l6.2-11z" opacity="0.7" />
                                      </svg>
                                      Drive
                                    </>
                                  )}
                                </span>
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="relative aspect-video bg-gradient-to-br from-gray-100 via-gray-50 to-white flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-14 h-14 mx-auto rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                                <svg className="w-6 h-6 text-gray-300 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <p className="text-xs text-gray-400 font-medium">{t.guideTemplate.videoSoon}</p>
                            </div>
                          </div>
                        )}

                        <div className="p-5">
                          <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {v.title}
                          </h3>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            ) : (
              <Reveal>
                <div className="relative text-center py-16 px-6 bg-white rounded-3xl border border-dashed border-gray-200">
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8 max-w-xl mx-auto">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div key={n} className="text-center" style={{ animation: `float-y 6s ease-in-out ${n * 0.3}s infinite` }}>
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{t.guideTemplate.videoSoon}</p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-600 rounded-full text-xs font-medium border border-gray-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {t.guideTemplate.videoPlaceholder}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
