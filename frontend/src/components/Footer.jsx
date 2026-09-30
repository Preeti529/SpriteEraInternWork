import React from 'react';

export default function Footer() {
  const marketplaces = [
    {
      name: "Flipkart",
      url: "https://dl.flipkart.com/s/sqfSOkuuuN",
      icon: "fa-bag-shopping",
      color: "bg-amber-400 text-blue-900"
    },
    {
      name: "Meesho",
      url: "https://www.meesho.com/LEDLightManufacturing?_ms=3.0.3",
      icon: "fa-store",
      color: "bg-pink-600 text-white"
    },
    {
      name: "Amazon",
      url: "https://www.amazon.in/dp/B0FWKMHHFD",
      icon: "fa-brands fa-amazon",
      color: "bg-amber-500 text-gray-900"
    },
    {
      name: "GeM",
      sub: "Govt. e-Marketplace",
      url: "https://mkp.gem.gov.in/led-luminaire-floodlight-v2-conforming-10322-part-5/vajraled-led-luminaire-floodlights-rating-200-watt/p-5116877-88359559743-cat.html",
      icon: "fa-landmark",
      color: "bg-blue-600 text-white"
    }
  ];

  return (
    <footer className="bg-[#212121] text-white pt-14 pb-8 border-t-4 border-[#035FA6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-700">
          
          {/* Brand & Marketplaces */}
          <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8 md:border-r border-gray-700">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#035FA6] text-amber-400 flex items-center justify-center text-xl shadow">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div>
                  <div className="text-2xl font-black tracking-wider text-white">
                    VAJRA <span className="text-amber-400">LED</span>
                  </div>
                  <div className="text-[10px] text-gray-400 tracking-widest uppercase">
                    Lighting & Lithium Battery Solutions
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-6 max-w-md">
                We are designers and creators of superior lighting solutions. This is the guiding principle which defines our company and drives our activities. Made with pride in India.
              </p>
            </div>

            {/* Available On Section (matching vajraled.com) */}
            <div className="bg-[#181818] p-5 rounded-2xl border border-gray-800">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <i className="fa-solid fa-cart-shopping"></i> Available On Major Marketplaces:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {marketplaces.map((m, idx) => (
                  <a
                    key={idx}
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 bg-white/5 hover:bg-white/15 rounded-xl border border-gray-700 hover:border-amber-400 transition group text-center"
                    title={`Buy on ${m.name}`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${m.color} flex items-center justify-center text-sm font-black mb-1 group-hover:scale-110 transition shadow`}>
                      <i className={m.icon.startsWith('fa-') ? m.icon : `fa-solid ${m.icon}`}></i>
                    </div>
                    <span className="text-xs font-bold text-gray-200 group-hover:text-amber-400 transition">
                      {m.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links & Product Categories */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-amber-400 mb-4">
                Quick Links
              </h4>
              <ul className="text-xs text-gray-400 space-y-2.5">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="https://vajraled.com/about-us" className="hover:text-white transition">About Us</a></li>
                <li><a href="#products-section" className="hover:text-white transition">Product Catalogue</a></li>
                <li><a href="#business-solutions" className="hover:text-white transition">Dealer Network</a></li>
                <li><a href="#enquiry" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="https://vajraled.com/certification" className="hover:text-white transition">BIS Certification</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-amber-400 mb-4">
                Products
              </h4>
              <ul className="text-xs text-gray-400 space-y-2.5">
                <li><a href="#products-section" className="hover:text-white transition">Domestic Lighting</a></li>
                <li><a href="#products-section" className="hover:text-white transition">Commercial Lighting</a></li>
                <li><a href="#products-section" className="hover:text-white transition">Industrial Lighting</a></li>
                <li><a href="#products-section" className="hover:text-white transition">Lithium Batteries</a></li>
                <li><a href="#products-section" className="hover:text-white transition">Street Lights & Floodlights</a></li>
                <li><a href="#products-section" className="hover:text-white transition">Solar Storage Packs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-amber-400 mb-4">
                Policy & Contact
              </h4>
              <ul className="text-xs text-gray-400 space-y-2.5 mb-6">
                <li><a href="https://vajraled.com/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="https://vajraled.com/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="https://vajraled.com/shipping-policy" className="hover:text-white transition">Shipping Policy</a></li>
                <li><a href="https://vajraled.com/refund-policy" className="hover:text-white transition">Refund Policy</a></li>
              </ul>

              <div className="text-xs text-gray-300 font-semibold mb-2">
                Follow Us On:
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61575695830805" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook-f text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/vajra_led/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 flex items-center justify-center text-white transition"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram text-sm"></i>
                </a>
                <a 
                  href="https://youtube.com/@vajra_innovation?si=DObu2fH9JDPHW1rz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition"
                  title="YouTube"
                >
                  <i className="fa-brands fa-youtube text-sm"></i>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* SpriteEra Attribution and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © 2025-2026 Vajra LED Solutions. All rights reserved. Made with pride in India 🇮🇳
          </p>
          <a 
            href="https://www.spriteera.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-400 transition flex items-center gap-1.5"
          >
            <span>Design & Developed by</span>
            <strong className="text-white hover:text-amber-400">SpriteEra IT Solutions Pvt. Ltd.</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
