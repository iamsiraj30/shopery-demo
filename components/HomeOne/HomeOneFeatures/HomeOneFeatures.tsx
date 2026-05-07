"use client";

import React from "react";
import { Truck, Headset, ShoppingBag, Package } from "lucide-react";
import Image from "next/image";
import AnimationWrapper from "@/components/shared/AnimationWrapper";

const features = [
  {
    id: 1,
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping with discount",
    highlight: false,
  },
  {
    id: 2,
    icon: Headset,
    title: "Great Support 24/7",
    description: "Instant access to Contact",
    highlight: false,
  },
  {
    id: 3,
    icon: ShoppingBag,
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
    highlight: true,
  },
  {
    id: 4,
    icon: Package,
    title: "Money-Back Guarantee",
    description: "30 days money-back",
    highlight: false,
  },
];

const HomeOneFeatures = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Base Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-100" />

          {features.map((feature, index) => (
            <AnimationWrapper
              key={feature.id}
              type="slideUp"
              delay={index * 0.1}
              className="flex flex-col items-center text-center group cursor-pointer relative pb-10"
            >
              <div className="relative w-20 h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {/* Background Shape */}
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${feature.highlight ? 'opacity-100' : 'opacity-20'
                    }`}
                  style={{ color: feature.highlight ? 'var(--primary)' : 'var(--primary)' }}
                >
                  <Image
                    src="/home1/state/shape.svg"
                    alt="shape"
                    fill
                    className={`object-contain ${feature.highlight ? '' : 'brightness-150'}`}
                  />
                </div>

                {/* Icon */}
                <feature.icon
                  className={`relative z-10 w-10 h-10 transition-colors duration-300 ${feature.highlight ? "text-white" : "text-primary"
                    }`}
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">
                {feature.description}
              </p>

              {/* Active/Highlight Border Segment */}
              {feature.highlight && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary z-10" />
              )}
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOneFeatures;
