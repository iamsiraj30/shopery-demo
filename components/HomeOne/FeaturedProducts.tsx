"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, Eye, ArrowRight, Star } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  emoji: string;
}

/* ─── Data ──────────────────────────────────────────────── */
const products: Product[] = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    originalPrice: 20.99,
    rating: 4,
    reviewCount: 128,
    badge: "Sale 50%",
    emoji: "🍏",
  },
  {
    id: 2,
    name: "Chanise Cabbage",
    price: 14.99,
    rating: 4,
    reviewCount: 96,
    emoji: "🥬",
  },
  {
    id: 3,
    name: "Green Capsicum",
    price: 14.99,
    rating: 4,
    reviewCount: 74,
    emoji: "🫑",
  },
  {
    id: 4,
    name: "Ladies Finger",
    price: 14.99,
    rating: 4,
    reviewCount: 53,
    emoji: "🌿",
  },
];

/* ─── Star Rating ───────────────────────────────────────── */
function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-gray-300 fill-gray-300"
          }
        />
      ))}
    </div>
  );
}

/* ─── Product Card ──────────────────────────────────────── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <motion.div
      className="group bg-white rounded-2xl border border-[#e8f0e8] overflow-hidden cursor-pointer
                 transition-[border-color,box-shadow] duration-300
                 hover:border-[#3a9e3a] hover:shadow-[0_12px_32px_rgba(58,158,58,0.12)]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* ── Image area ── */}
      <div className="relative bg-[#f0f7f0] h-[210px] flex items-center justify-center overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <motion.span
            className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[11px] font-bold
                       uppercase tracking-wide px-2.5 py-1 rounded-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: index * 0.1 + 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            {product.badge}
          </motion.span>
        )}

        {/* Quick-action buttons — slide in from right on group-hover */}
        <div
          className="absolute top-3 right-3 z-10 flex flex-col gap-2
                     opacity-0 translate-x-2
                     group-hover:opacity-100 group-hover:translate-x-0
                     transition-all duration-200"
        >
          <motion.button
            className={`w-[34px] h-[34px] rounded-full bg-white shadow-md flex items-center justify-center
                        cursor-pointer transition-colors duration-200
                        hover:bg-[#3a9e3a] hover:text-white
                        ${liked ? "text-red-500" : "text-gray-500"}`}
            onClick={() => setLiked((v) => !v)}
            whileTap={{ scale: 0.85 }}
            aria-label="Wishlist"
          >
            <Heart
              size={16}
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
            />
          </motion.button>

          <motion.button
            className="w-[34px] h-[34px] rounded-full bg-white shadow-md flex items-center justify-center
                       cursor-pointer text-gray-500 transition-colors duration-200
                       hover:bg-[#3a9e3a] hover:text-white"
            whileTap={{ scale: 0.85 }}
            aria-label="Quick view"
          >
            <Eye size={16} />
          </motion.button>
        </div>

        {/* Emoji / product image placeholder — replace with Next.js <Image> in production */}
        <span
          aria-hidden
          className="text-8xl leading-none select-none
                     transition-transform duration-300
                     group-hover:scale-110 group-hover:-rotate-3"
        >
          {product.emoji}
        </span>
      </div>

      {/* ── Info area ── */}
      <div className="flex flex-col gap-2.5 px-4 pt-4 pb-3.5">
        <p className="text-[15px] font-semibold text-[#1a2e1a] leading-snug m-0">
          {product.name}
        </p>

        {/* Price + cart row */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-[#1a2e1a]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[13px] text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <motion.button
            onClick={handleCart}
            whileTap={{ scale: 0.9 }}
            aria-label="Add to cart"
            className={`w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer
                        transition-colors duration-200
                        ${addedToCart
                ? "bg-[#2d8a2d] border-[#2d8a2d] text-white"
                : "border-[#d4e8d4] bg-transparent text-[#3a9e3a] hover:bg-[#3a9e3a] hover:text-white hover:border-[#3a9e3a]"
              }`}
          >
            <AnimatePresence mode="wait">
              {addedToCart ? (
                <motion.span
                  key="check"
                  className="flex text-sm font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  ✓
                </motion.span>
              ) : (
                <motion.span
                  key="cart"
                  className="flex"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <ShoppingCart size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <StarRating rating={product.rating} />
      </div>
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────────────── */
export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="w-full   py-14 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-9"
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-[clamp(22px,3vw,30px)] font-bold text-[#1a2e1a] tracking-tight m-0">
            Featured Products
          </h2>

          <motion.button
            className="inline-flex items-center gap-1.5 text-[#3a9e3a] text-[15px] font-semibold
                       border-none bg-transparent p-0 cursor-pointer
                       hover:gap-2.5 transition-all duration-200"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.97 }}
          >
            View All <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        {/* Product grid — 1 col → 2 col (sm) → 4 col (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
