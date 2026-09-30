import React from 'react';

export default function DealerHighlight({ onOpenDealerForm }) {
  const benefits = [
    {
      icon: "fa-check",
      title: "Authentic Products",
      desc: "100% Genuine BIS Certified with verified test reports",
      color: "bg-green-100 text-green-700 border-green-200"
    },
    {
      icon: "fa-bolt",
      title: "Expert Installation",
      desc: "Skilled technician & contractor MEP guidance",
      color: "bg-blue-100 text-[#035FA6] border-blue-200"
    },
    {
      icon: "fa-wrench",
      title: "After-Sales Service",
      desc: "Hassle-free replacement & warranty claims",
      color: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      icon: "fa-lightbulb",
      title: "Technical Support",
      desc: "Turnkey photometric calculations & lux design",
      color: "bg-amber-100 text-amber-700 border-amber-200"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50/80 via-white to-amber-50/50 py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#035FA6] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <i className="fa-solid fa-store"></i> Pan-India Presence
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Visit Our Dealers for Authentic Vajra LED Products
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Get expert lighting advice, genuine manufacturer warranties, commercial pricing slabs, and dedicated local support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {benefits.map((b, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50/80 hover:bg-white p-5 rounded-xl border border-gray-200/80 hover:border-blue-300 hover:shadow-md transition text-center group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold border ${b.color} group-hover:scale-110 transition`}>
                  <i className={`fa-solid ${b.icon}`}></i>
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">{b.title}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <button
              onClick={onOpenDealerForm}
              className="bg-[#035FA6] hover:bg-[#024c85] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg shadow hover:shadow-lg transition flex items-center gap-2"
            >
              <i className="fa-solid fa-user-plus"></i> Join the Dealer Network
            </button>
            <a
              href="#business-solutions"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold text-xs sm:text-sm px-5 py-3 rounded-lg transition"
            >
              Explore Wholesale Tiers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
