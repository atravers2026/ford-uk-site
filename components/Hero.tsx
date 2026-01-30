import React from 'react';
import { MessageSquare, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[80vh] overflow-hidden bg-gray-900">
      {/* Background Image - Using a generic EV interior/dashboard shot similar to screenshot */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end items-center pb-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight max-w-5xl">
          New All-Electric Ford Puma Gen-E<sup className="text-2xl md:text-3xl">®</sup>
        </h1>
        
        <p className="text-lg md:text-xl font-light mb-8 opacity-90">
          Now available with £3,750 EV Government Grant<sup className="text-xs">†</sup>
        </p>

        <Link to="/test-drive" className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold min-w-[240px]">
          Drive the Puma Gen-E
        </Link>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-4 items-center">
        <button className="bg-[#0078d4] text-white p-3 rounded-full hover:bg-[#005a9e] transition shadow-lg mb-4">
           <MessageSquare className="w-6 h-6 fill-current" />
        </button>
        
        <button className="text-white/80 hover:text-white transition p-2 border border-white/30 rounded-full">
            <Pause className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default Hero;