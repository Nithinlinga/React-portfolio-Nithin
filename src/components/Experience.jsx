import React from 'react'
import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    company: 'CIGI Technologies',
    role: 'Full Stack Developer Intern',
    duration: 'Dec 2024 - July 2025',
    description: `Worked on creating forms for ATPTour.com using Next.js (frontend), Laravel (backend), MySQL (DB), and AWS deployment.
• Designed and optimized interactive web components with React.js
• Reusable UI components built and integrated with a scalable back-end API, improving data flow and performance.
• Developed and integrated multiple frontend forms for ATP Tour website using Next.js, improving page performance and accessibility.
• Added a mechanism to prevent concurrent edits by multiple users.
• Proposed and implemented a strategy to retrieve distinct form data from a shared database table, enabling precise data access and improving form handling efficiency.
• Built REST APIs in Laravel 10 to handle user data, authentication, and server-side validation.
• Deployed full-stack applications to AWS EC2 and maintained them using CI/CD pipelines.`,
    technologies: ['Next.js', 'Laravel', 'MySQL', 'AWS', 'JavaScript', 'MUI']
  }
]

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4 mb-4 lg:mb-0'
            >
              <h3 className='text-xl font-bold text-green-500'>{exp.company}</h3>
              <p className='text-sm text-neutral-400'>{exp.duration}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h4 className='mb-2 font-semibold'>{exp.role}</h4>
              {exp.description.split('•').map((line, i) => (
                <p key={i} className='mb-2 text-neutral-400'>
                  {line.trim() && (i === 0 ? line.trim() : `• ${line.trim()}`)}
                </p>
              ))}
              <div className='flex flex-wrap gap-2 mt-4'>
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
