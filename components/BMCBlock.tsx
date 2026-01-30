
import React from 'react';
import { BMCBlockData } from '../types';
import { ICONS, COLORS } from '../constants';

interface BMCBlockProps {
  data: BMCBlockData;
  onClick: (data: BMCBlockData) => void;
  className?: string;
}

const BMCBlock: React.FC<BMCBlockProps> = ({ data, onClick, className = '' }) => {
  return (
    <div 
      onClick={() => onClick(data)}
      className={`bg-white border-2 border-slate-200 rounded-xl p-4 cursor-pointer hover:border-blue-600 transition-all duration-200 shadow-sm group ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="text-blue-900 bg-blue-50 p-1.5 rounded-lg group-hover:bg-blue-900 group-hover:text-white transition-colors duration-200">
          {(ICONS as any)[data.icon]}
        </div>
        <h3 className="font-bold text-slate-800 text-sm md:text-base uppercase tracking-tight">{data.title}</h3>
      </div>
      
      <div className="space-y-3">
        {(data.items.slice(0, 3)).map((item, idx) => (
          <div key={idx} className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            • {item.point}
          </div>
        ))}
        {data.subsections && data.subsections[0].items.slice(0, 2).map((item: any, idx) => (
          <div key={idx} className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            • {typeof item === 'string' ? item : item.point}
          </div>
        ))}
        {(data.items.length > 3 || (data.subsections && data.subsections.length > 0)) && (
          <div className="text-[10px] text-blue-800 font-semibold italic mt-2">
            + click for more
          </div>
        )}
      </div>
    </div>
  );
};

export default BMCBlock;
