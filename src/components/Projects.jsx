/* eslint-disable no-unused-vars */
'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/projects/ecommerce.jpg',
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://yourecommerce.com',
      category: 'Web'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Interactive portfolio with 3D elements and smooth animations.',
      tags: ['Next.js', 'Three.js', 'Framer Motion'],
      image: '/projects/portfolio.jpg',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com',
      category: 'Web'
    },
    {
      id: 3,
      title: 'Mobile Task Manager',
      description: 'Cross-platform task management app with offline capabilities.',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: '/projects/taskapp.jpg',
      github: 'https://github.com/yourusername/taskapp',
      live: 'https://expo.io/yourtaskapp',
      category: 'Mobile'
    },
    {
      id: 4,
      title: 'AI Image Generator',
      description: 'Web application that generates images using AI based on text prompts.',
      tags: ['React', 'OpenAI', 'Node.js'],
      image: '/projects/ai-generator.jpg',
      github: 'https://github.com/yourusername/ai-image-generator',
      live: 'https://your-ai-generator.com',
      category: 'AI'
    }
  ];

  const filters = ['All', 'Web', 'Mobile', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my selected works. Each project was carefully crafted to solve specific problems.
        </p>
      </motion.div>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? 'bg-cyan-500 text-gray-900'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            custom={i}
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-2 rounded-full hover:bg-cyan-500 hover:text-gray-900 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub className="text-lg" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-2 rounded-full hover:bg-cyan-500 hover:text-gray-900 transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink className="text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-700 rounded-full text-xs text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;