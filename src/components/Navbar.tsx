
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { href: '#services', label: 'SERVICES', section: 'services' },
  { href: '#about', label: 'ABOUT', section: 'about' },
  { href: '#blog', label: 'BLOGS', section: 'blog' },
  { href: '#contact', label: 'CONTACT', section: 'contact' },
];

const Navbar = ({ fadeIn = false, activeSection, heroRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [show, setShow] = useState([false, false, false, false, false]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    if (fadeIn) {
      setShow([false, false, false, false, false]);
      setCurrentIndex(0);
    } else {
      setShow([false, false, false, false, false]);
      setCurrentIndex(-1);
    }
  }, [fadeIn]);

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < show.length) {
      setShow(prev => {
        const next = [...prev];
        next[currentIndex] = true;
        return next;
      });
      if (currentIndex < show.length - 1) {
        const timeout = setTimeout(() => setCurrentIndex(currentIndex + 1), 350);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex]);

  const getAnim = (idx) =>
    `transition-all transition-opacity transition-transform duration-500 ease-out ${
      show[idx]
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-4'
    }`;

  // Handle logo click to navigate to home page
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If we're already on the home page, scroll to hero
      if (heroRef && heroRef.current) {
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home
      navigate('/');
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white shadow-sm py-3' 
        : 'bg-gradient-to-b from-black/60 via-black/40 to-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className={`flex items-center ${getAnim(0)}`}>
            <a
              href="#"
              onClick={handleLogoClick}
              className="flex items-center"
            >
              <div className={`font-salaryman font-bold transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                <div className="text-xl leading-tight">CATTLEDOG</div>
                <div className="text-sm leading-tight">ADVISORY</div>
              </div>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link, idx) =>
              <a
                key={link.href}
                href={link.href}
                className={
                  `${isScrolled ? 'text-gray-900' : 'text-white'} font-light text-sm tracking-wide ${getAnim(idx + 1)} ` +
                  (activeSection === link.section
                    ? ' bg-black text-white px-4 py-2 rounded transition-colors duration-200'
                    : 'hover:text-gray-400 transition-colors')
                }
              >
                {link.label}
              </a>
            )}
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
            {NAV_LINKS.map(link =>
              <a
                key={link.href}
                href={link.href}
                className={
                  `${isScrolled ? 'text-gray-900' : 'text-white'} font-light text-sm tracking-wide ` +
                  (activeSection === link.section
                    ? ' bg-black text-white px-4 py-2 rounded transition-colors duration-200'
                    : 'hover:text-gray-400 transition-colors')
                }
              >
                {link.label}
              </a>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
