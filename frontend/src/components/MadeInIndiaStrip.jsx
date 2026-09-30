import React from 'react';

export default function MadeInIndiaStrip() {
  return (
    <section className="bg-gradient-to-r from-[#024c85] via-[#035FA6] to-[#024c85] py-10 sm:py-14 text-white shadow-inner">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
          <span>🇮🇳</span> National Manufacturing Pride
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Brightening Your World with Indigenous LED Advancements
        </h2>
        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-wide">
          Made In India
        </div>
        <p className="mt-3 text-sm text-blue-100 max-w-xl mx-auto">
          Pioneering energy efficiency, precision robotics SMT assembly, and dependable power driver technology built right here in India.
        </p>
      </div>
    </section>
  );
}
