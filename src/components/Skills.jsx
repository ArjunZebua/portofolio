// /* eslint-disable no-unused-vars */
// import React, { useEffect } from 'react';
// import { motion } from "framer-motion";
// import { RiVercelLine, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
// import { SiThymeleaf, SiMysql, SiJavascript, SiC, SiSwagger, SiNetlify, SiGit, SiGithub } from "react-icons/si";
// import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
// import { FaJava } from "react-icons/fa";


// const TechStack = () => {
//   useEffect(() => {
//     const canvas = document.getElementById('tech-particles');
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     let particles = [];
    
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       particles = [];
//       initParticles();
//     };
    
//     const initParticles = () => {
//       const particleCount = Math.floor(canvas.width * canvas.height / 10000);
      
//       for (let i = 0; i < particleCount; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 2 + 1,
//           speedX: (Math.random() - 0.5) * 0.5,
//           speedY: (Math.random() - 0.5) * 0.5,
//           opacity: Math.random() * 0.5 + 0.2
//         });
//       }
//     };
    
//     const drawParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];
        
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(100, 217, 255, ${p.opacity})`;
//         ctx.fill();
        
//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j];
//           const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          
//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.strokeStyle = `rgba(100, 217, 255, ${0.2 * (1 - distance / 100)})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
        
//         p.x += p.speedX;
//         p.y += p.speedY;
        
//         if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
//       }
      
//       requestAnimationFrame(drawParticles);
//     };
    
//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();
//     drawParticles();
    
//     return () => window.removeEventListener('resize', resizeCanvas);
//   }, []);

//   const techStackVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const techVariants = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
//   };

//   const rowVariants = {
//     initial: { opacity: 0, y: 30 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   // Organized into rows of 6-7 technologies
//   const techRows = [
//     [
//       { icon: <FaJava size={40} />, name: "Java", color: "#F1502F" },
//       { icon: <BiLogoSpringBoot size={40} />, name: "Spring Boot", color: "#6DB33F" },
//       { icon: <SiThymeleaf size={40} />, name: "Thymeleaf", color: "#005F0F" },
//       { icon: <RiReactjsLine size={40} />, name: "React", color: "#61DAFB" },
//       { icon: <RiTailwindCssFill size={40} />, name: "Tailwind CSS", color: "#06B6D4" },
//       { icon: <RiVercelLine size={40} />, name: "Vercel", color: "#ffffff" },
//       { icon: <SiNetlify size={40} />, name: "Netlify", color: "#00AD9F" },
//     ],
//     [
//       { icon: <BiLogoPostgresql size={40} />, name: "PostgreSQL", color: "#336791" },
//       { icon: <SiMysql size={40} />, name: "MySQL", color: "#00758F" },
//       { icon: <SiJavascript size={40} />, name: "JavaScript", color: "#F0DB4F" },
//       { icon: <SiC size={40} />, name: "C", color: "#A8B9CC" },
//       { icon: <SiSwagger size={40} />, name: "Swagger", color: "#6BA539" },
//       { icon: <SiGit size={40} />, name: "Git", color: "#F1502F" },
//       { icon: <SiGithub size={40} />, name: "GitHub", color: "#fff" },
//     ]
//   ];

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-900">
//       <canvas 
//         id="tech-particles" 
//         className="absolute inset-0 w-full h-full"
//       />
      
//       <motion.section
//         id="tech-stack"
//         aria-label="Tech Stack section"
//         className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
//         initial="initial"
//         animate="animate"
//         variants={techStackVariants}
//       >
//         <motion.h1
//           variants={techVariants}
//           className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
//         >
//           Tech <span className="text-gray-300">Stack</span>
//         </motion.h1>

//         <motion.p
//           variants={techVariants}
//           className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12"
//         >
//           I build beautiful and functional web experiences with modern technologies.
//           Let's create something amazing together.
//         </motion.p>

//         <div className="space-y-8">
//           {techRows.map((row, rowIndex) => (
//             <motion.div
//               key={rowIndex}
//               variants={rowVariants}
//               className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
//             >
//               {row.map((tech, techIndex) => (
//                 <motion.div
//                   key={`${rowIndex}-${techIndex}`}
//                   variants={techVariants}
//                   whileHover="hover"
//                   className="relative group rounded-2xl text-5xl sm:text-6xl border-2 border-cyan-400/50 p-3 shadow-md shadow-cyan-400/25 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-500/20 transition-all duration-300 backdrop-blur-sm bg-gray-900/50"
//                   style={{ color: tech.color }}
//                   aria-label={`Technology: ${tech.name}`}
//                 >
//                   {tech.icon}
//                   <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-700">
//                     {tech.name}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default TechStack;
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { RiVercelLine, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { SiMysql, SiJavascript, SiC, SiSwagger, SiNetlify, SiGit, SiGithub, SiDbeaver } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { FaJava } from "react-icons/fa";


const TechStack = () => {
  const techStackVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const createTechVariants = (index) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: index * 0.1
      },
    },
    hover: { 
      scale: 1.15,
      y: -8,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  });

  const rowVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const techRows = [
    [
      { icon: <FaJava size={50} />, name: "Java", color: "#F1502F" },
      { icon: <BiLogoSpringBoot size={50} />, name: "Spring Boot", color: "#6DB33F" },
      { icon: <RiReactjsLine size={50} />, name: "React", color: "#61DAFB" },
      { icon: <RiTailwindCssFill size={50} />, name: "Tailwind CSS", color: "#06B6D4" },
      { icon: <RiVercelLine size={50} />, name: "Vercel", color: "#ffffff" },
    ],
    [
      { icon: <BiLogoPostgresql size={50} />, name: "PostgreSQL", color: "#336791" },
      { icon: <SiMysql size={50} />, name: "MySQL", color: "#00758F" },
      { icon: <SiJavascript size={50} />, name: "JavaScript", color: "#F0DB4F" },
      { icon: <SiC size={50} />, name: "C", color: "#A8B9CC" },
      { icon: <SiSwagger size={50} />, name: "Swagger", color: "#6BA539" },
      { icon: <SiGit size={50} />, name: "Git", color: "#F1502F" },
      { icon: <SiGithub size={50} />, name: "GitHub", color: "#fff" },
      { icon: <SiNetlify size={50} />, name: "Netlify", color: "#00AD9F" },
      { icon: <SiDbeaver size={50} />, name: "DBeaver", color: "#FF6600" },
    ]
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Main content */}
      <motion.section
        id="tech-stack"
        aria-label="Tech Stack section"
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12"
        initial="initial"
        animate="animate"
        variants={techStackVariants}
      >
        <motion.h1
          variants={createTechVariants(0)}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h1>

        <motion.p
          variants={createTechVariants(1)}
          className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Technologies I work with to build modern web applications
        </motion.p>

        <div className="space-y-8">
          {techRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={rowVariants}
              className="flex flex-wrap items-center justify-center gap-5 sm:gap-8"
            >
              {row.map((tech, techIndex) => (
                <motion.div
                  key={`${rowIndex}-${techIndex}`}
                  variants={createTechVariants(rowIndex * 7 + techIndex)}
                  whileHover="hover"
                  className="relative group cursor-pointer"
                  aria-label={`Technology: ${tech.name}`}
                >
                  {/* Icon tanpa background dan glow effect */}
                  <div className="relative p-6 transition-all duration-300">
                    {/* Icon dengan efek hover sederhana */}
                    <div 
                      style={{ color: tech.color }}
                      className="relative z-10 opacity-90 group-hover:opacity-100 transition-all duration-300"
                    >
                      {tech.icon}
                    </div>
                  </div>
                  
                  {/* Tooltip - also transparent */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 shadow-lg">
                    {tech.name}
                    {/* Tooltip arrow */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/60 border-t border-l border-white/10 rotate-45"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default TechStack;