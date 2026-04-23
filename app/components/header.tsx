import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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

            <li className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 transition-opacity hover:opacity-80"
              >
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