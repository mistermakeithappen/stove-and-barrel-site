"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  url: string;
  accentColor: string;
  imageFilter?: string;
  badgeText?: string;
  cardBg?: string;
}

const ProductCard = ({ name, description, price, imageUrl, url, accentColor, imageFilter, badgeText, cardBg }: ProductCardProps) => (
  <motion.div
    className="text-white rounded-lg overflow-hidden shadow-lg group"
    style={{ backgroundColor: cardBg || '#1f1f1f' }}
    variants={{
      hidden: { opacity: 0, y: 50, scale: 0.9 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
  >
    <div className="relative h-80 overflow-hidden">
      <Image src={imageUrl} alt={name} fill style={{ objectFit: 'cover', filter: imageFilter || 'none' }} className="group-hover:scale-110 transition-transform duration-700 ease-out" />
      {/* Strong colored overlay to differentiate each scent */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accentColor} 0%, transparent 70%)`, opacity: 0.35 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent opacity-60"></div>
      {badgeText && (
        <div className="absolute top-4 right-4 px-3 py-1 text-sm font-impact tracking-wider uppercase" style={{ backgroundColor: accentColor, color: '#fff' }}>
          {badgeText}
        </div>
      )}
    </div>
    <div className="p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
        <h3 className="font-abril-fatface text-2xl text-white">{name}</h3>
      </div>
      <p className="font-arapey text-lg text-[#a6a6a6] mt-2">{description}</p>
      <div className="flex items-center justify-between mt-6">
        <p className="font-impact text-3xl text-[#ccb186]">{price}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-impact py-3 px-8 text-lg tracking-wider transition-all duration-300 hover:shadow-lg text-white"
          style={{ backgroundColor: accentColor }}
        >
          View Product
        </a>
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  const containerVariants: import('framer-motion').Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div id="products" className="bg-[#e1ddda] relative">
      {/* Wave divider: sits flush at top, bg = this section, SVG fill = previous section (#141414) */}
      <div style={{ backgroundColor: '#e1ddda', marginTop: '-4px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%' }}
        >
          <path d="M0,0 C480,80 960,80 1440,0 L1440,0 L0,0 Z" fill="#141414" />
        </svg>
      </div>
      <div className="container mx-auto px-6 py-32">
        <AnimatedSection>
          <h2 className="text-center font-abril-fatface text-5xl md:text-7xl text-[#302d33] mb-20">
            The Tools of the Trade.
          </h2>
        </AnimatedSection>

        <AnimatedSection
          className="mb-24"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
          <div className="bg-[#1f1f1f] rounded-lg shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center max-w-4xl mx-auto border border-[#ccb186]/10">
            <div className="relative w-full md:w-1/2 flex items-center justify-center py-8">
              <div className="flex items-end justify-center gap-4">
                <div className="transform -rotate-6">
                  <Image src="/assets/products/rustic-smoke-nobg.png" alt="Rustic Smoke Beard Oil" width={140} height={140} className="drop-shadow-lg" />
                </div>
                <div className="z-10 -mb-2">
                  <Image src="/assets/products/beard-brush-nobg.png" alt="Beard Brush" width={180} height={180} className="drop-shadow-2xl" />
                </div>
                <div className="transform rotate-6">
                  <Image src="/assets/products/beard-comb-nobg.png" alt="Beard Comb" width={140} height={140} className="drop-shadow-lg" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-white text-center md:text-left mt-8 md:mt-0 md:pl-12">
              <h3 className="font-abril-fatface text-4xl md:text-5xl text-[#ccb186]">The Signature Collection Bundle</h3>
              <p className="font-impact text-4xl text-white my-4">$49.50</p>
              <p className="font-arapey text-lg text-[#a6a6a6] mb-6">Everything you need. One legendary box.</p>
              <a href="https://stoveandbarrel.com/products/bundle" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ccb186] text-[#1f1f1f] font-impact text-xl py-4 px-10 tracking-wider transition-all duration-300 hover:bg-[#d9c49a] hover:shadow-lg hover:shadow-[#ccb186]/20">
                Shop The Bundle
              </a>
            </div>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProductCard name="Rustic Smoke" description="Bold. Smoky. Unapologetic." price="$22" imageUrl="/assets/products/rustic-smoke-new.png" url="https://stoveandbarrel.com/products/rustic-smoke-2" accentColor="#922b2a" badgeText="Bestseller" cardBg="#251a1a" />
          <ProductCard name="Sawmill" description="Fresh-cut cedar. Rugged warmth." price="$22" imageUrl="/assets/products/sawmill.png" url="https://stoveandbarrel.com/products/sawmill" accentColor="#6b4f2d" cardBg="#2a2115" />
          <ProductCard name="Aged Bourbon" description="Oak barrel. Smooth finish." price="$22" imageUrl="/assets/products/aged-bourbon.png" url="https://stoveandbarrel.com/products/aged-bourbon" accentColor="#8b5a2b" cardBg="#261d14" />
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
