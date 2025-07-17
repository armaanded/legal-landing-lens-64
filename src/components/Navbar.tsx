
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`font-playfair font-light text-2xl tracking-wide ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              LEGALADVISORY
              <br />
              <span className="text-xs font-normal tracking-widest">STRATEGIC ADVISORS</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#services" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-400 transition-colors font-inter font-light text-sm tracking-wide`}>SERVICES</a>
            <a href="#about" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-400 transition-colors font-inter font-light text-sm tracking-wide`}>ABOUT</a>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-400 transition-colors font-inter font-light text-sm tracking-wide`}>TESTIMONIALS</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-400 transition-colors font-inter font-light text-sm tracking-wide`}>CONTACT</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-px bg-current"></div>
              <div className="w-6 h-px bg-current"></div>
              <div className="w-6 h-px bg-current"></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-8 pb-6 space-y-6 flex flex-col border-t border-white/20 pt-6">
            <a href="#services" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-400 transition-colors font-inter font-light text-sm tracking-wide`}>SERVICES</a>
            <a href="#about" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-400 transition-colors font-inter font-light text-sm tracking-wide`}>ABOUT</a>
            <a href="#testimonials" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-400 transition-colors font-inter font-light text-sm tracking-wide`}>TESTIMONIALS</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-400 transition-colors font-inter font-light text-sm tracking-wide`}>CONTACT</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
