
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [stagger, setStagger] = useState([false, false, false, false]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      [0, 1, 2, 3].forEach((i) => {
        setTimeout(() => {
          setStagger((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 180);
      });
    } else {
      setStagger([false, false, false, false]);
    }
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={` text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight transition-all duration-700 ${stagger[0] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            When the herd follows
            <br />
            <span className="font-medium">We lead differently</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className={` text-lg text-gray-600 leading-relaxed mb-8 transition-all duration-700 ${stagger[1] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            >
              Cattledog Advisory specializes in solving problems that conventional approaches cannot address. We provide independent strategic counsel when organizations need to break away from the pack and chart their own course.
            </p>
            <p className={` text-lg text-gray-600 leading-relaxed mb-12 transition-all duration-700 ${stagger[2] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            >
              Our mission is to guide leaders and organizations through complex challenges with fresh perspective, strategic thinking, and the courage to recommend unconventional solutions when they're what's needed.
            </p>
            <a href="mailto:gerald@cattledogadvisory.com">
              <Button 
                variant="outline" 
                className={`border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-none font-medium px-8 py-3 transition-all duration-700 ${stagger[3] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
              >
                Get to Know Us More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
