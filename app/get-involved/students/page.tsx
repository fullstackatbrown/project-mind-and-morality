"use client";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import CosmicServices from "@/services/CosmicServices";
import { GetInvolvedStudentsPage as GetInvolvedStudentsPageType } from "@/services/CosmicTypes";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function GetInvolvedStudentsPage() {
  const [data, setData] = useState<GetInvolvedStudentsPageType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/get-involved/students");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setData(data);
        setError("");
      } catch (err) {
        setError("Could not load opportunities. Please try again later.");
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <main
        className={`${dmSans.className} w-full overflow-x-hidden bg-white text-[#459a9f]`}
      >
        <div className="flex h-[60vh] items-center justify-center">
          <span className="text-lg font-bold">Loading...</span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main
        className={`${dmSans.className} w-full overflow-x-hidden bg-white text-[#459a9f]`}
      >
        <div className="flex h-[60vh] items-center justify-center">
          <span className="text-lg font-bold text-red-500">{error}</span>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main
        className={`${dmSans.className} w-full overflow-x-hidden bg-white text-[#459a9f]`}
      >
        <div className="flex h-[60vh] items-center justify-center">
          <span className="text-lg font-bold text-red-500">
            Failed to load content.
          </span>
        </div>
      </main>
    );
  }

  const meta = data.metadata;

  return (
    <main
      className={`${dmSans.className} w-full overflow-x-hidden bg-white text-[#459a9f]`}
    >
      {/* Mobile layout */}
      <div className="mx-auto box-border w-full max-w-[402px] px-[10%] pb-12 pt-10 md:hidden">
        <h1 className="text-center text-[22px] font-black leading-none tracking-[-0.09em] text-[#459a9f]">
          {data.title || "Get Involved for Students"}
        </h1>

        <section className="mt-5">
          <h2 className="text-center text-[16px] font-black leading-none tracking-[-0.125em] text-[#E79121]">
            {meta.undergrads_header}
          </h2>

          <Image
            src={
              meta.image1?.imgix_url ||
              meta.image1?.url ||
              "/get-involved-students/undergrads.png"
            }
            alt="Mind and Morality Lab students working."
            width={320}
            height={320}
            className="mt-3 h-auto w-full rounded-none object-cover"
            priority
          />

          <h3 className="mt-6 max-w-[320px] text-[16px] font-black leading-[21px] text-[#459a9f]">
            {meta.undergrads_subheader1}
          </h3>

          <div className="mt-4 space-y-5 text-[14px] font-medium leading-[21px] text-[#459a9f]">
            <div
              dangerouslySetInnerHTML={{ __html: meta.undergrads_description }}
            />
          </div>
        </section>

        <section className="mt-8">
          <Image
            src={
              meta.image2?.imgix_url ||
              meta.image2?.url ||
              "/get-involved-students/who-we-are-looking-for.png"
            }
            alt="Mind and Morality Lab students working."
            width={320}
            height={320}
            className="h-auto w-full rounded-none object-cover"
          />

          <h3 className="mt-6 text-[16px] font-black leading-[21px] text-[#459a9f]">
            {meta.undergrads_subheader2}
          </h3>

          <div className="mt-4 space-y-5 text-[14px] font-medium leading-[21px] text-[#459a9f]">
            <div
              dangerouslySetInnerHTML={{ __html: meta.undergrads_description2 }}
            />
          </div>

          <div className="mt-6 rounded-[20px] bg-[#bcf1f5] px-[14px] py-[18px] text-[14px] font-medium leading-[21px] text-[#459a9f]">
            <div
              dangerouslySetInnerHTML={{ __html: meta.undergrads_textbox }}
            />
          </div>
        </section>

        <section className="mt-11">
          <h2 className="text-center text-[16px] font-black leading-none tracking-[-0.125em] text-[#E79121]">
            {meta.graduates_header}
          </h2>

          <Image
            src={
              meta.image3?.imgix_url ||
              meta.image3?.url ||
              "/get-involved-students/prospective-grads.png"
            }
            alt="Mind and Morality Lab students working."
            width={320}
            height={214}
            className="mt-3 h-auto w-full rounded-none object-cover"
          />

          <h3 className="mt-6 text-[16px] font-black leading-[21px] text-[#459a9f]">
            {meta.graduates_subheader}
          </h3>

          <p className="mt-4 text-[14px] font-medium leading-[21px] text-[#459a9f]">
            <span
              dangerouslySetInnerHTML={{ __html: meta.graduates_description }}
            />
          </p>
        </section>
      </div>

      {/* Desktop layout */}
      <div className="mx-auto hidden max-w-[1175px] px-6 pb-24 pt-14 md:block md:px-8 md:pb-28 lg:px-0 lg:pt-[52px]">
        <h1 className="mb-20 text-center text-[50px] font-black leading-[1.1] tracking-[-0.02em] text-[#3f97a4]">
          {data.title || "Get Involved for Students"}
        </h1>

        <section className="mb-20 grid gap-8 md:grid-cols-[615px_500px] md:items-start md:justify-center md:gap-[60px]">
          <div>
            <h2 className="mb-[14px] text-[40px] font-black leading-[1.05] tracking-[-0.02em] text-[#E79121]">
              {meta.undergrads_header}
            </h2>
            <h3 className="mb-4 text-[30px] font-black leading-[1.1] text-[#3f97a4]">
              {meta.undergrads_subheader1}
            </h3>

            <div className="space-y-[30px] text-[22px] font-medium leading-[36px] text-[#3f97a4]">
              <div
                className="max-w-[616px]"
                dangerouslySetInnerHTML={{
                  __html: meta.undergrads_description,
                }}
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] md:pt-[6px]">
            <Image
              src={
                meta.image1?.imgix_url ||
                meta.image1?.url ||
                "/get-involved-students/undergrads.png"
              }
              alt="Mind and Morality Lab students working."
              width={500}
              height={500}
              className="h-auto w-full rounded-none object-cover"
              priority
            />
          </div>
        </section>

        <section className="mb-20 grid gap-8 md:grid-cols-[615px_500px] md:items-start md:justify-center md:gap-[60px]">
          <div>
            <h3 className="mb-4 text-[30px] font-black leading-[1.1] text-[#3f97a4]">
              {meta.undergrads_subheader2}
            </h3>

            <div className="space-y-[28px] text-[22px] font-medium leading-[36px] text-[#3f97a4]">
              <div
                className="max-w-[615px]"
                dangerouslySetInnerHTML={{
                  __html: meta.undergrads_description2,
                }}
              />
            </div>

            <div className="mt-8 h-[205px] w-[595px] rounded-[40px] bg-[#bcf1f5] px-11 py-7 text-[22px] font-medium leading-[36px] text-[#3f97a4]">
              <div
                dangerouslySetInnerHTML={{ __html: meta.undergrads_textbox }}
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] md:-mt-[74px]">
            <Image
              src={
                meta.image2?.imgix_url ||
                meta.image2?.url ||
                "/get-involved-students/who-we-are-looking-for.png"
              }
              alt="Mind and Morality Lab students working."
              width={500}
              height={500}
              className="h-auto w-full rounded-none object-cover"
            />
          </div>
        </section>

        <section className="grid gap-8 pb-6 md:grid-cols-[615px_500px] md:items-start md:justify-center md:gap-[60px]">
          <div>
            <h2 className="mb-[14px] text-[40px] font-black leading-[1.05] tracking-[-0.02em] text-[#E79121]">
              {meta.graduates_header}
            </h2>
            <h3 className="mb-4 text-[30px] font-black leading-[1.1] text-[#3f97a4]">
              {meta.graduates_subheader}
            </h3>

            <div className="max-w-[615px] text-[22px] font-medium leading-[36px] text-[#3f97a4]">
              <span
                dangerouslySetInnerHTML={{ __html: meta.graduates_description }}
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] md:pt-[2px]">
            <Image
              src={
                meta.image3?.imgix_url ||
                meta.image3?.url ||
                "/get-involved-students/prospective-grads.png"
              }
              alt="Mind and Morality Lab students working."
              width={500}
              height={334}
              className="h-auto w-full rounded-none object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
