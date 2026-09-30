import React from 'react';

export default function Benchmarks() {
  const cards = [
    { num: "01", title: "Zero Glare Architecture (UGR < 10)", desc: "Nano-prismatic optical shielding engineered for strict parameters to eradicate eye strain and eliminate refractive ghost artifacts." },
    { num: "02", title: "True Color Rendition (R9 97 / Rg 103)", desc: "Full-spectrum TM-30-18 scores under absolute exacting visual rendering integrity without oversaturation or spectral distortion." },
    { num: "03", title: "Harmonic Distortion Minimization", desc: "Power factor > 0.99 and total harmonic distortion (THD) < 5% for perfect infrastructure clean sine-wave delivery and grid calibration." },
    { num: "04", title: "Intelligent IoT Mesh Control", desc: "Native wireless DALI-2, Zigbee 3.0, and 0-10V seamless protocol interoperability designed for smart building automation networks." },
    { num: "05", title: "Sustainable Lifecycle & Circularity", desc: "100% modular construction facilitating field part servicing and recycling with no sealed solid waste liability." },
    { num: "06", title: "Extreme Environment Sealing", desc: "Fully potted IP66/IP67 driver enclosures and components to withstand humidity, water jets, freezing, and chemical washes." },
  ];

  return (
    <section id="benchmarks" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-gray-800">
      <div className="mb-12">
        <div className="text-[#f5b027] text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
          <div className="w-6 h-[2px] bg-[#f5b027]"></div> THE VAJRA DIFFERENCE
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl text-white">Uncompromising Benchmarks<br/>Setting the Industry Paradigm</h2>
          <p className="text-gray-400 text-sm max-w-md lg:text-right">Strict protocols engineered into every fixture set standard benchmarks exceeding IEEE, WELL, and ASHRAE strict mandates.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="p-8 border border-gray-800 rounded-xl bg-[#1a1d24]/50 flex flex-col hover:border-gray-600 transition group relative overflow-hidden">
            <div className="text-3xl font-mono text-gray-700 mb-6 group-hover:text-[#f5b027] transition">{card.num}</div>
            <h3 className="text-lg font-bold mb-4 pr-8 text-white">{card.title}</h3>
            <p className="text-sm text-gray-400 flex-grow leading-relaxed">{card.desc}</p>
            <i className="fa-solid fa-arrow-right absolute top-8 right-8 text-[#f5b027] opacity-0 group-hover:opacity-100 transition transform -translate-x-4 group-hover:translate-x-0"></i>
          </div>
        ))}
      </div>
    </section>
  );
}
