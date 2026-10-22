"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

function getEmbedUrl(url: string): string | null {
  const ytId = getYouTubeId(url);
  if (ytId) return `https://www.youtube.com/embed/${ytId}`;
  const gdId = getGoogleDriveId(url);
  if (gdId) return `https://drive.google.com/file/d/${gdId}/preview`;
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-14">
              <span className="text-primary">{category}</span> {t.guideTemplate.stretchTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {exercises.map((ex, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image src={ex.image} alt={ex.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{ex.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{ex.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-14">
              {t.guideTemplate.videoTitle}
            </h2>

            {loading ? (
              <div className="text-center text-gray-400 py-12">...</div>
            ) : videos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((v) => {
                  const embedUrl = v.youtube_url ? getEmbedUrl(v.youtube_url) : null;
                  return (
                    <div key={v.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                      {embedUrl ? (
                        <div className="relative aspect-video">
                          <iframe
                            src={embedUrl}
                            className="absolute inset-0 w-full h-full"
                            allowFullScreen
                            allow="autoplay; encrypted-media"
                            loading="lazy"
                            title={v.title}
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-12 h-12 text-gray-300 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            <p className="text-xs text-gray-400">{t.guideTemplate.videoSoon}</p>
                          </div>
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-bold text-sm">{v.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                          <svg className="w-7 h-7 text-pink-400 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-gray-400">{t.guideTemplate.videoSoon}</p>
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-500 rounded-full text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {t.guideTemplate.videoPlaceholder}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
