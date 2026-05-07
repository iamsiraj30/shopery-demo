"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./HomeOneSlider.module.css";
import AnimationWrapper from "@/components/shared/AnimationWrapper";

const slides = [
  {
    id: 1,
    welcome: "Welcome to Shopery",
    heading: "Fresh & Healthy Organic Food",
    promo: "Sale up to",
    promoHighlight: "30% OFF",
    description: "Free shipping on all your order. we deliver, you enjoy",
    image: "/home1/hero/hero.png",
    cta: "Shop now",
  },
  {
    id: 2,
    welcome: "Welcome to Shopery",
    heading: "Fresh & Healthy Organic Food",
    promo: "Sale up to",
    promoHighlight: "30% OFF",
    description: "Free shipping on all your order. we deliver, you enjoy",
    image: "/home1/hero/hero.png",
    cta: "Shop now",
  },
  // Add more slides here if needed
];

const HomeOneSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[currentSlide];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={styles.imageSection}
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              width={600}
              height={500}
              className={styles.heroImage}
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className={styles.textSection}>
          <AnimatePresence mode="wait">
            <div key={`text-${currentSlide}`}>
              <AnimationWrapper type="slideUp" delay={0.2} distance={30}>
                <span className={styles.welcomeText}>{slide.welcome}</span>
              </AnimationWrapper>

              <AnimationWrapper type="slideUp" delay={0.4} distance={30}>
                <h1 className={styles.heading}>{slide.heading}</h1>
              </AnimationWrapper>

              <AnimationWrapper type="slideUp" delay={0.6} distance={30}>
                <div className={styles.promoText}>
                  {slide.promo} <span>{slide.promoHighlight}</span>
                </div>
              </AnimationWrapper>

              <AnimationWrapper type="slideUp" delay={0.8} distance={30}>
                <p className={styles.description}>{slide.description}</p>
              </AnimationWrapper>

              <AnimationWrapper type="slideUp" delay={1.0} distance={30}>
                <motion.button
                  className={styles.ctaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slide.cta}
                  <ArrowRight size={20} />
                </motion.button>
              </AnimationWrapper>
            </div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      {slides.length > 1 && (
        <>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
          >
            <ArrowRight size={20} />
          </button>
        </>
      )}

      {/* Pagination */}
      {slides.length > 1 && (
        <div className={styles.pagination}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeOneSlider;
