import React from 'react';
// Note: You'll need to install react-icons: npm install react-icons
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiTailwindcss, SiSass, SiNodedotjs, 
  SiIonic, SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiTypescript, SiFirebase, 
  SiPostgresql,
  SiFigma
} from 'react-icons/si';

const SkillItem = ({ icon: Icon, name, color }) => (
  <div className="flex flex-col items-center gap-3 min-w-[80px] mb-8 group">
    <Icon className={`text-3xl md:text-4xl transition-transform duration-300 `} />
    <span className="text-xs font-semibold tracking-tight text-black uppercase">
      {name}
    </span>
  </div>
);

const SkillCategory = () => {
  const tools = [
    { icon: SiHtml5, name: 'HTML', color: "orange-500" },
    { icon: SiCss3, name: 'CSS', color: "blue-500" },
    { icon: SiJavascript, name: 'JavaScript', color: "yellow-500"  },
    {icon: SiTypescript, name: 'typeScript', color: "blue-500" },
    { icon: SiReact, name: 'React', color: "blue-400"  },
    {icon: SiNextdotjs, name: 'Next.js', color: "black" },
    { icon: SiTailwindcss, name: 'Tailwind' , color: "blue-500" },
    { icon: SiSass, name: 'SASS' },
    { icon: SiReact, name: 'ReactNative', color: "blue-400"  },
    { icon: SiNodedotjs, name: 'NodeJs' , color: "green-500" },
    // { icon: SiIonic, name: 'Ionic' },
    { icon: SiExpress, name: 'ExpressJs' , color: "yellow-500" },
    { icon: SiMongodb, name: 'MongoDB', color: "green-400" },
    { icon: SiMysql, name: 'MySQL' },
    {icon: SiFirebase, name: "firebase", color: "yellow-500"},
    {icon: SiPostgresql, name: "PostgreSQL", color: "emerald-800"},
    {icon: SiFigma, name: "Figma", color: "emerald-800"}
    
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id='skills'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-lg font-medium text-gray-700">
            Explore My Top
          </span>
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Skills and Expertise
          </h2> */}

          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-3 leading-none"
            style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            Skills and 
            {/* <br className="hidden md:block"/> */}
            <span className="text-yellow-500 pb-4 ml-3">Tools</span>
          </h2>
        </div>

        {/* Icons Container */}
        {/* <div className="flex flex-wrap items-end justify-start gap-x-4 md:gap-x-7">
          {tools.map((tool) => (
            <SkillItem key={tool.name} icon={tool.icon} name={tool.name} color={tool.color || "black"} />
          ))}
        </div> */}

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className='p-6 border-[1.5px] flex-1'>
             <h2 className='text-black font-bold mb-4 text-3xl'>
              Frontend
             </h2>

             <div className='flex gap-6 flex-wrap'>
              {
                ["HTML5,", "CSS3,", "Tailwind CSS,", "SASS", "JavaScript,", "TypeScript,", "React,", "React Native,", "Next.js", ].map((skill, i) => (
                  <p key={i}>{skill}</p>
                ))
              }
             </div>
          </div>

          <div className='p-6 border-[1.5px] flex-1'>
             <h2 className='text-black font-bold mb-4 text-3xl'>
              Backend
             </h2>

             <div className='flex gap-6 flex-wrap'>
              {
                ["NodeJS,", "Express,", "MongoDB,", "PostgreSQL,", "TypeScript,", "MySQL,", "React Native,", "Firebase", ].map((skill, i) => (
                  <p key={i}>{skill}</p>
                ))
              }
             </div>
          </div>

          <div className='p-6 border-[1.5px] flex-1'>
             <h2 className='text-black font-bold mb-4 text-3xl'>
              Tools and Platforms
             </h2>

             <div className='flex gap-6 flex-wrap'>
              {
                ["Figma,", "Github,", "Jira,", "Docker,", "GCP,", "Firebase,", "Clerk,", "Redis", ].map((skill, i) => (
                  <p key={i}>{skill}</p>
                ))
              }
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCategory;