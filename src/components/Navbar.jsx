'use client'
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Hire Me', href: '#hire' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`w-full z-40 transition-all duration-300 ${
        scrolled
          ? "fixed top-2 md:top-3 left-1/2 transform -translate-x-1/2 max-w-[98%] rounded-full bg-white backdrop-blur-md shadow-lg"
          : "relative bg-transparent"
      }`}>
        <div className={`${scrolled ? "px-6" : "max-w-7xl"} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="flex items-center justify-between h-20">
            {/* Logo - switches between blob+text and profile image */}
            <div className="relative shrink-0 z-30">
              {!scrolled ? (
                // Original blob + text logo (shown when not scrolled) - CENTERED
                <div className="relative w-40 h-40 flex items-center justify-center -ml-8">
                  <div className="absolute inset-0 -left-5 -top-5 rounded-full bg-[#FFAF3F]"></div>
                  <div className="relative z-10 text-4xl font-bold text-white">
                    SJ
                  </div>
                </div>
              ) : (
                // Profile image (shown when scrolled)
                <div className="cursor-pointer" onClick={() => window.location.href = '/'}>
                  <img 
                    src="/images/Me1.jpg" 
                    alt="Profile" 
                    className="w-12 h-12 rounded-full border-3 border-[#FFAF3F] object-cover"
                  />
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`${
                    activeLink === link.href 
                      ? 'text-[#FFAF3F]' 
                      : scrolled ? 'text-gray-900' : 'text-gray-900'
                  } hover:text-[#FFAF3F] transition-colors duration-200 text-sm font-medium`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/cv.pdf"
                download
                className="bg-[#FFAF3F] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#ff9f1f] transition-colors duration-200"
              >
                Download CV
              </a>
            </div>

            {/* Mobile menu button - Menu icon */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slides from left */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="px-8 pt-8 pb-6 border-b border-gray-100">
            <div className="flex  !items-center gap-2">
              <img 
                src="/images/Me1.jpg" 
                alt="Steve Jones" 
                className="w-12 h-12 rounded-full border-3 border-[#FFAF3F] object-cover mb-3"
              />
              <div className='flex flex-col justify-start'>
                <div className="text-base font-bold text-gray-900">Steve Jones</div>
              <div className="text-xs text-gray-400 mt-0.5">Frontend Developer</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block px-4 py-3.5 rounded-xl transition-all duration-200 font-medium ${
                  activeLink === link.href
                    ? 'text-[#FFAF3F]'
                    : 'text-gray-700 hover:text-[#FFAF3F]'
                }`}
                style={{
                  animation: isOpen ? `slideInLeft 0.4s ease-out ${index * 0.08}s both` : 'none'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="absolute hidden bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white">
            <a
              href="/cv.pdf"
              download
              className="block text-center bg-[#FFAF3F] text-white rounded-full px-6 py-3.5 font-semibold hover:bg-[#ff9f1f] transition-all duration-200 "
              onClick={() => setIsOpen(false)}
              style={{
                animation: isOpen ? 'slideInLeft 0.4s ease-out 0.4s both' : 'none'
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}