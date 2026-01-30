import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-lg p-8 md:p-12 text-center animate-fade-in-up">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 p-1"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl md:text-4xl font-light text-[#10069f] mb-4">
          Take The Next Step
        </h2>
        
        <p className="text-gray-600 mb-8 text-lg">
          Choose the vehicle that suits you and book a test drive or check out our latest Ford Promotions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#10069f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0d057a] transition-colors min-w-[140px]">
            Promotions
          </button>
          <Link 
            to="/test-drive" 
            onClick={() => setIsOpen(false)}
            className="bg-[#10069f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0d057a] transition-colors min-w-[140px] inline-block"
          >
            Test Drive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;