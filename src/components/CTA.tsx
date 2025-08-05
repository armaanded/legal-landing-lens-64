
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Strategy?
          </h2>
          <p className="font-inter text-xl text-white/80 mb-8">
            Schedule a consultation with our team of experienced legal advisors today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-gold hover:bg-gold/90 text-navy text-lg py-6 px-8">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-transparent hover:text-white text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
