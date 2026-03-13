"use client";
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Problem = () => {
  return (
    <div className="bg-[#e1ddda] text-[#302d33] relative">
      {/* Removed diagonal transition - hero now has smooth gradient fade */}
      <AnimatedSection
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
              restDelta: 0.001,
              ease: 'easeOut',
              duration: 1.5,
            },
          },
        }}
      >
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-impact text-6xl md:text-8xl tracking-wide text-[#922b2a] mb-8 leading-[0.95]">
              Honestly?<br />
              <span className="text-[#302d33]">Most Beard Oils Suck.</span>
            </h2>
            <div className="w-24 h-1 bg-[#922b2a] mx-auto mb-8"></div>
            <p className="font-arapey text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto text-[#302d33]/80">
              Greasy residue. Synthetic scent that fades by noon. Thin formulas that do nothing for your beard and everything for their profit margin. You already know — you&apos;ve tried them. Stove &amp; Barrel was built because something better was overdue.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Problem;
