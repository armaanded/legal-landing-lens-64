
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const contactItems = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "info@cattledogadvisory.com",
      href: "mailto:info@cattledogadvisory.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Office",
      value: "100 Independence Way, Suite 200\nAustin, TX 78701",
      href: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger the contact items animation
            contactItems.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-8 w-16 h-16 border-2 border-blue-200 rotate-45 transition-all duration-2000 ${isVisible ? 'opacity-30 rotate-45' : 'opacity-0 rotate-0'}`}></div>
        <div className={`absolute top-1/3 right-12 w-12 h-12 bg-purple-200 rounded-full transition-all duration-2000 delay-300 ${isVisible ? 'opacity-40 scale-100' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-8 h-8 bg-green-200 transform rotate-45 transition-all duration-2000 delay-500 ${isVisible ? 'opacity-50 rotate-45' : 'opacity-0 rotate-0'}`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-6 h-20 bg-orange-200 rounded-full transition-all duration-2000 delay-700 ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-0'}`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <div className="mb-16">
            <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              We'd like to hear from you
            </h2>
            <div className={`w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            <p className={`font-inter text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Ready to explore unconventional solutions? Contact us to discuss your most challenging problems and discover how independent thinking can unlock new possibilities.
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactItems.map((item, index) => (
              <div 
                key={index}
                className={`group relative transform transition-all duration-700 ${
                  animatedItems.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden">
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-90 transition-all duration-500 rounded-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Label */}
                    <p className="font-inter text-sm text-gray-500 group-hover:text-white/80 uppercase tracking-wide mb-2 transition-colors duration-500">
                      {item.label}
                    </p>
                    
                    {/* Value */}
                    <a 
                      href={item.href} 
                      className="font-inter text-lg text-gray-900 group-hover:text-white hover:underline transition-colors duration-500 block"
                    >
                      {item.value.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < item.value.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </a>
                    
                    {/* Hover arrow */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                      <div className="flex items-center text-white font-medium">
                        <span className="mr-2">Get in touch</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-6 right-6 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Floating shadow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform scale-95 group-hover:scale-100 -z-10`}></div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200">
              <Button 
                variant="outline" 
                className="group relative border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-xl font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-12">
              Ready to explore unconventional solutions? Contact us to discuss your most challenging problems and discover how independent thinking can unlock new possibilities.
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="font-inter text-sm text-gray-500 uppercase tracking-wide mb-2">Email</p>
                <a href="mailto:info@cattledogadvisory.com" className="font-inter text-xl text-gray-900 hover:text-gray-600 transition-colors">
                  info@cattledogadvisory.com
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
                  100 Independence Way, Suite 200<br />
                  Austin, TX 78701
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
