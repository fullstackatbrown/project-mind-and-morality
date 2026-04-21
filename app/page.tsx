"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  const slides = ["/slideshow1.png", "/slideshow1.png", "/slideshow1.png"]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="min-h-screen w-full bg-zinc-50 flex flex-col items-center">
      <style>{`
        .orange-text {
          color: #E79121;
        }
      `}</style>

      {/* <Header /> */}

      <section className="max-w-6xl w-full flex gap-16 py-16 px-8 items-center">
        <div className="relative w-[420px] h-[520px] rounded-3xl overflow-hidden">
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
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-teal-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-lg">
          <Image
            src="/logo.png"
            alt="Mind & Morality Lab logo"
            width={180}
            height={180}
            className="mb-6 h-auto w-auto"
          />

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

      <section className="w-full bg-[#e9d6b7] py-16 flex justify-center">
        <div className="max-w-6xl w-full px-8">
          <h2 className="text-2xl font-semibold mb-10 orange-text">
            News & Announcements
          </h2>

          <div className="grid grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#f0a83b] rounded-3xl p-5 text-center"
              >
                <div className="h-44 bg-gray-300 rounded-2xl mb-5"></div>

                <h3 className="text-white font-semibold">
                  We&apos;re Hiring for a Lab Manager
                </h3>

                <p className="text-white text-sm mt-2">07/01/2025</p>

                <button className="mt-4 bg-white orange-text px-4 py-1 rounded-full text-sm">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl w-full py-20 px-8">
        <div className="grid grid-cols-3 gap-12 text-teal-800">
          {[
            "Research Topics",
            "Participate With Your Child",
            "Prospective Students",
          ].map((title) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <div className="h-44 bg-gray-300 border-2 border-teal-500 rounded-3xl"></div>
            </div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}