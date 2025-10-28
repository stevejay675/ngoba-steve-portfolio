import React from 'react';
import { Github, Linkedin, Twitter, Mail, Book } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white" style={{ backgroundImage: 'url("/images/abstract-shape-1.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right', backgroundSize: 'contain' }} id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-12" >
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[#FFAF3F] text-lg font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Ngoba Steve Jones
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                Frontend Developer
              </h2>
              {/* <p className="text-xl text-gray-600">
                with Backend Exposure
              </p> */}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Specialized in building responsive and intuitive user interfaces with modern web technologies. 
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4 items-center">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                title='Github'
                className="w-12 h-12 rounded-full flex items-center justify-center border-2  text-gray-700 border-[#FFAF3F] hover:text-[#FFAF3F] transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                title='LinkedIn'
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center border-2  text-gray-700 border-[#FFAF3F] hover:text-[#FFAF3F] transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank"
                title='Twitter'
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center border-2  text-gray-700 border-[#FFAF3F] hover:text-[#FFAF3F] transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="mailto:your.email@example.com"
                title='Send a mail'
                className="w-12 h-12 rounded-full flex items-center justify-center border-2  text-gray-700 border-[#FFAF3F] hover:text-[#FFAF3F] transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
              <a 
                href="mailto:your.email@example.com"
                title='View Resume'
                className="w-12 h-12 rounded-full flex items-center justify-center border-2  text-gray-700 border-[#FFAF3F] hover:text-[#FFAF3F] transition-colors duration-200"
              >
                <Book size={24} />
              </a>
              <img src="/images/sh-b.png" alt="" className="w-14 h-auto"/>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-lg">
              <img 
                src="/images/hero.png" 
                alt="Developer workspace"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}