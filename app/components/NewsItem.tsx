"use client";

import { useState } from "react";

type Props = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
};

export default function NewsItem({ title, date, excerpt }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-full rounded-2xl p-6 md:p-8 transition-colors ${
        hovered ? "bg-[#FCD28F]" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="shrink-0">
          <div className="h-[230px] w-[230px] rounded-xl bg-gray-200" />
        </div>

        <div className="flex-1 flex flex-col md:min-h-[230px]">
          <div>
            <h3 className="mb-1 text-2xl font-bold text-[#D47A05]">{title}</h3>
            <p className="mb-4 text-sm font-semibold text-[#D47A05]">{date}</p>
          </div>

          <div className="mt-auto">
            <p className="mb-4 max-w-[520px] text-sm text-[#8b4c05]">{excerpt}</p>
            <button
              className={`rounded-full px-4 py-1 text-sm font-medium border-2 border-[#D47A05] transition-colors ${
                hovered
                  ? "bg-white text-[#D47A05]"
                  : "bg-[#FCD28F] text-[#D47A05]"
              }`}
              aria-label="Read more"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
