import React, { useState } from 'react';

export default function ProductsGrid({ onInquireProduct }) {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: "VJ02",
      title: "LED Bulb Eco-Saver",
      category: "domestic",
      watt: "3W",
      cct: "6500K Cool White",
      price: 55,
      mrp: 158,
      stock: "In Stock",
      image: "https://img.vajraled.com/image/product/b79c40d9-a841-4ae0-bb77-1037db86b7e7.webp",
      badge: "Best Seller"
    },
    {
      id: "VJ03",
      title: "LED High Wattage Bulb",
      category: "domestic",
      watt: "30W",
      cct: "6500K Cool Daylight",
      price: 410,
      mrp: 750,
      stock: "In Stock",
      image: "https://img.vajraled.com/image/product/bfce9f83-e11f-4b0c-9792-90da8bf1161b.webp",
      badge: "High Lumen"
    },
    {
      id: "VJ05",
      title: "LED T-Bulb Wide Spread",
      category: "domestic",
      watt: "10W",
      cct: "4000K Natural White",
      price: 145,
      mrp: 275,
      stock: "In Stock",
      image: "https://img.vajraled.com/image/product/0db9b571-89fb-45c7-afe0-0f3245c7f26e.webp"
    },
    {
      id: "VJ06",
      title: "LED T5 Batten Square",
      category: "domestic",
      watt: "20W",
      cct: "3000K Warm White",
      price: 150,
      mrp: 499,
      stock: "In Stock",
      image: "https://img.vajraled.com/image/product/5dc3d3c8-16a7-4f41-a713-df7b7544b3fa.webp",
      badge: "69% OFF"
    },
    {
      id: "VJ04",
      title: "LED Inverter Bulb (AC/DC)",
      category: "domestic",
      watt: "9W",
      cct: "6500K Cool White",
      price: 325,
      mrp: 495,
      stock: "4-Hour Backup",
      image: "https://img.vajraled.com/image/product/da9fbd5d-93c5-4098-a2e7-bc8b91270e8f.webp",
      badge: "Inverter Tech"
    },
    {
      id: "VJ01",
      title: "LED Deco Mini Bulb",
      category: "domestic",
      watt: "0.5W",
      cct: "Warm Ambient",
      price: 34,
      mrp: 68,
      stock: "In Stock",
      image: "https://img.vajraled.com/image/product/eb7260ae-6a50-491c-89b6-9078547745e9.webp"
    },
    {
      id: "VJ12",
      title: "LED 2X2 Slim Panel Light",
      category: "commercial",
      watt: "36W",
      cct: "6500K Day White",
      price: 1500,
      mrp: 3000,
      stock: "Commercial Grade",
      image: "https://img.vajraled.com/image/product/3650e6ec-ca7c-4898-ba41-5eb159bd6fce.webp",
      badge: "Office Series"
    },
    {
      id: "VJ09",
      title: "LED 8” Slim Round/Square Panel",
      category: "commercial",
      watt: "18W",
      cct: "3000K / 6500K",
      price: 558,
      mrp: 1115,
      stock: "In Stock",
      image: "https://img.vajraled.com/image/product/ad6559c4-d8ac-441e-9900-3ce339fd19ce.webp"
    },
    {
      id: "VJ08",
      title: "LED 8” Surface Architectural Downlight",
      category: "commercial",
      watt: "22W",
      cct: "3000K Architectural",
      price: 725,
      mrp: 1450,
      stock: "In Stock",
      image: "https://img.vajraled.com/image/product/89e97b9a-5568-41ef-a1ae-59c86a56b784.webp"
    },
    {
      id: "VJ18",
      title: "LED Street Light LT Heavy-Duty",
      category: "industrial",
      watt: "40W",
      cct: "6500K IP66 Protected",
      price: 1600,
      mrp: 3200,
      stock: "Municipal & Highway",
      image: "https://img.vajraled.com/image/product/4337bcf4-61dd-427f-9986-70944c7c82f7.webp",
      badge: "IP66 Rugged"
    },
    {
      id: "VJ16",
      title: "LED Industrial Flood Light High-Mast",
      category: "industrial",
      watt: "150W",
      cct: "6500K Stadium Optics",
      price: 2800,
      mrp: 14000,
      stock: "Heavy Industry",
      image: "https://img.vajraled.com/image/product/42263ccc-22d4-4e64-bade-25911e4fe8a1.webp",
      badge: "80% OFF"
    },
    {
      id: "VJ-BAT-01",
      title: "Vajra LiFePO4 Lithium Solar Battery Pack",
      category: "lithium",
      watt: "12V 100Ah",
      cct: "Deep Cycle BMS",
      price: 18500,
      mrp: 29000,
      stock: "3000+ Cycles",
      image: "https://img.vajraled.com/image/banner/56051665-6df3-4e24-a4dd-d728807efc7a.webp",
      badge: "Lithium Power"
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="text-xs font-bold text-[#035FA6] uppercase tracking-wider mb-2">
          Featured Product Catalogue
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
          Explore Vajra LED & Lithium Solutions
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          From residential energy-saving LED bulbs to heavy industrial floodlights and solar lithium storage, find the perfect solution backed by manufacturer warranties.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 rounded-xl border border-gray-200">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'domestic', label: 'Domestic Lighting' },
            { id: 'commercial', label: 'Commercial Lighting' },
            { id: 'industrial', label: 'Industrial Lighting' },
            { id: 'lithium', label: 'Lithium Battery' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-[#035FA6] text-white shadow'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => {
          const discountPercent = Math.round(((p.mrp - p.price) / p.mrp) * 100);
          return (
            <div 
              key={p.id}
              className="bg-white rounded-xl border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-4 relative bg-gray-50 flex items-center justify-center min-h-[200px]">
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-gray-950 font-bold text-[10px] uppercase px-2 py-0.5 rounded shadow">
                    {p.badge}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="absolute top-3 right-3 bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow">
                    {discountPercent}% OFF
                  </span>
                )}
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="max-h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if CDN is restricted
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 24 24' fill='none' stroke='%23035FA6' stroke-width='1.5'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z'/%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span className="font-mono bg-blue-50 text-[#035FA6] px-2 py-0.5 rounded font-semibold">{p.watt}</span>
                    <span className="text-[11px] text-gray-400">{p.cct}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-2 group-hover:text-[#035FA6] transition">
                    {p.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-extrabold text-[#035FA6]">₹{p.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 line-through">₹{p.mrp.toLocaleString()}</span>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => onInquireProduct && onInquireProduct(p.title)}
                      className="flex-1 py-2 bg-[#035FA6] hover:bg-[#024c85] text-white text-xs font-bold uppercase rounded-lg shadow-sm transition flex items-center justify-center gap-1.5"
                    >
                      <i className="fa-solid fa-file-lines text-[11px]"></i>
                      <span>Inquire / Quote</span>
                    </button>
                    <a
                      href="#enquiry"
                      className="p-2 border border-gray-300 hover:border-[#035FA6] text-gray-600 hover:text-[#035FA6] rounded-lg text-xs flex items-center justify-center transition"
                      title="Bulk Order"
                    >
                      <i className="fa-solid fa-boxes-stacked"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
