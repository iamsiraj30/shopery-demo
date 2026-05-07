import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#EDF2EE] border-b border-[#E6E6E6] hidden sm:block">
      <div className="container mx-auto px-4 py-2.5 flex justify-between items-center text-xs text-[#666666]">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} className="text-[#666666]" />
          <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
        </div>
        
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
            <span>Eng</span>
            <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
            <span>USD</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
