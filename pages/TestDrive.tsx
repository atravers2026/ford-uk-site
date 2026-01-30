import React from 'react';
import { MOCK_VEHICLES } from '../constants';
import { Zap, Leaf, MessageCircle } from 'lucide-react';

const TestDrive: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#00095b] mb-12 tracking-tight">
            Test Drive
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00095b] mb-8">
            1. Choose Vehicle
          </h2>

          {/* Type Toggle */}
          <div className="inline-flex rounded-full border border-gray-300 p-1 bg-white mb-8">
            <button className="px-8 py-3 rounded-full bg-[#10069f] text-white font-semibold shadow-md transition-all">
              Cars
            </button>
            <button className="px-8 py-3 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition-all">
              Vans & Pickups
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle List */}
      <div className="container mx-auto px-4 md:px-8 py-8 space-y-6">
        {MOCK_VEHICLES.map((vehicle) => (
          <div 
            key={vehicle.id}
            className="group bg-gray-100 hover:bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-200 cursor-pointer"
          >
            {/* Image */}
            <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-auto">
               <img 
                 src={vehicle.image} 
                 alt={vehicle.name} 
                 className="w-full h-full object-cover rounded-xl mix-blend-multiply group-hover:mix-blend-normal transition-all"
               />
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">
               <h3 className="text-2xl md:text-3xl font-bold text-[#00095b] mb-2 group-hover:text-[#10069f]">
                 {vehicle.name} {vehicle.tagline && `- ${vehicle.tagline}`}
               </h3>
               
               <div className="flex flex-wrap gap-4 mt-2">
                 {vehicle.tags.map((tag) => (
                    <div key={tag} className="flex items-center text-[#10069f] text-sm md:text-base font-medium">
                       {vehicle.type === 'Electric' ? <Zap className="w-4 h-4 mr-1" /> : <Leaf className="w-4 h-4 mr-1" />}
                       {tag}
                    </div>
                 ))}
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Assistant Floating Button (from Screenshot) */}
      <div className="fixed bottom-8 right-8 z-40 flex items-center gap-4 animate-fade-in-up">
        <div className="bg-white px-4 py-2 rounded shadow-lg text-sm text-gray-800 border border-gray-100 hidden md:block">
            Click here to chat to our Virtual AI Assistant
        </div>
        <button className="bg-[#0078d4] p-4 rounded-full text-white shadow-lg hover:bg-[#005a9e] transition-colors">
            <MessageCircle className="w-8 h-8" />
        </button>
      </div>

    </div>
  );
};

export default TestDrive;