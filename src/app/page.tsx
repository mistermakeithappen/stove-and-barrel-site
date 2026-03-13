'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Guide from "@/components/Guide";
import Products from "@/components/Products";
import Plan from "@/components/Plan";
import Stakes from "@/components/Stakes";
import GiveBack from "@/components/GiveBack";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-charcoal text-beige">
      <Navbar />
      <Hero />
      <Problem />
      <Guide />
      <Products />
      <Plan />
      <Stakes />
      <GiveBack />
      <FAQ />
      <Footer />
    </main>
  );
}
