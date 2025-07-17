
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            When the herd follows
            <br />
            <span className="font-medium">We lead differently</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-8">
              Cattledog Advisory specializes in solving problems that conventional approaches cannot address. We provide independent strategic counsel when organizations need to break away from the pack and chart their own course.
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-12">
              Our mission is to guide leaders and organizations through complex challenges with fresh perspective, strategic thinking, and the courage to recommend unconventional solutions when they're what's needed.
            </p>
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none font-medium px-8 py-3"
            >
              About Cattledog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
