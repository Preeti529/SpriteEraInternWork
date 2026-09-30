import React, { useState, useEffect } from 'react';

export default function Hero({ onExploreCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "domestic",
      title: "Domestic Lighting Solutions",
      subtitle: "Energy-Saving LED Bulbs, Battens & Decorative Illumination for Every Home",
      cta: "Explore Domestic Range",
      image: "https://img.vajraled.com/image/banner/56051665-6df3-4e24-a4dd-d728807efc7a.webp",
      tag: "DOMESTIC LIGHTING",
      accentBg: "from-blue-900/80 via-blue-950/60 to-transparent",
      highlight: "Save up to 85% energy with 50,000+ hour lifecycles."
    },
    {
      id: "commercial",
      title: "Commercial & Architectural Series",
      subtitle: "Ultra-Slim 2x2 Panels, High-CRI Downlights & Professional Luminaire Specs",
      cta: "Explore Commercial Range",
      image: "https://img.vajraled.com/image/banner/50ce8a69-6120-48a0-8691-936caf71804a.webp",
      tag: "COMMERCIAL & ARCHITECTURAL",
      accentBg: "from-slate-900/85 via-slate-950/60 to-transparent",
      highlight: "UGR < 10 anti-glare with BIS & DLC Premium certified components."
    },
    {
      id: "industrial",
      title: "Industrial & Infrastructure Lighting",
      subtitle: "Heavy-Duty High Bays, Street Lights & IP66/IP67 Rugged Enclosures",
      cta: "Explore Industrial Range",
      image: "https://img.vajraled.com/image/banner/9ae295fb-89e8-4fe7-b34c-84ad737c7dd3.webp",
      tag: "INDUSTRIAL GRADE",
      accentBg: "from-sky-950/85 via-blue-950/60 to-transparent",
      highlight: "Forged heatsinks engineered for continuous 24/7 industrial duty cycles."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-gray-900 overflow-hidden select-none">
      {/* Hero Banner Container */}
      <div className="relative min-h-[360px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] flex items-center">
        {/* Background Image with Fallback */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover opacity-85 transition-opacity duration-700 ease-in-out"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#035FA6]/80 border border-blue-400/40 text-amber-300 text-xs font-bold tracking-wider uppercase mb-4 shadow">
              <i className="fa-solid fa-bolt text-xs"></i>
              {slide.tag}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 drop-shadow-md">
              {slide.title}
            </h1>

            <p className="text-gray-200 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed max-w-xl">
              {slide.subtitle}
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-400 font-semibold mb-8">
              <i className="fa-solid fa-circle-check"></i>
              <span>{slide.highlight}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onExploreCategory && onExploreCategory(slide.id)}
                className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition flex items-center gap-2 text-sm uppercase tracking-wide"
              >
                <span>{slide.cta}</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
              
              <a 
                href="#business-solutions"
                className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition text-sm flex items-center gap-2"
              >
                <i className="fa-solid fa-handshake text-amber-400"></i>
                <span>Business & Dealer Inquiries</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#035FA6] text-white flex items-center justify-center transition border border-white/20 z-20"
          aria-label="Previous slide"
        >
          <i className="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#035FA6] text-white flex items-center justify-center transition border border-white/20 z-20"
          aria-label="Next slide"
        >
          <i className="fa-solid fa-chevron-right text-sm"></i>
        </button>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
