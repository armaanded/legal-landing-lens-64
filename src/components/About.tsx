
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Legal professionals meeting" 
                  className="rounded-lg shadow-md w-full object-cover h-64"
                />
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Modern law office" 
                  className="rounded-lg shadow-md w-full object-cover h-64 mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/10 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">About Our Firm</h2>
            <div className="w-20 h-1 bg-gold mb-6"></div>
            <p className="font-inter text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2010, LegalAdvisory has established itself as a premier legal consulting firm dedicated to providing exceptional legal services to businesses and individuals alike.
            </p>
            <p className="font-inter text-lg text-gray-700 mb-6 leading-relaxed">
              Our team of experienced attorneys brings decades of combined expertise across various practice areas, ensuring that we can address even the most complex legal challenges with confidence and precision.
            </p>
            <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
              We pride ourselves on our client-centered approach, combining legal acumen with a deep understanding of our clients' goals to deliver tailored solutions that drive success.
            </p>
            <Button className="bg-navy hover:bg-navy/90 text-white">
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
