
import React, { useEffect } from 'react';
import { BMCBlockData, BMCItem } from '../types';
import { ICONS } from '../constants';

interface ModalProps {
  data: BMCBlockData | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [data]);

  if (!data) return null;

  const renderItem = (item: BMCItem, idx: number) => (
    <div key={idx} className="mb-6 last:mb-0 border-l-4 border-blue-900 pl-4 py-1">
      <div className="text-slate-900 text-lg leading-snug">
        <span className="font-bold">{item.point}</span>
        <br />
        <div className="mt-1.5 italic text-slate-600 text-base leading-relaxed">
          {item.rationale}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="text-blue-900 bg-blue-50 p-2 rounded-xl">
              {(ICONS as any)[data.icon]}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{data.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto bg-slate-50/30">
          {data.subsections ? (
            data.subsections.map((sub, sIdx) => (
              <div key={sIdx} className="mb-10 last:mb-0">
                <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest mb-4 border-b pb-2">{sub.title}</h4>
                <div className="space-y-6">
                  {(sub.items as any[]).map((item, iIdx) => (
                    typeof item === 'string' ? (
                      <div key={iIdx} className="font-bold text-slate-900 text-lg py-1">• {item}</div>
                    ) : renderItem(item, iIdx)
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-6">
              {data.items.map((item, idx) => renderItem(item, idx))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
