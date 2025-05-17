/* eslint-disable no-unused-vars */
// components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const frontendSkills = [
    { name: 'HTML5 & CSS3', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Next.js', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'TypeScript', percentage: 75 },
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 90 },
    { name: 'Java', percentage: 95 },
    { name: 'Express.js', percentage: 95 },
    // { name: 'MongoDB', percentage: 85 },
    { name: 'PostgreSQL', percentage: 85 },
    { name: 'RESTful APIs', percentage: 90 },
    { name: 'MySQL', percentage: 90 },
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', icon: 'github' },
    { name: 'VS Code', icon: 'code' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'Vercel', icon: 'cloud' },
  ];

  const SkillBar = ({ skill, delay }) => (
    <motion.div
      variants={itemVariants}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-cyan-400">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay }}
          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        ></motion.div>
      </div>
    </motion.div>
  );

  const ToolCard = ({ tool }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-white group-hover:scale-110
                transition-all duration-300">
          <i className={`devicon-${tool.icon}-plain text-xl`}></i>
        </div>
        <span className="font-medium">{tool.name}</span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are the technologies and tools I work with on a daily basis.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
            <span className="w-4 h-4 bg-cyan-400 rounded-full mr-2"></span>
            Frontend Development
          </h3>
          {frontendSkills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
            Backend Development
          </h3>
          {backendSkills.map((skill, index) => (
            <SkillBar 
              key={skill.name} 
              skill={skill} 
              delay={(frontendSkills.length + index) * 0.1} 
            />
          ))}
        </div>
      </motion.div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-8 text-white text-center">
          Tools & Technologies
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {toolsSkills.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;