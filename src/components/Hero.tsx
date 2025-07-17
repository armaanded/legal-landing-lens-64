
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 lg:pt-28 pb-16 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              Strategic Legal Advisory for Complex Challenges
            </h1>
            <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of experienced attorneys provides comprehensive legal solutions tailored to your specific needs. We partner with you to navigate complex legal landscapes and achieve optimal outcomes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-navy hover:bg-navy/90 text-white text-lg py-6 px-8">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy/5 text-lg py-6 px-8">
                Learn About Our Services
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-gold/10 rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional legal team" 
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-navy/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
