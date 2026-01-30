<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ford - New All-Electric Puma Gen-E</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Antonia:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background-color: #ffffff;
        color: #111111;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif;
        letter-spacing: -0.02em;
      }
      .ford-blue {
        color: #003478;
      }
      .bg-ford-blue {
        background-color: #003478;
      }
      .btn-primary {
        background-color: #10069f;
        color: white;
        transition: all 0.2s ease;
      }
      .btn-primary:hover {
        background-color: #0d057a;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(16, 6, 159, 0.3);
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.5s ease-out forwards;
      }
    </style>
    
    <!-- Import Map for Dependencies - Fixed Version Conflicts -->
    <script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
    "react-router-dom": "https://esm.sh/react-router-dom@6.22.3?deps=react@18.2.0,react-dom@18.2.0",
    "lucide-react": "https://esm.sh/lucide-react@0.344.0?deps=react@18.2.0",
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
    "react/": "https://esm.sh/react@^19.2.4/"
  }
}
</script>
    
    <!-- Babel Standalone to compile JSX in the browser -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel" data-type="module">
      import React, { useState, useEffect } from 'react';
      import { createRoot } from 'react-dom/client';
      import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
      import { User, MapPin, Search, Menu, X, ChevronLeft, ChevronRight, MessageSquare, Pause, Zap, Leaf, MessageCircle } from 'lucide-react';

      // --- CONSTANTS ---
      const NAV_ITEMS = [
        "Vehicles",
        "Finance & Promotions",
        "Going Electric",
        "Technology",
        "Owners",
        "Business",
        "Support"
      ];

      const MOCK_VEHICLES = [
        {
          id: 'kuga',
          name: "Kuga",
          tagline: "Win a Kuga Plug-In Hybrid Competition",
          image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
          type: "Hybrid",
          tags: ["Hybrid-PHEV", "Hybrid-FHEV", "Hybrid-MHEV"]
        },
        {
          id: 'puma-gen-e',
          name: "Puma Gen-E",
          tagline: "New All-Electric",
          image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
          type: "Electric",
          tags: ["Electric"]
        },
        {
          id: 'puma',
          name: "Puma",
          tagline: "Mild Hybrid Efficiency",
          image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800",
          type: "Hybrid",
          tags: ["Hybrid-MHEV"]
        },
        {
          id: 'mustang-mach-e',
          name: "Mustang Mach-E",
          tagline: "All-Electric SUV",
          image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
          type: "Electric",
          tags: ["Electric"]
        }
      ];

      // --- COMPONENTS ---

      // Header Component
      const Header = () => {
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

      // Hero Component
      const Hero = () => {
        return (
          <div className="relative w-full h-[600px] md:h-[80vh] overflow-hidden bg-gray-900">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop')`,
              }}
            >
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

      // Modal Component
      const Modal = () => {
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
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setIsOpen(false)}
            ></div>

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

      // Valuation Section Component
      const ValuationSection = () => {
        return (
          <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Image - Reverted to previous image as requested */}
                <div className="w-full lg:w-1/2 relative">
                   <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 relative shadow-xl">
                       <img 
                          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYfTueVgGv07CrV1UhbiJWc8USO-a6ERS1RxNyGx1XvsgBazSv" 
                          alt="Orange Ford Vehicle" 
                          className="w-full h-full object-cover mix-blend-multiply"
                       />
                       <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
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

      // Vehicle Slider Component
      const VehicleSlider = () => {
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

      // --- PAGES ---

      // Home Page
      const Home = () => {
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

      // Test Drive Page
      const TestDrive = () => {
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

            {/* AI Assistant Floating Button */}
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

      // --- MAIN APP ---

      const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
        return null;
      }

      const App = () => {
        return (
          <HashRouter>
            <div className="min-h-screen bg-white flex flex-col font-sans">
              <ScrollToTop />
              <Header />
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test-drive" element={<TestDrive />} />
              </Routes>

              {/* Simple Footer */}
              <footer className="bg-white border-t border-gray-200 py-12 px-8 mt-auto">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                  <div>
                    <h4 className="font-bold text-[#00095b] mb-4">Vehicles</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><a href="#" className="hover:text-[#10069f]">Cars</a></li>
                      <li><a href="#" className="hover:text-[#10069f]">Vans & Pickups</a></li>
                      <li><a href="#" className="hover:text-[#10069f]">Future Vehicles</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00095b] mb-4">Finance</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><a href="#" className="hover:text-[#10069f]">Personal Finance</a></li>
                      <li><a href="#" className="hover:text-[#10069f]">Business Finance</a></li>
                    </ul>
                  </div>
                  <div>
                     <h4 className="font-bold text-[#00095b] mb-4">Support</h4>
                     <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-[#10069f]">Contact Us</a></li>
                        <li><a href="#" className="hover:text-[#10069f]">FAQs</a></li>
                     </ul>
                  </div>
                </div>
                <div className="container mx-auto text-xs text-gray-400 border-t pt-8 flex justify-between">
                   <p>&copy; 2024 Ford Motor Company. This is a demo site for Salesforce.</p>
                   <div className="flex space-x-4">
                     <span>Cookie Settings</span>
                     <span>Privacy Policy</span>
                   </div>
                </div>
              </footer>
            </div>
          </HashRouter>
        );
      };

      // --- MOUNT ---
      const rootElement = document.getElementById('root');
      const root = createRoot(rootElement);
      root.render(<App />);

    </script>
  </body>
</html>
