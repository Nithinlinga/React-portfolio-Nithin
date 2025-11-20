import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FiAward, FiCalendar } from 'react-icons/fi'

const EXPERIENCES = [  {
company: 'Cognizant Technology Solutions',
role: 'Programmer Analyst Trainee (Java Full Stack React)',
duration: 'Aug 2025 - Present',
description: `Contributed to the development of enterprise-grade web applications using React (frontend) and Spring Boot (backend), with MySQL as the database.
• Designed and implemented responsive, reusable UI components in React.js with Redux for state management.
• Integrated frontend modules with RESTful APIs built in Spring Boot, ensuring seamless data flow and robust validation.
• Developed normalized JPA entities and relationships to support booking, user management, and service workflows.
• Implemented authentication and role-based access control, enhancing application security and user experience.`,
technologies: ['React.js', 'Spring Boot', 'Java', 'MySQL', 'AWS', 'JavaScript', 'Redux', 'Tailwind CSS']

  },
  {
    company: 'CIGI Technologies',
    role: 'Full Stack Developer Intern',
    duration: 'Dec 2024 - July 2025',
    description: `Worked on creating forms for ATPTour.com using Next.js (frontend), Laravel (backend), MySQL (DB), and AWS deployment.
• Designed and optimized interactive web components with React.js
• Reusable UI components built and integrated with a scalable back-end API, improving data flow and performance.
• Developed and integrated multiple frontend forms for ATP Tour website using Next.js, improving page performance and accessibility.
• Added a mechanism to prevent concurrent edits by multiple users.`,
    technologies: ['Next.js', 'Laravel', 'MySQL', 'AWS', 'JavaScript', 'MUI']
  }

]

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <div className='pb-20 lg:pb-28'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className='my-16 lg:my-24 text-center text-4xl sm:text-5xl lg:text-6xl font-bold'
      >
        <span className='text-transparent bg-gradient-to-r from-[var(--accent-navy)] via-[var(--accent-teal)] to-[var(--accent-amber)] bg-clip-text'>Work Experience</span>
      </motion.h1>

      <div className='space-y-8 lg:space-y-12'>
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
          key={index} 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className='group mx-auto max-w-4xl'
          >
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center bg-gradient-to-br from-[var(--accent-teal)]/8 to-white/90 dark:from-[var(--accent-navy)]/12 dark:to-[var(--color-surface)]/60 p-4 lg:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all'>
              {/* Timeline and Company Info */}
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className='w-full lg:w-1/3'
              >
                <div className='p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-navy)]/6 to-[var(--accent-teal)]/6 dark:from-[var(--accent-navy)]/12 dark:to-[var(--accent-teal)]/12 transition-all group-hover:shadow-lg group-hover:shadow-glow-navy'>
                  <div className='flex items-center gap-3 mb-3'>
                    <FiAward className='text-2xl text-[var(--accent-teal)] dark:text-[var(--accent-teal)]' />
                    <h3 className='text-xl lg:text-2xl font-bold text-[var(--color-text)] dark:text-[var(--color-text)]'>
                      {exp.company}
                    </h3>
                  </div>
                  <div className='flex items-center gap-2 text-sm lg:text-base text-gray-700 dark:text-gray-300 mt-4'>
                    <FiCalendar className='text-[var(--accent-teal)] dark:text-[var(--accent-teal)]' />
                    <span className='font-semibold'>{exp.duration}</span>
                  </div>
                </div>
              </motion.div>

              {/* Experience Details */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className='w-full lg:w-2/3'
              >
                <div className='p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/60 to-[var(--accent-navy)]/6 dark:from-gray-900/40 dark:to-[var(--accent-navy)]/8 hover:shadow-lg transition-all'>
                  <h4 className='mb-4 font-bold text-xl lg:text-2xl text-gray-900 dark:text-white'>{exp.role}</h4>
                  
                  {/* Description with bullet points */}
                  <div className='mb-6 space-y-2'>
                    {exp.description.split('•').map((line, i) => (
                      <motion.p 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className='text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed'
                      >
                        {line.trim() && (i === 0 ? line.trim() : `• ${line.trim()}`)}
                      </motion.p>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className='pt-6'>
                    <p className='text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3'>Tech Stack:</p>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ y: -2, scale: 1.05 }}
                          className='rounded-full bg-gradient-to-r from-[var(--accent-navy)]/10 to-[var(--accent-teal)]/10 dark:from-[var(--accent-navy)]/20 dark:to-[var(--accent-teal)]/20 px-4 py-2 text-xs lg:text-sm font-semibold text-[var(--accent-navy)] dark:text-[var(--accent-teal)] transition-all'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
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

export default Experience
