import React, { useState } from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between px-6 lg:px-12 py-4 border-b border-gray-800 bg-[#111318] sticky top-0 z-50">
      <div className="flex items-center gap-2 text-xl font-bold tracking-wider text-white">
        <i className="fa-solid fa-lightbulb text-[#f5b027]"></i>
        VAJRA LED
      </div>
      <nav className="hidden lg:flex gap-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
        <a href="#products" className="text-[#f5b027] border-b-2 border-[#f5b027] pb-1">Products</a>
        <a href="#engineering" className="hover:text-white transition">Engineering</a>
        <a href="#calibration" className="hover:text-white transition">Calibration</a>
        <a href="#business" className="hover:text-[#f5b027] transition">Business Solutions</a>
        <a href="#journey" className="hover:text-white transition">Journey</a>
        <a href="#benchmarks" className="hover:text-white transition">Standards</a>
        <a href="#faq" className="hover:text-white transition">FAQ</a>
        <a href="#enquiry" className="hover:text-white transition">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <a href="#enquiry" className="bg-[#f5b027] hover:bg-[#d99a22] text-[#111318] font-bold py-2 px-5 rounded text-xs sm:text-sm uppercase tracking-wide transition">
          REQUEST ARCHITECTURAL SPEC
        </a>
        <a href="#enquiry" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 text-gray-300 transition" title="Business Portal">
          <i className="fa-regular fa-user"></i>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-6 font-semibold flex items-center gap-2">
          <i className="fa-solid fa-cube text-[#f5b027]"></i> Products / Architectural / Industrial / Downlights
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
          Engineered for Light.<br />
          <span className="text-[#f5b027]">Built for Trust.</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
          Vajra LED pioneers high-performance optical engineering, delivering mission-critical commercial environments unyielding thermal efficiency, ultra-pure CRI 98+ fidelity, and uncompromising durability.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#business" className="bg-[#f5b027] hover:bg-[#d99a22] text-[#111318] font-bold py-3 px-8 rounded flex items-center gap-2 transition text-sm">
            EXPLORE COMMERCIAL SERIES <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#enquiry" className="border border-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded flex items-center gap-2 transition text-sm">
            <i className="fa-solid fa-download text-[#f5b027]"></i> DOWNLOAD LUMINAIRE CATALOG
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-800 pt-8">
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Thermal Rating</div>
            <div className="text-2xl font-bold text-white">150k+ <span className="text-sm text-gray-400 font-normal">hrs</span></div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Color Fidelity</div>
            <div className="text-2xl font-bold text-[#f5b027]">98.4 <span className="text-sm text-gray-400 font-normal">CRI</span></div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Efficiency (LPW)</div>
            <div className="text-2xl font-bold text-white">160 <span className="text-sm text-gray-400 font-normal">lm/W</span></div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase mb-1">Failure Rate</div>
            <div className="text-2xl font-bold text-white">0.01% <span className="text-sm text-gray-400 font-normal">Failure</span></div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-[#1a1d24] rounded-2xl p-6 aspect-video border border-gray-800 flex items-center justify-center relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f5b027]/20 opacity-50 mix-blend-overlay"></div>
          <i className="fa-solid fa-lightbulb text-7xl sm:text-9xl text-[#f5b027] opacity-25 group-hover:opacity-90 transition duration-500"></i>
          
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span className="bg-[#111318]/90 backdrop-blur border border-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-2 text-white">
              <i className="fa-solid fa-check text-[#f5b027]"></i> SELECTABLE 15/30/45 DEGREES
            </span>
            <span className="bg-[#111318]/90 backdrop-blur border border-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-2 text-white">
              <i className="fa-solid fa-check text-[#f5b027]"></i> BASE COLOR AVAILABLE: DARK
            </span>
          </div>
          
          <div className="absolute bottom-4 left-4">
            <span className="bg-[#111318]/90 backdrop-blur border border-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-2 text-white">
              <i className="fa-solid fa-bolt text-[#f5b027]"></i> IP67 BIOMETRIC SENSOR SEALED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
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

function Features() {
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

function CalibrateSpectrum() {
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
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">Experience dynamic precision control over chromaticity point variables. Adjust target CCT to synchronize with sun-accents seamlessly expanding architectural spaces to glowing.</p>
          
          <div className="mb-6">
            <div className="flex justify-between text-xs font-bold uppercase mb-4 text-gray-300">
              <span>Aperture Beam Angle</span>
              <span className="text-[#f5b027]">{beamAngle}° Mid/Medium</span>
            </div>
            <div className="relative w-full h-2 bg-gray-800 rounded mb-3">
              <div className="absolute h-full bg-[#f5b027] rounded" style={{width: `${(beamAngle/60)*100}%`}}></div>
              <input type="range" min="10" max="60" value={beamAngle} onChange={(e) => setBeamAngle(Number(e.target.value))} className="absolute top-[-4px] w-full opacity-0 cursor-pointer h-4" />
              <div className="absolute h-4 w-4 bg-[#f5b027] rounded-full top-[-4px] shadow" style={{left: `calc(${(beamAngle/60)*100}% - 8px)`}}></div>
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
          <div className="absolute top-[80px] w-full flex justify-center opacity-70 mix-blend-screen transition-all duration-300" style={{
            filter: `drop-shadow(0 0 45px ${kelvin < 3500 ? '#fcd34d' : '#e2e8f0'})`
          }}>
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

// Business Partnerships Section (from user brief)
function BusinessSolutions({ onSelectBusiness }) {
  const categories = [
    {
      id: "Dealer",
      title: "Become a Dealer",
      sub: "Grow Your Business with Vajra LED",
      desc: "Partner with Vajra LED and expand your business with a wide range of LED lighting products. Our dealer network is suitable for electrical retailers, lighting stores, wholesalers, hardware businesses, and other lighting-related businesses.",
      points: [
        "Wide range of LED lighting products",
        "Competitive dealer pricing",
        "Reliable product supply",
        "Product and technical support",
        "Product selection assistance",
        "Sales and business support",
        "Long-term partnership opportunities"
      ],
      cta: "Become a Vajra LED Dealer"
    },
    {
      id: "Distributor",
      title: "Distributor Network",
      sub: "Build Your Distribution Network with Vajra LED",
      desc: "Vajra LED works with distributors and wholesale businesses looking to expand their product portfolio with reliable LED lighting solutions. We support our distribution partners with commercial pricing and bulk procurement assistance.",
      points: [
        "LED distributors & wholesalers",
        "Electrical & lighting distributors",
        "Building material distributors",
        "Regional business partners",
        "Multi-location businesses",
        "Dedicated supply coordination"
      ],
      cta: "Become a Distributor"
    },
    {
      id: "Contractor",
      title: "Contractor & MEP",
      sub: "LED Lighting Solutions for Projects",
      desc: "Vajra LED supports electrical contractors, MEP contractors, builders, construction companies, and project teams with LED lighting solutions for commercial, industrial, and infrastructure requirements.",
      points: [
        "Residential & commercial projects",
        "Corporate offices & retail spaces",
        "Industrial facilities & warehouses",
        "Educational & healthcare buildings",
        "Hospitality & infrastructure projects",
        "BOQ analysis & staged supply"
      ],
      cta: "Discuss Your Project"
    },
    {
      id: "Architect",
      title: "Architect & Designer",
      sub: "Lighting Solutions for Modern Projects",
      desc: "Vajra LED works with architects, interior designers, lighting consultants, and design professionals to help select suitable LED lighting products for architectural projects.",
      points: [
        "Product specifications & IES files",
        "Technical lux calculations",
        "Application-based recommendations",
        "Project lighting design support",
        "Sample assistance where applicable"
      ],
      cta: "Work With Vajra LED"
    },
    {
      id: "Institutional Buyer",
      title: "Institutional Buyers",
      sub: "LED Lighting for Large Facilities",
      desc: "Vajra LED provides lighting solutions for institutions and large facilities that require reliable products, consistent specifications, and dependable supply.",
      points: [
        "Schools, colleges & universities",
        "Hospitals & healthcare campuses",
        "Hotels & corporate offices",
        "Government facilities & GeM tenders",
        "Bulk pricing & customized quotations",
        "Product documentation & test reports"
      ],
      cta: "Submit Institutional Requirement"
    },
    {
      id: "Bulk Orders",
      title: "Bulk Orders",
      sub: "Large-Volume LED Procurement",
      desc: "Vajra LED supports businesses, contractors, builders, institutions, retailers, and distributors with large-volume LED lighting requirements and direct factory pricing slabs.",
      points: [
        "Large-volume requirements",
        "Bulk pricing tiers & discounts",
        "Quantity planning & scheduling",
        "Project-based product selection",
        "Palletized delivery assistance"
      ],
      cta: "Request a Bulk Quote"
    }
  ];

  return (
    <section id="business" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-gray-800">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="text-[#f5b027] text-xs font-bold uppercase tracking-wider mb-3">
          <i className="fa-solid fa-handshake"></i> BUSINESS COLLABORATIONS
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          LED Lighting Solutions for Dealers, Distributors, Contractors & Businesses
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Whether you are looking for a dealer partnership, distribution opportunity, commercial lighting for a project, or LED lights in bulk, Vajra LED delivers precision-engineered luminaires backed by direct manufacturer support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-[#1a1d24] border border-gray-800 hover:border-[#f5b027]/50 rounded-xl p-8 flex flex-col justify-between transition group">
            <div>
              <div className="text-xs font-mono text-[#f5b027] mb-2 uppercase tracking-wider">Tier 0{idx + 1}</div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#f5b027] transition">{cat.title}</h3>
              <div className="text-xs text-gray-500 mb-4">{cat.sub}</div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{cat.desc}</p>
              
              <div className="mb-8">
                <div className="text-xs font-bold text-gray-300 uppercase mb-3">Highlights & Scope:</div>
                <ul className="text-xs text-gray-400 space-y-2">
                  {cat.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-[#f5b027] text-[10px] mt-1"></i>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button 
              onClick={() => onSelectBusiness(cat.id)}
              className="w-full py-3 bg-[#111318] hover:bg-[#f5b027] text-gray-200 hover:text-[#111318] border border-gray-700 hover:border-[#f5b027] text-xs font-bold uppercase rounded transition tracking-wider flex items-center justify-center gap-2"
            >
              <span>{cat.cta}</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
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
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">From Raw Silicon & Ingot to Finished<br/>Architectural Masterpiece</h2>
      <p className="text-gray-400 text-sm mb-16">Every luminaire undergoes a traceable five-stage transformation in our vertically integrated robotics facility.</p>
      
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

function Benchmarks() {
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

// Business Enquiry Form & FAQ
function EnquiryAndFAQ({ businessType, setBusinessType }) {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "Does Vajra LED offer dealer opportunities?",
      a: "Yes. Businesses interested in becoming Vajra LED dealers can contact the team with their company and business requirements."
    },
    {
      q: "Can I become a Vajra LED distributor?",
      a: "Yes. Distributors and wholesale businesses can contact Vajra LED to discuss distribution opportunities."
    },
    {
      q: "Does Vajra LED accept bulk orders?",
      a: "Yes. Businesses, contractors, institutions, retailers, distributors, and project teams can submit bulk LED lighting requirements."
    },
    {
      q: "Can contractors purchase LED lights for projects?",
      a: "Yes. Contractors can contact Vajra LED for project requirements, product information, quantities, and bulk supply."
    },
    {
      q: "Does Vajra LED work with architects?",
      a: "Yes. Architects, interior designers, consultants, and design professionals can contact Vajra LED for project-related lighting requirements."
    },
    {
      q: "Does Vajra LED supply institutions?",
      a: "Yes. Institutional buyers can contact Vajra LED for large-scale lighting requirements, product specifications, quotations, and supply coordination."
    },
    {
      q: "How can I request a bulk quotation?",
      a: "Submit your required products, approximate quantity, project details, and delivery location through the business enquiry form."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      e.target.reset();
    }, 500);
  };

  return (
    <section id="enquiry" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Enquiry Form */}
        <div className="lg:col-span-7 bg-[#1a1d24] p-8 sm:p-10 rounded-2xl border border-gray-800 shadow-2xl">
          <div className="text-xs font-mono text-[#f5b027] uppercase tracking-wider mb-2">
            <i className="fa-solid fa-paper-plane mr-1"></i> DIRECT FACTORY DESK
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Business Enquiry</h2>
          <p className="text-sm text-gray-400 mb-8">
            Tell us about your requirement. Looking for a dealership, project supply, or bulk order? Share your details below.
          </p>

          {submitted && (
            <div className="mb-6 p-4 rounded bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-sm flex items-center gap-3">
              <i className="fa-solid fa-circle-check text-xl"></i>
              <div>
                <strong>Thank you!</strong> Your enquiry has been received. Our technical & business team will get back to you within 24 hours.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Full Name *</label>
                <input type="text" required placeholder="John Doe" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Company / Organization *</label>
                <input type="text" required placeholder="Apex Infra Ltd" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Business Type *</label>
                <select 
                  value={businessType} 
                  onChange={(e) => setBusinessType(e.target.value)} 
                  required 
                  className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]"
                >
                  <option value="">Select Category</option>
                  <option value="Dealer">Dealer / Retailer</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Contractor">Contractor / MEP</option>
                  <option value="Architect">Architect / Designer</option>
                  <option value="Institutional Buyer">Institutional Buyer</option>
                  <option value="Bulk Orders">Bulk Orders</option>
                  <option value="Other">Other Requirement</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Phone Number *</label>
                <input type="tel" required placeholder="+91 98765 43210" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Email Address *</label>
                <input type="email" required placeholder="contact@company.com" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">City / State *</label>
                <input type="text" required placeholder="e.g. Lucknow, UP" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Project Type</label>
                <input type="text" placeholder="e.g. Commercial Office / Hospital" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Approximate Quantity</label>
                <input type="text" placeholder="e.g. 250 units / Regular" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Products Required</label>
              <input type="text" placeholder="e.g. High Bay, Architectural Downlights, Panel Lights" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Delivery Location</label>
              <input type="text" placeholder="Delivery site address or PIN code" className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Requirement Details</label>
              <textarea rows="3" placeholder="Provide wattage requirements, lux specifications, project timelines, or query details..." className="w-full bg-[#111318] border border-gray-700 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5b027]"></textarea>
            </div>

            <div className="pt-2">
              <button type="submit" className="w-full bg-[#f5b027] hover:bg-[#d99a22] text-[#111318] font-bold py-3.5 px-6 rounded uppercase tracking-wider text-sm transition">
                Submit Business Enquiry
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="lg:col-span-5 flex flex-col justify-start">
          <div className="text-xs font-mono text-[#f5b027] uppercase tracking-wider mb-2">
            <i className="fa-solid fa-circle-question mr-1"></i> QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg bg-[#1a1d24]/60 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 text-left font-semibold text-sm text-gray-200 hover:text-[#f5b027] flex justify-between items-center transition"
                >
                  <span>{idx + 1}. {faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#f5b027]' : 'text-gray-500'}`}></i>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-gray-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0c10] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full text-xs font-bold text-[#f5b027] mb-8">
          <i className="fa-solid fa-rocket"></i> ELEVATE YOUR ARCHITECTURAL SPACE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          Built to Perform. Designed to Last.<br/>
          <span className="text-[#f5b027]">Supported to the End.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
          Whether you are illuminating iconic commercial skylines, state-of-the-art corporate headquarters, or luxury hospitality spaces, partner with Vajra LED for lighting engineering without compromise.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#enquiry" className="bg-[#f5b027] hover:bg-[#d99a22] text-[#111318] font-bold py-3 px-8 rounded transition flex items-center gap-2 text-sm">
            <i className="fa-regular fa-calendar-check"></i> SCHEDULE TECHNICAL CONSULTATION
          </a>
          <a href="#business" className="border border-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded transition flex items-center gap-2 text-sm">
            <i className="fa-solid fa-cube text-[#f5b027]"></i> REQUEST SAMPLE FIXTURE
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-400 font-semibold mb-20">
          <span className="flex items-center gap-2"><i className="fa-solid fa-shield-check text-[#f5b027]"></i> 10-YEAR WARRANTY & REPLACEMENT</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-globe text-[#f5b027]"></i> PAN-INDIA LOGISTICS & WAREHOUSE</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-headset text-[#f5b027]"></i> 24/7 DEDICATED ENGINEERING SPEC SUPPORT</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left border-t border-gray-800 pt-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold mb-6 text-white">
              <i className="fa-solid fa-lightbulb text-[#f5b027]"></i>
              VAJRA LED
            </div>
            <p className="text-xs text-gray-400 mb-6 pr-4 leading-relaxed">
              Mission-critical optical performance engineering for premier architectural installations, commercial infrastructure, and institutional projects.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="https://vajraled.com" className="hover:text-[#f5b027] transition"><i className="fa-solid fa-globe text-xl"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61575695830805" className="hover:text-[#f5b027] transition"><i className="fa-brands fa-facebook text-xl"></i></a>
              <a href="https://www.instagram.com/vajra_led/" className="hover:text-[#f5b027] transition"><i className="fa-brands fa-instagram text-xl"></i></a>
              <a href="https://youtube.com/@vajra_innovation" className="hover:text-[#f5b027] transition"><i className="fa-brands fa-youtube text-xl"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Product Systems</h4>
            <ul className="text-sm text-gray-400 space-y-3">
              <li><a href="#products" className="hover:text-white transition">Architectural Downlights</a></li>
              <li><a href="#products" className="hover:text-white transition">Recessed Micro-Linear Optics</a></li>
              <li><a href="#products" className="hover:text-white transition">Exterior Facade Wallgrazers</a></li>
              <li><a href="#products" className="hover:text-white transition">Urban Street & High Bays</a></li>
              <li><a href="#products" className="hover:text-white transition">Lithium Battery Storage</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Business & Specs</h4>
            <ul className="text-sm text-gray-400 space-y-3">
              <li><a href="#business" className="hover:text-white transition">Become a Dealer</a></li>
              <li><a href="#business" className="hover:text-white transition">Distributor Opportunities</a></li>
              <li><a href="#business" className="hover:text-white transition">Contractor BOQ Support</a></li>
              <li><a href="#business" className="hover:text-white transition">Architectural Photometrics</a></li>
              <li><a href="#business" className="hover:text-white transition">Institutional Procurement</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Company & Legal</h4>
            <ul className="text-sm text-gray-400 space-y-3">
              <li><a href="https://vajraled.com/about-us" className="hover:text-white transition">About Vajra LED</a></li>
              <li><a href="https://vajraled.com/certification" className="hover:text-white transition">BIS & Testing Certifications</a></li>
              <li><a href="https://vajraled.com/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="https://vajraled.com/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="https://www.spriteera.com/" className="hover:text-white transition">SpriteEra IT Solutions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-16 pt-8 border-t border-gray-800">
          <p>&copy; 2026 Vajra LED Opto-metrics. All rights reserved. Made in India 🇮🇳</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://vajraled.com/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="https://vajraled.com/terms-and-conditions" className="hover:text-gray-400">Terms of Specification</a>
            <a href="https://www.spriteera.com/" className="hover:text-gray-400">SpriteEra Intern Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [selectedBusiness, setSelectedBusiness] = useState("Dealer");

  const handleSelectBusiness = (type) => {
    setSelectedBusiness(type);
    const formElem = document.getElementById("enquiry");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#111318] text-white">
      <Header />
      <Hero />
      <StatsBanner />
      <Features />
      <CalibrateSpectrum />
      <BusinessSolutions onSelectBusiness={handleSelectBusiness} />
      <Timeline />
      <Benchmarks />
      <EnquiryAndFAQ businessType={selectedBusiness} setBusinessType={setSelectedBusiness} />
      <Footer />
    </div>
  );
}

export default App;
