import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[linear-gradient(180deg,transparent_0%,#F9C85F_100%)]">
      <div className="mx-auto w-full max-w-[1512px]">
        <div className="px-6 pb-5 pt-8 text-[#459A9F] md:hidden">
          <div className="text-[20px] font-[400] leading-[30px]">
            <p>190 Thayer Street, Providence, RI 02912</p>
            <p>mindmoralitylab@brown.edu</p>
          </div>
          <p className="mt-4 text-[20px] font-[400] leading-[30px]">+1 (401) 863 3921</p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-[20px] font-[400] leading-[30px]">© Mind and Morality Lab 2026</p>
            <div className="flex items-center gap-5">
              <Link href="https://www.instagram.com/mindmoralitylab/" aria-label="Visit our Instagram page">
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </Link>
              <Link href="https://www.facebook.com/people/Mind-and-Morality-Lab/61572253238828/" aria-label="Visit our Facebook page">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </Link>
              <Link
                href="mailto:mindmoralitylab@brown.edu"
                aria-label="Send us an email"
              >
                <Image
                  src="/mail.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative hidden h-[480px] px-[88px] md:block">
          <div className="absolute left-[95px] top-[237px] w-[480px]">
            <h2 className="mb-[26px] text-[36px] font-[700] leading-none text-[#459A9F]">
              About Us
            </h2>

            <p className="max-w-[430px] text-[20px] font-[400] leading-[30px] text-[#459A9F]">
              The Mind and Morality Lab is part of{" "}
              <Link href="#" className="underline underline-offset-[2px]">
                Brown Developmental Labs
              </Link>
              , a group of research labs in the{" "}
              <Link href="#" className="underline underline-offset-[2px]">
                Cognitive and Psychological Sciences Department at Brown University
              </Link>{" "}
              that study children and adolescents.
            </p>
          </div>

          <div className="absolute left-1/2 top-[285px] flex -translate-x-1/2 items-center gap-[44px]">
            <Link
              href="https://www.instagram.com/mindmoralitylab/"
              aria-label="Visit our Instagram page"
            >
              <Image
                src="/insta.png"
                alt="Instagram"
                width={28}
                height={28}
                className="h-[28px] w-[28px] object-contain"
              />
            </Link>

            <Link
              href="https://www.facebook.com/people/Mind-and-Morality-Lab/61572253238828/"
              aria-label="Visit our Facebook page"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={28}
                height={28}
                className="h-[28px] w-[28px] object-contain"
              />
            </Link>

            <Link href="mailto:mindmoralitylab@brown.edu" aria-label="Email">
              <Image
                src="/mail.png"
                alt="Email"
                width={28}
                height={28}
                className="h-[28px] w-[28px] object-contain"
              />
            </Link>
          </div>

          <div className="absolute right-[95px] top-[237px] w-[385px] text-left">
            <h2 className="mb-[28px] text-[36px] font-[700] leading-none text-[#459A9F]">
              Contact Us
            </h2>

            <div className="text-[20px] font-[400] leading-[30px] text-[#459A9F]">
              <p>190 Thayer Street, Providence, RI 02912</p>
              <p>mindmoralitylab@brown.edu</p>
              <p>+1(401) 863 3921</p>
            </div>

            <p className="mt-[18px] text-[20px] font-[400] leading-[30px] text-[#459A9F]">
              © Mind and Morality Lab 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}