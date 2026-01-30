import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ValuationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image - New Ford Capri (Vivid Yellow) */}
          <div className="w-full lg:w-1/2 relative">
             <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
                 <img 
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYfTueVgGv07CrV1UhbiJWc8USO-a6ERS1RxNyGx1XvsgBazSv" 
                    alt="New Ford Capri" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 {/* Subtle gradient for depth */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#10069f] tracking-tight">
              Get your online valuation
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              Enter your registration number, mileage and contact details to receive your free online valuation.
            </p>
            <div className="pt-4">
              <button className="btn-primary px-8 py-3.5 rounded-full text-lg font-semibold shadow-md hover:shadow-xl">
                Discover what your vehicle is worth
              </button>
            </div>
          </div>

        </div>

        {/* Carousel Indicators (Visual only) */}
        <div className="flex items-center justify-center mt-12 gap-6">
           <button className="p-2 rounded-full border border-gray-300 text-gray-400 hover:border-[#10069f] hover:text-[#10069f] transition">
              <ChevronLeft className="w-6 h-6" />
           </button>
           <div className="flex gap-3">
              <div className="w-8 h-2 bg-[#10069f] rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
           </div>
           <button className="p-2 rounded-full border border-[#10069f] text-[#10069f] hover:bg-blue-50 transition">
              <ChevronRight className="w-6 h-6" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default ValuationSection;