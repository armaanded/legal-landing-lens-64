
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

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className={`font-salaryman text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight transition-all duration-700 ${stagger[0] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            How AI Can Accelerate Compliance Reviews
          </h2>
          <p className={`font-salaryman text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto transition-all duration-700 ${stagger[1] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
            Corporate Privacy Policies Under the Oregon Consumer Privacy Act
          </p>
        </div>

        <div className={`max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 mb-12 transition-all duration-700 ${stagger[2] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
          <div className="prose prose-lg max-w-none font-salaryman">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Introduction</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The data collection policies of Fortune 500 corporations impact hundreds of millions of people worldwide. Consumers, regulators, and advocacy groups alike have long struggled with the confusing realities of commercial terms of service and privacy policies, yet these agreements dictate how personal data is collected, shared, and protected in the United States. Often these agreements are complex, opaque, and difficult to compare, leaving the reader uninformed and ill-equipped to manage their own personal data.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              With the passage of recent U.S. state privacy laws like the Oregon Consumer Privacy Act (OCPA), effective July 2024, the need for transparency and rapid analysis is greater than ever. The OCPA imposes new obligations on companies operating in Oregon that process or control personal data, requiring privacy policies to be easily accessible, clear, and specific about data practices. Companies must ensure their publicly posted policies meet these standards or risk exposure to enforcement action.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The challenge for consumers of these disclosures? Evaluating even a single corporation's privacy policy and other public disclosures can require hours of manual review by attorneys and compliance teams. Multiply this across hundreds of companies, and the task quickly becomes unmanageable for both organizations and individuals.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Enter AI tools like Legalgraph.ai, designed to expedite the review of dense legal texts and transform them into usable comparisons. By harnessing AI, it is now possible to quickly extract key answers about whether a company's practices align with the OCPA — without drowning in legal jargon.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This post explores why these developments matter, outlines the new obligations under Oregon law, and demonstrates how AI can streamline compliance analysis of Fortune 500 companies' policies.
            </p>

            <div className="bg-white p-6 rounded-lg border-l-4 border-navy mb-8">
              <h4 className="text-xl font-medium text-gray-900 mb-4">Key Benefits of AI-Driven Compliance Review</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Reduces review time from hours to minutes per policy</li>
                <li>• Enables rapid comparison across hundreds of companies</li>
                <li>• Identifies compliance gaps with regulatory precision</li>
                <li>• Transforms legal jargon into actionable insights</li>
                <li>• Scales analysis across multiple jurisdictions</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              As more states adopt their own consumer privacy statutes, the ability to automate compliance checks and run cross-company comparisons will go from being a helpful advantage to a business necessity. In a world where corporate data practices increasingly define consumer trust and regulatory risk, AI doesn't just make document review faster — it makes accountability measurable.
            </p>

            <div className="bg-navy text-white p-6 rounded-lg">
              <h4 className="text-xl font-medium mb-4">Get Involved</h4>
              <p className="mb-4">We would love to hear from you. Let us know which privacy policies or which state's privacy terms you would like us to review next.</p>
              <p className="mb-4">For consultancy and advice, reach out to us at <a href="mailto:gerald@cattledogadvisory.com" className="text-gold underline">gerald@cattledogadvisory.com</a>.</p>
              <p>If you would like to volunteer and be part of this project where we are reviewing the privacy policies of Fortune 500 companies, write to us with the heading "How AI Can Accelerate Compliance Reviews".</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="mailto:gerald@cattledogadvisory.com">
            <Button 
              variant="outline" 
              className={`border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 rounded-none font-medium px-8 py-3 transition-all duration-700 ${stagger[3] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            >
              Contact Us for More Insights
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
