"use client"

import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

export default function GetInvolvedStudents() {
	return (
		<main className={`${dmSans.className} w-full min-h-screen bg-[#f4f4f2] pt-16 pb-24`}>
			<section className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
				<header className="text-center">
					<h1 className="text-[34px] leading-[1.15] font-semibold tracking-[-0.02em] text-[#5b96a0] md:text-[46px]">
						Get Involved for Students
					</h1>
				</header>

				<div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[56%_44%] lg:gap-12">
					<div>
						<h2 className="text-[42px] leading-[1.05] font-semibold tracking-[-0.02em] text-[#cf8c2f] md:text-[35px]">
							Brown Undergrads
						</h2>

						<p className="mt-5 max-w-[720px] text-[24px] leading-[1.28] font-semibold tracking-[-0.02em] text-[#5b96a0] md:text-[28px]">
							Looking to work in the lab as a research assistant?
						</p>

						<div className="mt-6 max-w-[760px] space-y-7 text-[17px] leading-[1.55] text-[#5d959f] md:text-[20px]">
							<p>
								We are not actively recruiting undergraduate research assistants.
								However, prospective research assistants can express their
								interest by emailing{" "}
								<a
									href="mailto:mindmoralitylab-manager@brown.edu"
									className="font-medium text-[#cf8c2f] underline decoration-[#cf8c2f] underline-offset-2"
								>
									mindmoralitylab-manager@brown.edu
								</a>{" "}
								and attaching a copy of their CV/resume. You should expect a
								response within 5 business days.
							</p>

							<p>
								Additionally, we actively recruit research assistants through
								the Undergraduate Teaching and Research Awards (UTRA) program
								every cycle. For more information about how to apply to the lab
								as an UTRA student, {" "}
								<a
									href="#"
									className="font-medium text-[#cf8c2f] underline decoration-[#cf8c2f] underline-offset-2"
								>
									click here.
								</a>
							</p>

							<p>
								We are a new lab at Brown and cannot currently support
								undergraduate research assistants from other universities.
							</p>
						</div>
					</div>

					<div className="pt-2 lg:pt-7">
						<div className="h-[460px] w-full rounded-[36px] bg-[#d8dee0]" />
					</div>
				</div>

				<div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[56%_44%] lg:gap-12">
					<div>
						<h3 className="text-[34px] leading-[1.12] font-semibold tracking-[-0.02em] text-[#5b96a0] md:text-[27px]">
							Who are we looking for?
						</h3>

						<div className="mt-6 max-w-[760px] space-y-8 text-[17px] leading-[1.55] text-[#5d959f] md:text-[20px]">
							<p>
								You do not need research experience to apply to this lab. In
								fact, we encourage first year students to apply!
							</p>

							<p>
								For volunteer RAs, you are expected to work approximately 8
								hours per week during the semester. UTRA students are expected
								to work 10 hours per week for the duration of the UTRA term,
								as outlined by the program.
							</p>
						</div>

						<div className="mt-9 max-w-[760px] rounded-[38px] bg-[#b8dce1] px-8 py-8 md:px-12 md:py-9">
							<p className="text-[17px] leading-[1.5] text-[#5d959f] md:text-[21px]">
								If you would like to apply to join the lab for the upcoming
								Spring semester, please email {" "}
								<a
									href="mailto:mindmoralitylab-manager@brown.edu"
									className="font-medium text-[#cf8c2f] underline decoration-[#cf8c2f] underline-offset-2"
								>
									mindmoralitylab-manager@brown.edu
								</a>{" "}
								around Thanksgiving break.
							</p>
						</div>
					</div>

					<div className="pt-0 lg:pt-6">
						<div className="h-[500px] w-full rounded-[36px] bg-[#d8dee0]" />
					</div>
				</div>

				<div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[56%_44%] lg:gap-12">
					<div>
						<h3 className="text-[38px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#cf8c2f] md:text-[40px]">
							Prospective Graduate Students
						</h3>

						<p className="mt-5 max-w-[760px] text-[24px] leading-[1.28] font-semibold tracking-[-0.01em] text-[#5b96a0] md:text-[28px]">
							Looking to apply to the graduate program?
						</p>

						<p className="mt-7 max-w-[760px] text-[17px] leading-[1.55] text-[#5d959f] md:text-[20px]">
							Dr. Marshall will not be admitting new graduate students for
							the foreseeable future. For more information on Brown&apos;s
							application process, please have a look at the {" "}
							<a
								href="#"
								className="font-medium text-[#cf8c2f] underline decoration-[#cf8c2f] underline-offset-2"
							>
								department website
							</a>
							. You can also click {" "}
							<a
								href="#"
								className="font-medium text-[#cf8c2f] underline decoration-[#cf8c2f] underline-offset-2"
							>
								here
							</a>{" "}
							for some helpful graduate student resources.
						</p>
					</div>

					<div className="pt-1 lg:pt-4">
						<div className="h-[330px] w-full rounded-[36px] bg-[#d8dee0]" />
					</div>
				</div>
			</section>
		</main>
	)
}
