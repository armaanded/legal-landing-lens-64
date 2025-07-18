
import { Gavel, Briefcase, Users, FileText, Shield, Handshake } from 'lucide-react';

const servicesData = [
  {
    icon: <Gavel className="h-10 w-10 text-gold mb-4" />,
    title: "Strategic Advisory",
    description: "Independent analysis and guidance when conventional wisdom falls short of solving complex challenges.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-gold mb-4" />,
    title: "Crisis Management",
    description: "Clear-headed leadership and decisive action when organizations face critical turning points.",
  },
  {
    icon: <Users className="h-10 w-10 text-gold mb-4" />,
    title: "Organizational Restructuring",
    description: "Innovative approaches to realigning teams, processes, and structures for optimal performance.",
  },
  {
    icon: <FileText className="h-10 w-10 text-gold mb-4" />,
    title: "Business Transformation",
    description: "Guiding organizations through fundamental changes that require thinking beyond traditional boundaries.",
  },
  {
    icon: <Shield className="h-10 w-10 text-gold mb-4" />,
    title: "Regulatory Navigation",
    description: "Expert guidance through complex regulatory landscapes when standard approaches prove insufficient.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-gold mb-4" />,
    title: "Stakeholder Mediation",
    description: "Resolving conflicts and aligning interests when traditional negotiation methods reach an impasse.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Independent
            <br />
            <span className="font-medium">Strategic Advisory</span>
          </h2>
          <p className="font-inter text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Cattledog Advisory provides unconventional solutions for complex business challenges. When traditional approaches fail, we chart a different path forward with clear-eyed analysis and strategic thinking.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-l-4 border-gold hover:border-navy relative overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center min-h-[200px] flex flex-col justify-center items-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                
                {/* Title - visible by default, fades out on hover */}
                <h3 className="font-playfair text-xl font-medium text-gray-900 group-hover:opacity-0 transition-opacity duration-300 text-center">
                  {service.title}
                </h3>
                
                {/* Description - hidden by default, fades in on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex flex-col items-center justify-center text-center px-2">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <p className="font-inter text-gray-600 leading-relaxed text-sm text-center">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
