import React, { useState } from 'react';

export default function EnquiryAndFAQ({ businessType, setBusinessType }) {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How Do LED Bulbs Differ From Traditional Incandescent Bulbs?",
      a: "LED bulbs generate light using semiconductor diodes, consuming up to 85% less electricity and lasting 25 times longer than traditional filament incandescent bulbs with minimal heat generation."
    },
    {
      q: "Are LED Bulbs More Expensive Than Traditional Bulbs?",
      a: "While the initial purchase cost of an LED bulb may be slightly higher, they save significant money over time due to drastically reduced electricity consumption and rare replacement cycles."
    },
    {
      q: "What Are The Benefits Of Using LED Bulbs?",
      a: "Vajra LED bulbs provide superior energy efficiency, up to 50,000-hour lifecycles, zero mercury or hazardous gases, instant brightness without flicker, and high CRI color rendering."
    },
    {
      q: "Do LED Bulbs Come In Different Color Temperatures?",
      a: "Yes. Vajra LED products are available in Warm White (3000K), Natural White (4000K), and Cool Daylight (6500K) to suit residential, office, and industrial environments."
    },
    {
      q: "Can LED Bulbs Be Used Outdoors?",
      a: "Yes. Vajra LED manufactures weather-resistant outdoor fixtures including IP66 and IP67 certified street lights, high-mast floodlights, and landscape luminaires."
    },
    {
      q: "Does Vajra LED offer dealer and distributor opportunities?",
      a: "Yes. Businesses, wholesalers, electrical retail stores, and commercial partners can join our authorized dealer network with competitive margins and regional territory support."
    },
    {
      q: "How can I request a bulk commercial quotation or BOQ pricing?",
      a: "Submit your required product types, approximate quantities, and delivery location via our business inquiry form below, or call our direct desk at +91-05444297283."
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
    <section id="enquiry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Enquiry Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#035FA6] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <i className="fa-solid fa-envelope"></i> Direct Factory Desk
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            Submit Business Enquiry
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Tell us about your requirement. Looking for a dealership, project supply, or bulk order? Share your details below for direct manufacturer pricing.
          </p>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-center gap-3">
              <i className="fa-solid fa-circle-check text-2xl text-emerald-600"></i>
              <div>
                <strong className="font-bold">Inquiry Received!</strong> Our commercial sales team will review your specifications and reach out within 24 business hours.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Rajesh Kumar" 
                  className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Company / Store Name *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Kumar Electricals" 
                  className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Business Category *
                </label>
                <select 
                  value={businessType} 
                  onChange={(e) => setBusinessType(e.target.value)} 
                  required 
                  className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition font-medium"
                >
                  <option value="">Select Opportunity</option>
                  <option value="Dealer">Become a Dealer / Retailer</option>
                  <option value="Distributor">Regional Distributor</option>
                  <option value="Contractor">Contractor & MEP Projects</option>
                  <option value="Architect">Architect & Interior Designer</option>
                  <option value="Institutional Buyer">Institutional & Facility Buyer</option>
                  <option value="Bulk Orders">Bulk Volume Procurement</option>
                  <option value="Other">Other Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210" 
                  className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@business.com" 
                  className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  City / State *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Lucknow, Uttar Pradesh" 
                  className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Products Needed
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Bulbs, Battens, Panels, Floodlights" 
                  className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Estimated Quantity
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 500 units / Regular Monthly" 
                  className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Specific Notes or Project Details
              </label>
              <textarea 
                rows="3" 
                placeholder="Mention wattage requirements, technical specifications, or timeline..." 
                className="w-full bg-gray-50 border border-gray-300 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#035FA6] transition"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-[#035FA6] hover:bg-[#024c85] text-white font-bold py-3.5 px-6 rounded-xl uppercase tracking-wider text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <span>Submit Business Enquiry</span>
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Section matching vajraled.com */}
        <div id="faq" className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#035FA6] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <i className="fa-solid fa-circle-question"></i> Help & Clarity
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Experience the Vajra LED Difference
          </h2>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden transition"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 text-left font-semibold text-sm sm:text-base text-gray-800 hover:text-[#035FA6] flex justify-between items-center transition"
                >
                  <span className="pr-4">{idx + 1}. {faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 text-[#035FA6] ${
                    openFaq === idx ? 'rotate-180 text-amber-500' : ''
                  }`}></i>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
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
