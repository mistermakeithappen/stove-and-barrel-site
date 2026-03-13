"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ number, title, description, delay }: { number: string, title: string, description: string, delay: number }) => {
  const variants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        delay,
        ease: 'easeOut'
      },
    },
  };

  return (
    <motion.div className="text-center group" variants={variants}>
      <span className="font-impact text-9xl text-[#922b2a] opacity-30 block leading-none">
        {number}
      </span>
      <h3 className="font-impact text-3xl md:text-4xl text-[#302d33] mt-[-1.5rem] mb-6 tracking-wider">
        {title}
      </h3>
      <div className="w-12 h-[2px] bg-[#922b2a] mx-auto mb-6 group-hover:w-20 transition-all duration-300"></div>
      <p className="font-arapey text-lg md:text-xl text-[#302d33]/70 max-w-xs mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const Plan = () => {
  const containerVariants: import('framer-motion').Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const h2Variants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.8 } }
  };

  return (
    <div id="ritual" className="bg-[#e1ddda] relative">
      {/* No wave needed — Products (previous section) is also beige */}
      <div className="container mx-auto px-6 py-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.h2
            className="text-center font-abril-fatface text-5xl md:text-7xl text-[#302d33] mb-24"
            variants={h2Variants}
          >
            The 3-Step Ritual.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Step number="01" title="Choose Your Scent" description="Select the oil that matches your intent for the day." delay={0} />
          <Step number="02" title="Apply Daily" description="A few drops into a palm, warmed, and worked through a dry beard." delay={0.2} />
          <Step number="03" title="Command Respect" description="Look, feel, and smell like the premium man you are." delay={0.4} />
        </motion.div>
      </div>
    </div>
  );
};

export default Plan;
