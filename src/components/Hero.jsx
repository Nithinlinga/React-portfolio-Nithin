import React, { useEffect, useState } from 'react'
import {HERO_CONTENT} from "../constants/index"
import {motion} from "framer-motion"
import pic1 from "../Photos-001/pic1.jpg"
const container=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    }
})
const Hero = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100); // Decreased delta for faster typing
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

    // Speeding up the deletion phase
    if (isDeleting) {
      setDelta(50); // Increase deleting speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period); // Pause before starting to delete
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100); // Reset delta to fast speed for typing
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div className=' border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className=' flex flex-col items-center lg:items-start'>
                    
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl '>
                   Nithin Linga </motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className=' txt-rotate bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-3xl tracking-tight text-transparent'
                      dataPeriod="1000" data-rotate='[ "Web Developer", "Full Stack Developer", "Free Lancer","Front-end Developer" ]'>
                    <span className="wrap">{text}
                        </span></motion.span>
                    <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                    
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            
                <div className='flex justify-center'>
                    <motion.img
                    initial={{x:100, opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1, delay:1.2}}
                    width={450}
                    loading="lazy"
                    className='rounded-2xl'
                    src={pic1} alt="rofile" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero