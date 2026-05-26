"use client"

import { useState, useEffect } from "react";
import FamiliesSlider from "@/app/components/FamiliesSlider";
import { GetInvolvedFamiliesPage } from "@/services/CosmicTypes";

export default function GetInvolvedFamilies() {
  const [pageData, setPageData] = useState<GetInvolvedFamiliesPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

	useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/get-involved/families");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
		setPageData(data);
      } catch (e) {
        setError("Could not load opportunities.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="w-full min-h-screen bg-white pt-16 pb-24">
      <section className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
        <header className="text-center">
          <h1 className="text-[36px] leading-[1.1] font-bold tracking-[-0.02em] text-[#459A9F] md:text-[50px]">
			{pageData?.title}
          </h1>
          <p className="mt-7 text-[24px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#cf8c2f] md:text-[30px]">
			{pageData?.metadata.subheader}
          </p>

        </header>

        {loading ? (
          <div className="mt-16 text-center text-[#5b96a0]">Loading...</div>
        ) : error ? (
          <div className="mt-16 text-center text-red-500">{error}</div>
        ) : (
          <FamiliesSlider items={pageData?.metadata?.opportunities || []} />
        )}
      </section>
    </main>
  );
}
