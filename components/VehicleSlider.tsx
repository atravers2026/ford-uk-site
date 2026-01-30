import React from 'react';
import { MOCK_VEHICLES } from '../constants';

const VehicleSlider: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#10069f] mb-8">
          Find Your New Ford
        </h2>
        
        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
          {MOCK_VEHICLES.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 snap-start overflow-hidden group cursor-pointer border border-gray-100"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{vehicle.name}</h3>
                {vehicle.tagline && (
                  <p className="text-sm text-gray-500 mb-3">{vehicle.tagline}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {vehicle.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* View All Card */}
          <div className="min-w-[200px] flex items-center justify-center bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#10069f] cursor-pointer group transition-colors">
             <span className="text-[#10069f] font-semibold group-hover:scale-110 transition-transform">View All Vehicles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSlider;