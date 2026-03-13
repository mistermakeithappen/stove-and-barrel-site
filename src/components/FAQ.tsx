'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What makes Stove & Barrel different?",
    answer: "Our oils are crafted with premium natural ingredients, focusing on unique, masculine scents that last. We believe in quality, craftsmanship, and the code of the modern gentleman."
  },
  {
    question: "How do I apply beard oil?",
    answer: "Dispense 3-5 drops into your palm and rub your hands together to warm the oil. Gently massage it into your beard, ensuring it reaches the skin underneath to nourish from the roots up."
  },
  {
    question: "How long does the scent last?",
    answer: "Our signature scents are designed to last 6-8 hours. The longevity can vary based on factors like your skin type, activity level, and the environment."
  },
  {
    question: "Do you offer a subscription?",
    answer: "Yes! Subscribe and save 15% on your favorite products. You can choose your delivery frequency and cancel anytime. Never run out of your signature scent again."
  },
  {
    question: "What is your shipping policy?",
    answer: "We offer free shipping on orders over $35 within the continental US. Orders are typically processed within 1-2 business days and arrive within 3-5 business days."
  }
];

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal/40 h-7 w-7 shrink-0"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#922b2a] h-7 w-7 shrink-0"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

interface AccordionItemProps {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ item, isOpen, onClick }: AccordionItemProps) => (
  <div className="border-b border-charcoal/15">
    <button
      onClick={onClick}
      className="w-full text-left py-7 flex justify-between items-center gap-4"
    >
      <span className={`text-xl md:text-2xl font-body transition-colors duration-300 ${isOpen ? 'text-[#922b2a]' : 'text-charcoal/80'}`}>{item.question}</span>
      {isOpen ? <MinusIcon /> : <PlusIcon />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="pb-7 pr-8 font-body text-lg text-charcoal/60 leading-relaxed">{item.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="bg-[#e1ddda] text-[#302d33] relative overflow-hidden">
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
      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-heading text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqData.map((item, index) => (
            <motion.div variants={itemVariants} key={index} className="relative">
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-[#922b2a]"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <div className="pl-4">
                <AccordionItem
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleClick(index)}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
