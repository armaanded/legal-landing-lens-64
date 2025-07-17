
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12 leading-tight">
            Our Professionals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Legal Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-medium text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="font-inter text-gray-600 mb-4">Senior Partner</p>
              <p className="font-inter text-sm text-gray-500 leading-relaxed">
                20+ years experience in corporate law and strategic advisory services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Legal Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-medium text-gray-900 mb-2">Michael Chen</h3>
              <p className="font-inter text-gray-600 mb-4">Managing Director</p>
              <p className="font-inter text-sm text-gray-500 leading-relaxed">
                Expert in regulatory compliance and business restructuring solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Legal Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-medium text-gray-900 mb-2">Rebecca Torres</h3>
              <p className="font-inter text-gray-600 mb-4">Senior Advisor</p>
              <p className="font-inter text-sm text-gray-500 leading-relaxed">
                Specialist in crisis management and dispute resolution strategies.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none font-medium px-8 py-3"
            >
              Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
