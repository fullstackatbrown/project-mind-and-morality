"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SlideshowImage {
  title: string;
  slug: string;
  metadata: {
    image: {
      url: string;
      imgix_url?: string;
      name?: string;
    };
  };
}

interface SlideshowProps {
  images: SlideshowImage[];
}

export default function Slideshow({ images }: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const fadeTimeout = setTimeout(() => setFade(false), 400);
    return () => clearTimeout(fadeTimeout);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="relative w-full aspect-video md:w-[420px] md:h-[520px] md:aspect-auto flex-shrink-0 rounded-3xl overflow-hidden">
      <div
        className={`transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
      >
        <Image
          src={
            images[current].metadata.image.imgix_url ||
            images[current].metadata.image.url
          }
          alt={images[current].title || "Slideshow image"}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full ${i === current ? "bg-teal-500" : "bg-gray-300"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
