
import { Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-salaryman text-xl font-bold mb-4">LegalAdvisory</h3>
            <p className="font-salaryman text-white/70 mb-6">
              Providing expert legal advisory services since 2010. We help navigate complex legal challenges with confidence and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:border-gold">
                  <Link className="h-4 w-4" />
                </div>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:border-gold">
                  <Link className="h-4 w-4" />
                </div>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:border-gold">
                  <Link className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-salaryman text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3 font-salaryman">
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Legal Consulting</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Contract Review</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Corporate Governance</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Regulatory Compliance</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Risk Assessment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-salaryman text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-3 font-salaryman">
              <li><a href="#about" className="text-white/70 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Our Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-salaryman text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-3 font-salaryman">
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-salaryman text-sm text-white/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LegalAdvisory. All rights reserved.
          </p>
          <p className="font-salaryman text-sm text-white/70">
            Designed and developed with excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
