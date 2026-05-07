"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import "./HomeOneCategories.css";

const categories = [
  {
    id: 1,
    name: "Vegetables",
    image: "/home1/categories/vegetables.png",
    count: 165,
    active: true,
  },
  {
    id: 2,
    name: "Fresh Fruit",
    image: "/home1/categories/fruits.png",
    count: 137,
  },
  {
    id: 3,
    name: "Fish",
    image: "/home1/categories/fish.png",
    count: 34,
  },
  {
    id: 4,
    name: "Meat",
    image: "/home1/categories/meat.png",
    count: 165,
  },
  {
    id: 5,
    name: "Water and Drinks",
    image: "/home1/categories/drinks.png",
    count: 48,
  },
  {
    id: 6,
    name: "Snacks",
    image: "/home1/categories/snacks.png",
    count: 165,
  },
];

const HomeOneCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="categoriesSection">
      {/* Decorative Leaves */}
      <div className="bgLeaf bgLeaf1">
         <Image src="/home1/state/shape.svg" alt="leaf" width={100} height={100} style={{ opacity: 0.3 }} />
      </div>
      <div className="bgLeaf bgLeaf2">
         <Image src="/home1/state/shape.svg" alt="leaf" width={120} height={120} style={{ opacity: 0.3 }} />
      </div>

      <div className="container mx-auto px-4">
        <AnimationWrapper type="fadeIn">
          <div className="header">
            <h2 className="title">Shop by Top Categories</h2>
            <Link href="/shop" className="viewAll">
              View All <ArrowRight size={20} />
            </Link>
          </div>
        </AnimationWrapper>

        <div className="sliderContainer">
          <button 
            className="navButton prevButton" 
            onClick={() => scroll("left")}
            aria-label="Previous category"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="slider" ref={scrollRef}>
            {categories.map((category, index) => (
              <AnimationWrapper
                key={category.id}
                type="slideUp"
                delay={index * 0.1}
              >
                <div className={`categoryCard ${category.active ? "active" : ""}`}>
                  <div className="iconWrapper">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="categoryName">{category.name}</h3>
                  <span className="productCount">{category.count} Products</span>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          <button 
            className="navButton nextButton" 
            onClick={() => scroll("right")}
            aria-label="Next category"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeOneCategories;
