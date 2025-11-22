import logo from '../assets/logo-white.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { BsSun, BsMoon } from 'react-icons/bs'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'GitHub', href: 'https://github.com/Nithinlinga', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nithin-linga-09235a226/', icon: FaLinkedin },
    { name: 'Twitter', href: 'https://x.com/nithinkohli5', icon: FaSquareXTwitter },
    { name: 'Instagram', href: 'https://www.instagram.com/nithinlinga/', icon: FaInstagram },
  ];
  const resume="https://drive.google.com/file/d/1r7WiPcCtK03Bkoed8CGmdYvoOvirte36/view?usp=drive_link";

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 mb-8 sm:mb-12'
    >
      {/* Navbar Background with Glassmorphism */}
      <div 
        className='absolute inset-0 backdrop-blur-xl rounded-2xl shadow-xl border'
        style={{
          background: isDark 
            ? 'rgba(0, 0, 0, 0.4)' 
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(248, 250, 253, 0.75) 100%)',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(139, 92, 246, 0.1)'
        }}
      ></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo - Left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex-shrink-0 z-10'
          >
            <img 
              src={logo} 
              className='h-12 w-auto sm:h-14 object-contain transition-transform hover:scale-110' 
              alt="logo" 
            />
          </motion.div>

          {/* Desktop Menu - Center */}
          <div className='hidden md:flex items-center justify-center gap-2'>
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-3 rounded-full border text-[var(--accent-navy)] dark:text-[var(--accent-teal)] hover:shadow-glow-navy transition-all'
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(11, 31, 59, 0.1) 0%, rgba(6, 182, 212, 0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(30, 58, 95, 0.08) 0%, rgba(8, 145, 178, 0.06) 100%)',
                    borderColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(8, 145, 178, 0.2)',
                    boxShadow: isDark 
                      ? 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                      : 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 4px 12px rgba(8, 145, 178, 0.08)'
                  }}
                >
                  <Icon className='text-lg' />
                </motion.a>
              );
            })}
          </div>

          {/* Right Side - Theme Toggle + Resume + Mobile Menu */}
          <div className='flex items-center gap-3 sm:gap-4 z-10'>
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.95 }}
              className='p-2.5 sm:p-3 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-400/20 dark:from-yellow-600/30 dark:to-amber-600/30 border border-amber-300/40 dark:border-yellow-500/40 text-amber-600 dark:text-yellow-400 hover:shadow-lg hover:shadow-amber-500/40 dark:hover:shadow-yellow-500/40 transition-all'
              aria-label="Toggle theme"
            >
              {isDark ? (
                <BsSun className='text-lg sm:text-xl' />
              ) : (
                <BsMoon className='text-lg sm:text-xl' />
              )}
            </motion.button>

            {/* Resume Button - Hidden on Mobile */}
            <motion.a
              href={resume}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='hidden sm:block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-[var(--accent-teal)] via-[var(--accent-navy)] to-[var(--accent-amber)] text-white font-semibold text-sm shadow-lg hover:opacity-95 transition-all'
            >
              Resume
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='lg:hidden p-2.5 sm:p-3 rounded-full border text-[var(--accent-navy)] dark:text-[var(--accent-teal)] hover:shadow-glow-navy transition-all'
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(11, 31, 59, 0.1) 0%, rgba(6, 182, 212, 0.08) 100%)'
                  : 'linear-gradient(135deg, rgba(30, 58, 95, 0.08) 0%, rgba(8, 145, 178, 0.06) 100%)',
                borderColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(8, 145, 178, 0.2)',
                boxShadow: isDark 
                  ? 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  : 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 4px 12px rgba(8, 145, 178, 0.08)'
              }}
            >
              {isOpen ? (
                <HiX className='text-xl sm:text-2xl' />
              ) : (
                <HiMenuAlt3 className='text-xl sm:text-2xl' />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Animated Dropdown */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className='lg:hidden overflow-hidden'
        >
          <div className='pt-4 pb-2 px-4 flex flex-col gap-3 border-t mt-4'
            style={{
              borderColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(139, 92, 246, 0.2)'
            }}
          >
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className='flex items-center gap-3 p-3 rounded-lg text-[var(--accent-navy)] dark:text-[var(--accent-teal)] hover:shadow-md transition-all border'
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(11, 31, 59, 0.08) 0%, rgba(6, 182, 212, 0.06) 100%)'
                      : 'linear-gradient(135deg, rgba(30, 58, 95, 0.06) 0%, rgba(8, 145, 178, 0.04) 100%)',
                    borderColor: isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(8, 145, 178, 0.12)'
                  }}
                >
                  <Icon className='text-lg' />
                  <span className='text-sm font-medium'>{link.name}</span>
                </motion.a>
              );
            })}
            
            <motion.a
              href={resume}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              className="rounded-lg px-4 py-3 text-white font-semibold text-sm w-full text-center hover:shadow-lg transition-all mt-2"
              style={{
                background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-navy) 50%, var(--accent-amber) 100%)'
              }}
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
