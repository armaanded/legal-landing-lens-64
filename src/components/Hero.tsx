
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = ({ onHeadlineDone }) => {
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showBold, setShowBold] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // The text before the bold part
  const line1 = "Solving problems when";
  const line2 = "the herd cannot";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setFadeIn(true); // Start fade-in
    let i = 0;
    let j = 0;
    setTypedText("");
    setShowBold(false);
    setShowScroll(false);
    setShowButton(false);
    // Type line 1
    function typeLine1() {
      if (i < line1.length) {
        setTypedText(line1.slice(0, i + 1));
        i++;
        setTimeout(typeLine1, 40);
      } else {
        setTypedText(line1 + "\n");
        setTimeout(typeLine2, 400); // Pause before line 2
      }
    }
    // Type line 2
    function typeLine2() {
      if (j < line2.length) {
        setTypedText(line1 + "\n" + line2.slice(0, j + 1));
        j++;
        setTimeout(typeLine2, 40);
      } else {
        setTypedText(line1 + "\n" + line2);
        setShowBold(true);
        setTimeout(() => {
          setShowScroll(true);
          setShowButton(true);
          if (onHeadlineDone) {
            console.log('onHeadlineDone called');
            onHeadlineDone();
          }
        }, 300);
      }
    }
    setTimeout(typeLine1, 300); // Fade-in delay
    // eslint-disable-next-line
  }, []);

  // Split lines for rendering
  const lines = typedText.split("\n");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-light text-white mb-8 leading-tight transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          {lines[0]}
          {lines.length > 1 && <><br />{showBold ? <span className="font-medium">{lines[1]}</span> : lines[1]}</>}
        </h1>
        <div className={`mt-16 transition-opacity duration-700 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <a href="mailto:gerald@cattledogadvisory.com?subject=Schedule a Consultation&body=Hello, I would like to schedule a consultation to discuss how Cattledog Advisory can help solve my organization's challenges.">
            <Button 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 font-medium rounded-none"
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </a>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-all duration-700
          ${showScroll && !scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
        `}
      >
        <div className="w-px h-16 bg-white/50 mx-auto mb-4 subtle-bounce"></div>
        <p className="text-sm font-light tracking-wider">SCROLL</p>
      </div>
    </section>
  );
};

export default Hero;
