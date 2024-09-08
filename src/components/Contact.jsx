import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20 flex flex-col items-center '>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className=' my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <motion.a
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        href="https://www.google.com/maps/search/17.820888,+78.566918?entry=tts&g_ep=EgoyMDI0MDkwNC4wKgBIAVAD"
        target='_blank'
         className='my-4'>{CONTACT.address}</motion.a>
        <motion.a
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        href='tel:+91 8790468868'
        className='my-4 border-b'>{CONTACT.phoneNo}</motion.a>
        <a href="mailto:nithinlinga2@gmail.com?
                &subject=Gone through your portfolio 
                &body=Hi Nithin Linga, Let's connect❤️" className='border-b'>{CONTACT.email}</a>

    </div>
  )
}

export default Contact