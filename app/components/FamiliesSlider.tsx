import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { GetInvolvedFamiliesItem } from "@/services/CosmicTypes";

interface FamiliesSliderProps {
  items: GetInvolvedFamiliesItem[];
}

export default function FamiliesSlider({ items }: FamiliesSliderProps) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  if (total === 0) return null;
  const item = items[index];

  return (
    <div className="mt-16 rounded-[40px] bg-[#b8dce1] px-5 py-6 sm:px-7 sm:py-8 md:px-11 md:py-10">
      <div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-[52%_48%] lg:items-center lg:gap-10 lg:px-8">
        <button
          aria-label="Previous"
          className="absolute left-[-52px] top-1/2 hidden -translate-y-1/2 text-white/85 lg:block"
          onClick={prev}
        >
          <ChevronLeft className="h-12 w-12" strokeWidth={1.8} />
        </button>

        <div className="h-[430px] w-full rounded-[36px] bg-[#d8dee0] flex items-center justify-center overflow-hidden">
          {item.metadata.image?.url && (
            <img
              src={item.metadata.image.url}
              alt={item.metadata.item_header}
              className="max-h-full max-w-full object-contain rounded-[36px]"
            />
          )}
        </div>

        <div className="pr-2">
          <h2 className="text-[50px] leading-[1.05] font-semibold tracking-[-0.05em] text-[#5b96a0] md:text-[48px]">
            {item.metadata.item_header}
          </h2>

          <p className="mt-6 max-w-[560px] text-[18px] leading-[1.55] font-normal tracking-[-0.005em] text-[#5d959f] md:text-[20px]">
            {item.metadata.item_text}
          </p>

          {item.metadata.link && (
            <a
              href={item.metadata.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-[16px] bg-white px-5 py-2.5 text-[16px] leading-none font-medium text-[#5b96a0] md:text-[18px]"
            >
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
              {item.metadata.link_text}
            </a>
          )}
        </div>

        <button
          aria-label="Next"
          className="absolute right-[-52px] top-1/2 hidden -translate-y-1/2 text-white/85 lg:block"
          onClick={next}
        >
          <ChevronRight className="h-12 w-12" strokeWidth={1.8} />
        </button>
      </div>

      <div className="mt-7 flex justify-center gap-3">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full ${i === index ? "bg-[#d89a37]" : "bg-[#5b96a0]"}`}
          />
        ))}
      </div>
    </div>
  );
}
