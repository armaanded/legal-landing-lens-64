
import { Gavel, Briefcase, Users, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    icon: <Gavel className="h-8 w-8 text-gold" />,
    title: "Legal Consulting",
    description: "Strategic legal advice to guide critical business decisions and minimize legal risks.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-gold" />,
    title: "Contract Review & Negotiation",
    description: "Thorough analysis and negotiation of contracts to protect your interests and ensure favorable terms.",
  },
  {
    icon: <Users className="h-8 w-8 text-gold" />,
    title: "Corporate Governance",
    description: "Expert guidance on governance structures, compliance programs, and best practices.",
  },
  {
    icon: <FileText className="h-8 w-8 text-gold" />,
    title: "Regulatory Compliance",
    description: "Comprehensive compliance solutions to navigate complex regulatory environments effectively.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header */}
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Solving
              <br />
              <span className="font-medium">Complex Legal Problems</span>
            </h2>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              LegalAdvisory is a strategic legal advisory firm. We provide market leading advice on transformational business transactions and devise solutions for high intensity legal challenges.
            </p>
          </div>
          
          {/* Right Column - Services Grid */}
          <div className="grid grid-cols-1 gap-8">
            {servicesData.map((service, index) => (
              <div 
                key={index}
                className="border-l-2 border-gray-200 pl-8 py-4 hover:border-gray-900 transition-colors duration-300"
              >
                <h3 className="font-playfair text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="font-inter text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
            
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-none font-medium"
              >
                All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
