import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
import { useTheme } from '../context/ThemeContext'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
  const { isDark } = useTheme();
const contactMethods = [
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
        style={{
          background: 'linear-gradient(to right, var(--accent-navy), var(--accent-teal), var(--accent-amber))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Let's Get in Touch
        </motion.h1>

        <motion.p
        whileInView={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:0.6}}
        className='text-center mb-12 lg:mb-16 max-w-2xl text-lg leading-relaxed'
        style={{
          color: isDark ? '#d1d5db' : '#5a6b7d'
        }}>
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
              className='w-full sm:w-auto inline-flex items-center gap-3 justify-start p-2.5 rounded-lg border transition-all'
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(7, 26, 42, 0.6) 0%, rgba(11, 31, 59, 0.3) 100%)'
                  : 'linear-gradient(135deg, rgba(248, 250, 253, 0.9) 0%, rgba(240, 250, 255, 0.7) 100%)',
                borderColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(8, 145, 178, 0.15)',
                boxShadow: isDark 
                  ? '0 4px 12px rgba(6, 182, 212, 0.08)'
                  : '0 4px 12px rgba(8, 145, 178, 0.1)'
              }}>
                <div className='relative z-10 flex items-center gap-4'>
                  <div className='p-2 rounded-lg text-white'
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-navy) 0%, var(--accent-teal) 100%)',
                      border: isDark ? 'none' : '1px solid rgba(255,255,255,0.12)'
                    }}>
                    <Icon className='text-base sm:text-lg' style={{ color: isDark ? '#e6eef6' : '#ffffff' }} aria-hidden={false} />
                  </div>
                  <div className='flex flex-col text-left'>
                    <span className='text-sm font-medium'
                      style={{
                        color: isDark ? '#e6eef6' : '#0a1428'
                      }}>{method.label}</span>
                    <small className='text-xs'
                      style={{
                        color: isDark ? '#94a3b8' : '#5a6b7d'
                      }}>Tap to open</small>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Call to Action Button */}
        {/* <motion.a 
        href="mailto:nithinlinga2@gmail.com?subject=Going through your portfolio&body=Hi Nithin Linga, Let's connect❤️"
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:50}}
        transition={{duration:0.6, delay: 0.4}}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='px-8 lg:px-12 py-4 lg:py-5 rounded-full bg-gradient-to-r from-[var(--accent-teal)] via-[var(--accent-navy)] to-[var(--accent-amber)] text-white font-bold text-lg shadow-2xl hover:opacity-95 transition-all'
        >
          Send Me a Message ✨
        </motion.a> */}

        {/* Footer */}
        <motion.div
        whileInView={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:0.8, delay: 0.5}}
        className='mt-16 lg:mt-20 pt-8 lg:pt-12 w-full flex flex-col items-center gap-4 border-t'
        style={{
          borderColor: isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(8, 145, 178, 0.1)'
        }}>
            <p className='text-center text-sm lg:text-base'
              style={{
                color: isDark ? '#d1d5db' : '#5a6b7d'
              }}>
            Made with <span className='text-[var(--accent-amber)]'>💛</span> by Nithin Linga
          </p>
          <p className='text-xs lg:text-sm'
            style={{
              color: isDark ? '#6b7280' : '#9ca3af'
            }}>
            © 2025 Nithin Linga. All rights reserved.
          </p>
        </motion.div>
    </div>
  )
}

export default Contact
