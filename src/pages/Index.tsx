
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Refs for each section
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 4;
      const sectionTops = [
        { section: null, top: heroRef.current?.offsetTop ?? 0 },
        { section: 'services', top: servicesRef.current?.offsetTop ?? 0 },
        { section: 'about', top: aboutRef.current?.offsetTop ?? 0 },
        { section: 'blog', top: blogRef.current?.offsetTop ?? 0 },
        { section: 'contact', top: contactRef.current?.offsetTop ?? 0 },
      ];
      let current = sectionTops[0].section;
      for (let i = 0; i < sectionTops.length; i++) {
        if (scrollY >= sectionTops[i].top) {
          current = sectionTops[i].section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen">
      <SEO
        title="Cattledog Advisory - Solving Problems When The Herd Cannot"
        description="Independent strategic advisory services for complex business challenges. Expert legal advisory with focus on business law, corporate governance, and strategic legal solutions."
        keywords="advisory services, business strategy, consulting, Cattledog Advisory, legal advisory, business law, corporate governance, strategic solutions"
        url="/"
        image="/images/logo.png"
        type="website"
        robots="index, follow"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Cattledog Advisory",
          "url": import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
          "logo": `${import.meta.env.VITE_SITE_URL || 'http://localhost:5173'}/images/logo.png`,
          "description": "Independent strategic advisory services for complex business challenges",
          "sameAs": [
            "https://twitter.com/CattledogAdvisory",
            "https://www.linkedin.com/company/cattledogadvisory"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "gerald@cattledogadvisory.com",
            "contactType": "customer service"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        }}
      />
      <Navbar fadeIn={showNavbar} activeSection={activeSection} heroRef={heroRef} />
      <main>
        <div ref={heroRef}><Hero onHeadlineDone={() => setShowNavbar(true)} /></div>
        <div ref={servicesRef}><Services /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={blogRef}><Blog /></div>
        <CTA />
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
