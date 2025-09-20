import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[#A6CDC6] text-[#16404D] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Tomoya Matsumoto</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#about" className="hover:text-[#DDA853]">About</Link>
          <Link href="#experience" className="hover:text-[#DDA853]">Experience</Link>
          <Link href="#publications" className="hover:text-[#DDA853]">Publications</Link>
          <Link href="#awards" className="hover:text-[#DDA853]">Awards</Link>
          <Link href="#qualifications" className="hover:text-[#DDA853]">Qualifications</Link>
          <Link href="#links" className="hover:text-[#DDA853]">Links</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
