/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiCode, FiStar } from 'react-icons/fi';
import Perpus from '../assets/Perpus.png';
import Html from '../assets/Html.png';
import Bag from  '../assets/Bag.png';
import Api from  '../assets/Api.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'HTML Streaming Website',
      description: 'A modern HTML-based streaming platform with responsive design, featuring movie discovery, advanced search, and seamless video playback experience.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      image: Html, // Menggunakan imported image
      github: 'https://github.com/ArjunZebua/ARJUN_ZEBUA.git',
      category: 'Web',
      featured: true
    },
    {
      id: 2,
      title: 'EPerpus Digital Library',
      description: 'A comprehensive digital library platform featuring extensive book collections across multiple genres with intuitive browsing, detailed reviews, and personalized recommendations.',
      tags: ['Node.js', 'React', 'Tailwind CSS'],
      image: Perpus, // Menggunakan imported image
      github: 'https://github.com/ArjunZebua/uas_arjun.git',
      category: 'Web',
      featured: true
    },
    {
      id: 3,
      title: 'BigInstyle Girls',
    description: 'BigInstyle Girls adalah website fashion untuk perempuan yang menyajikan berbagai koleksi tas bergaya modern. Dibuat dengan React dan Tailwind CSS, website ini menampilkan produk secara responsif dan elegan, cocok untuk brand fashion yang ingin tampil stylish dan profesional.',
      tags: ['React','Tailwind CSS'],
      image: Bag,
      github: 'https://github.com/yourusername/taskapp',
      category: 'Web'
    },
    {
      id: 4,
      title: 'RESTful APIs',
      description: 'API backend yang dikembangkan menggunakan C# untuk menangani data dengan efisien. Mendukung operasi CRUD, keamanan endpoint, dan cocok untuk proyek skala kecil hingga besar.',
      tags: ['MySql','C#','.NET Core'],
      image: Api,
      github: 'https://github.com/yourusername/ai-image-generator',
      category: 'API'
    },
  ];

  const filters = ['All', 'Web',];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getAnimationStyle = (index, isVisible) => {
    if (!isVisible) return { opacity: 0, transform: 'translateY(30px) scale(0.95)' };
    
    return {
      opacity: 1,
      transform: 'translateY(0px) scale(1)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient background with animated mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse opacity-20" 
               style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse opacity-25" 
               style={{ animationDelay: '2s', animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse opacity-15" 
               style={{ animationDelay: '4s', animationDuration: '5s' }} />
          
          {/* Moving particles */}
          {[...Array(80)].map((_, i) => {
            const size = Math.random() * 4 + 1;
            const opacity = Math.random() * 0.6 + 0.1;
            const duration = Math.random() * 20 + 10;
            return (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: opacity,
                  animation: `float ${duration}s linear infinite`,
                  animationDelay: `${Math.random() * 20}s`
                }}
              />
            );
          })}
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }} />
          
          {/* Animated lines */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                style={{
                  width: '100%',
                  height: '1px',
                  top: `${(i + 1) * 16.66}%`,
                  animation: `slide ${8 + i * 2}s linear infinite`,
                  animationDelay: `${i * 1.5}s`
                }}
              />
            ))}
          </div>
          
          {/* Floating geometric shapes */}
          {[...Array(12)].map((_, i) => {
            const shapes = ['triangle', 'square', 'circle'];
            const shape = shapes[i % 3];
            const size = Math.random() * 20 + 10;
            return (
              <div
                key={`shape-${i}`}
                className={`absolute opacity-10 ${
                  shape === 'circle' ? 'rounded-full bg-gradient-to-br from-cyan-400 to-blue-500' :
                  shape === 'square' ? 'bg-gradient-to-br from-purple-400 to-pink-500' :
                  'bg-gradient-to-br from-emerald-400 to-teal-500'
                }`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: shape === 'triangle' ? 'rotate(45deg)' : 'none',
                  animation: `spin ${15 + Math.random() * 20}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              />
            );
          })}
        </div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat'
             }} />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          to { transform: rotate(360deg) scale(1); }
        }
      `}</style>

      <section id="projects" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div 
          className="text-center mb-12"
          style={getAnimationStyle(0, isInView)}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <FiCode className="text-cyan-400 text-lg" />
            <span className="text-cyan-400 text-sm font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of carefully crafted digital solutions. Each project represents a unique challenge 
            solved with modern technologies and innovative approaches.
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          className="mb-10 flex flex-wrap justify-center gap-3"
          style={getAnimationStyle(1, isInView)}
        >
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white border border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm'
              }`}
              style={{
                ...getAnimationStyle(index + 2, isInView),
                animationDelay: `${(index + 2) * 0.1}s`
              }}
            >
              {filter}
              {filter !== 'All' && (
                <span className="ml-2 text-xs opacity-75 bg-black/20 px-2 py-1 rounded-full">
                  {projects.filter(p => p.category === filter).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] ${
                project.featured ? 'ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/10' : ''
              }`}
              style={getAnimationStyle(index + 4, isInView)}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <FiStar className="w-3 h-3" />
                  Featured
                </div>
              )}

              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback jika gambar tidak bisa dimuat
                    e.target.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/70 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
                    >
                      <FiGithub className="text-lg text-white hover:text-gray-900" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/70 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
                    >
                      <FiExternalLink className="text-lg text-white hover:text-gray-900" />
                    </a>
                  )}
                </div>

                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  <span className="text-cyan-400 text-xs font-semibold">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-gray-700/60 to-gray-600/60 border border-gray-600/30 rounded-full text-xs text-cyan-300 font-medium backdrop-blur-sm hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                      style={{
                        animationDelay: `${tagIndex * 0.1}s`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center mt-16"
          style={getAnimationStyle(10, isInView)}
        >
          <p className="text-gray-400 mb-6 text-lg">
            Want to see more of my work or discuss a project?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;












// import React, { useState, useRef, useEffect } from 'react';
// import { FiGithub, FiExternalLink, FiCode, FiStar } from 'react-icons/fi';

// // Static image imports using require() with fallback
// const HtmlImage = (() => {
//   try {
//     return require('../assets/Html.png').default;
//   } catch {
//     return '/images/Html.png';
//   }
// })();

// const PerpusImage = (() => {
//   try {
//     return require('../assets/Perpus.png').default;
//   } catch {
//     return '/images/Perpus.png';
//   }
// })();

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [isInView, setIsInView] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: 'HTML Streaming Website',
//       description: 'A modern HTML-based streaming platform with responsive design, featuring movie discovery, advanced search, and seamless video playback experience.',
//       tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
//       image: HtmlImage,
//       github: 'https://github.com/ArjunZebua/ARJUN_ZEBUA.git',
//       category: 'Web',
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'EPerpus Digital Library',
//       description: 'A comprehensive digital library platform featuring extensive book collections across multiple genres with intuitive browsing, detailed reviews, and personalized recommendations.',
//       tags: ['Node.js', 'React', 'Tailwind CSS'],
//       image: PerpusImage,
//       github: 'https://github.com/ArjunZebua/uas_arjun.git',
//       category: 'Web',
//       featured: true
//     },
//     {
//       id: 3,
//       title: 'Mobile Task Manager',
//       description: 'Cross-platform productivity app with offline synchronization, collaborative features, and intelligent task prioritization for enhanced workflow management.',
//       tags: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
//       image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center',
//       github: 'https://github.com/yourusername/taskapp',
//       category: 'Web'
//     },
//     {
//       id: 4,
//       title: 'AI Image Generator',
//       description: 'Cutting-edge web application leveraging artificial intelligence to generate stunning images from text prompts with advanced customization options.',
//       tags: ['React', 'OpenAI API', 'Node.js', 'Express'],
//       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
//       github: 'https://github.com/yourusername/ai-image-generator',
//       category: 'AI'
//     },
//   ];

//   const filters = ['Web', 'AI'];

//   const filteredProjects = activeFilter === 'All' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   const getAnimationStyle = (index, isVisible) => {
//     if (!isVisible) return { opacity: 0, transform: 'translateY(30px) scale(0.95)' };
    
//     return {
//       opacity: 1,
//       transform: 'translateY(0px) scale(1)',
//       transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
//     };
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
//       {/* Advanced Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
//           {/* Animated gradient orbs */}
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse opacity-20" 
//                style={{ animationDelay: '0s', animationDuration: '4s' }} />
//           <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse opacity-25" 
//                style={{ animationDelay: '2s', animationDuration: '6s' }} />
//           <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse opacity-15" 
//                style={{ animationDelay: '4s', animationDuration: '5s' }} />
          
//           {/* Moving particles */}
//           {[...Array(80)].map((_, i) => {
//             const size = Math.random() * 4 + 1;
//             const opacity = Math.random() * 0.6 + 0.1;
//             const duration = Math.random() * 20 + 10;
//             return (
//               <div
//                 key={i}
//                 className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
//                 style={{
//                   width: `${size}px`,
//                   height: `${size}px`,
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   opacity: opacity,
//                   animation: `float ${duration}s linear infinite`,
//                   animationDelay: `${Math.random() * 20}s`
//                 }}
//               />
//             );
//           })}
          
//           {/* Grid pattern overlay */}
//           <div className="absolute inset-0 opacity-[0.03]"
//                style={{
//                  backgroundImage: `
//                    linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
//                    linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
//                  `,
//                  backgroundSize: '50px 50px'
//                }} />
          
//           {/* Animated lines */}
//           <div className="absolute inset-0">
//             {[...Array(6)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
//                 style={{
//                   width: '100%',
//                   height: '1px',
//                   top: `${(i + 1) * 16.66}%`,
//                   animation: `slide ${8 + i * 2}s linear infinite`,
//                   animationDelay: `${i * 1.5}s`
//                 }}
//               />
//             ))}
//           </div>
          
//           {/* Floating geometric shapes */}
//           {[...Array(12)].map((_, i) => {
//             const shapes = ['triangle', 'square', 'circle'];
//             const shape = shapes[i % 3];
//             const size = Math.random() * 20 + 10;
//             return (
//               <div
//                 key={`shape-${i}`}
//                 className={`absolute opacity-10 ${
//                   shape === 'circle' ? 'rounded-full bg-gradient-to-br from-cyan-400 to-blue-500' :
//                   shape === 'square' ? 'bg-gradient-to-br from-purple-400 to-pink-500' :
//                   'bg-gradient-to-br from-emerald-400 to-teal-500'
//                 }`}
//                 style={{
//                   width: `${size}px`,
//                   height: `${size}px`,
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   transform: shape === 'triangle' ? 'rotate(45deg)' : 'none',
//                   animation: `spin ${15 + Math.random() * 20}s linear infinite`,
//                   animationDelay: `${Math.random() * 10}s`
//                 }}
//               />
//             );
//           })}
//         </div>
        
//         {/* Noise texture overlay */}
//         <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
//              style={{
//                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//                backgroundRepeat: 'repeat'
//              }} />
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           25% { transform: translateY(-20px) translateX(10px); }
//           50% { transform: translateY(-10px) translateX(-10px); }
//           75% { transform: translateY(-15px) translateX(5px); }
//         }
        
//         @keyframes slide {
//           0% { transform: translateX(-100%); opacity: 0; }
//           50% { opacity: 1; }
//           100% { transform: translateX(100%); opacity: 0; }
//         }
        
//         @keyframes spin {
//           from { transform: rotate(0deg) scale(1); }
//           50% { transform: rotate(180deg) scale(1.2); }
//           to { transform: rotate(360deg) scale(1); }
//         }
//       `}</style>

//       <section id="projects" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div 
//           className="text-center mb-12"
//           style={getAnimationStyle(0, isInView)}
//         >
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
//             <FiCode className="text-cyan-400 text-lg" />
//             <span className="text-cyan-400 text-sm font-medium">Featured Work</span>
//           </div>
          
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
//               My Projects
//             </span>
//           </h2>
          
//           <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
//             Explore my portfolio of carefully crafted digital solutions. Each project represents a unique challenge 
//             solved with modern technologies and innovative approaches.
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div 
//           className="mb-10 flex flex-wrap justify-center gap-3"
//           style={getAnimationStyle(1, isInView)}
//         >
//           {['All', ...filters].map((filter, index) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
//                 activeFilter === filter
//                   ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
//                   : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white border border-gray-700/50 hover:border-gray-600/50 backdrop-blur-sm'
//               }`}
//               style={{
//                 ...getAnimationStyle(index + 2, isInView),
//                 animationDelay: `${(index + 2) * 0.1}s`
//               }}
//             >
//               {filter}
//               {filter !== 'All' && (
//                 <span className="ml-2 text-xs opacity-75 bg-black/20 px-2 py-1 rounded-full">
//                   {projects.filter(p => p.category === filter).length}
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div
//           ref={ref}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {filteredProjects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] ${
//                 project.featured ? 'ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/10' : ''
//               }`}
//               style={getAnimationStyle(index + 4, isInView)}
//             >
//               {project.featured && (
//                 <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
//                   <FiStar className="w-3 h-3" />
//                   Featured
//                 </div>
//               )}

//               <div className="relative h-52 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   onError={(e) => {
//                     e.target.onerror = null; 
//                     e.target.src = '/images/fallback-project.png';
//                   }}
//                 />
                
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                
//                 <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-black/70 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
//                     >
//                       <FiGithub className="text-lg text-white hover:text-gray-900" />
//                     </a>
//                   )}
//                   {project.live && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-black/70 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
//                     >
//                       <FiExternalLink className="text-lg text-white hover:text-gray-900" />
//                     </a>
//                   )}
//                 </div>

//                 <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
//                   <span className="text-cyan-400 text-xs font-semibold">{project.category}</span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
//                   {project.title}
//                 </h3>
                
//                 <p className="text-gray-400 mb-5 leading-relaxed text-sm">
//                   {project.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tag}
//                       className="px-3 py-1 bg-gradient-to-r from-gray-700/60 to-gray-600/60 border border-gray-600/30 rounded-full text-xs text-cyan-300 font-medium backdrop-blur-sm hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105"
//                       style={{
//                         animationDelay: `${tagIndex * 0.1}s`
//                       }}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
//                 <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent animate-pulse" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div 
//           className="text-center mt-16"
//           style={getAnimationStyle(10, isInView)}
//         >
//           <p className="text-gray-400 mb-6 text-lg">
//             Want to see more of my work or discuss a project?
//           </p>
//           <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
//             Get In Touch
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;