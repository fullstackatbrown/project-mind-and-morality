"use client"

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

export default function GetInvolvedFamilies() {
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

				<div className="mt-16 rounded-[40px] bg-[#b8dce1] px-5 py-6 sm:px-7 sm:py-8 md:px-11 md:py-10">
					<div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-[52%_48%] lg:items-center lg:gap-10 lg:px-8">
						<button
							aria-label="Previous"
							className="absolute left-[-52px] top-1/2 hidden -translate-y-1/2 text-white/85 lg:block"
						>
							<ChevronLeft className="h-12 w-12" strokeWidth={1.8} />
						</button>

						<div className="h-[430px] w-full rounded-[36px] bg-[#d8dee0]" />

						<div className="pr-2">
							<h2 className="text-[50px] leading-[1.05] font-semibold tracking-[-0.05em] text-[#5b96a0] md:text-[48px]">
								In Person Studies
							</h2>

							<p className="mt-6 max-w-[560px] text-[18px] leading-[1.55] font-normal tracking-[-0.005em] text-[#5d959f] md:text-[20px]">
								Live in Providence or the surrounding area? While the Mind and
								Morality Lab is not currently conducting in-person studies,
								other labs in our research group have several active in-person
								studies that are currently recruiting children of various ages.
								If you&apos;re interested in in-person studies, check out the
								other developmental labs at Brown or click the button to the
								right to be added to the general in-person contact list.
							</p>

							<button className="mt-6 inline-flex items-center gap-2 rounded-[16px] bg-white px-5 py-2.5 text-[16px] leading-none font-medium text-[#5b96a0] md:text-[18px]">
								<ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
								Dev Labs Interest Form
							</button>
						</div>

						<button
							aria-label="Next"
							className="absolute right-[-52px] top-1/2 hidden -translate-y-1/2 text-white/85 lg:block"
						>
							<ChevronRight className="h-12 w-12" strokeWidth={1.8} />
						</button>
					</div>

					<div className="mt-7 flex justify-center gap-3">
						<span className="h-3 w-3 rounded-full bg-[#d89a37]" />
						<span className="h-3 w-3 rounded-full bg-[#5b96a0]" />
						<span className="h-3 w-3 rounded-full bg-[#5b96a0]" />
					</div>
				</div>
			</section>
		</main>
	)
}
