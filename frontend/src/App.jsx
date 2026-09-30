import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MadeInIndiaStrip from './components/MadeInIndiaStrip';
import DealerHighlight from './components/DealerHighlight';
import ProductsGrid from './components/ProductsGrid';
import WhyChooseUs from './components/WhyChooseUs';
import BusinessSolutions from './components/BusinessSolutions';
import EnquiryAndFAQ from './components/EnquiryAndFAQ';
import Footer from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedBusiness, setSelectedBusiness] = useState('Dealer');

  const handleSelectBusiness = (type) => {
    setSelectedBusiness(type);
    const formElem = document.getElementById('enquiry');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProduct = (productTitle) => {
    setSelectedBusiness('Bulk Orders');
    const formElem = document.getElementById('enquiry');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCategory = (catId) => {
    setActiveCategory(catId);
    const prodElem = document.getElementById('products-section');
    if (prodElem) {
      prodElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased font-sans">
      {/* Official Vajra LED Header */}
      <Header 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Hero Carousel */}
      <Hero onExploreCategory={handleExploreCategory} />

      {/* Made In India Blue Banner Strip */}
      <MadeInIndiaStrip />

      {/* Authentic Dealer Network Trust Card */}
      <DealerHighlight onOpenDealerForm={() => handleSelectBusiness('Dealer')} />

      {/* Real Product Catalogue Grid (Domestic, Commercial, Industrial, Lithium) */}
      <ProductsGrid onInquireProduct={handleInquireProduct} />

      {/* Why Choose Vajra LED? Section */}
      <WhyChooseUs />

      {/* B2B Partnerships & Solutions (6 Tiers) */}
      <BusinessSolutions onSelectBusiness={handleSelectBusiness} />

      {/* Business Enquiry Form & FAQ Accordion */}
      <EnquiryAndFAQ 
        businessType={selectedBusiness} 
        setBusinessType={setSelectedBusiness} 
      />

      {/* Official Vajra LED Footer */}
      <Footer />
    </div>
  );
}
