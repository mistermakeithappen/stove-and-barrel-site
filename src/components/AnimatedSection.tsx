"use client";

import { useRef } from "react";
import { motion, useInView, Easing } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  variants?: any;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  variants: customVariants,
  id,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const getInitialPosition = () => {
    switch (direction) {
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      case "up":
      default:
        return { opacity: 0, y: 40 };
    }
  };

  const defaultVariants = {
    hidden: getInitialPosition(),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as Easing,
        delay,
      },
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
