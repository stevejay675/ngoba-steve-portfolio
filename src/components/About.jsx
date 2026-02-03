'use client';
import React from "react";
import { Award, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function About() {

  const router = useRouter();
  return (
    <section className="bg-gray-50 py-20  relative" id="about">

        {/* <svg
        className="absolute top-0 left-0 w-full text-white"
        viewBox="0 0 500 50"
        preserveAspectRatio="none"
      >
        <path d="M0,30 Q125,0 250,30 T500,30 V0 H0 Z" fill="currentColor" />
      </svg> */}
      <div className="max-w-7xl mx-auto px-4 z-10 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lg font-medium">
            Get to know more
          </span>
          <h2 className="text-5xl md:text-5xl font-black uppercase tracking-tighter mt-3 leading-none"
            style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            About
            {/* <br className="hidden md:block"/> */}
            <span className="text-yellow-500 pb-4 ml-3">Me</span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left - Image (50% on desktop) */}
          <div className="w-full md:w-1/2 flex justify-center ">
            <img
              src="/images/meee.png"
              alt="About me"
              className="w-full h-auto object-cover grayscale border-b-6"
            />
          </div>

          {/* Right - Qualification and Description (50% on desktop) */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Qualification Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Experience Card */}
              <div className="border border-gray-400 rounded-sm p-8 flex flex-col items-center text-center space-y-2 transition-all duration-200">
                <Award size={32} className="text-[#FFAF3F]" />
                <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                <p className="text-gray-600">3+ year</p>
                <p className="text-gray-600">Full Stack Development</p>
              </div>

              {/* Education Card */}
              <div className="border border-gray-400  rounded-sm px-4 py-8 flex flex-col items-center text-center space-y-3 transition-all duration-200">
                <GraduationCap size={32} className="text-[#FFAF3F]" />
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
                <p className="text-gray-600">B.Eng in Software Engineering</p>
                <div className="flex gap-3 items-center">
                  <img src="/images/ubLogo.png" className="w-8 h-8" alt="" />
                  <p className="text-gray-600">University of Buea, cm</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a{" "}
              <span className=" font-semibold">
                software engineer{" "}
              </span> 
              with a focus on frontend development and a growing exposure to
              full-stack systems. I build modern, responsive web interfaces
              using technologies like React, Next.js, Tailwind CSS, and
              TypeScript turning clean design into functional, intuitive user
              experiences. Over time, I’ve expanded my skills into backend
              integration, cloud services, and mobile development with React
              Native.
            </p>

            <div className="flex items-center gap-3">
                <button className="py-3 px-6 rounded-full w-full md:w-fit  bg-black hover:bg-[#ff9f1f] text-white cursor-pointer transition" onClick={() => router.push('/ngoba-steve-cv.pdf')}>View my Resume</button>
                <img src="/images/sh-b.png" alt="Signature" className="w-auto h-16 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
