import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-[#b9e2e4]">
      <div className="mx-auto flex h-[110px] max-w-[1536px] items-center justify-between px-20">
        <div className="flex items-center">
          <img
            src="/brownlogo.png"
            alt="Brown logo"
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