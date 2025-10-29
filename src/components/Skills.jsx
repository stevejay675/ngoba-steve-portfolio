"use client";
import React from "react";

export default function Skills() {

  return (
    <section className=" py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lg font-medium text-gray-700">
            Explore My top
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Skills and Expertise
          </h2>
        </div>

        <div className="flex justify-between items-center">
            <div className="flex-1 text-center">
                <img src="/images/frontend.png" alt="" className=""/>
                <h3>Frontend</h3>
            </div>
            <div className="flex-1 text-center">
                <img src="/images/backend.png" alt="" />
                <h3>Backend</h3>
            </div>
            <div className="flex-1 text-center">
                <img src="/images/tools-and-others.png" alt="" />
                <h3>Tools and others</h3>
            </div>
        </div>
      </div>
    </section>
  );
}