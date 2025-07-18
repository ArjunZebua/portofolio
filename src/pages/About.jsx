/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../components/Profilecard';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('about-particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      initParticles();
    };
    
    const initParticles = () => {
      const particleCount = Math.floor(canvas.width * canvas.height / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 217, 255, ${p.opacity})`;
        ctx.fill();
        
        // Draw connections between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 217, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      requestAnimationFrame(drawParticles);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();
    
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // Intersection observer simulation
  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 200);
    return () => clearTimeout(timer);
  }, []);

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
    { value: '4+', label: 'Projects Built' },
    { value: '2+', label: 'Years Learning' },
    { value: 'Growing', label: 'Skill Set' },
    { value: 'Eager', label: 'To Learn' },
  ];

  const experiences = [
    {
      year: '2025 - Present',
      position: 'Junior Backend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Developed enterprise web applications using modern backend technologies and collaborated with cross-functional teams to deliver scalable solutions.',
      skills: ['Java', 'C#', 'Node.js']
    },
    {
      year: '2024',
      position: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Crafted responsive and intuitive user interfaces by collaborating closely with UX designers and leveraging modern frontend technologies like React and Tailwind CSS.',
      skills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS']
    },
    {
      year: '2023',
      position: 'Junior Web Developer',
      company: 'Creative Agency',
      description: 'Built clean and responsive interfaces using semantic HTML and scalable CSS, ensuring consistency across all screen sizes.',
      skills: ['HTML/CSS', 'JavaScript']
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

  // Handler for ProfileCard contact button
  const handleContactClick = () => {
    // You can add your contact functionality here
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="">
      {/* Animated Particles Background - now matching Hero section */}
      <canvas id="about-particles" className="absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header with Letter Animation */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <motion.h2 
              className="text-sm uppercase tracking-widest text-cyan-400 mb-3 font-medium"
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
              className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: inView ? "4rem" : 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            {/* ========== PROFILE CARD WITH ANIMATION ========== */}
            <motion.div 
              className="md:col-span-2 relative"
              variants={fadeInUpVariants}
            >
              <div className="w-full max-w-md mx-auto">
                <ProfileCard
                  avatarUrl="./public/arjun1.jpg"
                  miniAvatarUrl="./public/arjun1.jpg"
                  name="Arjun Zebua"
                  title="Frontend & Backend Developer"
                  handle="arjunzebua"
                  status="Available for hire"
                  contactText="Contact"
                  showUserInfo={true}
                  enableTilt={true}
                  showBehindGradient={true}
                  onContactClick={handleContactClick}
                  className="profile-card-about"
                />
              </div>
            </motion.div>
            {/* ========== END PROFILE CARD ========== */}

            <motion.div 
              variants={itemVariants} 
              className="md:col-span-3 space-y-6"
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold"
                variants={textRevealVariants}
              >
                I'm <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >Arjun Zebua</motion.span>, a Frontend & Backend Developer
              </motion.h3>
              
              <motion.p 
                className="text-gray-400 leading-relaxed"
                variants={textRevealVariants}
              >
                I am a dedicated frontend and backend developer with expertise in creating elegant, user-centric web applications that deliver exceptional experiences. With a strong foundation in modern JavaScript frameworks and a meticulous eye for design implementation, I transform complex requirements into intuitive interfaces.
              </motion.p>
              
              <motion.p 
                className="text-gray-400 leading-relaxed"
                variants={textRevealVariants}
              >
                On the backend, I specialize in building robust and scalable systems using Node.js, Java (Spring Boot), and C# (.NET Core). I have experience designing RESTful APIs, implementing authentication and authorization mechanisms, managing relational databases, and integrating third-party services.
              </motion.p>
              
              <motion.p 
                className="text-gray-400 leading-relaxed"
                variants={textRevealVariants}
              >
                My approach combines clean, maintainable code with cutting-edge technologies to build scalable solutions. 
                I excel in collaborative environments where I can leverage my technical skills alongside effective communication 
                to deliver projects that exceed expectations.
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
                  className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg transition-transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Get In Touch</span>
                  <motion.svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 2, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional Experience
            </motion.h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/30 before:to-transparent">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={timelineItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                >
                  <motion.div 
                    custom={index}
                    variants={dotVariants}
                    whileHover="hover"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-cyan-500/30 shadow-md md:mx-auto shrink-0 z-10"
                  >
                    <motion.svg 
                      className="w-4 h-4 text-cyan-400" 
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
                    className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800/30 p-6 rounded-md shadow-md border border-cyan-500/20 transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(100, 217, 255, 0.3)",
                      backgroundColor: "rgba(31, 41, 55, 0.4)"
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <motion.span 
                        className="text-sm text-cyan-400 font-medium"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        {exp.year}
                      </motion.span>
                      <motion.span 
                        className="text-xs font-medium px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                      >
                        {exp.company}
                      </motion.span>
                    </div>
                    <motion.h4 
                      className="text-xl font-semibold mb-2 text-gray-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      {exp.position}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-400 mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {exp.description}
                    </motion.p>
                    
                    {/* Professional skills tags */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mt-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-md border border-cyan-500/20"
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
                className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
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

      {/* CSS for ProfileCard styling */}
      <style jsx>{`
        .profile-card-about {
          width: 100%;
          max-width: 400px;
          height: 500px;
        }
        
        .profile-card-about .pc-card {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
        }
        
        .profile-card-about .avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
        }
        
        .profile-card-about .pc-user-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          padding: 20px;
          color: white;
        }
        
        .profile-card-about .pc-user-details {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        
        .profile-card-about .pc-mini-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(100, 217, 255, 0.5);
        }
        
        .profile-card-about .pc-mini-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .profile-card-about .pc-user-text {
          flex: 1;
        }
        
        .profile-card-about .pc-handle {
          font-size: 14px;
          color: #64d9ff;
          font-weight: 500;
        }
        
        .profile-card-about .pc-status {
          font-size: 12px;
          color: #9ca3af;
        }
        
        .profile-card-about .pc-contact-btn {
          background: linear-gradient(135deg, #0891b2, #3b82f6);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .profile-card-about .pc-contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(100, 217, 255, 0.3);
        }
        
        .profile-card-about .pc-details {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .profile-card-about .pc-details h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .profile-card-about .pc-details p {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
        }
      `}</style>
    </div>
  );
};

export default About;