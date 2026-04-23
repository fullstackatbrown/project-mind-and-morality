"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function GetInvolvedFamiliesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 3;

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  return (
    <main
      className={`${dmSans.className} w-full overflow-x-hidden bg-white pb-8 text-[#459a9f] md:pb-0`}
    >
      <div className="mx-auto box-border w-full max-w-[402px] px-[10%] pb-5 pt-10 md:hidden">
        <h1 className="text-center text-[22px] font-black leading-none tracking-[-0.09em] text-[#459a9f]">
          Get Involved for Families
        </h1>

        <p className="mx-auto mt-6 max-w-[251px] text-center text-[16px] font-black leading-[21px] text-[#E79121]">
          There are many ways to get involved in research!
        </p>
      </div>

      <section className="relative mb-10 bg-[#bcf1f5] py-6 md:hidden">
        <button
          type="button"
          onClick={goToPreviousSlide}
          aria-label="Previous slide"
          className="absolute left-[3%] top-[56%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center"
        >
          <Image
            src="/get-involved-families/arrow-left.svg"
            alt="Previous"
            width={18}
            height={30}
            className="h-[30px] w-[18px]"
          />
        </button>
        <button
          type="button"
          onClick={goToNextSlide}
          aria-label="Next slide"
          className="absolute right-[3%] top-[56%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center"
        >
          <Image
            src="/get-involved-families/arrow-right.svg"
            alt="Next"
            width={18}
            height={30}
            className="h-[30px] w-[18px]"
          />
        </button>

        <div className="mx-auto box-border w-full max-w-[402px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: slideCount }).map((_, index) => (
              <div
                key={index}
                className="box-border w-full shrink-0 px-[10%] pb-5"
              >
                <Image
                  src="/get-involved-families/in-person-studies.png"
                  alt="Mind and Morality Lab student with a child."
                  width={250}
                  height={250}
                  className="mx-auto h-auto w-full max-w-[250px] object-cover"
                  priority={index === 0}
                />

                <h2 className="mx-auto mt-7 max-w-[250px] text-[22px] font-black leading-none tracking-[-0.02em] text-[#459a9f]">
                  In Person Studies
                </h2>

                <p className="mx-auto mt-4 max-w-[250px] text-[14px] font-medium leading-[21px] text-[#459a9f]">
                  Live in Providence or the surrounding area? While the Mind and
                  Morality Lab is not currently conducting in-person studies,
                  other labs in our research group have several active in-person
                  studies that are currently recruiting children of various
                  ages. If you&apos;re interested in in-person studies, check
                  out the other developmental labs at Brown or click the button
                  to the right to be added to the general in-person contact
                  list.
                </p>

                <div className="mx-auto mt-5 max-w-[250px]">
                  <Link
                    href="https://sites.brown.edu/devlabs/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[34px] w-fit items-center rounded-[20px] bg-white pl-2 pr-4 text-[14px] font-medium leading-[21px] text-[#459a9f]"
                  >
                    <Image
                      src="/get-involved-families/form-icon.svg"
                      alt="Mind and Morality Lab student with a child."
                      width={18}
                      height={18}
                      className="mr-1.5 h-[18px] w-[18px]"
                    />
                    Dev Labs Interest Form
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-[7px]">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`h-[10px] w-[10px] rounded-full transition-transform ${
                  currentSlide === index
                    ? "bg-[#E79121] scale-110"
                    : "bg-[#459A9F]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto hidden max-w-[1512px] px-6 pb-24 pt-10 md:block md:px-8 md:pb-28 md:pt-14 lg:px-0 lg:pb-[40px] lg:pt-[90px]">
        <h1 className="mb-8 text-center text-[40px] font-black leading-[1.1] tracking-[-0.02em] text-[#459a9f] md:text-[50px] md:tracking-[-1px]">
          Get Involved for Families
        </h1>

        <p className="mb-10 text-center text-[28px] font-black leading-[1.2] tracking-[-0.02em] text-[#E79121] md:mb-[55px] md:text-[30px] md:tracking-[-0.6px]">
          There are many ways to get involved in research!
        </p>

        <section className="relative mx-auto rounded-[40px] bg-[#bcf1f5] px-4 py-6 md:px-8 md:py-8 lg:h-[688px] lg:w-[1243px] lg:px-[71px] lg:py-[57px]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: slideCount }).map((_, index) => (
                <div key={index} className="w-full shrink-0">
                  <div className="grid gap-6 lg:grid-cols-[520px_499px] lg:gap-[48px]">
                    <div className="mx-auto w-full max-w-[520px] lg:mx-0">
                      <Image
                        src="/get-involved-families/in-person-studies.png"
                        alt="Mind and Morality Lab student with a child."
                        width={520}
                        height={520}
                        className="h-auto w-full rounded-none object-cover"
                        priority={index === 0}
                      />
                    </div>

                    <div className="pt-1 lg:pt-[9px]">
                      <h2 className="mb-[15px] text-[42px] font-black leading-[1.1] tracking-[-0.02em] text-[#459a9f] lg:text-[50px] lg:tracking-[-1px]">
                        In Person Studies
                      </h2>

                      <p className="max-w-[499px] text-[22px] font-medium leading-[36px] text-[#459a9f]">
                        Live in Providence or the surrounding area? While the
                        Mind and Morality Lab is not currently conducting
                        in-person studies, other labs in our research group have
                        several active in-person studies that are currently
                        recruiting children of various ages. If you&apos;re
                        interested in in-person studies, check out the other
                        developmental labs at Brown or click the button to the
                        right to be added to the general in-person contact list.
                      </p>

                      <Link
                        href="https://sites.brown.edu/devlabs/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex h-[53px] items-center rounded-[20px] bg-white pl-2 pr-6 text-[22px] font-medium leading-none text-[#459a9f]"
                      >
                        <Image
                          src="/get-involved-families/form-icon.svg"
                          alt="Mind and Morality Lab student with a child."
                          width={41}
                          height={41}
                          className="mr-1.5 h-[41px] w-[41px]"
                        />
                        Dev Labs Interest Form
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goToPreviousSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 lg:-left-[8px] lg:block"
          >
            <Image
              src="/get-involved-families/arrow-left.svg"
              alt="Previous"
              width={80}
              height={80}
              className="h-12 w-12 lg:h-20 lg:w-20"
            />
          </button>
          <button
            type="button"
            onClick={goToNextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 lg:-right-[8px] lg:block"
          >
            <Image
              src="/get-involved-families/arrow-right.svg"
              alt="Next"
              width={80}
              height={80}
              className="h-12 w-12 lg:h-20 lg:w-20"
            />
          </button>

          <div className="mx-auto mt-5 flex w-fit items-center gap-[7px] lg:mt-[35px]">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`h-[10px] w-[10px] rounded-full ${
                  currentSlide === index ? "bg-[#E79121]" : "bg-[#459A9F]"
                }`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
