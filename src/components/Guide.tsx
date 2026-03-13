"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Guide = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.92), rgba(20, 20, 20, 0.92)), radial-gradient(circle at center, #302d33 0%, #141414 100%)`,
    backgroundSize: '150% 150%',
  };

  return (
    <div className="bg-[#141414]">
      {/* Wave divider: Problem (beige #e1ddda) → Guide (dark #141414) */}
      <div style={{ backgroundColor: '#141414', marginTop: '-4px' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 C480,80 960,80 1440,0 L1440,0 L0,0 Z" fill="#e1ddda" />
        </svg>
      </div>
    <AnimatedSection
      variants={{
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { ease: "easeOut", duration: 1 },
        },
      }}
      className="relative w-full overflow-hidden bg-[#141414] text-center text-white py-28" id="story"
    >
      <motion.div
        className="absolute inset-0"
        style={backgroundStyle}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      ></motion.div>
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-abril-fatface text-[#ccb186]">
          We Are Stove & Barrel.
        </h1>
        <h2 className="mt-6 text-2xl md:text-3xl font-arapey tracking-[0.25em] text-[#ccb186]/70 uppercase">
          A Man&apos;s Mercantile
        </h2>
        <div className="w-16 h-[2px] bg-[#ccb186] mx-auto mt-8 mb-8"></div>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-[#a6a6a6] font-arapey leading-relaxed">
          So we built the oil we couldn&apos;t find. Cold-pressed carriers. Real botanicals. Scents inspired by oak, smoke, and open air — not a lab. Every batch is crafted for men who take their ritual seriously and won&apos;t settle for anything less.
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <p className="text-[20rem] font-abril-fatface text-white opacity-[0.03] select-none">S&B</p>
      </div>
    </AnimatedSection>
    </div>
  );
};

export default Guide;
