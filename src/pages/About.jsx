/* eslint-disable no-unused-vars */
// components/About.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 12, 
        duration: 0.5 
      },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 15,
      }
    }
  };

  const statCardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 70,
        delay: i * 0.1,
      }
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
      backgroundColor: "rgba(249, 250, 251, 0.05)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.03,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 70,
        damping: 15, 
        duration: 0.7 
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12
      }
    }
  };

  const timelineItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 12,
        delay: i * 0.15 
      }
    }),
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.15 + 0.2, duration: 0.4 }
    }),
    hover: {
      scale: 1.15,
      boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.1)",
    }
  };

  const stats = [
    // { value: '4+', label: 'Years Experience' },
    // { value: '30+', label: 'Projects Completed' },
    // { value: '20+', label: 'Happy Clients' },
    // { value: '5+', label: 'Awards' },
  ];

  const experiences = [
    {
      year: '2025 - Present',
      position: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Led development of enterprise web applications using React, TypeScript and modern CSS frameworks. Improved application performance by 40%.',
      skills: ['React', 'TypeScript', 'Next.js']
    },
    {
      year: '2023 - 2025',
      position: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed responsive web applications and collaborated with UX designers to implement pixel-perfect interfaces.',
      skills: ['JavaScript', 'React', 'Tailwind CSS']
    },
    {
      year: '2021 - 2023',
      position: 'Junior Web Developer',
      company: 'Creative Agency',
      description: 'Built custom websites and e-commerce solutions while maintaining high standards of code quality and documentation.',
      skills: ['HTML/CSS', 'JavaScript', 'WordPress']
    },
  ];

  const createLetterVariants = () => {
    return {
      hidden: { opacity: 0, y: 15 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.025,
          duration: 0.3
        }
      })
    };
  };

  const letterVariants = createLetterVariants();
  const animateText = "Professional Profile";
  
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header with Letter Animation */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <motion.h2 
              className="text-sm uppercase tracking-widest text-gray-400 mb-3 font-medium"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About Me
            </motion.h2>
            
            <motion.div className="overflow-hidden">
              <motion.h3 className="text-3xl md:text-4xl font-semibold flex justify-center space-x-1">
                {animateText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className={char === ' ' ? 'w-2' : ''}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h3>
            </motion.div>
            
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mt-5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: inView ? "4rem" : 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            {/* Image with subtle effects */}
            <motion.div 
              className="md:col-span-2 relative"
              variants={fadeInUpVariants}
            >
              <motion.div 
                className="w-full h-auto aspect-[3/4] rounded-lg overflow-hidden relative group shadow-xl"
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-full h-full absolute top-2 left-2 border border-gray-700/50 rounded-lg"
                  initial={{ opacity: 0, top: "10px", left: "10px" }}
                  animate={{ opacity: 1, top: "8px", left: "8px" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
                <motion.img 
                  src="./src/assets/jun1.jpg" 
                  alt="Professional Portrait" 
                  className="w-full h-full object-cover object-center absolute inset-0" 
                  initial={{ scale: 1.1, filter: "blur(3px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="md:col-span-3 space-y-6"
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold"
                variants={textRevealVariants}
              >
                I'm <motion.span 
                  className="text-gray-200"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >Your Name</motion.span>, a Frontend Developer
              </motion.h3>
              
              <motion.p 
                className="text-gray-400 leading-relaxed"
                variants={textRevealVariants}
              >
                {/* I am a dedicated frontend developer with expertise in creating elegant, user-centric web applications that deliver exceptional experiences. 
                With a strong foundation in modern JavaScript frameworks and a meticulous eye for design implementation, 
                I transform complex requirements into intuitive interfaces. */}
              </motion.p>
              
              <motion.p 
                className="text-gray-400 leading-relaxed"
                variants={textRevealVariants}
              >
                {/* My approach combines clean, maintainable code with cutting-edge technologies to build scalable solutions. 
                I excel in collaborative environments where I can leverage my technical skills alongside effective communication 
                to deliver projects that exceed expectations. */}
              </motion.p>
              
              {/* Elegant Stats Cards */}
              <motion.div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    custom={index}
                    variants={statCardVariants}
                    whileHover="hover"
                    className="bg-gray-800/40 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300"
                  >
                    <motion.h4 
                      className="text-2xl md:text-3xl font-semibold text-gray-200"
                      initial={{ opacity: 0, y: 15 }}
                      animate={inView ? { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.4 + index * 0.1, duration: 0.5 }
                      } : {}}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { 
                          opacity: 1,
                          transition: { delay: 0.6 + index * 0.15 }
                        } : {}}
                      >
                        {stat.value}
                      </motion.span>
                    </motion.h4>
                    <motion.p 
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={inView ? { 
                        opacity: 1,
                        transition: { delay: 0.8 + index * 0.15 }
                      } : {}}
                    >
                      {stat.label}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Professional CTA Button */}
              <motion.div variants={textRevealVariants}>
                <motion.a 
                  href="#contact"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-gray-900"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span></span>
                  <motion.svg 
                    // className="w-5 h-5" 
                    // fill="none" 
                    // stroke="" 
                    viewBox="0 0 550 24" 
                    // xmlns="http://www.w3.org/2000/svg"
                    // initial={{ y: 0 }}
                    // animate={{ y: [0, -2, 0] }}
                    // transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Professional Experience Timeline */}
          <motion.div 
            variants={fadeInUpVariants}
            className="pt-20"
          >
            <motion.h3 
              className="text-2xl font-semibold mb-14 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Professional Experience
            </motion.h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={timelineItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                >
                  <motion.div 
                    custom={index}
                    variants={dotVariants}
                    whileHover="hover"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 shadow-md md:mx-auto shrink-0 z-10"
                  >
                    <motion.svg 
                      className="w-4 h-4 text-gray-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={activeIndex === index ? 
                        { rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] } : 
                        {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </motion.svg>
                  </motion.div>
                  
                  <motion.div 
                    className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800/30 p-6 rounded-md shadow-md border border-gray-700/50 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(209, 213, 219, 0.2)",
                      backgroundColor: "rgba(31, 41, 55, 0.4)"
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <motion.span 
                        className="text-sm text-gray-400 font-medium"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {exp.year}
                      </motion.span>
                      <motion.span 
                        className="text-xs font-medium px-2 py-1 rounded-full bg-gray-700/50 text-gray-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {exp.company}
                      </motion.span>
                    </div>
                    <motion.h4 
                      className="text-xl font-semibold mb-2 text-gray-200"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {exp.position}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-400 mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {exp.description}
                    </motion.p>
                    
                    {/* Professional skills tags */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mt-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-gray-700/40 text-gray-300 px-2 py-1 rounded-md border border-gray-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Subtle background accent */}
          <motion.div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 rounded-full bg-gray-800 blur-3xl"
                initial={{ 
                  x: Math.random() * 100 - 50 + "%", 
                  y: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.3 + 0.1
                }}
                animate={{ 
                  x: [
                    Math.random() * 100 - 50 + "%", 
                    Math.random() * 100 - 50 + "%", 
                    Math.random() * 100 - 50 + "%"
                  ],
                  y: [
                    Math.random() * 100 + "%", 
                    Math.random() * 100 + "%", 
                    Math.random() * 100 + "%"
                  ],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 15 + Math.random() * 20, 
                  ease: "linear" 
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;