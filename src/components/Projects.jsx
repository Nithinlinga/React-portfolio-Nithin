import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from "framer-motion"
import { LiaLinkSolid } from 'react-icons/lia'
import { useTheme } from '../context/ThemeContext'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <div className='pb-20 lg:pb-28' id="projects">
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
          Featured Projects
        </motion.h1>

        <div className='space-y-12 lg:space-y-20'>
            {PROJECTS.map((project,index)=>(
              <motion.div 
                key={index} 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:50}}
                transition={{duration:0.6, delay: index * 0.1}}
              className='group mx-auto max-w-4xl'
                >
                <div className='flex flex-col lg:flex-row gap-6 items-start lg:items-center p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all border'
                  style={{
                    background: isDark 
                      ? 'linear-gradient(135deg, rgba(11, 31, 59, 0.12) 0%, rgba(7, 26, 42, 0.6) 100%)'
                      : 'linear-gradient(135deg, rgba(8, 145, 178, 0.08) 0%, rgba(248, 250, 253, 0.9) 100%)',
                    borderColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(8, 145, 178, 0.15)'
                  }}>
                      {/* Project Image */}
                      <motion.div
                      whileInView={{opacity:1,x:0}}
                      initial={{opacity:0,x:-100}}
                      transition={{duration:0.7}}
                      className='w-full lg:w-48 flex-shrink-0'
                      >
                        <div className='relative overflow-hidden rounded-2xl border-2 bg-white/60 dark:bg-[var(--color-surface)]/30'
                          style={{
                            borderColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(8, 145, 178, 0.2)',
                            boxShadow: isDark 
                              ? '0 4px 12px rgba(6, 182, 212, 0.08)'
                              : '0 4px 12px rgba(8, 145, 178, 0.1)'
                          }}>
                          {/* Glow Effect */}
                          <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className='absolute inset-0 bg-gradient-to-r from-[var(--accent-navy)] to-[var(--accent-teal)] rounded-2xl blur-xl opacity-0 group-hover:opacity-12 transition-opacity duration-300'
                          ></motion.div>

                          <motion.img 
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          src={project.image}
                          width={240}
                          height={160}
                          alt={project.title}
                          className='w-full h-auto object-cover rounded-2xl transition-transform duration-300 relative z-10' 
                          />
                        </div>
                      </motion.div>

                      {/* Project Info */}
                      <motion.div
                      whileInView={{opacity:1,x:0}}
                      initial={{opacity:0,x:100}}
                      transition={{duration:0.7}}
                      className='w-full lg:w-auto'
                      >
                        <div className='space-y-4'>
                          <div className='flex items-center justify-between'>
                            <h3 className='text-xl sm:text-2xl font-semibold'
                              style={{
                                color: isDark ? 'white' : '#0a1428'
                              }}>{project.title}</h3>
                            <motion.a  
                            target="_blank"   
                            rel="noopener noreferrer"
                            href={project.link}
                            whileHover={{ scale: 1.2, rotate: -20 }}
                            whileTap={{ scale: 0.95 }}
                            className='p-3 rounded-full text-[var(--accent-navy)] dark:text-[var(--accent-teal)] hover:shadow-lg transition-all border'
                            style={{
                              background: isDark
                                ? 'linear-gradient(135deg, rgba(11, 31, 59, 0.1) 0%, rgba(6, 182, 212, 0.08) 100%)'
                                : 'linear-gradient(135deg, rgba(30, 58, 95, 0.08) 0%, rgba(8, 145, 178, 0.06) 100%)',
                              borderColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(8, 145, 178, 0.2)',
                              boxShadow: isDark 
                                ? 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                                : 'inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                            }}
                            >
                              <FiExternalLink className='text-xl' />
                            </motion.a>
                          </div>
                      
                          <p className='text-sm lg:text-base leading-relaxed'
                            style={{
                              color: isDark ? '#d1d5db' : '#5a6b7d'
                            }}>{project.description}</p>
                          
                          <div className='flex flex-wrap gap-2 pt-4'>
                            {project.technologies.map((tech,idx)=>(
                              <motion.span 
                              key={idx}
                              whileHover={{ y: -2 }}
                              className='rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-[var(--accent-navy)] dark:text-[var(--accent-teal)] transition-colors border'
                              style={{
                                background: isDark
                                  ? 'linear-gradient(135deg, rgba(11, 31, 59, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)'
                                  : 'linear-gradient(135deg, rgba(30, 58, 95, 0.08) 0%, rgba(8, 145, 178, 0.04) 100%)',
                                borderColor: isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(8, 145, 178, 0.12)'
                              }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects
