import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useTheme } from './context/ThemeContext'


function App() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen transition-colors duration-500`}>
      <div className='overflow-x-hidden text-neutral-900 dark:text-neutral-100 antialiased selection:bg-purple-400 dark:selection:bg-cyan-300 selection:text-white dark:selection:text-cyan-900'>
        {/* Animated Background */}
        <div className='fixed top-0 -z-10 h-full w-full'>
          {/* Primary Gradient Background */}
          <div className={`absolute inset-0 -z-10 h-full w-full transition-all duration-500 ${
            isDark 
              ? '[background:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,34,77,0.28),rgba(0,0,0,1))]'
              : '[background:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.05),rgba(255,255,255,1))]'
          }`}></div>
          
          {/* Secondary Gradient Accent */}
          <div className={`absolute inset-0 -z-10 h-full w-full transition-all duration-500 ${
            isDark 
              ? '[background:radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.12),transparent_50%)]'
              : '[background:radial-gradient(circle_at_20%_50%,rgba(245,158,11,0.06),transparent_50%)]'
          }`}></div>

          {/* Tertiary Gradient for Depth */}
          <div className={`absolute inset-0 -z-10 h-full w-full transition-all duration-500 ${
            isDark 
              ? '[background:radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.08),transparent_50%)]'
              : '[background:radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.06),transparent_50%)]'
          }`}></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <SpeedInsights/>
          <Navbar/>
          <Hero/>
          <About/>
          <Experience/>
          <Technologies/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </div>
  )
}

export default App
