import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800  overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row ">
        
       {/* LEFT BRAND SECTION */}
<div className="relative p-8 md:p-16 lg:w-[35%] flex flex-col justify-between overflow-hidden group">
  
  {/* 1. The Actual Image Element */}
  <img 
    src="/images/fimage.jpg" 
    alt="Loop Tech Branding"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
  />

  {/* 2. The Dark Overlay (using brightness/opacity) */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* 3. The Content (Z-index ensures it stays on top) */}
  <div className="relative z-10 flex flex-col justify-between h-full">
    <div>
      {/* Add your Logo here if needed */}
      <p className="text-white/90 leading-relaxed text-sm md:text-base max-w-prose">
        As a Full Stack Engineer, I specialize in bridging the gap between heavy-duty backend logic and refined, high-performance user interfaces. My approach is rooted in technical rigor and architectural integrity whether it's optimizing a PostgreSQL schema for millions of records or engineering a React frontend that maintains a consistent 60fps. I don't just write code; I design systems that are durable, maintainable, and engineered to solve complex problems at their root.
      </p>
    </div>

    <div className="mt-12 pt-8 border-t border-white/20">
      <div className="flex gap-4 text-sm font-medium text-white/70">
        <a href="/privacy" className="hover:text-white hover:underline transition-colors">Download CV</a>
        <span className="opacity-50">|</span>
        <a href="/terms" className="hover:text-white hover:underline transition-colors">Connect on LinkedIn</a>
      </div>
    </div>
  </div>
</div>

        {/* RIGHT LINKS SECTION (Dark Background) */}
        <div className="p-8 md:p-16 lg:w-[65%] grid grid-cols-1 md:grid-cols-3 gap-12 border border-gray-300">
          
          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-6 text-gray-400">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary-800 shrink-0 mt-1" />
                <span className="text-sm">Buea, Cameroon</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary-800 shrink-0" />
                <span className="text-sm">stevejay675@gmail.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-primary-800 shrink-0" />
                <span className="text-sm">(+237) 653 282 022</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-primary-800 flex items-center justify-center rounded hover:bg-primary-700 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-4">
              {['Home', 'About Me', 'Download CV', 'Projects', 'Contact Me', 'Skills'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-800 text-sm flex items-center gap-2 transition-colors group">
                     
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Popular Links</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-4">
              {['Home', 'About Me', 'Download CV', 'Major Projects', 'Contact Me', 'My Skills and Expertise'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-800 text-sm flex items-center gap-2 transition-colors group">
                     
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='text-white md:hidden border-t border-white/20 pt-8 text-sm'>
           © 2025 LoopTech. All rights reserved.
          </div>

        </div>
        
      </div>
      
    </footer>
  );
}