import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function GetInvolvedFamiliesPage() {
  return (
    <main className={`${dmSans.className} w-full bg-[#f5f5f5] text-[#459a9f]`}>
      <div className="mx-auto max-w-[1512px] px-6 pb-24 pt-10 md:px-8 md:pb-28 md:pt-14 lg:px-0 lg:pb-[40px] lg:pt-[90px]">
        <h1 className="mb-8 text-center text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#459a9f] md:text-[50px] md:tracking-[-1px]">
          Get Involved for Families
        </h1>

        <p className="mb-10 text-center text-[28px] font-black leading-[1.2] tracking-[-0.02em] text-[#e79121] md:mb-[55px] md:text-[30px] md:tracking-[-0.6px]">
          There are many ways to get involved in research!
        </p>

        <section className="relative mx-auto rounded-[40px] bg-[#bcf1f5] px-4 py-6 md:px-8 md:py-8 lg:h-[625px] lg:w-[1214px] lg:px-[71px] lg:py-[57px]">
          <div className="grid gap-6 lg:grid-cols-[520px_499px] lg:gap-[48px]">
            <div className="mx-auto w-full max-w-[520px] lg:mx-0">
              <Image
                src="/get-involved-families/in-person-studies.png"
                alt="Researcher and child participating in an in-person study"
                width={520}
                height={520}
                className="h-auto w-full rounded-[28px] object-cover lg:rounded-[40px]"
                priority
              />
            </div>

            <div className="pt-1 lg:pt-[9px]">
              <h2 className="mb-[15px] text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-[#459a9f] lg:text-[50px] lg:tracking-[-1px]">
                In Person Studies
              </h2>

              <p className="max-w-[499px] text-[22px] font-medium leading-[36px] text-[#459a9f]">
                Live in Providence or the surrounding area? While the Mind and
                Morality Lab is not currently conducting in-person studies,
                other labs in our research group have several active in-person
                studies that are currently recruiting children of various ages.
                If you&apos;re interested in in-person studies, check out the other
                developmental labs at Brown or click the button to the right to
                be added to the general in-person contact list.
              </p>

              <Link
                href="https://sites.brown.edu/devlabs/"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-[53px] items-center rounded-[20px] bg-white pl-2 pr-6 text-[22px] font-medium leading-none text-[#459a9f]"
              >
                <Image
                  src="/get-involved-families/form-icon.svg"
                  alt="Form icon"
                  width={41}
                  height={41}
                  className="mr-1.5 h-[41px] w-[41px]"
                />
                Dev Labs Interest Form
              </Link>
            </div>
          </div>

          <Image
            src="/get-involved-families/arrow-left.svg"
            alt="Previous"
            width={80}
            height={80}
            className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 lg:-left-[8px] lg:block lg:h-20 lg:w-20"
          />
          <Image
            src="/get-involved-families/arrow-right.svg"
            alt="Next"
            width={80}
            height={80}
            className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 lg:-right-[8px] lg:block lg:h-20 lg:w-20"
          />

          <Image
            src="/get-involved-families/carousel-dots.svg"
            alt="Carousel position"
            width={72}
            height={16}
            className="mx-auto mt-5 block h-4 w-[72px] lg:mt-[35px]"
          />
        </section>
      </div>
    </main>
  );
}
