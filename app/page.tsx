"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import InstagramPostCard from "@/components/InstagramPostCard";
import Slideshow from "@/components/Slideshow";
import { HomePage } from "@/services/CosmicTypes";
import Link from "next/link";

const page_to_link = new Map([
  ["research-topics", "/research/topics"],
  ["research-publications", "/research/publications"],
  ["families", "/get-involved/families"],
  ["news", "/news"],
  ["contact-us", "/contact"],
  ["our-team", "/team"],
  ["students", "/get-involved/students"],
]);

export default function Home() {
  const slides = ["/slideshow1.png", "/slideshow1.png", "/slideshow1.png"];
  // Clone of first slide appended so we can slide into it, then snap back invisibly
  const extendedSlides = [...slides, slides[0]];

  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      // After sliding into the clone, snap back to real first slide without animation
      const timer = setTimeout(() => {
        setAnimated(false);
        setCurrent(0);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [current]);

  useEffect(() => {
    if (!animated) {
      // Re-enable animation after the snap
      const timer = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  const activeIndex = current === extendedSlides.length - 1 ? 0 : current;

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <style>{`
      .orange-text {
        color: #E79121;
      }
    `}</style>

      <section className="max-w-6xl w-full flex flex-col md:flex-row gap-16 py-16 px-8 items-center">
        <div className="relative w-full aspect-video md:w-[420px] md:h-[520px] md:aspect-auto flex-shrink-0 rounded-3xl overflow-hidden">
          <div
            className={`flex h-full ${animated ? "transition-transform duration-900 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${current * (100 / extendedSlides.length)}%)`, width: `${extendedSlides.length * 100}%` }}
          >
            {extendedSlides.map((slide, i) => (
              <div key={i} className="relative h-full flex-shrink-0" style={{ width: `${100 / extendedSlides.length}%` }}>
                <Image src={slide} alt="Lab photo" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 w-full flex justify-center gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === activeIndex ? "bg-[#F2AD3D]" : "bg-[#459A9F]"}`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-lg">
          <img src="./logo.png" className="w-full mb-4"></img>

          <p className="text-xl font-bold text-[#459A9F] mb-4">
            The Mind & Morality Lab is a developmental psychology lab at Brown
            University in the Department of Cognitive & Psychological Sciences.
          </p>

          <p className="text-xl text-[#459A9F]">
            We focus on understanding the psychological roots of human morality
            through an interdisciplinary lens, drawing on philosophical, legal,
            and psychological perspectives in our work with both children and
            adults.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FEEFD6] py-16 flex justify-center">
        <div className="max-w-6xl w-full px-8">
          <h2 className="text-2xl font-semibold mb-10 orange-text">
            News & Announcements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <InstagramPostCard
              caption="Excited to share our latest findings on moral development in children!"
              likes={142}
            />
            <InstagramPostCard
              caption="We're hiring a Lab Manager — come join our team at Brown University!"
              likes={98}
            />
            <InstagramPostCard
              caption="New publication out now. Check the link in our bio for the full paper."
              likes={211}
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl w-full py-20 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              text: home.metadata.bottom_text1,
              pageKey: home.metadata.bottom_page_link1,
              image: home.metadata.bottom_image1,
            },
            {
              text: home.metadata.bottom_text2,
              pageKey: home.metadata.bottom_page_link2,
              image: home.metadata.bottom_image2,
            },
            {
              text: home.metadata.bottom_text3,
              pageKey: home.metadata.bottom_page_link3,
              image: home.metadata.bottom_image3,
            },
          ].map((section, idx) => {
            const href = page_to_link.get(section.pageKey) || section.pageKey;
            return (
              <Link href={href} key={idx} className="flex flex-col gap-3 group">
                <Image
                  src={section.image.imgix_url || section.image.url}
                  alt={section.text}
                  width={400}
                  height={240}
                  className="w-full rounded-3xl object-cover group-hover:scale-105 transition-transform"
                />
                <span className="text-lg font-semibold text-center mt-2">
                  {section.text}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
