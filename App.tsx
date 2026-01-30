import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TestDrive from './pages/TestDrive';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
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

export default App;