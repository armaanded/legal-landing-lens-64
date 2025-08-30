import { Gavel, Briefcase, Users, FileText, Shield, Handshake } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const servicesData = [
  {
    icon: <Gavel className="h-8 w-8 text-white" />,
    title: "Strategic Advisory",
    description: "Independent analysis and guidance when conventional wisdom falls short of solving complex challenges.",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-white" />,
    title: "Crisis Management", 
    description: "Clear-headed leadership and decisive action when organizations face critical turning points.",
    color: "from-red-600 to-red-700"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Organizational Restructuring",
    description: "Innovative approaches to realigning teams, processes, and structures for optimal performance.",
    color: "from-green-600 to-green-700"
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Business Transformation",
    description: "Guiding organizations through fundamental changes that require thinking beyond traditional boundaries.",
    color: "from-purple-600 to-purple-700"
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Regulatory Navigation",
    description: "Expert guidance through complex regulatory landscapes when standard approaches prove insufficient.",
    color: "from-orange-600 to-orange-700"
  },
  {
    icon: <Handshake className="h-8 w-8 text-white" />,
    title: "Stakeholder Mediation",
    description: "Resolving conflicts and aligning interests when traditional negotiation methods reach an impasse.",
    color: "from-teal-600 to-teal-700"
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            servicesData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Independent
              <br />
              <span className="font-medium bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Strategic Advisory
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </div>
          <p className="font-inter text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Cattledog Advisory provides unconventional solutions for complex business challenges. 
            When traditional approaches fail, we chart a different path forward with clear-eyed analysis and strategic thinking.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative h-full ${
                visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`transition-all duration-500 relative z-10 ${
                  hoveredCard === index
                    ? 'absolute inset-0 w-full h-full z-20 scale-105 shadow-2xl'
                    : 'relative w-full h-full'
                }`}
                style={
                  hoveredCard === index
                    ? { boxShadow: '0 8px 40px 0 rgba(0,0,0,0.18)' }
                    : {}
                }
              >
                {/* Main Card */}
                <a 
                  href="mailto:gerald@cattledogadvisory.com?subject=Inquiry about Strategic Advisory Services&body=Hello, I would like to learn more about your services."
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-gray-100 overflow-hidden h-full block"
                >
                  {/* Gradient overlay that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-95 transition-all duration-500 rounded-2xl`}></div>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px), radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon container */}
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        {service.icon}
                      </div>
                    </div>
                    {/* Title */}
                    <h3 className="font-playfair text-2xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-500 mb-4">
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p className="font-inter text-gray-600 group-hover:text-white/90 leading-relaxed transition-all duration-500 flex-grow opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-32 group-hover:mt-4">
                      {service.description}
                    </p>
                    {/* Animated arrow that appears on hover */}
                    <div className="mt-2 group-hover:mt-6 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                      <div className="flex items-center text-white font-medium">
                        <span className="mr-2">Learn More</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </a>
                {/* Floating shadow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform scale-95 group-hover:scale-100 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200">
            <p className="font-inter text-lg text-gray-700 mb-6 max-w-2xl">
              Ready to solve problems that conventional approaches can't handle?
            </p>
            <a 
              href="mailto:gerald@cattledogadvisory.com?subject=Schedule a Consultation&body=Hello, I would like to schedule a consultation to discuss my organization's challenges and how Cattledog Advisory can help."
              className="group relative inline-block px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;