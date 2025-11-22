import React, { useEffect, useState } from 'react'
import {HERO_CONTENT} from "../constants/index"
import {motion} from "framer-motion"
import pic1 from "../Photos-001/pic1.jpg"
import { useTheme } from '../context/ThemeContext'
import { FiArrowRight } from 'react-icons/fi'

const container=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    }
})

const Hero = () => {
    const { isDark } = useTheme();
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const period = 1000;
    const toRotate = ["Web Developer", "Freelancer", "Front-end Developer","Full stack Developer"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(50);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(100);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className='pb-8 lg:pb-16 lg:mb-20'>
            <div className='flex flex-wrap items-center justify-center'>
                <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                    <div className='flex flex-col items-center lg:items-start justify-center lg:justify-start'>
                        
                        <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-6 lg:pb-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight'
                        style={{
                            color: isDark ? 'white' : '#0a1428'
                        }}>
                            Nithin 
                            <span className='block'>Linga</span>
                        </motion.h1>

                        <motion.div
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='mb-8 lg:mb-10 h-16 sm:h-20 lg:h-24'
                        >
                            <p className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--accent-navy)] via-[var(--accent-teal)] to-[var(--accent-amber)] bg-clip-text text-transparent'>
                                {text}
                                <span className='animate-pulse'>|</span>
                            </p>
                        </motion.div>

                        <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='max-w-2xl py-4 lg:py-8 font-light text-base sm:text-lg lg:text-xl tracking-tight leading-relaxed text-center lg:text-left'
                        style={{
                            color: isDark ? '#d1d5db' : '#5a6b7d'
                        }}>
                            {HERO_CONTENT}
                        </motion.p>
                        
                        <motion.div
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        className='flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10 w-full sm:w-auto justify-center lg:justify-start'
                        >
                            <motion.a 
                            href="#projects"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className='group rounded-full bg-gradient-to-r from-[var(--accent-teal)] to-[var(--accent-navy)] px-8 py-4 text-white font-semibold text-lg hover:shadow-glow-teal transition-all flex items-center justify-center gap-2'
                            >
                                View My Work
                                <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
                            </motion.a>
                            
                            <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='rounded-full border-2 px-8 py-4 font-semibold text-lg hover:text-white transition-all text-center'
                            style={{
                                borderColor: 'var(--accent-amber)',
                                color: isDark ? 'var(--accent-teal)' : 'var(--accent-navy)',
                                background: isDark ? 'transparent' : 'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(217, 119, 6, 0.04) 100%)',
                                boxShadow: isDark ? 'none' : '0 4px 12px rgba(217, 119, 6, 0.12)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--accent-amber)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = isDark ? 'transparent' : 'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(217, 119, 6, 0.04) 100%)';
                            }}
                            >
                                Let's Connect
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end'>
                    <motion.div
                    initial={{x:100, opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1, delay:1.2}}
                    className='relative w-full max-w-md lg:max-w-lg'
                    >
                        {/* Outer Glow */}
                        <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className='absolute inset-0 bg-gradient-to-r from-[var(--accent-navy)] via-[var(--accent-teal)] to-[var(--accent-amber)] rounded-3xl blur-3xl opacity-14'
                        ></motion.div>

                        {/* Inner Glow */}
                        <div className='absolute inset-0 bg-gradient-to-r from-[var(--accent-navy)]/20 to-[var(--accent-teal)]/20 rounded-3xl blur-2xl opacity-36'></div>

                        {/* Image Container */}
                        <motion.div
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        transition={{ duration: 0.4 }}
                        className='relative z-10 overflow-hidden rounded-3xl border-2'
                        style={{
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(8, 145, 178, 0.25)',
                            boxShadow: isDark 
                                ? '0 8px 32px rgba(6, 182, 212, 0.15)' 
                                : '0 8px 32px rgba(8, 145, 178, 0.2)'
                        }}>
                            <img
                            width={500}
                            height={600}
                            loading="lazy"
                            className='w-full h-auto object-cover'
                            src={pic1} 
                            alt="Nithin Linga - Full Stack Developer" 
                            />
                            {/* Overlay Gradient on Hover */}
                            <div className='absolute inset-0 bg-gradient-to-t from-[var(--accent-teal)]/12 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero