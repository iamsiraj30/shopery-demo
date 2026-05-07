import React from 'react';
import { Leaf } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="bg-primary p-1.5 rounded-lg text-white transition-transform group-hover:scale-110">
        <Leaf size={24} fill="currentColor" />
      </div>
      <span className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
        Ecobazar
      </span>
    </Link>
  );
};

export default Logo;
