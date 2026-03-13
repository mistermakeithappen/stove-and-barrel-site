'use client';

import { motion } from 'framer-motion';

const GiveBack = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed bg-center text-white py-32 flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/products/brand-hero.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60"></div>

      <motion.div
        className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-8xl font-heading mb-8 text-gold leading-[0.95]">
            Real Men Give Back.
          </h2>
          <div className="w-16 h-[2px] bg-[#ccb186] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-body text-[#e1ddda]/90 leading-relaxed">
            Being a gentleman is about more than looking good. For every bottle sold, we donate to hygiene kits for those in need. It&apos;s part of our code.
          </p>
        </div>

        <div className="bg-[#141414]/70 backdrop-blur-md p-10 md:p-16 border border-gold/15">
          <h3 className="text-4xl md:text-6xl font-heading mb-8 text-white">
            Gentlemen, Start Your Engines.
          </h3>
          <motion.a
            href="https://stoveandbarrel.com/collections/all-products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#922b2a] text-white font-impact py-5 px-14 text-xl tracking-widest hover:bg-[#a83332] transition-all duration-300 hover:shadow-lg hover:shadow-[#922b2a]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop The Signature Collection
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default GiveBack;
