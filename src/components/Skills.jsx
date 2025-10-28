"use client";
import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML5", years: 6, image: "/images/html5.png" },
    { name: "CSS3", years: 6, image: "/images/css3.png" },
    { name: "JavaScript", years: 5, image: "/images/js.png" },
    { name: "Bootstrap", years: 4, image: "/images/bootstrap.png" },
    { name: "Tailwind CSS", years: 3, image: "/images/tailwind.png" },
    { name: "TypeScript", years: 3, image: "/images/ts.png" },
    { name: "Next.js", years: 3, image: "/images/nextjs.jpg" },
    { name: "React", years: 4, image: "/images/react.jpg" },
    { name: "Firebase", years: 3, image: "/images/firebase.jpg" },
    { name: "Node.js", years: 4, image: "/images/nodejs.jpg" },
    { name: "Express", years: 4, image: "/images/express.jpg" },
    { name: "React Native", years: 2, image: "/images/react-native.jpg" },
    { name: "MySQL", years: 3, image: "/images/mysql.jpg" },
    { name: "MongoDB", years: 3, image: "/images/mongodb.jpg" },
  ];

  return (
    <section className="bg-gray-50 py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-gray-200 transition-shadow"
            >
              {/* <img
                src={skill.image}
                alt={skill.name}
                className="w-8 h-8 rounded-full object-cover"
              /> */}
              <span className="font-medium text-gray-900">{skill.name}</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">
                {skill.years} {skill.years === 1 ? "year" : "years"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}