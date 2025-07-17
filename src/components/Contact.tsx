
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12 leading-tight">
            We'd like to hear from you
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-12">
              Contact us to discuss your legal challenges and discover how our strategic advisory services can help your business navigate complex legal matters.
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="font-inter text-sm text-gray-500 uppercase tracking-wide mb-2">Email</p>
                <a href="mailto:info@legaladvisory.com" className="font-inter text-xl text-gray-900 hover:text-gray-600 transition-colors">
                  info@legaladvisory.com
                </a>
              </div>
              
              <div>
                <p className="font-inter text-sm text-gray-500 uppercase tracking-wide mb-2">Phone</p>
                <a href="tel:+15551234567" className="font-inter text-xl text-gray-900 hover:text-gray-600 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div>
                <p className="font-inter text-sm text-gray-500 uppercase tracking-wide mb-2">Office</p>
                <p className="font-inter text-lg text-gray-900">
                  123 Legal Street, Suite 500<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <Button 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none font-medium px-8 py-3"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
