'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Mail, Book } from 'lucide-react';

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.08, // removed the 0.6 delay — fires immediately
      type: 'spring',
      stiffness: 600,
      damping: 10,
    },
  }),
};

const imageVariants = {
  desktop: {
    hidden: { scale: 0.6, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  mobile: {
    hidden: { scale: 0.15, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.45, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
};

const icons = [
  { href: 'https://github.com/stevejay675', title: 'Github', icon: <Github size={24} /> },
  { href: 'https://linkedin.com/in/stevejay675', title: 'LinkedIn', icon: <Linkedin size={24} /> },
  { href: 'https://wa.me/+237653282022?text=', title: 'Whatsapp', icon: <MessageCircle size={24} /> },
  { href: 'mailto:stevejay675@gmail.com', title: 'Send a mail', icon: <Mail size={24} /> },
  { href: '/CV_Ngoba_Steve_Jones_Ntong.pdf', title: 'View Resume', icon: <Book size={24} /> },
];

export default function Hero() {
  return (
    <section
      className="bg-white"
      style={{ backgroundImage: 'url("/images/abstract-shape-1.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right', backgroundSize: 'contain' }}
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen pb-0 md:pb-0 pt-12">

          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[#FFAF3F] text-lg font-medium">Hello, {"I'm"}</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Ngoba Steve Jones
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                Software Engineer
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Specialized in building responsive and intuitive user interfaces with modern web technologies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4 items-center">
              {icons.map(({ href, title, icon }, i) => (
                <motion.a
                  key={title}
                  href={href}
                  title={title}
                  target={href.startsWith('mailto') || href.startsWith('/') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  custom={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2 text-gray-700 border-[#FFAF3F] hover:text-[#FFAF3F] transition-colors duration-200"
                >
                  {icon}
                </motion.a>
              ))}
              <motion.img
                src="/images/sh-b.png"
                alt=""
                className="w-14 h-auto"
                custom={icons.length}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              />
            </div>

            {/* Mobile image — pops AFTER icons */}
            <div
              className="md:hidden flex justify-center mt-4"
              // variants={imageVariants.mobile}
              // initial="hidden"
              // animate="visible"
            >
              <img
                src="/images/banner3.png"
                alt="Developer workspace"
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>

          {/* Desktop image — pops BEFORE icons (slight head start) */}
          <motion.div
            className="hidden md:flex justify-end"
            variants={imageVariants.desktop}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full max-w-lg">
              <img
                src="/images/banner3.png"
                alt="Developer workspace"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}