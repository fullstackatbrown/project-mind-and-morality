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
  const [home, setHome] = useState<HomePage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) => {
        setHome(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (!home) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Failed to load home page.
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-zinc-50 flex flex-col items-center">
      <style>{`
      .orange-text {
        color: #E79121;
      }
    `}</style>

      <section className="max-w-6xl w-full flex flex-col md:flex-row gap-16 py-16 px-8 items-center">
        <Slideshow images={home.metadata.slideshow_images} />
        <div className="max-w-lg">
           {/* <img src="./logo.png" className="w-full mb-4"></img> */}
          <Image
            src={home.metadata.logo.imgix_url || home.metadata.logo.url}
            alt="Lab logo"
            width={320}
            height={120}
            className="w-full mb-4"
            priority
          />
          <p className="text-xl text-teal-800 mb-4">
            {home.metadata.lab_header}
          </p>
          <p className="text-xl text-teal-800">
            {home.metadata.lab_description}
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
