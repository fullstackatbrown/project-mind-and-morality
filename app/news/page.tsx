"use client";
import NewsItem from "../components/NewsItem";
import { useState, useEffect } from "react";

type NewsThumbnail = {
  id: string;
  title?: string;
  metadata?: {
    publish_date?: string;
    summary?: string;
  };
};

const formatPublishDate = (value?: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString();
};

export default function NewsPage() {
  const [news, setNews] = useState<NewsThumbnail[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [error, setError] = useState("");
  const PAGE_SIZE = 15;

  useEffect(() => {
    let ignore = false;
    async function fetchNews() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/news/thumbnails?limit=${PAGE_SIZE}&page=${page}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const items = (data.thumbnails || []) as NewsThumbnail[];
        if (ignore) return;
        setHasNext(items.length > PAGE_SIZE);
        setNews(items.slice(0, PAGE_SIZE));
      } catch (e) {
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
    return () => {
      ignore = true;
    };
  }, [page]);

  return (
    <main className="mx-auto max-w-[1214px] px-6 pb-20">
      <h1 className="mt-10 mb-8 text-center text-[36px] md:text-[50px] font-bold tracking-[-0.02em] leading-[1.1] text-[#459A9F]">
        News & Announcements
      </h1>

      {error && <div className="text-red-600 text-center mb-4">{error}</div>}
      <div className="space-y-12 min-h-[300px]">
        {loading ? (
          <div className="text-center text-[#459A9F]">Loading...</div>
        ) : news.length === 0 ? (
          <div className="text-center text-[#459A9F]">No news found.</div>
        ) : (
          news.map((item) => (
            <NewsItem
              key={item.id}
              title={item.title || "Untitled"}
              date={formatPublishDate(item.metadata?.publish_date)}
              excerpt={item.metadata?.summary || ""}
            />
          ))
        )}
      </div>
      <div className="flex justify-center gap-[10%] items-center mt-12">
        <button
          className="rounded-full px-6 py-2 text-sm font-medium border-2 border-[#459A9F] text-[#459A9F] duration-300 hover:scale-110 disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0 || loading}
        >
          Previous
        </button>
        <span className="text-[#459A9F] font-semibold">Page {page + 1}</span>
        <button
          className="rounded-full px-6 py-2 text-sm font-medium border-2 border-[#459A9F] text-[#459A9F] duration-300 hover:scale-110 disabled:opacity-50"
          onClick={() => setPage((p) => p + 1)}
          disabled={!hasNext || loading}
        >
          Next
        </button>
      </div>
    </main>
  );
}
