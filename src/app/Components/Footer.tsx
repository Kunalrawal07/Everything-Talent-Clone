// components/Footer.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaChevronUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverStates, setHoverStates] = useState({
    resources: false,
    getStarted: false,
    legal: false
  });

  // Animate elements on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const footerPosition = document.getElementById('footer')?.offsetTop || 0;
      
      if (scrollPosition > footerPosition - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Update hover state for section headings
  const handleHover = (section: keyof typeof hoverStates, isHovering: boolean) => {
    setHoverStates(prev => ({
      ...prev,
      [section]: isHovering
    }));
  };

  return (
    <footer id="footer" className="bg-black text-white w-full relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-pink-600 blur-3xl"></div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute right-6 top-0 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
                  p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 group"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="text-white group-hover:animate-bounce" />
      </button>

      {/* Top Section */}
      <div className={`container mx-auto px-4 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 relative z-10 
                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
        {/* Left Section (Logo and Description) */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="mb-6 flex flex-col items-center sm:items-start transform hover:scale-105 transition-transform duration-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-75 
                            group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <Image 
                  src="/Assets/footer-logo.webp" 
                  alt="Everything Talent Logo" 
                  width={150} 
                  height={113} 
                  className="mb-2 drop-shadow-lg" 
                />
              </div>
            </div>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center sm:text-left mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400'>
              Everything Talent
            </h1>
          </div>
          <p className="text-sm max-w-xs text-center sm:text-left mb-6 leading-relaxed">
            Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment.
          </p>
          <div className="flex space-x-6 mt-2 mb-6 sm:mb-0">
            {[
              { icon: FaLinkedin, color: 'hover:text-blue-400' },
              { icon: FaYoutube, color: 'hover:text-red-500' },
              { icon: FaTwitter, color: 'hover:text-blue-500' },
              { icon: FaFacebook, color: 'hover:text-blue-600' }
            ].map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section (Links Columns) */}
        <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 mt-6 sm:mt-0">
          {/* Resources Column */}
          <div 
            className="transform transition-all duration-300 hover:translate-y-[-5px]"
            onMouseEnter={() => handleHover('resources', true)}
            onMouseLeave={() => handleHover('resources', false)}
          >
            <h3 className={`font-bold mb-4 text-center sm:text-left relative inline-block
                          ${hoverStates.resources ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500' : 'text-white'}`}>
              RESOURCES
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300
                              ${hoverStates.resources ? 'w-full' : 'w-0'}`}></span>
            </h3>
            <ul className="space-y-3 text-gray-400 text-center sm:text-left">
              {['Blogs', 'Success Stories', 'Case Studies', 'Whitepapers', 'FAQs', 'Hiring Guides', 'Support'].map((item, index) => (
                <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="hover:text-white text-sm flex items-center">
                    <span className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started Column */}
          <div 
            className="transform transition-all duration-300 hover:translate-y-[-5px]"
            onMouseEnter={() => handleHover('getStarted', true)}
            onMouseLeave={() => handleHover('getStarted', false)}
          >
            <h3 className={`font-bold mb-4 text-center sm:text-left relative inline-block
                          ${hoverStates.getStarted ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500' : 'text-white'}`}>
              GET STARTED
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300
                              ${hoverStates.getStarted ? 'w-full' : 'w-0'}`}></span>
            </h3>
            <ul className="space-y-3 text-gray-400 text-center sm:text-left">
              {['Pricing', 'Hiring Solutions', 'Funded Startups', 'Free Trial', 'Contact Support', 'Request Demo', 'Trust'].map((item, index) => (
                <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="hover:text-white text-sm flex items-center">
                    <span className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div 
            className="transform transition-all duration-300 hover:translate-y-[-5px]"
            onMouseEnter={() => handleHover('legal', true)}
            onMouseLeave={() => handleHover('legal', false)}
          >
            <h3 className={`font-bold mb-4 text-center sm:text-left relative inline-block
                          ${hoverStates.legal ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500' : 'text-white'}`}>
              LEGAL
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300
                              ${hoverStates.legal ? 'w-full' : 'w-0'}`}></span>
            </h3>
            <ul className="space-y-3 text-gray-400 text-center sm:text-left">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CCPA Compliance'].map((item, index) => (
                <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="hover:text-white text-sm flex items-center">
                    <span className="opacity-0 -ml-4 mr-1 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section (Background Image and Logo) */}
      <div className="relative w-full">
        <div className="opacity-50 transition-opacity duration-500 hover:opacity-70">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
          <Image
            src="/Assets/footer-img.webp"
            alt="Footer Background"
            width={1920}
            height={300}
            layout="responsive"
            className="object-cover"
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <Link href="/">
            <span 
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text 
              hover:from-purple-500 hover:via-pink-400 hover:to-blue-400 transition-all duration-500 transform inline-block
              hover:scale-110 relative group"
            >
              EVERYTHINGTALENT.AI
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </span>
          </Link>
        </div>
      </div>
      
      <div className="text-center py-6 px-4 text-sm relative z-10 border-t border-gray-800">
        <p className="inline-block bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
          © 2025 Everything Talent Labs, LLC. All Rights Reserved Clone By Kunal.
        </p>
      </div>
    </footer>
  );
};

export default Footer;