'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#');

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' }
  ];

  // Logic for scroll transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`w-full  transition-all duration-300 ${
        scrolled
          ? "fixed z-[100] top-2 md:top-3 left-1/2 transform -translate-x-1/2 max-w-[98%] rounded-full bg-black text-white backdrop-blur-md shadow-lg"
          : "relative bg-white"
      }`}>
        <div className={`${scrolled ? "px-6" : "max-w-7xl"} mx-auto px-6 sm:px-6 lg:px-8`}>
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO - UNTOUCHED */}
            <div className="relative shrink-0 z-[90]">
              {!scrolled ? (
                <div className="relative w-30 h-30 md:w-40 md:h-40 flex items-center justify-center -ml-8">
                  <div className="absolute inset-0 -left-5 -top-5 rounded-full bg-yellow-500"></div>
                  <div className="relative z-10 text-4xl font-bold text-white uppercase">SJ</div>
                </div>
              ) : (
                <div className="cursor-pointer" onClick={() => window.location.href = '/'}>
                  <img 
                    src="/images/Me1.jpg" 
                    alt="Profile" 
                    className="w-12 h-12 rounded-full border-3 border-[#FFAF3F] object-cover"
                  />
                </div>
              )}
            </div>

            {/* DESKTOP NAV - UNTOUCHED */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`${
                    activeLink === link.href 
                      ? 'text-[#FFAF3F]' 
                      : scrolled ? 'text-white' : 'text-gray-900'
                  } hover:text-[#FFAF3F] transition-colors duration-200 md:text-sm font-medium`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/ngoba-steve-cv.pdf"
                target="_blank"
                className="bg-yellow-500 text-white rounded-full px-6 py-2 font-semibold hover:bg-[#ff9f1f] transition-colors duration-200"
              >
                Download CV
              </a>
            </div>

            {/* MOBILE TRIGGER - SWAPPING ICON DYNAMICALLY */}
            <div className="md:hidden z-[110]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md focus:outline-none transition-colors ${
                  (scrolled ? 'text-white' : 'text-gray-900')
                }`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* OPTION 2: LIQUID REVEAL OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="liquid-menu"
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-yellow-500 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Texture Detail */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Staggered Navigation Links */}
            <div className="flex flex-col items-start gap-12 z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.6, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="group relative flex items-center gap-6 text-5xl md:text-7xl font-black text-black uppercase tracking-tighter"
                  >
                    {/* <span className="text-sm font-mono opacity-30 mt-4 group-hover:opacity-100 transition-opacity">0{index + 1}</span> */}
                    <span className="group-hover:translate-x-4 transition-transform duration-500 group-hover:italic">
                      {link.name}
                    </span>
                    <ArrowUpRight size={48} className="opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom Footer for Mobile Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 flex flex-col items-center gap-6"
            >
              <div className="h-[1px] w-full bg-black/20" />
              <div className="flex gap-8 font-mono text-xs text-black/60 tracking-widest uppercase">
              <a href="/ngoba-steve-cv.pdf" target="_blank" className="underline transition-colors">Download my CV</a>
                <a href="" target='_blank' className='underline transition-colors'>Github</a>
                <a href="#linkedin" className='underline transition-colors'>LinkedIn</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}