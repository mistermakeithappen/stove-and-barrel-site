"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ComparisonList = ({ title, items, isGold, align }: { title: string; items: string[]; isGold: boolean; align: string }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: align === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={`text-${align}`}>
      <h3 className={`font-impact text-3xl md:text-4xl tracking-wider ${isGold ? 'text-[#ccb186]' : 'text-[#a6a6a6]/60'} mb-8`}>{title}</h3>
      <ul className="space-y-5">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className={`font-arapey text-xl md:text-2xl ${isGold ? 'text-[#ccb186]' : 'text-[#a6a6a6]/50 line-through decoration-1'}`}
            variants={itemVariants}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const Stakes = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, ease: 'easeOut' as const }
    }
  };

  return (
    <div className="bg-[#141414] text-white relative">
      {/* Wave divider: Plan (beige #e1ddda) → Stakes (dark #141414) */}
      <div style={{ backgroundColor: '#141414', marginTop: '-4px' }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,0 C480,80 960,80 1440,0 L1440,0 L0,0 Z" fill="#e1ddda" />
        </svg>
      </div>
      <div className="container mx-auto px-6 py-40">
        <AnimatedSection>
          <h2 className="text-center font-abril-fatface text-5xl md:text-7xl text-[#ccb186] mb-24">
            Not All Oils Are Forged Equal.
          </h2>
        </AnimatedSection>

        <motion.div
          className="relative flex items-start justify-center gap-16 md:gap-24 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#ccb186]/40 to-transparent transform -translate-x-1/2"></div>
          <div className="w-1/2 pr-12 md:pr-16">
            <ComparisonList
              title="The Other Guys"
              items={['Greasy Film', 'Fades in 20 Mins', 'Artificial Cologne Scent', 'One-Size-Fits-All']}
              isGold={false}
              align="right"
            />
          </div>
          <div className="w-1/2 pl-12 md:pl-16">
            <ComparisonList
              title="Stove & Barrel"
              items={['Absorbs Clean', '8-Hour Scent', 'Natural & Masculine', 'Crafted for Character']}
              isGold={true}
              align="left"
            />
          </div>
        </motion.div>

        <AnimatedSection className="text-center mt-24">
          <motion.a
            href="https://stoveandbarrel.com/collections/all-products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#922b2a] text-white font-impact py-4 px-12 text-xl uppercase tracking-widest transition-all duration-300 hover:bg-[#a83332] hover:shadow-lg hover:shadow-[#922b2a]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Choose Premium.
          </motion.a>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Stakes;
