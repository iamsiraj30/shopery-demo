"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

type AnimationType = "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "fadeIn" | "scaleUp";

interface AnimationWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
  className?: string;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  type = "slideUp",
  delay = 0,
  duration = 0.5,
  once = true,
  distance = 50,
  className = "",
  ...props
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: type === "slideUp" ? distance : type === "slideDown" ? -distance : 0,
      x: type === "slideLeft" ? distance : type === "slideRight" ? -distance : 0,
      scale: type === "scaleUp" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
