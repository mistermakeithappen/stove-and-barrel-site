"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Bottle3D = dynamic(() => import("./Bottle3D"), { ssr: false });

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height * 2 - 1),
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#1a1612]" onMouseMove={handleMouseMove}>
      {/* Background texture - visible and warm */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg.png"
          alt=""
          fill
          quality={90}
          className="object-cover opacity-60 brightness-125"
          priority
        />
        {/* Left side darker for text readability, right side lighter for ambiance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1612]/95 via-[#1a1612]/70 to-[#1a1612]/20" />
        {/* Warm amber tint */}
        <div className="absolute inset-0 bg-[#3d2b1a]/20" />
      </div>

      <div className="relative container mx-auto px-6 sm:px-16">
        <div className="flex flex-col md:flex-row items-center min-h-[70vh] md:min-h-[80vh] py-20 md:py-0">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex-1 text-center md:text-left z-10 mb-12 md:mb-0"
          >
            <h1 className="font-heading text-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
              Forged in<br />Tradition.
            </h1>
            <p className="font-arapey text-beige text-lg sm:text-xl md:text-2xl max-w-lg leading-relaxed mb-10">
              Premium beard care born from the art of the barrel.
            </p>
            <motion.a
              href="https://stoveandbarrel.com/collections/all-products"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-rusticRed text-beige px-10 py-4 font-impact text-base sm:text-lg tracking-[0.2em] uppercase hover:bg-[#a83332] transition-all duration-300 hover:shadow-lg hover:shadow-rusticRed/30"
            >
              SHOP THE COLLECTION
            </motion.a>
          </motion.div>

          {/* Right: Product bottle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="flex-1 flex justify-center items-center z-10 max-w-[280px] sm:max-w-[340px] md:max-w-[520px] lg:max-w-[640px] mx-auto md:mx-0"
          >
            <div className="relative w-full" style={{ height: "clamp(380px, 50vw, 640px)" }}>
              <Bottle3D mousePos={mousePos} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section - multi-stop to ease brown → beige */}
      <div className="absolute bottom-0 left-0 right-0 h-48" style={{background: 'linear-gradient(to top, #e1ddda 0%, #c4b89a 20%, #8a6a4a 45%, #4a3220 70%, transparent 100%)'}} />
    </section>
  );
};

export default Hero;
