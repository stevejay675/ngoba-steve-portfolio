"use client";
import React, { useState } from "react";
import { ExternalLink, Github, CheckCircle2, Clock } from "lucide-react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingArrow,
  arrow,
} from "@floating-ui/react";

function ProjectCard({ project, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOverlay, setMobileOverlay] = useState(false);
  const arrowRef = React.useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "right",
    middleware: [
      offset(12),
      flip({ fallbackPlacements: ["left", "right"] }),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { delay: { open: 100, close: 100 } });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className="overflow-hidden transition-all duration-300 flex flex-col cursor-pointer"
         onClick={() => setMobileOverlay(!mobileOverlay)}
      >
        <div 
          className="relative group"
         
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 rounded-md object-cover"
          />
          
          {/* Mobile Overlay */}
          <div
            className={`md:hidden absolute inset-0 bg-[#FFAF3F]/95 flex items-center justify-center gap-6 transition-transform duration-300 ${
              mobileOverlay ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ transformOrigin: 'right' }}
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <ExternalLink size={24} className="text-gray-800"/>
              </div>
              <span className="text-sm font-medium">Live Demo</span>
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Github size={24} className="text-gray-800"/>
              </div>
              <span className="text-sm font-medium">Code</span>
            </a>
          </div>
        </div>

        <div className="py-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap items-center gap-2 text-gray-700 text-sm">
            {project.tech.map((tech, i) => (
              <React.Fragment key={i}>
                <span className="opacity-70">{tech}</span>
                {i !== project.tech.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Hover Popover */}
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="hidden md:block z-[9999] w-96 bg-white shadow-2xl border border-gray-200 rounded-xl overflow-visible"
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            className="fill-white [&>path:first-of-type]:stroke-gray-200"
            strokeWidth={1}
          />

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 pr-4">
                {project.title}
              </h3>
              <div className="flex items-center gap-1.5 text-sm whitespace-nowrap">
                {project.status === "completed" ? (
                  <>
                    <CheckCircle2 size={16} className="text-green-600" />
                    <span className="text-green-600 font-medium">Completed</span>
                  </>
                ) : (
                  <>
                    <Clock size={16} className="text-orange-500" />
                    <span className="text-orange-500 font-medium">In Progress</span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-white bg-black hover:bg-[#e99d33] px-4 py-3 rounded-lg transition-colors font-medium text-sm"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-black hover:bg-[#FFAF3F] hover:text-white hover:border-[#FFAF3F] px-4 py-3 rounded-lg transition-colors font-medium text-sm"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "AidSync",
      description:
        "A platform that connects developers and volunteers to collaborate on impactful projects.",
      fullDescription:
        "AidSync is a comprehensive platform designed to bridge the gap between skilled developers and meaningful volunteer opportunities. Built with modern web technologies, it features real-time collaboration tools, project management dashboards, and impact tracking metrics.",
      image: "/images/project1.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
      demo: "https://aidsync.io",
      code: "https://github.com/yourusername/aidsync",
      status: "completed",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio designed with Next.js and TailwindCSS showcasing my skills and work.",
      fullDescription:
        "A sleek and responsive portfolio website featuring smooth animations, dark mode support, and optimized performance. Showcases projects, skills, and professional experience with an intuitive user interface.",
      image: "/images/project2.jpg",
      tech: ["React", "Next.js", "TailwindCSS"],
      demo: "https://yourportfolio.com",
      code: "https://github.com/yourusername/portfolio",
      status: "completed",
    },
    {
      title: "Taskify",
      description:
        "A productivity web app for managing tasks, tracking progress, and syncing across devices.",
      fullDescription:
        "Taskify is a powerful task management application with real-time synchronization, priority labeling, deadline tracking, and team collaboration features. Built with Firebase for seamless cross-device syncing.",
      image: "/images/project3.jpg",
      tech: ["React", "Firebase", "Framer Motion"],
      demo: "#",
      code: "#",
      status: "in-progress",
    },
    {
      title: "AidSync v2",
      description:
        "A platform that connects developers and volunteers to collaborate on impactful projects.",
      fullDescription:
        "AidSync is a comprehensive platform designed to bridge the gap between skilled developers and meaningful volunteer opportunities. Built with modern web technologies, it features real-time collaboration tools, project management dashboards, and impact tracking metrics.",
      image: "/images/project1.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
      demo: "https://aidsync.io",
      code: "https://github.com/yourusername/aidsync",
      status: "completed",
    },
    {
      title: "Portfolio Website v2",
      description:
        "A modern personal portfolio designed with Next.js and TailwindCSS showcasing my skills and work.",
      fullDescription:
        "A sleek and responsive portfolio website featuring smooth animations, dark mode support, and optimized performance. Showcases projects, skills, and professional experience with an intuitive user interface.",
      image: "/images/project2.jpg",
      tech: ["React", "Next.js", "TailwindCSS"],
      demo: "https://yourportfolio.com",
      code: "https://github.com/yourusername/portfolio",
      status: "completed",
    },
    {
      title: "Taskify v2",
      description:
        "A productivity web app for managing tasks, tracking progress, and syncing across devices.",
      fullDescription:
        "Taskify is a powerful task management application with real-time synchronization, priority labeling, deadline tracking, and team collaboration features. Built with Firebase for seamless cross-device syncing.",
      image: "/images/project3.jpg",
      tech: ["React", "Firebase", "Framer Motion"],
      demo: "#",
      code: "#",
      status: "in-progress",
    },
  ];

  return (
    <section className="bg-white py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-lg font-medium text-gray-700">
            Explore My Major
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}