"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="w-full bg-[#bcf1f5] md:bg-[#b9e2e4]">
      <div className="mx-auto box-border flex h-[70px] max-w-[402px] items-center justify-between px-[10%] md:hidden">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Open navigation"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-menu"
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

      {isMobileMenuOpen ? (
        <nav
          id="mobile-navigation-menu"
          className="mx-auto box-border w-full max-w-[402px] px-[10%] pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="rounded-2xl bg-white p-3 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
            <Link
              href="/"
              className="block rounded-xl px-3 py-2 text-[16px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/team"
              className="mt-1 block rounded-xl px-3 py-2 text-[16px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]"
              onClick={closeMobileMenu}
            >
              Our Team
            </Link>

            <details className="mt-1 rounded-xl">
              <summary className="cursor-pointer list-none rounded-xl px-3 py-2 text-[16px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]">
                <span className="flex items-center justify-between">
                  Research
                  <span className="text-[12px]">▼</span>
                </span>
              </summary>
              <div className="mt-1 space-y-1 pl-3">
                <Link
                  href="/research/topics"
                  className="block rounded-xl px-3 py-2 text-[15px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]"
                  onClick={closeMobileMenu}
                >
                  Topics
                </Link>
                <Link
                  href="/research/publications"
                  className="block rounded-xl px-3 py-2 text-[15px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]"
                  onClick={closeMobileMenu}
                >
                  Publications
                </Link>
              </div>
            </details>

            <details className="mt-1 rounded-xl">
              <summary className="cursor-pointer list-none rounded-xl px-3 py-2 text-[16px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]">
                <span className="flex items-center justify-between">
                  Get Involved
                  <span className="text-[12px]">▼</span>
                </span>
              </summary>
              <div className="mt-1 space-y-1 pl-3">
                <Link
                  href="/get-involved/students"
                  className="block rounded-xl px-3 py-2 text-[15px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]"
                  onClick={closeMobileMenu}
                >
                  Students
                </Link>
                <Link
                  href="/get-involved/families"
                  className="block rounded-xl px-3 py-2 text-[15px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]"
                  onClick={closeMobileMenu}
                >
                  Families
                </Link>
              </div>
            </details>

            <Link
              href="/contact"
              className="mt-1 block rounded-xl px-3 py-2 text-[16px] font-medium text-[#3b8d99] hover:bg-[#eaf7f8]"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      ) : null}

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

            <li className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 transition-opacity hover:opacity-80"
              >
                Research
                <span className="text-sm">▼</span>
              </button>

              <div className="invisible absolute left-0 top-full z-20 mt-3 min-w-[240px] rounded-2xl bg-white p-3 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <Link
                  href="/research/topics"
                  className="block rounded-xl px-4 py-2 text-[18px] text-[#3b8d99] transition-colors hover:bg-[#eaf7f8]"
                >
                  Topics
                </Link>
                <Link
                  href="/research/publications"
                  className="mt-1 block rounded-xl px-4 py-2 text-[18px] text-[#3b8d99] transition-colors hover:bg-[#eaf7f8]"
                >
                  Publications
                </Link>
              </div>
            </li>

            <li>
              <Link href="/news" className="transition-opacity hover:opacity-80">
                News
              </Link>
            </li>

            <li>
              <button className="flex items-center gap-1 transition-opacity hover:opacity-80">
                Get Involved
                <span className="text-sm">▼</span>
              </button>

              <div className="invisible absolute left-0 top-full z-20 mt-3 min-w-[240px] rounded-2xl bg-white p-3 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <Link
                  href="/get-involved/students"
                  className="block rounded-xl px-4 py-2 text-[18px] text-[#3b8d99] transition-colors hover:bg-[#eaf7f8]"
                >
                  Students
                </Link>
                <Link
                  href="/get-involved/families"
                  className="mt-1 block rounded-xl px-4 py-2 text-[18px] text-[#3b8d99] transition-colors hover:bg-[#eaf7f8]"
                >
                  Families
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