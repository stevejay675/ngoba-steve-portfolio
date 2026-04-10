'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.06,
      // type: 'spring',
      // stiffness: 500,
      // damping: 12,
    },
  }),
};

function SkillBox({ title, skills }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <div ref={ref} className="p-6 border-[1.5px] flex-1">
      <h2 className="text-black font-bold mb-4 text-3xl">{title}</h2>
      <div className="flex gap-6 flex-wrap">
        {skills.map((skill, i) => (
          <motion.p
            key={i}
            custom={i}
            variants={skillVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {skill}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

const SkillCategory = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="skills">
      
      <div className="max-w-7xl mx-auto">

        {/* Header — static, no animation */}
        <div className="text-center mb-16">
          <span className="text-lg font-medium text-gray-700">Explore My Top</span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-3 leading-none"
            style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)', letterSpacing: '-0.02em' }}
          >
            Skills and
            <span className="text-yellow-500 pb-4 ml-3">Tools</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <SkillBox
            title="Frontend"
            skills={["HTML5,", "CSS3,", "Tailwind CSS,", "SASS,", "JavaScript,", "TypeScript,", "React,", "React Native,", "Next.js"]}
          />
          <SkillBox
            title="Backend"
            skills={["NodeJS,", "Express,", "MongoDB,", "PostgreSQL,", "TypeScript,", "MySQL,", "React Native,", "Firebase"]}
          />
          <SkillBox
            title="Tools and Platforms"
            skills={["Figma,", "Github,", "Jira,", "Docker,", "GCP,", "Firebase,", "Clerk,", "Redis"]}
          />
        </div>

      </div>
    </section>
  );
};

export default SkillCategory;