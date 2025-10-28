import React from "react";
import { Award, GraduationCap } from "lucide-react";

export default function About() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left - Image (50% on desktop) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/me3.jpg"
              alt="About me"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right - Qualification and Description (50% on desktop) */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Qualification Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Experience Card */}
              <div className="border border-gray-500 rounded-2xl p-8 flex flex-col items-center text-center space-y-2 transition-all duration-200">
                <Award size={32} className="text-[#FFAF3F]" />
                <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                <p className="text-gray-600">3+ year</p>
                <p className="text-gray-600">Frontend Development</p>
              </div>

              {/* Education Card */}
              <div className="border border-gray-500 rounded-2xl px-4 py-8 flex flex-col items-center text-center space-y-3 transition-all duration-200">
                <GraduationCap size={32} className="text-[#FFAF3F]" />
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
                <p className="text-gray-600">B.Eng in Software Engineering</p>
                <p className="text-gray-600">University of Buea</p>
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
              Native. I enjoy solving real problems through code, learning
              continuously, and collaborating on projects that blend design,
              logic, and purpose.
            </p>

            <div className="flex items-center gap-2">
                <button className="py-3 px-6 rounded-full bg-primary text-white">View my Resume</button>
                <img src="/images/sh.png" alt="" className="w-14 h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
