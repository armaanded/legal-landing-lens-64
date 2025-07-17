
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Urban business environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
          We provide expert and
          <br />
          <span className="font-medium">independent legal advice</span>
        </h1>
        
        <div className="mt-16">
          <Button 
            className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 font-medium rounded-none"
            size="lg"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="w-px h-16 bg-white/50 mx-auto mb-4"></div>
        <p className="text-sm font-light tracking-wider">SCROLL</p>
      </div>
    </section>
  );
};

export default Hero;
