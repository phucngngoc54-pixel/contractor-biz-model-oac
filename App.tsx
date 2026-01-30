
import React, { useState } from 'react';
import { BMC_DATA } from './constants';
import { BMCBlockData } from './types';
import BMCBlock from './components/BMCBlock';
import Modal from './components/Modal';
import RevenueModel from './components/RevenueModel';

const App: React.FC = () => {
  const [selectedBlock, setSelectedBlock] = useState<BMCBlockData | null>(null);
  const [activeTab, setActiveTab] = useState<'BMC' | 'REVENUE'>('BMC');

  const handleBlockClick = (block: BMCBlockData) => {
    setSelectedBlock(block);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-['Inter']">
      {/* Navbar / Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
               <img 
                 src="https://lh3.googleusercontent.com/d/1xouYyEfsEsp9rVTZvjy56AZtuyko7me1" 
                 alt="Logo" 
                 className="h-[45px] w-auto object-contain"
               />
               <h1 className="text-2xl md:text-3xl font-black text-[#002060] tracking-tight leading-none">
                 Contractor Business Model
               </h1>
            </div>
          </div>
          
          <nav className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('BMC')}
              className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-200 ${activeTab === 'BMC' ? 'bg-[#002060] text-white shadow-md' : 'text-slate-600 hover:text-[#002060]'}`}
            >
              TAB 1: BUSINESS MODEL CANVAS
            </button>
            <button 
              onClick={() => setActiveTab('REVENUE')}
              className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-200 ${activeTab === 'REVENUE' ? 'bg-[#002060] text-white shadow-md' : 'text-slate-600 hover:text-[#002060]'}`}
            >
              TAB 2: REVENUE MODEL
            </button>
          </nav>
        </div>
      </header>

      {/* Content Area */}
      <main className="max-w-[1400px] mx-auto p-4 md:p-8">
        {activeTab === 'BMC' ? (
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="bmc-grid">
              {/* Column 1: Partners */}
              <div className="lg:row-span-2">
                <BMCBlock 
                  data={BMC_DATA.partners} 
                  onClick={handleBlockClick} 
                  className="h-full"
                />
              </div>

              {/* Column 2: Activities & Resources */}
              <div className="flex flex-col gap-3">
                <BMCBlock 
                  data={BMC_DATA.activities} 
                  onClick={handleBlockClick} 
                  className="flex-1"
                />
                <BMCBlock 
                  data={BMC_DATA.resources} 
                  onClick={handleBlockClick} 
                  className="flex-1"
                />
              </div>

              {/* Column 3: Value Prop */}
              <div className="lg:row-span-2">
                <BMCBlock 
                  data={BMC_DATA.valueProp} 
                  onClick={handleBlockClick} 
                  className="h-full border-blue-200 bg-blue-50/20"
                />
              </div>

              {/* Column 4: Relationships & Channels */}
              <div className="flex flex-col gap-3">
                <BMCBlock 
                  data={BMC_DATA.relationships} 
                  onClick={handleBlockClick} 
                  className="flex-1"
                />
                <BMCBlock 
                  data={BMC_DATA.channels} 
                  onClick={handleBlockClick} 
                  className="flex-1"
                />
              </div>

              {/* Column 5: Segments */}
              <div className="lg:row-span-2">
                <BMCBlock 
                  data={BMC_DATA.segments} 
                  onClick={handleBlockClick} 
                  className="h-full"
                />
              </div>

              {/* Bottom Row: Cost & Revenue */}
              <div className="lg:col-span-2 lg:row-start-3">
                <BMCBlock 
                  data={BMC_DATA.costs} 
                  onClick={handleBlockClick} 
                  className="h-full"
                />
              </div>
              <div className="lg:col-span-3 lg:row-start-3">
                <BMCBlock 
                  data={BMC_DATA.revenues} 
                  onClick={handleBlockClick} 
                  className="h-full border-green-200"
                />
              </div>
            </div>
            <div className="mt-8 text-center text-slate-400 text-xs italic">
              Click on any block to explore detailed rationale and implementation points.
            </div>
          </div>
        ) : (
          <RevenueModel />
        )}
      </main>

      <Modal data={selectedBlock} onClose={() => setSelectedBlock(null)} />
    </div>
  );
};

export default App;
