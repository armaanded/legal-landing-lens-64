
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-inter text-lg text-gray-700 max-w-3xl mx-auto">
            Schedule a consultation or reach out to learn more about how we can assist with your legal needs.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-inter font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-inter font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-inter font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-inter font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="bg-navy hover:bg-navy/90 text-white py-6 px-8 w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="bg-lightgray p-8 rounded-lg h-full">
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-navy">Call Us</p>
                    <p className="font-inter text-gray-700">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-navy">Email Us</p>
                    <p className="font-inter text-gray-700">info@legaladvisory.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-navy">Office Hours</p>
                    <p className="font-inter text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-playfair text-xl font-semibold text-navy mb-4">Our Location</h4>
                <div className="bg-gray-200 h-64 rounded-lg w-full">
                  {/* Map placeholder - In a real project, you'd integrate Google Maps here */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-lg">
                    <p className="text-gray-600 font-inter">123 Legal Street, Suite 500<br/>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
