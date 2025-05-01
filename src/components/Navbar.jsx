import logo from '../assets/logo-white.png'
import resume from '../assets/resume.pdf'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='mb-12 px-4 py-6 md:flex md:items-center md:justify-between'>
      {/* Logo */}
      <div className='flex justify-center md:justify-start'>
        <img src={logo} className='w-32' alt="logo" />
      </div>

      {/* Social Links + Resume Button */}
      <div className='mt-4 flex flex-col items-center gap-4 text-2xl md:mt-0 md:flex-row md:gap-6'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Nithinlinga"><FaGithub /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nithin-linga-09235a226/"><FaLinkedin /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://x.com/nithinkohli5"><FaSquareXTwitter /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nithinlinga/"><FaInstagram /></a>
        
        <a
          href={resume}
          download="LingaNithin_2025_SDE.pdf"
          className="rounded bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Navbar
