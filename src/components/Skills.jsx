import React from 'react';

const Skills = () => {
  const allSkills = [
    'HTML5', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 
    'React', 'Next.js', 'React Native', 'Bootstrap',
    'Node.js', 'Express', 'Firebase', 'MySQL',
    'Git', 'GitHub', 'Postman', 'Jira'
  ];

  return (
    <div className=" bg-white flex items-center justify-center overflow-hidden py-12">
      <div className="w-full">
<div className="text-center mb-16">
          <span className="text-lg font-medium">
            Get to know more
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Skills and expertise
          </h2>
        </div>

        {/* Scrolling Rows Container */}
        <div className="space-y-6">
          {/* Row 1 - Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...allSkills, ...allSkills, ...allSkills].map((skill, idx) => (
                <div
                  key={`left-${idx}`}
                  className="flex-shrink-0 mx-2 px-6 py-3 bg-gray-100 border border-gray-200 rounded-full text-gray-700 font-medium text-base whitespace-nowrap transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...allSkills, ...allSkills, ...allSkills].map((skill, idx) => (
                <div
                  key={`right-${idx}`}
                  className="flex-shrink-0 mx-2 px-6 py-3 bg-gray-100 border border-gray-200 rounded-full text-gray-700 font-medium text-base whitespace-nowrap hover:bg-gray-200 hover:border-gray-300 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 25s linear infinite;
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Skills;