
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="font-playfair font-bold text-2xl text-navy">
              LegalAdvisory
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-navy hover:text-gold transition-colors font-inter font-medium">Services</a>
            <a href="#about" className="text-navy hover:text-gold transition-colors font-inter font-medium">About</a>
            <a href="#testimonials" className="text-navy hover:text-gold transition-colors font-inter font-medium">Testimonials</a>
            <a href="#contact" className="text-navy hover:text-gold transition-colors font-inter font-medium">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-navy hover:bg-navy/90 text-white">Schedule a Consultation</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <a href="#services" className="text-navy hover:text-gold transition-colors font-inter font-medium">Services</a>
            <a href="#about" className="text-navy hover:text-gold transition-colors font-inter font-medium">About</a>
            <a href="#testimonials" className="text-navy hover:text-gold transition-colors font-inter font-medium">Testimonials</a>
            <a href="#contact" className="text-navy hover:text-gold transition-colors font-inter font-medium">Contact</a>
            <Button className="bg-navy hover:bg-navy/90 text-white mt-2 w-full">Schedule a Consultation</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
