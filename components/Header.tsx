import React, { useState } from 'react';
import { User, MapPin, Search, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Top utility bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 border-b border-gray-100 bg-white text-sm">
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className={`font-semibold pb-1 border-b-2 ${location.pathname === '/' ? 'text-[#10069f] border-[#10069f]' : 'text-gray-600 border-transparent hover:text-[#10069f]'}`}
          >
            Cars
          </Link>
          <span className="text-gray-500 cursor-pointer hover:text-[#10069f]">Vans & Pickups</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 bg-white">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 mr-8">
           <img 
              src="https://www.ford.co.uk/content/dam/guxeu/global-shared/header/ford-logo_global_nav_DSe.svg" 
              alt="Ford" 
              className="h-8 md:h-12 w-auto"
           />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-6 text-[15px] font-medium text-gray-800">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="hover:text-[#10069f] transition-colors">{item}</a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="text-gray-700 hover:text-[#10069f]">
            <User className="w-6 h-6 stroke-[1.5]" />
          </button>
          <button className="text-gray-700 hover:text-[#10069f]">
            <MapPin className="w-6 h-6 stroke-[1.5]" />
          </button>
          <button className="text-gray-700 hover:text-[#10069f]">
            <Search className="w-6 h-6 stroke-[1.5]" />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button className="xl:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg py-4 px-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-gray-800 hover:text-[#10069f]">{item}</a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;