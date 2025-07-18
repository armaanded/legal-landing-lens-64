import React, { useRef, useEffect, useState } from "react";

const Contact = () => {
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
      id="contact"
      className={`transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } py-24 lg:py-32 bg-gray-50`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Get in Touch
          </h2>
          <p className="font-inter text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam nec facilisis erat. Suspendisse potenti. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div className={`transition-all duration-700 ${stagger[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            <div className={`transition-all duration-700 ${stagger[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
            </div>
            <div className={`transition-all duration-700 ${stagger[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5} placeholder="Your Message" />
            </div>
            <button type="submit" className={`w-full py-3 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition-colors transition-all duration-700 ${stagger[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
