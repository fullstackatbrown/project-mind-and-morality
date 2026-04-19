import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-[#bcf1f5] md:bg-[#b9e2e4]">
      <div className="mx-auto flex h-[70px] max-w-[402px] items-center justify-between px-[10%] md:hidden">
        <button
          type="button"
          aria-label="Open navigation"
          className="inline-flex h-[33px] w-[33px] items-center justify-center"
        >
          <span className="flex w-[18px] flex-col gap-[3px]">
            <span className="h-[2px] w-full rounded bg-[#459a9f]" />
            <span className="h-[2px] w-full rounded bg-[#459a9f]" />
            <span className="h-[2px] w-full rounded bg-[#459a9f]" />
          </span>
        </button>

        <Image
          src="/brownlogo.png"
          alt="Brown logo"
          width={24}
          height={41}
          className="h-[41px] w-auto object-contain"
          priority
        />
      </div>

      <div className="mx-auto hidden h-[110px] max-w-[1536px] items-center justify-between px-20 md:flex">
        <div className="flex items-center">
          <Image
            src="/brownlogo.png"
            alt="Brown logo"
            width={46}
            height={78}
            className="h-[74px] w-auto object-contain"
          />
        </div>

        <nav>
          <ul className="flex items-center gap-20 text-[22px] font-normal text-[#3b8d99]">
            <li>
              <Link href="/" className="transition-opacity hover:opacity-80">
                Home
              </Link>
            </li>

            <li>
              <Link href="/team" className="transition-opacity hover:opacity-80">
                Our Team
              </Link>
            </li>

            <li>
              <button className="flex items-center gap-1 transition-opacity hover:opacity-80">
                Research
                <span className="text-sm">▼</span>
              </button>
            </li>

            <li className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 transition-opacity hover:opacity-80"
              >
                Get Involved
                <span className="text-sm">▼</span>
              </button>

              <div className="invisible absolute left-0 top-full z-20 mt-3 min-w-[240px] rounded-2xl bg-white p-3 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <Link
                  href="/get-involved/families"
                  className="block rounded-xl px-4 py-2 text-[18px] text-[#3b8d99] transition-colors hover:bg-[#eaf7f8]"
                >
                  Families
                </Link>
                <Link
                  href="/get-involved/students"
                  className="mt-1 block rounded-xl px-4 py-2 text-[18px] text-[#3b8d99] transition-colors hover:bg-[#eaf7f8]"
                >
                  Students
                </Link>
              </div>
            </li>

            <li>
              <Link href="/contact" className="transition-opacity hover:opacity-80">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}