import React from 'react';

export default function BusinessSolutions({ onSelectBusiness }) {
  const categories = [
    {
      id: "Dealer",
      title: "Become a Dealer",
      sub: "Grow Your Business with Vajra LED",
      desc: "Partner with Vajra LED and expand your retail or wholesale store portfolio. Suitable for electrical retailers, lighting showrooms, wholesalers, and hardware businesses across India.",
      points: [
        "Comprehensive domestic & commercial LED catalogue",
        "Highly competitive dealer margin structures",
        "Reliable & timely dispatched stock",
        "Marketing collaterals & technical training",
        "Product selection and replacement warranty support",
        "Long-term, protected business partnerships"
      ],
      icon: "fa-store",
      cta: "Become a Vajra Dealer"
    },
    {
      id: "Distributor",
      title: "Distributor Network",
      sub: "Build Regional Wholesale Distribution",
      desc: "Partner with Vajra LED as an authorized regional distributor. We support our distribution partners with bulk factory pricing, credit terms, and dedicated territory coordination.",
      points: [
        "Regional exclusivity opportunities",
        "Direct factory wholesale pricing tiers",
        "Electrical & building material supply networks",
        "Dedicated territory account manager",
        "Multi-location logistics and warehousing assistance",
        "Priority product allocation during seasonal surges"
      ],
      icon: "fa-network-wired",
      cta: "Become a Distributor"
    },
    {
      id: "Contractor",
      title: "Contractor & MEP Solutions",
      sub: "Lighting Solutions for Commercial Projects",
      desc: "We assist electrical contractors, MEP consultants, EPC firms, and builders with tailored luminaire solutions for commercial complexes, high-rise buildings, and industrial plants.",
      points: [
        "BOQ analysis, take-off & cost optimization",
        "Residential, commercial & warehouse lighting",
        "Complete technical submittals & data sheets",
        "Staged phased-site delivery scheduling",
        "Site inspection & commissioning support",
        "BIS & standard compliance documentation"
      ],
      icon: "fa-hard-hat",
      cta: "Discuss Your Project BOQ"
    },
    {
      id: "Architect",
      title: "Architect & Designer Series",
      sub: "Precision Optics for Modern Spaces",
      desc: "We work directly with architects, interior consultants, and lighting designers to provide photometric IES files, accurate lux simulations, and custom architectural finishes.",
      points: [
        "Full photometric IES & BIM specification files",
        "Technical lux calculations (Dialux / Relux)",
        "Deep anti-glare UGR < 10 optical downlights",
        "Custom Kelvin CCT & CRI 95+ options",
        "Sample luminaire fixtures for mock-up validation",
        "Dedicated specification engineer support"
      ],
      icon: "fa-compass-drafting",
      cta: "Consult Specification Team"
    },
    {
      id: "Institutional Buyer",
      title: "Institutional Procurement",
      sub: "Lighting & Power for Large Facilities",
      desc: "Turnkey supply solutions for educational campuses, hospitals, healthcare centers, government facilities, and GeM (Government e-Marketplace) registered tenders.",
      points: [
        "Schools, universities & research campuses",
        "Hospitals & cleanroom healthcare facilities",
        "GeM portal registered catalogue compliance",
        "Official test reports (NABL accredited labs)",
        "Bulk customized institutional quotations",
        "Tender-compliant product documentation"
      ],
      icon: "fa-landmark",
      cta: "Submit Institutional Request"
    },
    {
      id: "Bulk Orders",
      title: "Bulk Orders & Factory Slabs",
      sub: "Large-Volume LED & Battery Procurement",
      desc: "Direct factory pricing for high-volume procurements across LED floodlights, street lights, commercial panels, and industrial lithium battery energy packs.",
      points: [
        "Tiered volume discount pricing slabs",
        "Containerized & palletized packaging",
        "Custom branding / OEM capability where applicable",
        "Scheduled milestone supply logistics",
        "Dedicated factory quality assurance reports",
        "Priority expedited manufacturing dispatch"
      ],
      icon: "fa-boxes-stacked",
      cta: "Request Bulk Price Slab"
    }
  ];

  return (
    <section id="business-solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#035FA6] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
          <i className="fa-solid fa-handshake"></i> Business Opportunities
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
          LED Lighting Solutions for Dealers, Distributors, Contractors & Businesses
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Whether you are looking for a dealer partnership, distribution opportunity, commercial project lighting, or LED lights in bulk, Vajra LED delivers precision-engineered products backed by direct factory support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 p-8 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#035FA6] flex items-center justify-center text-xl font-bold group-hover:bg-[#035FA6] group-hover:text-white transition">
                  <i className={`fa-solid ${cat.icon}`}></i>
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                  Tier 0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#035FA6] transition mb-1">
                {cat.title}
              </h3>
              <div className="text-xs font-semibold text-gray-500 mb-4">
                {cat.sub}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {cat.desc}
              </p>

              <div className="mb-6 pt-4 border-t border-gray-100">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">
                  Scope & Partner Benefits:
                </div>
                <ul className="text-xs text-gray-600 space-y-2">
                  {cat.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-emerald-600 text-xs mt-0.5"></i>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => onSelectBusiness && onSelectBusiness(cat.id)}
              className="w-full py-3 bg-[#035FA6] hover:bg-[#024c85] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm transition flex items-center justify-center gap-2 group-hover:shadow-md"
            >
              <span>{cat.cta}</span>
              <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
