"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Video {
  id: string;
  category: string;
  title: string;
  youtube_url: string | null;
  sort_order: number;
}

const CATEGORIES = [
  { key: "barospine", label: "바로스파인" },
  { key: "kids", label: "키즈" },
  { key: "golf", label: "골프" },
  { key: "foamroller", label: "폼롤러" },
];

export default function AdminVideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ category: "barospine", title: "", youtube_url: "", sort_order: 0 });

  const loadVideos = useCallback(async () => {
    const res = await fetch("/api/videos");
    if (res.ok) setVideos(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { loadVideos(); }, [loadVideos]);

  function resetForm() {
    setForm({ category: "barospine", title: "", youtube_url: "", sort_order: 0 });
    setEditId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = editId ? `/api/videos/${editId}` : "/api/videos";
    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    resetForm();
    loadVideos();
  }

  async function handleDelete(id: string) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await fetch(`/api/videos/${id}`, { method: "DELETE" });
    loadVideos();
  }

  function handleEdit(v: Video) {
    setEditId(v.id);
    setForm({
      category: v.category,
      title: v.title,
      youtube_url: v.youtube_url || "",
      sort_order: v.sort_order,
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center gap-4 h-16">
          <Link href="/admin" className="text-sm text-gray-400 hover:text-primary">
            &larr; 대시보드
          </Link>
          <h1 className="font-bold">동영상 관리</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
          <h2 className="font-bold text-lg mb-4">{editId ? "영상 수정" : "새 영상 추가"}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">카테고리</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.key} value={c.key}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">정렬 순서</label>
              <input
                type="number"
                value={form.sort_order}
                onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">영상 제목</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="예: #1 기본 스트레칭"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">영상 URL (YouTube 또는 Google Drive)</label>
            <input
              type="url"
              value={form.youtube_url}
              onChange={(e) => setForm({ ...form, youtube_url: e.target.value })}
              placeholder="https://www.youtube.com/watch?v=... 또는 https://drive.google.com/file/d/..."
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <p className="text-xs text-gray-400 mt-1">
              YouTube 공유 링크, 또는 Google Drive 공유 링크(&quot;링크가 있는 모든 사용자 - 뷰어&quot; 권한 필요)를 입력하세요. 비워두면 &quot;영상 준비 중&quot; 플레이스홀더가 표시됩니다.
            </p>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg text-sm hover:bg-primary-dark transition-colors">
              {editId ? "수정" : "추가"}
            </button>
            {editId && (
              <button type="button" onClick={resetForm} className="px-5 py-2.5 bg-gray-100 text-gray-600 font-semibold rounded-lg text-sm hover:bg-gray-200 transition-colors">
                취소
              </button>
            )}
          </div>
        </form>

        {/* Video List */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="font-bold">등록된 영상 ({videos.length}개)</h2>
          </div>
          {loading ? (
            <div className="px-6 py-12 text-center text-gray-400">로딩 중...</div>
          ) : videos.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-400">등록된 영상이 없습니다.</div>
          ) : (
            <div className="divide-y divide-gray-50">
              {videos.map((v) => (
                <div key={v.id} className="px-6 py-4 flex items-center gap-4">
                  <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold text-primary bg-primary/10 rounded-full">
                    {CATEGORIES.find((c) => c.key === v.category)?.label}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{v.title}</p>
                    <p className="text-xs text-gray-400 truncate">{v.youtube_url || "URL 미등록"}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => handleEdit(v)} className="text-xs text-primary hover:underline">수정</button>
                    <button onClick={() => handleDelete(v.id)} className="text-xs text-red-400 hover:underline">삭제</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
