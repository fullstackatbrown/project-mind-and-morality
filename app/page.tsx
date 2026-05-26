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

type BeholdPost = {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string | null;
  caption?: string;
};

const formatPostDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Home() {
  const [home, setHome] = useState<HomePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [instagramPosts, setInstagramPosts] = useState<BeholdPost[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/home");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setHome(data);
        setError("");
      } catch (err) {
        setError("Could not load home page content. Please try again later.");
        setHome(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const feedUrl = process.env.NEXT_PUBLIC_BEHOLD_FEED_URL;
    if (!feedUrl) return;
    fetch(feedUrl)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setInstagramPosts(data?.posts ?? null))
      .catch(() => setInstagramPosts(null));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <span className="text-lg font-bold text-[#459A9F]">Loading...</span>
      </div>
    );
  }

  if (error || !home) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <span className="text-lg font-bold text-red-500">
          {error || "Failed to load content."}
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <style>{`
      .orange-text {
        color: #E79121;
      }
    `}</style>

      <section className="max-w-6xl w-full flex flex-col md:flex-row gap-16 py-16 px-8 items-center">
        <Slideshow images={home.metadata.slideshow_images} />

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
            {instagramPosts && instagramPosts.length >= 3 ? (
              instagramPosts.slice(0, 3).map((post) => (
                <InstagramPostCard
                  key={post.id}
                  imageUrl={
                    post.mediaType === "VIDEO"
                      ? post.thumbnailUrl ?? undefined
                      : post.mediaUrl
                  }
                  caption={post.caption ?? ""}
                  date={formatPostDate(post.timestamp)}
                  postUrl={post.permalink}
                />
              ))
            ) : (
              <>
                <InstagramPostCard caption="Excited to share our latest findings on moral development in children!" />
                <InstagramPostCard caption="We're hiring a Lab Manager — come join our team at Brown University!" />
                <InstagramPostCard caption="New publication out now. Check the link in our bio for the full paper." />
              </>
            )}
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
