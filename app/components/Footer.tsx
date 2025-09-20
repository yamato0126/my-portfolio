import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#A6CDC6] text-[#16404D] py-8">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center space-x-4 mb-4">
          <Link href="#about" className="hover:text-[#DDA853]">About</Link>
          <Link href="#experience" className="hover:text-[#DDA853]">Experience</Link>
          <Link href="#publications" className="hover:text-[#DDA853]">Publications</Link>
          <Link href="#awards" className="hover:text-[#DDA853]">Awards</Link>
          <Link href="#qualifications" className="hover:text-[#DDA853]">Qualifications</Link>
          <Link href="#links" className="hover:text-[#DDA853]">Links</Link>
        </nav>
        <p className="text-center">&copy; {new Date().getFullYear()} Tomoya Matsumoto. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
