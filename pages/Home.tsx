import React from 'react';
import Hero from '../components/Hero';
import ValuationSection from '../components/ValuationSection';
import VehicleSlider from '../components/VehicleSlider';
import Modal from '../components/Modal';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-2 cursor-pointer group">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#10069f] transition-colors">Models</span>
                <svg className="w-6 h-6 text-[#10069f] transform group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
      </div>
      <ValuationSection />
      <VehicleSlider />
      <Modal />
    </main>
  );
};

export default Home;