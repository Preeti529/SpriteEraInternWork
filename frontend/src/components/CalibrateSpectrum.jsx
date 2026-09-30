import React, { useState } from 'react';

export default function CalibrateSpectrum() {
  const [beamAngle, setBeamAngle] = useState(24);
  const [kelvin, setKelvin] = useState(3000);

  return (
    <section id="calibration" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-gray-800">
      <div className="bg-[#1a1d24] rounded-2xl border border-gray-800 overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        <div className="p-8 sm:p-12 lg:w-1/2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
          <div className="text-[#f5b027] text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <i className="fa-solid fa-sliders"></i> INTERACTIVE PHOTOMETRIC SIMULATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Calibrate Beam Angle &<br/>Kelvin Spectrum</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Experience dynamic precision control over chromaticity point variables. Adjust target CCT to synchronize with sun-accents seamlessly expanding architectural spaces to glowing.
          </p>
          
          <div className="mb-6">
            <div className="flex justify-between text-xs font-bold uppercase mb-4 text-gray-300">
              <span>Aperture Beam Angle</span>
              <span className="text-[#f5b027]">{beamAngle}° Mid/Medium</span>
            </div>
            <div className="relative w-full h-2 bg-gray-800 rounded mb-3">
              <div className="absolute h-full bg-[#f5b027] rounded" style={{width: `${(beamAngle/60)*100}%`}}></div>
              <input 
                type="range" 
                min="10" 
                max="60" 
                value={beamAngle} 
                onChange={(e) => setBeamAngle(Number(e.target.value))} 
                className="absolute top-[-4px] w-full opacity-0 cursor-pointer h-4" 
              />
              <div 
                className="absolute h-4 w-4 bg-[#f5b027] rounded-full top-[-4px] shadow" 
                style={{left: `calc(${(beamAngle/60)*100}% - 8px)`}}
              ></div>
            </div>
            <div className="flex justify-between text-[11px] text-gray-500 font-mono">
              <span>10° Spot</span>
              <span>24° Mid</span>
              <span>45° Flood</span>
              <span>60° Wide</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold uppercase mb-4 text-gray-300">
              <span>Color Temperature</span>
              <span className="text-[#f5b027]">{kelvin}K Warm Neutral</span>
            </div>
            <div className="flex gap-2">
              {[2700, 3000, 4000, 5000].map(k => (
                <button 
                  key={k}
                  onClick={() => setKelvin(k)}
                  className={`flex-1 py-2 text-xs font-bold rounded border transition ${kelvin === k ? 'border-[#f5b027] text-[#f5b027] bg-[#f5b027]/10' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                >
                  {k}K
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 bg-[#111318] p-8 sm:p-12 flex items-center justify-center relative min-h-[340px]">
          <i className="fa-solid fa-lightbulb text-4xl text-gray-600 absolute top-10"></i>
          {/* Light cone visual */}
          <div 
            className="absolute top-[80px] w-full flex justify-center opacity-70 mix-blend-screen transition-all duration-300" 
            style={{
              filter: `drop-shadow(0 0 45px ${kelvin < 3500 ? '#fcd34d' : '#e2e8f0'})`
            }}
          >
            <div style={{
              width: 0,
              height: 0,
              borderLeft: `${beamAngle * 4.5}px solid transparent`,
              borderRight: `${beamAngle * 4.5}px solid transparent`,
              borderTop: `260px solid ${kelvin < 3500 ? '#fbbf24' : '#cbd5e1'}`,
              opacity: 0.35
            }}></div>
          </div>
          <div className="absolute bottom-6 flex gap-4 text-xs text-gray-400 font-mono bg-[#111318]/90 px-4 py-2 rounded-full border border-gray-800 shadow">
             <span>UGR: &lt;10</span>
             <span className="text-[#f5b027]">●</span>
             <span>LUX: {Math.round(25000 / beamAngle)}</span>
             <span className="text-[#f5b027]">●</span>
             <span>FOOTCANDLE: {Math.round(2300 / beamAngle)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
