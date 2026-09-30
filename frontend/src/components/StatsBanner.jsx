import React from 'react';

export default function StatsBanner() {
  return (
    <section className="border-y border-gray-800 bg-[#161920]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-wrap lg:flex-nowrap justify-between text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
        <div className="flex-1 px-4 py-4 lg:py-0">
          <div className="text-3xl font-bold text-[#f5b027] mb-2"><i className="fa-solid fa-bolt text-sm align-top mr-1"></i>150,000+</div>
          <div className="text-xs text-gray-400 uppercase">Hours L90 Depreciation</div>
          <div className="text-xs text-gray-500 mt-1">Continuous operation tested</div>
        </div>
        <div className="flex-1 px-4 py-4 lg:py-0">
          <div className="text-3xl font-bold text-[#f5b027] mb-2"><i className="fa-solid fa-palette text-sm align-top mr-1"></i>98.4 CRI</div>
          <div className="text-xs text-gray-400 uppercase">High-Fidelity TM-30</div>
          <div className="text-xs text-gray-500 mt-1">Color Accuracy Industry</div>
        </div>
        <div className="flex-1 px-4 py-4 lg:py-0">
          <div className="text-3xl font-bold text-[#f5b027] mb-2"><i className="fa-solid fa-leaf text-sm align-top mr-1"></i>160 lm/W</div>
          <div className="text-xs text-gray-400 uppercase">Efficacy Category</div>
          <div className="text-xs text-gray-500 mt-1">Luminaire Requirement</div>
        </div>
        <div className="flex-1 px-4 py-4 lg:py-0">
          <div className="text-3xl font-bold text-[#f5b027] mb-2"><i className="fa-solid fa-shield-halved text-sm align-top mr-1"></i>0.01%</div>
          <div className="text-xs text-gray-400 uppercase">Defect Rate</div>
          <div className="text-xs text-gray-500 mt-1">Under strict API standard</div>
        </div>
      </div>
    </section>
  );
}
