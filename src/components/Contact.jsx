import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
import { useTheme } from '../context/ThemeContext'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
  const { isDark } = useTheme();

  const contactMethods = [
    { icon: FiMapPin, label: CONTACT.address, href: "https://www.google.com/maps/search/17.820888,+78.566918?entry=tts&g_ep=EgoyMDI0MDkwNC4wKgBIAVAD", color: 'from-[var(--accent-teal)] to-[var(--accent-amber)]' },
    { icon: FiPhone, label: CONTACT.phoneNo, href: 'tel:+918790468868', color: 'from-[var(--accent-teal)] to-[var(--accent-amber)]' },
    { icon: FiMail, label: CONTACT.email, href: "mailto:nithinlinga2@gmail.com?subject=Going through your portfolio&body=Hi Nithin Linga, Let's connect❤️", color: 'from-[var(--accent-navy)] to-[var(--accent-teal)]' },
  ];

  return (
    <div className='pb-20 lg:pb-28 flex flex-col items-center' id="contact">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.6}}
        className='my-16 lg:my-24 text-center text-4xl sm:text-5xl lg:text-6xl font-bold'
        >
          <span className='text-transparent bg-gradient-to-r from-[var(--accent-navy)] via-[var(--accent-teal)] to-[var(--accent-amber)] bg-clip-text'>Let's Get in Touch</span>
        </motion.h1>

        <motion.p
        whileInView={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:0.6}}
        className='text-center text-gray-700 dark:text-gray-300 mb-12 lg:mb-16 max-w-2xl text-lg leading-relaxed'
        >
          I'm always excited to hear about new projects, opportunities, and interesting ideas. Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>

        <div className='flex flex-col items-center w-full max-w-xl px-4 lg:px-0 mb-8 lg:mb-10 space-y-4'>
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.a
              key={idx}
              href={method.href}
              target={idx !== 1 ? '_blank' : undefined}
              rel={idx !== 1 ? "noopener noreferrer" : undefined}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6, delay: idx * 0.15}}
              className={`w-full sm:w-auto inline-flex items-center gap-3 justify-start p-2.5 rounded-lg bg-[var(--color-surface)] dark:bg-[var(--color-surface)]/90 text-[var(--color-text)] hover:shadow-lg transition-all`}
              >
                <div className='relative z-10 flex items-center gap-4'>
                  <div className={`p-2 rounded-lg bg-[var(--accent-navy)]/90 text-white`}>
                    <Icon className='text-base sm:text-lg' />
                  </div>
                  <div className='flex flex-col text-left'>
                    <span className='text-sm font-medium text-[var(--color-text)] dark:text-[var(--color-text)]'>{method.label}</span>
                    <small className='text-xs text-[var(--color-muted)] dark:text-[var(--color-muted)]'>Tap to open</small>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <motion.a 
        href="mailto:nithinlinga2@gmail.com?subject=Going through your portfolio&body=Hi Nithin Linga, Let's connect❤️"
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:50}}
        transition={{duration:0.6, delay: 0.4}}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='px-8 lg:px-12 py-4 lg:py-5 rounded-full bg-gradient-to-r from-[var(--accent-teal)] via-[var(--accent-navy)] to-[var(--accent-amber)] text-white font-bold text-lg shadow-2xl hover:opacity-95 transition-all'
        >
          Send Me a Message ✨
        </motion.a>

        {/* Footer */}
        <motion.div
        whileInView={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:0.8, delay: 0.5}}
        className='mt-16 lg:mt-20 pt-8 lg:pt-12 w-full flex flex-col items-center gap-4'
        >
            <p className='text-center text-sm lg:text-base text-gray-700 dark:text-gray-300'>
            Made with <span className='text-[var(--accent-amber)] dark:text-[var(--accent-amber)]'>💛</span> by Nithin Linga
          </p>
          <p className='text-xs lg:text-sm text-gray-600 dark:text-gray-400'>
            © 2025 Nithin Linga. All rights reserved.
          </p>
        </motion.div>
    </div>
  )
}

export default Contact
