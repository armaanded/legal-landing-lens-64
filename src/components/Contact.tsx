
import React, { useRef, useEffect, useState } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [stagger, setStagger] = useState([false, false, false, false]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Create FormData object for Netlify
    const formElement = e.target as HTMLFormElement;
    const formDataToSubmit = new FormData(formElement);
    
    // Convert FormData to URLSearchParams
    const params = new URLSearchParams();
    formDataToSubmit.forEach((value, key) => {
      params.append(key, value as string);
    });
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } py-24 lg:py-32 bg-gray-50`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Get in Touch
          </h2>
          <p className=" text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Ready to break away from conventional approaches? We're here to help you navigate complex challenges and discover strategic solutions that others might overlook. Reach out to start the conversation about how Cattledog Advisory can guide your organization to new possibilities.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form 
            className="space-y-6" 
            onSubmit={handleSubmit}
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className={`transition-all duration-700 ${stagger[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your Name"
                required
              />
            </div>
            <div className={`transition-all duration-700 ${stagger[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your Email"
                required
              />
            </div>
            <div className={`transition-all duration-700 ${stagger[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                rows={5} 
                placeholder="Your Message"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-3 bg-navy text-white font-semibold rounded hover:bg-navy/80 transition-colors transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed ${stagger[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
