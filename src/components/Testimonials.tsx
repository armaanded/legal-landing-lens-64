
const testimonials = [
  {
    quote: "The team at LegalAdvisory provided exceptional guidance during our company merger. Their strategic advice was instrumental in navigating complex negotiations.",
    author: "Sarah Johnson",
    title: "CEO, Innovate Tech",
    rating: 5
  },
  {
    quote: "I've worked with many legal advisors over my career, but none have matched the level of expertise and personalized service that LegalAdvisory delivers.",
    author: "Michael Chen",
    title: "CFO, Global Enterprises",
    rating: 5
  },
  {
    quote: "Their proactive approach to regulatory compliance saved our company from potential issues. They don't just solve problems—they prevent them.",
    author: "Rebecca Torres",
    title: "Operations Director, Nexus Corp",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-inter text-lg text-white/80 max-w-3xl mx-auto">
            Hear from our clients about their experiences working with our legal advisory team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="font-inter text-white/90 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-playfair font-semibold text-white">{testimonial.author}</p>
                <p className="font-inter text-white/70 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
