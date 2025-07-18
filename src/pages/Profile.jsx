// // /* eslint-disable no-unused-vars */
// // import React, { useEffect } from 'react';
// // import { motion } from "framer-motion";
// // import { Linkedin, Github, Mail, MapPin, Phone, User, Twitter, Instagram } from "lucide-react";
// // import Lanyard from '../components/Lanyard';

// // const Profile = () => {
// //   useEffect(() => {
// //     const canvas = document.getElementById('profile-particles');
// //     if (!canvas) return;
    
// //     const ctx = canvas.getContext('2d');
// //     let particles = [];
    
// //     const resizeCanvas = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //       particles = [];
// //       initParticles();
// //     };
    
// //     const initParticles = () => {
// //       const particleCount = Math.floor(canvas.width * canvas.height / 10000);
      
// //       for (let i = 0; i < particleCount; i++) {
// //         particles.push({
// //           x: Math.random() * canvas.width,
// //           y: Math.random() * canvas.height,
// //           radius: Math.random() * 2 + 1,
// //           speedX: (Math.random() - 0.5) * 0.5,
// //           speedY: (Math.random() - 0.5) * 0.5,
// //           opacity: Math.random() * 0.5 + 0.2
// //         });
// //       }
// //     };
    
// //     const drawParticles = () => {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// //       for (let i = 0; i < particles.length; i++) {
// //         const p = particles[i];
        
// //         ctx.beginPath();
// //         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
// //         ctx.fillStyle = `rgba(100, 217, 255, ${p.opacity})`;
// //         ctx.fill();
        
// //         for (let j = i + 1; j < particles.length; j++) {
// //           const p2 = particles[j];
// //           const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          
// //           if (distance < 100) {
// //             ctx.beginPath();
// //             ctx.moveTo(p.x, p.y);
// //             ctx.lineTo(p2.x, p2.y);
// //             ctx.strokeStyle = `rgba(100, 217, 255, ${0.2 * (1 - distance / 100)})`;
// //             ctx.lineWidth = 0.5;
// //             ctx.stroke();
// //           }
// //         }
        
// //         p.x += p.speedX;
// //         p.y += p.speedY;
        
// //         if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
// //         if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
// //       }
      
// //       requestAnimationFrame(drawParticles);
// //     };
    
// //     window.addEventListener('resize', resizeCanvas);
// //     resizeCanvas();
// //     drawParticles();
    
// //     return () => window.removeEventListener('resize', resizeCanvas);
// //   }, []);

// //   const contactItems = [
// //     {
// //       icon: <User className="text-cyan-400 w-6 h-6" />,
// //       text: "Arjun Zebua",
// //       color: "text-white"
// //     },
// //     {
// //       icon: <MapPin className="text-cyan-400 w-6 h-6" />,
// //       text: "Medan, North Sumatra, Indonesia",
// //       color: "text-white"
// //     },
// //     {
// //       icon: <Mail className="text-cyan-400 w-6 h-6" />,
// //       text: "arjun@gmail.com",
// //       color: "text-cyan-400 hover:underline",
// //       link: "mailto:https://mail.google.com/mail/u/0/#inbox"
// //     },
// //     {
// //       icon: <Phone className="text-cyan-400 w-6 h-6" />,
// //       text: "+62 812 3456 7890",
// //       color: "text-white"
// //     }
// //   ];

// //   const socialItems = [
// //     {
// //       icon: <Linkedin className="w-6 h-6" />,
// //       text: "LinkedIn",
// //       color: "hover:text-[#0077B5]",
// //       link: "https://linkedin.com/in/arjun"
// //     },
// //     {
// //       icon: <Github className="w-6 h-6" />,
// //       text: "GitHub",
// //       color: "hover:text-[#6e5494]",
// //       link: "https://github.com/arjunzebua"
// //     },
// //     {
// //       icon: <Twitter className="w-6 h-6" />,
// //       text: "Twitter",
// //       color: "hover:text-[#1DA1F2]",
// //       link: "https://twitter.com/arjun"
// //     },
// //     {
// //       icon: <Instagram className="w-6 h-6" />,
// //       text: "Instagram",
// //       color: "hover:text-[#E1306C]",
// //       link: "https://instagram.com/arjun"
// //     }
// //   ];

// //   return (
// //     <div className="relative min-h-screen w-full flex items-center justify-center from-gray-900 via-slate-900 to-gray-900">
// //       <canvas id="profile-particles" className="absolute inset-0 w-full h-full" />
      
// //       {/* Main content */}
// //       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 py-12 px-4 sm:px-6">
// //         {/* Left side - Contact info */}
// //         <motion.div 
// //           className="flex flex-col space-y-12"
// //           initial={{ opacity: 0, x: -50 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //         >
// //           <div className="space-y-6">
// //             <motion.div
// //               initial={{ opacity: 0, y: -20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //             >
// //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">
// //                 Let's Connect
// //               </h1>
// //               <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
// //             </motion.div>
            
// //             <motion.p
// //               className="text-xl text-gray-300 max-w-lg leading-relaxed"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //             >
// //               Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open to interesting conversations and new ideas.
// //             </motion.p>
// //           </div>

// //           {/* Contact details */}
// //           <motion.div 
// //             className="space-y-6"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.6, delay: 0.6 }}
// //           >
// //             <h2 className="text-2xl font-semibold text-gray-200 flex items-center gap-2">
// //               <svg className="text-cyan-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
// //               </svg>
// //               Contact Information
// //             </h2>
            
// //             <div className="grid gap-4">
// //               {contactItems.map((item, index) => (
// //                 <motion.div
// //                   key={index}
// //                   className="flex items-start gap-4 group"
// //                   whileHover={{ x: 5 }}
// //                   transition={{ type: "spring", stiffness: 300 }}
// //                 >
// //                   <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-cyan-400/10 group-hover:ring-2 group-hover:ring-cyan-400/30 transition-all duration-300">
// //                     {item.icon}
// //                   </div>
// //                   {item.link ? (
// //                     <a 
// //                       href={item.link} 
// //                       className={`text-lg ${item.color} transition-colors mt-1.5 flex-1`}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       {item.text}
// //                       {item.link && <span className="ml-2 text-xs text-cyan-400/70">↗</span>}
// //                     </a>
// //                   ) : (
// //                     <span className={`text-lg ${item.color} mt-1.5 flex-1`}>
// //                       {item.text}
// //                     </span>
// //                   )}
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>

// //           {/* Social links */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.6, delay: 0.8 }}
// //           >
// //             <h2 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
// //               <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm"></div>
// //               Social Profiles
// //             </h2>
// //             <div className="grid grid-cols-2 gap-4">
// //               {socialItems.map((item, index) => (
// //                 <motion.a
// //                   key={index}
// //                   href={item.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className={`flex items-center gap-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/30 transition-all ${item.color} hover:shadow-lg hover:shadow-cyan-400/10`}
// //                   whileHover={{ 
// //                     y: -3, 
// //                     backgroundColor: "rgba(17, 24, 39, 0.7)",
// //                     scale: 1.02
// //                   }}
// //                   whileTap={{ scale: 0.98 }}
// //                   transition={{ type: "spring", stiffness: 400 }}
// //                 >
// //                   <div className={`p-2 rounded-lg ${item.text === 'LinkedIn' ? 'bg-[#0077B5]/20' : 
// //                                   item.text === 'GitHub' ? 'bg-[#6e5494]/20' : 
// //                                   item.text === 'Twitter' ? 'bg-[#1DA1F2]/20' : 
// //                                   'bg-[#E1306C]/20'}`}>
// //                     {item.icon}
// //                   </div>
// //                   <span className="text-lg font-medium">{item.text}</span>
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </motion.div>

// //         {/* Right side - Enhanced Lanyard */}
// //         <motion.div 
// //           className="flex flex-col items-center justify-center gap-8"
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8, delay: 0.4 }}
// //         >
// //           {/* Enhanced Lanyard card with better styling */}
// //           <div className="relative w-full max-w-lg">
// //             {/* Outer glow effect */}
// //             <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-xl"></div>
            
// //             {/* Main card container */}
// //             <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-600/30 shadow-2xl overflow-hidden backdrop-blur-md">
// //               {/* Animated border gradient */}
// //               <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 opacity-50 animate-pulse"></div>
              
// //               {/* Inner content area */}
// //               <div className="relative m-1 rounded-[22px] bg-gray-900/95 border border-gray-700/50 overflow-hidden">
// //                 {/* Subtle grid pattern background */}
// //                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(100,217,255,0.1)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
                
// //                 {/* Lanyard component container */}
// //                 <div className="relative p-6 min-h-[400px] flex items-center justify-center">
// //                   <div className="w-full transform hover:scale-105 transition-transform duration-300">
// //                     <Lanyard />
// //                   </div>
// //                 </div>
                
// //                 {/* Bottom accent line */}
// //                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
// //               </div>
              
// //               {/* Decorative corner elements */}
// //               <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-2xl"></div>
// //               <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-blue-400/40 rounded-tr-2xl"></div>
// //               <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-purple-400/40 rounded-bl-2xl"></div>
// //               <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-cyan-400/40 rounded-br-2xl"></div>
              
// //               {/* Floating particles effect */}
// //               <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"></div>
// //               <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400/60 rounded-full animate-ping delay-300"></div>
// //               <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-ping delay-700"></div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { Linkedin, Github, Mail, MapPin, Phone, User, Twitter, Instagram } from "lucide-react";
// import Lanyard from '../components/Lanyard';

// const MyContact = () => {
//   const contactItems = [
//     {
//       icon: <User className="text-cyan-400 w-6 h-6" />,
//       text: "Arjun Zebua",
//       color: "text-white"
//     },
//     {
//       icon: <MapPin className="text-cyan-400 w-6 h-6" />,
//       text: "Medan, North Sumatra, Indonesia",
//       color: "text-white"
//     },
//     {
//       icon: <Mail className="text-cyan-400 w-6 h-6" />,
//       text: "arjun@gmail.com",
//       color: "text-cyan-400 hover:underline",
//       link: "mailto:https://mail.google.com/mail/u/0/#inbox"
//     },
//     {
//       icon: <Phone className="text-cyan-400 w-6 h-6" />,
//       text: "+62 812 3456 7890",
//       color: "text-white"
//     }
//   ];

//   const socialItems = [
//     {
//       icon: <Linkedin className="w-6 h-6" />,
//       text: "LinkedIn",
//       color: "hover:text-[#0077B5]",
//       link: "https://linkedin.com/in/arjun"
//     },
//     {
//       icon: <Github className="w-6 h-6" />,
//       text: "GitHub",
//       color: "hover:text-[#6e5494]",
//       link: "https://github.com/arjunzebua"
//     },
//     {
//       icon: <Twitter className="w-6 h-6" />,
//       text: "Twitter",
//       color: "hover:text-[#1DA1F2]",
//       link: "https://twitter.com/arjun"
//     },
//     {
//       icon: <Instagram className="w-6 h-6" />,
//       text: "Instagram",
//       color: "hover:text-[#E1306C]",
//       link: "https://instagram.com/arjun"
//     }
//   ];

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center relative overflow-hidden p-4">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Floating gradient blobs */}
//         <motion.div 
//           className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-cyan-500 opacity-5 blur-3xl"
//           animate={{ 
//             x: [-100, 0, -100],
//             y: [0, -50, 0],
//             opacity: [0.05, 0.1, 0.05]
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-blue-600 opacity-5 blur-3xl"
//           animate={{ 
//             x: [100, 0, 100],
//             y: [0, 50, 0],
//             opacity: [0.05, 0.1, 0.05]
//           }}
//           transition={{ duration: 18, repeat: Infinity, delay: 2, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-purple-500 opacity-5 blur-3xl"
//           animate={{ 
//             x: [-50, 50, -50],
//             y: [0, -30, 0],
//             opacity: [0.05, 0.08, 0.05]
//           }}
//           transition={{ duration: 20, repeat: Infinity, delay: 1, ease: "easeInOut" }}
//         />
        
//         {/* Grainy texture */}
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        
//         {/* Grid pattern */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 py-12 px-4 sm:px-6">
//         {/* Left side - Contact info */}
//         <motion.div 
//           className="flex flex-col space-y-12"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">
//                 Let's Connect
//               </h1>
//               <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
//             </motion.div>
            
//             <motion.p
//               className="text-xl text-gray-300 max-w-lg leading-relaxed"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open to interesting conversations and new ideas.
//             </motion.p>
//           </div>

//           {/* Contact details */}
//           <motion.div 
//             className="space-y-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             <h2 className="text-2xl font-semibold text-gray-200 flex items-center gap-2">
//               <svg className="text-cyan-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//               </svg>
//               Contact Information
//             </h2>
            
//             <div className="grid gap-4">
//               {contactItems.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start gap-4 group"
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-cyan-400/10 group-hover:ring-2 group-hover:ring-cyan-400/30 transition-all duration-300">
//                     {item.icon}
//                   </div>
//                   {item.link ? (
//                     <a 
//                       href={item.link} 
//                       className={`text-lg ${item.color} transition-colors mt-1.5 flex-1`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {item.text}
//                       {item.link && <span className="ml-2 text-xs text-cyan-400/70">↗</span>}
//                     </a>
//                   ) : (
//                     <span className={`text-lg ${item.color} mt-1.5 flex-1`}>
//                       {item.text}
//                     </span>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Social links */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             <h2 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
//               <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm"></div>
//               Social Profiles
//             </h2>
//             <div className="grid grid-cols-2 gap-4">
//               {socialItems.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`flex items-center gap-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/30 transition-all ${item.color} hover:shadow-lg hover:shadow-cyan-400/10`}
//                   whileHover={{ 
//                     y: -3, 
//                     backgroundColor: "rgba(17, 24, 39, 0.7)",
//                     scale: 1.02
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <div className={`p-2 rounded-lg ${item.text === 'LinkedIn' ? 'bg-[#0077B5]/20' : 
//                                   item.text === 'GitHub' ? 'bg-[#6e5494]/20' : 
//                                   item.text === 'Twitter' ? 'bg-[#1DA1F2]/20' : 
//                                   'bg-[#E1306C]/20'}`}>
//                     {item.icon}
//                   </div>
//                   <span className="text-lg font-medium">{item.text}</span>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right side - Only Lanyard (form removed) */}
//         <motion.div 
//           className="flex flex-col items-center justify-center gap-8"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           {/* Lanyard card - made larger to fill space */}
//           <div className="relative w-full max-w-lg aspect-square">
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-gray-700/50 shadow-2xl overflow-hidden">
//               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
//               <div className="absolute inset-4 rounded-2xl border border-gray-700/30 overflow-hidden backdrop-blur-sm">
//                 <Lanyard />
//               </div>
//               {/* Decorative corner accents */}
//               <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-3xl"></div>
//               <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl"></div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Floating particles */}
//       {[...Array(30)].map((_, i) => {
//         const size = Math.random() * 8 + 2;
//         const delay = Math.random() * 5;
//         const duration = Math.random() * 15 + 10;
//         const initialY = Math.random() * 100;
//         const initialX = Math.random() * 100;
        
//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 pointer-events-none"
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               left: `${initialX}%`,
//               top: `${initialY}%`,
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 50],
//               opacity: [0.3, 0.7, 0.3],
//             }}
//             transition={{
//               duration: duration,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: delay,
//               ease: "easeInOut"
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default MyContact;