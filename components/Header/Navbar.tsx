"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  PhoneCall,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "Shop", href: "/shop", hasDropdown: true },
    { name: "Pages", href: "/pages", hasDropdown: true },
    { name: "Blog", href: "/blog", hasDropdown: true },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm    ">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-[#666666] hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="mt-0.5" />
                )}
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Logo />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 md:gap-5 flex-1 justify-end">
            {/* Phone (Desktop only) */}
            <div className="hidden xl:flex items-center gap-2 mr-4">
              <PhoneCall size={24} className="text-[#1A1A1A]" />
              <div className="flex flex-col">
                <span className="text-xs text-[#666666]">Call us:</span>
                <span className="text-sm font-semibold text-[#1A1A1A]">
                  (219) 555-0114
                </span>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="text-[#1A1A1A] hover:text-primary transition-colors cursor-pointer">
                <Search size={24} />
              </button>
              <button className="text-[#1A1A1A] hover:text-primary transition-colors cursor-pointer hidden sm:block">
                <Heart size={24} />
              </button>
              <button className="text-[#1A1A1A] hover:text-primary transition-colors cursor-pointer relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-1.5 -right-1.5 bg-hard-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                  2
                </span>
              </button>
              <button className="text-[#1A1A1A] hover:text-primary transition-colors cursor-pointer">
                <User size={24} />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-[#1A1A1A] cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between py-2 text-base font-medium text-[#1A1A1A] border-b border-gray-50 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={18} />}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <PhoneCall size={20} className="text-primary" />
                <span className="font-semibold">(219) 555-0114</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
