import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import {RiGithubLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import {  SiMongodb, SiMysql, SiSpring, SiSpringboot } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import {motion} from "framer-motion"
import { useTheme } from '../context/ThemeContext'

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
       
    },
})

const Technologies = () => {
  const { isDark } = useTheme();

  const techStack = [
    { icon: SiMysql, color: 'text-blue-600', name: 'MySQL' },
    { icon: RiReactjsLine, color: 'text-cyan-400', name: 'React' },
    { icon: RiTailwindCssLine, color: 'text-cyan-400', name: 'Tailwind' },
    { icon: RiGithubLine, color: isDark ? 'text-white' : 'text-gray-900', name: 'GitHub' },
    { icon: SiSpringboot, color: 'text-green-600', name: 'Spring Boot' },
    { icon: SiSpring, color: 'text-green-600', name: 'Spring' },
    { icon: FaNodeJs, color: 'text-green-400', name: 'Node.js' },
    { icon: TbBrandNextjs, color: isDark ? 'text-white' : 'text-gray-900', name: 'Next.js' },
    { icon: SiMongodb, color: 'text-green-400', name: 'MongoDB' },
    { icon: BiLogoPostgresql, color: 'text-blue-600', name: 'PostgreSQL' },
  ];

  return (
    <div className='pb-20 lg:pb-28'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.6}}
        className='my-16 lg:my-24 text-center text-4xl sm:text-5xl lg:text-6xl font-bold'
        >
          <span className='text-transparent bg-gradient-to-r from-[var(--accent-navy)] via-[var(--accent-teal)] to-[var(--accent-amber)] bg-clip-text'>Technologies</span>
        </motion.h1>

        <motion.div
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:0.8}}
        className='flex flex-wrap items-center justify-center gap-4 lg:gap-6'
        >
            {techStack.map((tech, idx) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={idx}
                  variants={iconVariants(2 + idx * 0.5)}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.2, rotateZ: 5, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className='rounded-2xl border-2 border-[var(--color-border)]/30 p-6 bg-gradient-to-br from-white/60 to-[var(--accent-teal)]/8 dark:from-gray-900/40 dark:to-[var(--accent-navy)]/8 hover:border-[var(--accent-teal)]/30 transition-all shadow-lg hover:shadow-2xl hover:shadow-glow-teal/10'
                >
                  <IconComponent className={`text-5xl sm:text-6xl lg:text-7xl ${tech.color} transition-all`}/>
                  <p className='text-xs sm:text-sm text-center text-gray-700 dark:text-gray-300 mt-3 font-semibold'>{tech.name}</p>
                </motion.div>
              );
            })}
        </motion.div>
    </div>
  )
}

export default Technologies
