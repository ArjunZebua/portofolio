/* eslint-disable no-unused-vars */
// components/Loader.jsx
// import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const circleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const circleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex items-center justify-center">
      <div className="flex space-x-2">
        <motion.div
          className="w-4 h-4 rounded-full bg-cyan-400"
          variants={circleVariants}
          initial="start"
          animate="end"
          transition={{
            ...circleTransition,
            delay: 0.1
          }}
        />
        <motion.div
          className="w-4 h-4 rounded-full bg-blue-500"
          variants={circleVariants}
          initial="start"
          animate="end"
          transition={{
            ...circleTransition,
            delay: 0.2
          }}
        />
        <motion.div
          className="w-4 h-4 rounded-full bg-cyan-400"
          variants={circleVariants}
          initial="start"
          animate="end"
          transition={{
            ...circleTransition,
            delay: 0.3
          }}
        />
      </div>
    </div>
  );
};

export default Loader;