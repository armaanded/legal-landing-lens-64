
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            We are
            <br />
            <span className="font-medium">Leading Legal Advisors</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-8">
              LegalAdvisory is a strategic legal advisory firm. We provide market leading advice on transformational business transactions and we devise solutions for high intensity legal challenges.
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-12">
              Our objective is to become the leading legal advisors to senior executives, boards of directors and business owners by providing expert advice on the most challenging matters.
            </p>
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none font-medium px-8 py-3"
            >
              About LegalAdvisory
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
