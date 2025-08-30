
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Blog = () => {
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

  const blogPosts = [
    {
      title: "Navigating Complex Legal Landscapes",
      excerpt: "Understanding the intricacies of modern legal challenges and how strategic advisory can make the difference.",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "The Future of Legal Technology",
      excerpt: "Exploring how technology is reshaping the legal industry and what it means for advisory services.",
      date: "March 8, 2024",
      readTime: "7 min read"
    },
    {
      title: "Risk Management in Uncertain Times",
      excerpt: "Strategic approaches to identifying and mitigating legal risks in today's volatile business environment.",
      date: "February 28, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`font-salaryman text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight transition-all duration-700 ${stagger[0] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            Insights & Perspectives
          </h2>
          <p className={`font-salaryman text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto transition-all duration-700 ${stagger[1] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            Stay informed with our latest thoughts on legal trends, strategic insights, and industry developments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer transition-all duration-700 ${stagger[2] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
              onClick={() => window.location.href = 'mailto:gerald@cattledogadvisory.com'}
            >
              <div className="mb-4">
                <span className="text-sm text-gray-500 font-salaryman">{post.date} • {post.readTime}</span>
              </div>
              <h3 className="font-salaryman text-xl font-medium text-gray-900 mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="font-salaryman text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="text-navy font-salaryman font-medium text-sm hover:text-gold transition-colors">
                Read More →
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <a href="mailto:gerald@cattledogadvisory.com">
            <Button 
              variant="outline" 
              className={`border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-none font-medium px-8 py-3 transition-all duration-700 ${stagger[3] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            >
              View All Articles
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
