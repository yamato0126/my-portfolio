import Image from 'next/image'
import imageAsset from '../images/chicken-icon.webp'
import { Github, Linkedin, Twitter } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 relative">
          <Image
            src={imageAsset}
            alt="Tomoya Matsumoto"
            width={192}
            height={192}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I am a student in Graduate School of Information Science and Technology, Osaka University, Japan.
            My research focuses on machine learning security and data privacy.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/yamato0126" target="_blank" rel="noopener noreferrer" className="text-[#16404D] hover:text-[#DDA853]">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/t-matsumoto" target="_blank" rel="noopener noreferrer" className="text-[#16404D] hover:text-[#DDA853]">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com/yamato0126_B" target="_blank" rel="noopener noreferrer" className="text-[#16404D] hover:text-[#DDA853]">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

