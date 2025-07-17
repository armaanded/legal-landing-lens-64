
import { Gavel, Briefcase, Users, FileText } from 'lucide-react';

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
    <section id="services" className="py-16 lg:py-24 bg-lightgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-inter text-lg text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive legal advisory services tailored to meet the unique needs of businesses and individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-navy/5 p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">{service.title}</h3>
              <p className="font-inter text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
