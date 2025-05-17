/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './pages/Home';
import About from './pages/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './pages/Profile';
import Loader from './components/Loader';
import Lanyard from './components/Lanyard';
// import TextPressure from './components/TextPressure'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll handler with throttling
  const handleScroll = useCallback(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;
      
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveSection(section);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main>
        <AnimatePresence>
          <section id="home" key="home">
            {/* Added TextPressure component in Hero section */}
            <div className="absolute top-1/4 left-0 right-0 flex justify-center z-10">
              {/* <TextPressure
                text="Welcome!"
                flex={true}
                alpha={false}
                stroke={true}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#3b82f6"
                minFontSize={48}
              /> */}
            </div>
            <Hero />
          </section>
          
          <motion.section 
            id="about" 
            key="about"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.section>
          
          <motion.section 
            id="skills" 
            key="skills"
            className="py-20 bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Skills />
          </motion.section>
          
          <motion.section 
            id="projects" 
            key="projects"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Projects />
          </motion.section>
          
          <motion.section 
            id="contact" 
            key="contact"
            className="py-20 bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Contact />
            {/* <Lanyard /> */}
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;