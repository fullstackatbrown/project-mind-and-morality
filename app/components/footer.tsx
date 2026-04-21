import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[linear-gradient(180deg,transparent_0%,#F9C85F_100%)]">
      <div className="mx-auto box-border flex h-[150px] max-w-[403px] items-end justify-between px-[10%] pb-6 md:hidden">
        <div className="min-w-0 max-w-[230px] break-words text-[12px] font-medium leading-[18px] text-[#459a9f]">
          <p>190 Thayer Street, Providence, RI 02912</p>
          <p className="break-all">mindmoralitylab@brown.edu</p>
          <p>+1(401) 863 3921</p>
          <p className="mt-[10px]">© Mind and Morality Lab 2026</p>
        </div>

        <div className="mb-[6px] flex items-center gap-[10px]">
          <Link href="#" aria-label="Facebook">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={27}
              height={27}
              className="h-[27px] w-[27px] object-contain"
            />
          </Link>

          <Link href="#" aria-label="Instagram">
            <Image
              src="/insta.png"
              alt="Instagram"
              width={27}
              height={27}
              className="h-[27px] w-[27px] object-contain"
            />
          </Link>

          <Link href="mailto:mindmoralitylab@brown.edu" aria-label="Email">
            <Image
              src="/mail.png"
              alt="Email"
              width={27}
              height={22}
              className="h-[22px] w-[27px] object-contain"
            />
          </Link>
        </div>
      </div>

      <div className="mx-auto relative hidden h-[480px] max-w-[1512px] px-[88px] md:block">

        <div className="absolute left-[95px] top-[237px] w-[480px]">
          <h2 className="mb-[26px] text-[36px] font-[700] leading-none text-[#3F97A4]">
            About Us
          </h2>

          <p className="max-w-[430px] text-[20px] font-[400] leading-[1.45] text-[#3F97A4]">
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
            <Link href="#" aria-label="Instagram">
                <Image
                src="/insta.png"
                alt="Instagram"
                width={40}
                height={40}
                className="h-[40px] w-[40px] object-contain"
                />
            </Link>

            <Link href="#" aria-label="Facebook">
                <Image
                src="/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
                className="h-[40px] w-[40px] object-contain"
                />
            </Link>

            <Link href="mailto:mindmoralitylab@brown.edu" aria-label="Email">
                <Image
                src="/mail.png"
                alt="Email"
                width={40}
                height={40}
                className="h-[40px] w-[40px] object-contain"
                />
            </Link>
        </div>

        
        <div className="absolute right-[95px] top-[237px] w-[385px] text-left">
          <h2 className="mb-[28px] text-[36px] font-[700] leading-none text-[#3F97A4]">
            Contact Us
          </h2>

          <div className="text-[20px] font-[400] leading-[1.5] text-[#3F97A4]">
            <p>190 Thayer Street, Providence, RI 02912</p>
            <p>mindmoralitylab@brown.edu</p>
            <p>+1(401) 863 3921</p>
          </div>

          <p className="mt-[18px] text-[20px] font-[400] leading-none text-[#3F97A4]">
            © Mind and Morality Lab 2026
          </p>
        </div>
      </div>
    </footer>
  )
}