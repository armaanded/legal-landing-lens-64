
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const fullText = "When the herd follows";
  const secondText = "We lead differently";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypewriterText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowContent(true), 500);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }
  }, [isVisible]);
  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-40 scale-100' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-50 scale-100' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-20 right-1/3 w-2 h-2 bg-orange-400 rounded-full transition-all duration-1000 delay-700 ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-0'}`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight min-h-[120px] flex flex-col justify-center">
            <span className="relative">
              {typewriterText}
              <span className={`inline-block w-0.5 h-12 bg-gray-900 ml-1 ${isVisible ? 'animate-pulse' : ''}`}></span>
            </span>
            <br />
            <span className={`font-medium transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {secondText}
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Sliding line animation */}
            <div className={`w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 transition-all duration-1000 ${showContent ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            
            <p className={`font-inter text-lg text-gray-600 leading-relaxed mb-8 transition-all duration-1000 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Cattledog Advisory specializes in solving problems that conventional approaches cannot address. We provide independent strategic counsel when organizations need to break away from the pack and chart their own course.
            </p>
            <p className={`font-inter text-lg text-gray-600 leading-relaxed mb-12 transition-all duration-1000 delay-400 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our mission is to guide leaders and organizations through complex challenges with fresh perspective, strategic thinking, and the courage to recommend unconventional solutions when they're what's needed.
            </p>
            
            <div className={`transition-all duration-1000 delay-600 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button 
                variant="outline" 
                className="group border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none font-medium px-8 py-3 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">About Cattledog</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
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
