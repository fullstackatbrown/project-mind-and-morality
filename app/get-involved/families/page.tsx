"use client"

import { DM_Sans } from "next/font/google"
import { useState, useEffect } from "react";
import FamiliesSlider from "@/app/components/FamiliesSlider";

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})


export default function GetInvolvedFamilies() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

	useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/get-involved/families");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setItems(data?.metadata?.opportunities || []);
      } catch (e) {
        setError("Could not load opportunities.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className={`${dmSans.className} w-full min-h-screen bg-[#f4f4f2] pt-16 pb-24`}>
      <section className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
        <header className="text-center">
          <h1 className="text-[34px] leading-[1.15] font-semibold tracking-[-0.02em] text-[#5b96a0] md:text-[40px]">
            Get Involved for Families
          </h1>
          <p className="mt-7 text-[24px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#cf8c2f] md:text-[30px]">
            There are many ways to get involved in research!
          </p>
        </header>

        {loading ? (
          <div className="mt-16 text-center text-[#5b96a0]">Loading...</div>
        ) : error ? (
          <div className="mt-16 text-center text-red-500">{error}</div>
        ) : (
          <FamiliesSlider items={items} />
        )}
      </section>
    </main>
  );
}
