
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [stagger, setStagger] = useState([false, false, false]);

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
      [0, 1, 2].forEach((i) => {
        setTimeout(() => {
          setStagger((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 200);
      });
    } else {
      setStagger([false, false, false]);
    }
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-24 lg:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`font-salaryman text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight transition-all duration-700 ${stagger[0] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            Latest Insights
          </h2>
          <p className={`font-salaryman text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto transition-all duration-700 ${stagger[1] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            Exploring the intersection of AI, compliance, and privacy law
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 ${stagger[2] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
          <Link to="/blog-post" className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-navy to-gold flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7L12 2zm0 2.5L19.5 8H4.5L12 4.5zM4 9h16v8H4V9z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium opacity-90">AI & Compliance</h3>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <h3 className="font-salaryman text-2xl md:text-3xl font-medium text-gray-900 mb-4 group-hover:text-navy transition-colors">
                  How AI Can Accelerate Compliance Reviews
                </h3>
                <p className="font-salaryman text-gray-600 mb-4 leading-relaxed">
                  Corporate Privacy Policies Under the Oregon Consumer Privacy Act
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The data collection policies of Fortune 500 corporations impact hundreds of millions of people worldwide. Discover how AI tools like Legalgraph.ai can expedite the review of dense legal texts and transform them into usable comparisons...
                </p>
                
                <div className="flex items-center text-navy font-medium group-hover:text-gold transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
