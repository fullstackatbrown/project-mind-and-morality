"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import InstagramPostCard from "@/components/InstagramPostCard";

export default function Home() {
  const slides = ["/slideshow1.png", "/slideshow1.png", "/slideshow1.png"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-zinc-50 flex flex-col items-center">
      <style>{`
      .orange-text {
        color: #E79121;
      }
    `}</style>

      <section className="max-w-6xl w-full flex flex-col md:flex-row gap-16 py-16 px-8 items-center">
        <div className="relative w-full aspect-video md:w-[420px] md:h-[520px] md:aspect-auto flex-shrink-0 rounded-3xl overflow-hidden">
          <Image
            src={slides[current]}
            alt="Lab photo"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full ${i === current ? "bg-teal-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-lg">
          <img src="./logo.png"></img>

          <p className="text-xl text-teal-800 mb-4">
            The Mind & Morality Lab is a developmental psychology lab at Brown
            University in the Department of Cognitive & Psychological Sciences.
          </p>

          <p className="text-xl text-teal-800">
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
          <div className="flex flex-col gap-3">
            <img
              src="/homepagebottomsection/ResearchTopicsImage.png"
              alt="Research Topics"
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <img
              src="/homepagebottomsection/ParticipateImage.png"
              alt="Participate With Your Child"
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <img
              src="/homepagebottomsection/ProspectiveStudentsImage.png"
              alt="Prospective Students"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
