import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function GetInvolvedStudentsPage() {
  return (
    <main className={`${dmSans.className} w-full bg-[#f5f5f5] text-[#459a9f]`}>
      <div className="mx-auto w-full max-w-[402px] px-[10%] pb-12 pt-10 md:hidden">
        <h1 className="text-center text-[22px] font-bold leading-none tracking-[-0.09em] text-[#459a9f]">
          Get Involved for Students
        </h1>

        <section className="mt-5">
          <h2 className="text-center text-[16px] font-black leading-none tracking-[-0.125em] text-[#e79121]">
            Brown Undergrads
          </h2>

          <Image
            src="/get-involved-students/undergrads.png"
            alt="Students at an outreach table"
            width={320}
            height={320}
            className="mt-3 h-auto w-full object-cover"
            priority
          />

          <h3 className="mt-6 max-w-[320px] text-[16px] font-black leading-[21px] text-[#459a9f]">
            Looking to work in the lab as a research assistant?
          </h3>

          <div className="mt-4 space-y-5 text-[14px] font-medium leading-[21px] text-[#459a9f]">
            <p>
              We are not actively recruiting undergraduate research assistants.
              However, prospective research assistants can express their
              interest by emailing{" "}
              <a
                href="mailto:mindmoralitylab-manager@brown.edu"
                className="text-[#e79121] underline underline-offset-2"
              >
                mindmoralitylab-manager@brown.edu
              </a>{" "}
              and attaching a copy of their CV/resume. You should expect a
              response within 5 business days.
            </p>

            <p>
              Additionally, we actively recruit research assistants through the
              Undergraduate Teaching and Research Awards (UTRA) program every
              cycle. For more information about how to apply to the lab as an
              UTRA student,{" "}
              <a
                href="https://utra.brown.edu/students#application-process"
                target="_blank"
                rel="noreferrer"
                className="text-[#e79121] underline underline-offset-2"
              >
                click here
              </a>
              .
            </p>

            <p>
              We are a new lab at Brown and cannot currently support
              undergraduate research assistants from other universities.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <Image
            src="/get-involved-students/who-we-are-looking-for.png"
            alt="Researcher and child doing a learning activity"
            width={320}
            height={320}
            className="h-auto w-full object-cover"
          />

          <h3 className="mt-6 text-[16px] font-black leading-[21px] text-[#459a9f]">
            Who are we looking for?
          </h3>

          <div className="mt-4 space-y-5 text-[14px] font-medium leading-[21px] text-[#459a9f]">
            <p>
              You do not need research experience to apply to this lab. In
              fact, we encourage first year students to apply!
            </p>

            <p>
              For volunteer RAs, you are expected to work approximately 8 hours
              per week during the semester. UTRA students are expected to work
              10 hours per week for the duration of the UTRA term, as outlined
              by the program.
            </p>
          </div>

          <div className="mt-6 rounded-[20px] bg-[#bcf1f5] px-[14px] py-[18px] text-[14px] font-medium leading-[21px] text-[#459a9f]">
            If you would like to apply to join the lab for the upcoming Spring
            semester, please email{" "}
            <a
              href="mailto:mindmoralitylab-manager@brown.edu"
              className="text-[#e79121] underline underline-offset-2"
            >
              mindmoralitylab-manager@brown.edu
            </a>{" "}
            around Thanksgiving break.
          </div>
        </section>

        <section className="mt-11">
          <h2 className="text-center text-[16px] font-black leading-none tracking-[-0.125em] text-[#e79121]">
            Prospective Graduate Students
          </h2>

          <Image
            src="/get-involved-students/prospective-grads.png"
            alt="Prospective graduate students in a lab discussion"
            width={320}
            height={214}
            className="mt-3 h-auto w-full object-cover"
          />

          <h3 className="mt-6 text-[16px] font-black leading-[21px] text-[#459a9f]">
            Looking to apply to the graduate program?
          </h3>

          <p className="mt-4 text-[14px] font-medium leading-[21px] text-[#459a9f]">
            Dr. Marshall will not be admitting new graduate students for the
            foreseeable future. For more information on Brown&apos;s application
            process, please have a look at the{" "}
            <Link
              href="https://graduateprograms.brown.edu/graduate-program/psychology-phd"
              target="_blank"
              rel="noreferrer"
              className="text-[#e79121] underline underline-offset-2"
            >
              department website
            </Link>
            . You can also click{" "}
            <Link
              href="https://www.psychresearchlist.com/grad-school-resources.html"
              target="_blank"
              rel="noreferrer"
              className="text-[#e79121] underline underline-offset-2"
            >
              here
            </Link>{" "}
            for some helpful graduate student resources.
          </p>
        </section>
      </div>

      <div className="mx-auto hidden max-w-[1175px] px-6 pb-24 pt-14 md:block md:px-8 md:pb-28 lg:px-0 lg:pt-[52px]">
        <h1 className="mb-20 text-center text-[50px] font-bold leading-[1.1] tracking-[-0.02em] text-[#3f97a4]">
          Get Involved for Students
        </h1>

        <section className="mb-20 grid gap-8 md:grid-cols-[615px_500px] md:items-start md:justify-center md:gap-[60px]">
          <div>
            <h2 className="mb-[14px] text-[40px] font-black leading-[1.05] tracking-[-0.02em] text-[#e79121]">
              Brown Undergrads
            </h2>
            <h3 className="mb-4 text-[30px] font-black leading-[1.1] text-[#3f97a4]">
              Looking to work in the lab as a research assistant?
            </h3>

            <div className="space-y-[30px] text-[22px] font-medium leading-[36px] text-[#3f97a4]">
              <p className="max-w-[616px]">
                We are not actively recruiting undergraduate research assistants.
                However, prospective research assistants can express their
                interest by emailing{" "}
                <a
                  href="mailto:mindmoralitylab-manager@brown.edu"
                  className="underline underline-offset-2"
                >
                  mindmoralitylab-manager@brown.edu
                </a>{" "}
                and attaching a copy of their CV/resume. You should expect a
                response within 5 business days.
              </p>

              <p className="max-w-[616px]">
                Additionally, we actively recruit research assistants through
                the Undergraduate Teaching and Research Awards (UTRA) program
                every cycle. For more information about how to apply to the lab
                as an UTRA student,{" "}
                <a
                  href="https://utra.brown.edu/students#application-process"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  click here
                </a>
                .
              </p>

              <p className="max-w-[616px]">
                We are a new lab at Brown and cannot currently support
                undergraduate research assistants from other universities.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] md:pt-[6px]">
            <Image
              src="/get-involved-students/undergrads.png"
              alt="Students at an outreach table"
              width={500}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="mb-20 grid gap-8 md:grid-cols-[615px_500px] md:items-start md:justify-center md:gap-[60px]">
          <div>
            <h3 className="mb-4 text-[30px] font-black leading-[1.1] text-[#3f97a4]">
              Who are we looking for?
            </h3>

            <div className="space-y-[28px] text-[22px] font-medium leading-[36px] text-[#3f97a4]">
              <p className="max-w-[615px]">
                You do not need research experience to apply to this lab. In
                fact, we encourage first year students to apply!
              </p>

              <p className="max-w-[615px]">
                For volunteer RAs, you are expected to work approximately 8
                hours per week during the semester. UTRA students are expected
                to work 10 hours per week for the duration of the UTRA term, as
                outlined by the program.
              </p>
            </div>

            <div className="mt-8 max-w-[595px] rounded-[40px] bg-[#bcf1f5] px-11 py-7 text-[22px] font-medium leading-[36px] text-[#3f97a4]">
              If you would like to apply to join the lab for the upcoming
              Spring semester, please email{" "}
              <a
                href="mailto:mindmoralitylab-manager@brown.edu"
                className="text-[#e79121] underline underline-offset-2"
              >
                mindmoralitylab-manager@brown.edu
              </a>{" "}
              around Thanksgiving break.
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] md:-mt-[74px]">
            <Image
              src="/get-involved-students/who-we-are-looking-for.png"
              alt="Researcher and child doing a learning activity"
              width={500}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        <section className="grid gap-8 pb-6 md:grid-cols-[615px_500px] md:items-start md:justify-center md:gap-[60px]">
          <div>
            <h2 className="mb-[14px] text-[40px] font-black leading-[1.05] tracking-[-0.02em] text-[#e79121]">
              Prospective Graduate Students
            </h2>
            <h3 className="mb-4 text-[30px] font-black leading-[1.1] text-[#3f97a4]">
              Looking to apply to the graduate program?
            </h3>

            <p className="max-w-[615px] text-[22px] font-medium leading-[36px] text-[#3f97a4]">
              Dr. Marshall will not be admitting new graduate students for the
              foreseeable future. For more information on Brown&apos;s application
              process, please have a look at the{" "}
              <Link
                href="https://graduateprograms.brown.edu/graduate-program/psychology-phd"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                department website
              </Link>
              . You can also click{" "}
              <Link
                href="https://www.psychresearchlist.com/grad-school-resources.html"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                here
              </Link>{" "}
              for some helpful graduate student resources.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[500px] md:pt-[2px]">
            <Image
              src="/get-involved-students/prospective-grads.png"
              alt="Prospective graduate students in a lab discussion"
              width={500}
              height={334}
              className="h-auto w-full object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
