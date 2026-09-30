import React from 'react';

export default function Timeline() {
  const steps = [
    { num: "01", title: "Component Selection &\nBinning", desc: "Single-bin MacAdam 2-step ellipses LED sorting for absolute color temperature within thousandths precision tolerances." },
    { num: "02", title: "Precision CNC &\nThermal Forging", desc: "High pressure cold-forged heatsinks and multi-layer copper PCB thermal vias engineered for sub-60°C junction operation." },
    { num: "03", title: "Automated Optical\nInspection", desc: "3D laser profilometry and x-ray examination ensuring absolutely zero micro-fractures, voids, or spectral deviations." },
    { num: "04", title: "168-Hour Thermal\nStress", desc: "Continuous high-temperature operational cycling (45°C ambient, 100% duty cycle) to induce infant mortality rate filtering." },
    { num: "05", title: "Calibration & Site\nDispatch", desc: "Multi-station In-Situ UGR calibration profiles, anti-static sealed packaging, and direct dispatch for global projects." }
  ];

  return (
    <section id="journey" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center border-b border-gray-800">
      <div className="text-[#f5b027] text-xs font-bold uppercase tracking-wider mb-4">
        <i className="fa-solid fa-industry"></i> MANUFACTURING JOURNEY
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        From Raw Silicon & Ingot to Finished<br/>Architectural Masterpiece
      </h2>
      <p className="text-gray-400 text-sm mb-16">
        Every luminaire undergoes a traceable five-stage transformation in our vertically integrated robotics facility.
      </p>
      
      <div className="relative flex flex-col md:flex-row justify-between items-start pt-8">
        <div className="absolute top-[28px] left-[5%] w-[90%] h-[2px] bg-gray-800 hidden md:block"></div>
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex-1 px-4 mb-8 md:mb-0 flex flex-col items-center group">
            <div className="w-12 h-12 bg-[#111318] border-2 border-gray-700 group-hover:border-[#f5b027] text-gray-400 group-hover:text-[#f5b027] font-mono flex items-center justify-center text-sm mb-6 transition duration-300">
              {step.num}
            </div>
            <h3 className="text-sm font-bold uppercase text-[#f5b027] mb-3 whitespace-pre-line">{step.title}</h3>
            <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
