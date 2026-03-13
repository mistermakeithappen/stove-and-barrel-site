"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "SHOP", href: "#products" },
  { title: "OUR STORY", href: "#story" },
  { title: "THE RITUAL", href: "#ritual" },
  { title: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 200], ["rgba(20,20,20,0)", "rgba(20,20,20,0.95)"]);

  return (
    <motion.nav
      style={{ backgroundColor: navBg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 sm:px-16">
        <div className="flex justify-between items-center py-5 border-b border-gold/15">
          <div className="flex-1 text-left">
            <Link href="/" className="font-heading text-gold uppercase tracking-[0.15em] text-lg hover:text-[#d9c49a] transition-colors duration-300">
              STOVE & BARREL
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="flex-none justify-center hidden md:flex">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="font-impact uppercase text-sm tracking-[0.2em] text-beige/70 hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex items-center justify-end gap-4">
            {/* Hamburger button - mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-6 h-[2px] bg-gold origin-center"
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-gold"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-gold origin-center"
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>

            <a href="https://stoveandbarrel.com/collections/all-products" target="_blank" rel="noopener noreferrer" className="hidden sm:block bg-rusticRed text-beige px-8 py-3 font-impact text-sm tracking-[0.2em] uppercase hover:bg-[#a83332] transition-all duration-300 hover:shadow-lg hover:shadow-[#922b2a]/20">
              SHOP THE COLLECTION
            </a>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#141414]/98 border-t border-gold/10"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-impact uppercase text-lg tracking-[0.2em] text-beige/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://stoveandbarrel.com/collections/all-products" target="_blank" rel="noopener noreferrer" className="sm:hidden bg-rusticRed text-beige px-8 py-3 font-impact text-sm tracking-[0.2em] uppercase mt-2 inline-block">
                  SHOP THE COLLECTION
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
