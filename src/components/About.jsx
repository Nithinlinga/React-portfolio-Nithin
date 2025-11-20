import React from 'react'
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"
import nithin from "../Photos-001/nithin.jpg"
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { isDark } = useTheme();

  return (
    <div className='pb-16 lg:pb-24'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-16 lg:my-24 text-center text-4xl sm:text-5xl lg:text-6xl font-bold'>
            About  
            <span className='block mt-2 text-transparent bg-gradient-to-r from-[var(--accent-navy)] via-[var(--accent-teal)] to-[var(--accent-amber)] bg-clip-text'> Me</span>
        </motion.h1>

        <div className='flex flex-wrap items-center justify-center gap-8 lg:gap-0'>
            <motion.div
            whileInView={{x:0, opacity:1}}
            initial={{x:-100, opacity:0}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 flex justify-center'>
                <div className='relative w-full max-w-md'>
                    {/* Animated Glow Background */}
                    <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className='absolute inset-0 bg-gradient-to-r from-[var(--accent-navy)] to-[var(--accent-teal)] rounded-3xl blur-2xl opacity-18'
                    ></motion.div>

                    <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className='relative z-10 rounded-3xl overflow-hidden border-2 border-[var(--color-border)]/30 dark:border-[var(--color-border)]/30'
                    >
                        <img 
                        className='w-full h-auto object-cover' 
                        width={400} 
                        height={400}
                        src={nithin} 
                        loading="lazy" 
                        alt="Nithin Linga - Full Stack Developer" 
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-[var(--accent-teal)]/12 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
            whileInView={{x:0, opacity:1}}
            initial={{x:100, opacity:0}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:pl-8'
            >
                <div className='flex justify-center lg:justify-start'>
                    <div className='max-w-xl'>
                        <p className='text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6'> 
                            {ABOUT_TEXT}
                        </p>
                        
                        {/* Skills Highlight */}
                        <motion.div 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.3 }}
                        className='mt-8 p-6 rounded-2xl bg-gradient-to-r from-[var(--accent-navy)]/8 to-[var(--accent-teal)]/8 dark:from-[var(--accent-navy)]/12 dark:to-[var(--accent-teal)]/12 border border-[var(--color-border)]/20'
                        >
                            <h3 className='text-lg font-bold text-[var(--color-text)] dark:text-[var(--color-text)] mb-3'>
                                What I Love Doing
                            </h3>
                            <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                                Building beautiful, responsive, and high-performance web applications with modern technologies. I'm passionate about creating solutions that are not just functional, but also delightful to use.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
