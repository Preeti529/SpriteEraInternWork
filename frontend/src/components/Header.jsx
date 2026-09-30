import React, { useState } from 'react';

export default function Header({ activeCategory, setActiveCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Home' },
    { id: 'all-products', label: 'All Products' },
    { id: 'domestic', label: 'Domestic Lighting' },
    { id: 'commercial', label: 'Commercial Lighting' },
    { id: 'industrial', label: 'Industrial Lighting' },
    { id: 'lithium', label: 'Lithium Battery' },
    { id: 'business', label: 'B2B Solutions' },
    { id: 'dealers', label: 'Dealer Network' },
  ];

  const handleNavClick = (id) => {
    setActiveCategory(id);
    if (id === 'business' || id === 'dealers') {
      const el = document.getElementById('business-solutions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'all-products' || id === 'domestic' || id === 'commercial' || id === 'industrial' || id === 'lithium') {
      const el = document.getElementById('products-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Notification / Hotline Bar */}
      <div className="bg-[#035FA6] text-white text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wide">⚡ Vajra LED — Premium LED Lighting & Lithium Battery Solutions</span>
          <span className="hidden md:inline text-blue-200">| Made in India 🇮🇳</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a href="tel:+9105444297283" className="hover:text-amber-300 transition flex items-center gap-1">
            <i className="fa-solid fa-phone text-[10px]"></i> +91-05444297283
          </a>
          <span className="hidden sm:inline text-blue-300">|</span>
          <a href="#enquiry" className="hidden sm:inline text-amber-300 hover:text-white font-semibold">
            B2B & Bulk Inquiry →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <div 
          onClick={() => handleNavClick('all')} 
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#035FA6] to-[#024c85] text-amber-400 flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition">
            <i className="fa-solid fa-bolt"></i>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black tracking-wider text-[#035FA6] leading-none flex items-center gap-1">
              VAJRA <span className="text-amber-500 font-bold">LED</span>
            </div>
            <div className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-0.5">
              Lighting & Lithium Solutions
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-lg mx-4">
          <div className="flex items-center border-2 border-gray-300 hover:border-[#035FA6] focus-within:border-[#035FA6] rounded-xl px-3 py-1.5 w-full bg-gray-50 transition">
            <i className="fa-solid fa-magnifying-glass text-gray-400 mr-2 text-sm"></i>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bulbs, battens, panels, street lights, lithium batteries..." 
              className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder:text-gray-400"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-600 text-xs">
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="#enquiry" 
            className="hidden sm:flex items-center gap-2 bg-[#035FA6] hover:bg-[#024c85] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition"
          >
            <i className="fa-solid fa-handshake"></i>
            <span>Become a Dealer</span>
          </a>
          <a 
            href="#products-section" 
            className="border border-[#035FA6] text-[#035FA6] hover:bg-blue-50 text-xs sm:text-sm font-semibold px-3 py-2 rounded-lg transition"
          >
            View Products
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-[#035FA6] p-2 text-xl"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-2.5 no-scrollbar text-sm font-medium text-gray-700">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleNavClick(cat.id)}
                  className={`px-3 py-1 rounded-md whitespace-nowrap transition-all ${
                    isActive 
                      ? 'text-[#035FA6] font-bold border-b-2 border-[#035FA6] bg-blue-50/60' 
                      : 'hover:text-[#035FA6] hover:bg-gray-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 shadow-lg">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <i className="fa-solid fa-magnifying-glass text-gray-400 mr-2 text-sm"></i>
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-transparent outline-none text-sm text-gray-700 w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  handleNavClick(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded text-xs font-semibold ${
                  activeCategory === cat.id ? 'bg-[#035FA6] text-white' : 'bg-gray-50 text-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a 
              href="#enquiry" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#035FA6] text-white py-2.5 rounded font-semibold text-xs uppercase"
            >
              Partner / Dealer Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
