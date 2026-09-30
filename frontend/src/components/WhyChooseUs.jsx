import React from 'react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Energy Efficiency",
      desc: "Delivers maximum lumens per watt (up to 160 lm/W), reducing commercial power consumption by up to 85% compared to conventional halogen and sodium lamps.",
      icon: "fa-bolt",
      badge: "Eco-Grade"
    },
    {
      title: "Long Lasting",
      desc: "Cold-forged aerospace aluminum heatsinks and Japanese diode binning guarantee up to 50,000+ hours of continuous luminous performance with sub-3% depreciation.",
      icon: "fa-shield-halved",
      badge: "50,000+ Hrs"
    },
    {
      title: "Instant Brightness",
      desc: "Immediate 100% illumination with zero warm-up latency, flicker-free drivers conforming to strict eye-comfort and camera recording standards.",
      icon: "fa-lightbulb",
      badge: "Zero Flicker"
    },
    {
      title: "Environmentally Friendly",
      desc: "100% mercury-free, RoHS compliant, and recyclable modular construction engineered to reduce landfill waste and lower carbon footprint across facilities.",
      icon: "fa-leaf",
      badge: "RoHS / Green"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#035FA6] uppercase tracking-wider mb-2">
            The Vajra Quality Standard
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            Why Choose Vajra LED?
          </h2>
          <p className="text-gray-600 text-sm mt-3">
            Engineered with superior components, tested under extreme thermal stress, and certified for reliable commercial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Card Header Banner in Vajra Blue */}
              <div className="bg-[#035FA6] p-8 text-center text-white flex flex-col items-center justify-center relative group-hover:bg-[#024c85] transition">
                <span className="absolute top-3 right-3 text-[10px] bg-white/20 backdrop-blur text-amber-300 font-semibold px-2 py-0.5 rounded">
                  {pt.badge}
                </span>
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl mb-3 text-amber-300 group-hover:scale-110 transition">
                  <i className={`fa-solid ${pt.icon}`}></i>
                </div>
                <h3 className="font-bold text-lg text-white">
                  {pt.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {pt.desc}
                </p>
                <div className="pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-[#035FA6]">
                  <span>Vajra Certified Standard</span>
                  <i className="fa-solid fa-check-circle ml-1.5 text-emerald-600"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
