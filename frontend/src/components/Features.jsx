import React from 'react';

export default function Features() {
  const features = [
    {
      icon: "fa-shield",
      category: "MIL-SPEC STRUCTURAL INTEGRITY",
      title: "Military-Grade Quality",
      desc: "Engineered from 6063-T5 aerospace aluminum with multi-stage anodization, resisting base environmental oxidation, extreme thermal cycles, and mechanical stress.",
      linkText: "Read Document",
      linkIcon: "fa-file-pdf"
    },
    {
      icon: "fa-eye",
      category: "PROPRIETARY OPTICAL DESIGN",
      title: "Proprietary Optical Technology",
      desc: "Custom total internal reflection (TIR) optical matrices and ultra-clear cross-carbon coating deliver exact UGR <10 compliant uniform light distribution.",
      linkText: "View Optics Specs",
      linkIcon: "fa-share-nodes"
    },
    {
      icon: "fa-certificate",
      category: "GLOBAL COMPLIANCE & SAFETY",
      title: "Rigorous Global Certifications",
      desc: "Fully certified across DLC Premium, UL, cUL, CE, UKCA, CE, RoHS, and Dark Sky compliance standards for mission-critical architectural deployments.",
      linkText: "View Certifications",
      linkIcon: "fa-award"
    },
    {
      icon: "fa-microchip",
      category: "SMT PRODUCTION TOLERANCE",
      title: "Automated Micro-Assembly",
      desc: "Class 10,000 cleanroom robotic SMT assembly with non-flow automated optical inspection ensures uncompromising diode placement precision.",
      linkText: "Assembly Process",
      linkIcon: "fa-robot"
    },
    {
      icon: "fa-handshake",
      category: "UNLIMITED LIFE-CYCLE GUARANTEE",
      title: "10-Year Unconditional Warranty",
      desc: "Backed by our comprehensive 10-year sweeping luminaire & driver replacement guarantee with zero depreciation clauses or hidden degradation caveats.",
      linkText: "Warranty Document",
      linkIcon: "fa-file-contract"
    },
    {
      icon: "fa-headset",
      category: "ENGINEERING SUPPORT SERVICE",
      title: "Dedicated Specification Service",
      desc: "Direct access to senior optics engineers, 3D/BIM custom modeling, turnkey photometric simulations, and priority global project logistics.",
      linkText: "Meet the Team",
      linkIcon: "fa-users"
    }
  ];

  return (
    <section id="engineering" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-gray-800">
      <div className="mb-12">
        <div className="text-[#f5b027] text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
          <div className="w-6 h-[2px] bg-[#f5b027]"></div> Engineering Excellence
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl text-white">Forged at the Intersection of Optics & Structural Reliability</h2>
          <p className="text-gray-400 text-sm max-w-md lg:text-right">Every component is calculated to withstand elements, stress factors, extreme thermal differentials, and provide uncompromised luminosity delivery for decades.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[#1a1d24] p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition flex flex-col group">
            <div className="w-12 h-12 rounded-lg bg-[#2a2618] text-[#f5b027] flex items-center justify-center text-xl mb-6">
              <i className={`fa-solid ${feature.icon}`}></i>
            </div>
            <div className="text-xs text-gray-500 mb-2">{feature.category}</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#f5b027] transition">{feature.title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{feature.desc}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/80">
              <a href="#enquiry" className="text-xs font-semibold text-gray-400 hover:text-white uppercase flex items-center gap-1">
                {feature.linkText}
              </a>
              <i className={`fa-solid ${feature.linkIcon} text-[#f5b027]`}></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
