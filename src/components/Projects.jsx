"use client";
import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  CheckCircle,
  X,
} from "lucide-react";
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
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ project, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDrawer, setMobileDrawer] = useState(false);
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

  const hasDemo = project.demo && project.demo !== "#" && project.demo !== "";
  const hasCode = project.code && project.code !== "#" && project.code !== "";

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className="overflow-hidden transition-all duration-300 flex flex-col bg-white p-4 border border-gray-400 cursor-pointer"
        onClick={() => setMobileDrawer(true)}
      >
        <div className="relative group overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto  rounded-sm object-cover"
          />
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileDrawer && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/50 z-[9998] backdrop-blur-[2px]"
              onClick={() => setMobileDrawer(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300 
              }}
              className="md:hidden fixed bottom-0 left-0 right-0 bg-white  z-[9999] rounded-t-2xl shadow-2xl max-h-[75vh] overflow-y-auto"
            >
              {/* Drawer Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

            

              <div className="p-6 pt-2">
                <div className="flex items-start items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 pr-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm whitespace-nowrap">
                    {project.status === "completed" ? (
                      <CheckCircle2 size={18} className="text-green-600" />
                    ) : (
                      <Clock size={18} className="text-orange-500" />
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="mb-4">
                  {project.archievements.map((archievement, i) => (
                    <p className="flex gap-3 mb-3 text-xs text-gray-700" key={i}>
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{archievement}</span>
                    </p>
                  ))}
                </div>

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
                  {hasDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        hasCode ? "flex-1" : "w-full"
                      } flex items-center justify-center gap-2 text-white bg-[#e99d33] px-4 py-3 rounded-sm transition-colors font-medium text-sm`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {hasCode && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        hasDemo ? "flex-1" : "w-full"
                      } flex items-center justify-center gap-2 ${
                        hasDemo
                          ? "border-2 border-[#e99d33] text-[#e99d33] bg-transparent"
                          : "text-white bg-[#e99d33]"
                      } px-4 py-3 rounded-sm transition-colors font-medium text-sm`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Hover Popover */}
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="hidden md:block z-[9999] w-80 bg-white shadow-2xl border border-gray-200 rounded-xl overflow-visible"
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            className="fill-white [&>path:first-of-type]:stroke-gray-200"
            strokeWidth={1}
          />

          <div className="p-6">
            <div className="flex items-start items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900 pr-4">
                {project.title}
              </h3>
              <div className="flex items-center gap-1.5 text-sm whitespace-nowrap">
                {project.status === "completed" ? (
                  <>
                    <CheckCircle2 size={16} className="text-green-600" />
                  </>
                ) : (
                  <>
                    <Clock size={16} className="text-orange-500" />
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {project.fullDescription}
            </p>

            <div>
              {project.archievements.map((archievement, i) => (
                <p className="flex gap-3 mb-4 text-xs" key={i}>
                  <CheckCircle />
                  {archievement}
                </p>
              ))}
            </div>

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
              {hasDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    hasCode ? "flex-1" : "w-full"
                  } flex items-center justify-center gap-2 text-white bg-[#e99d33] px-4 py-3 rounded-sm transition-colors font-medium text-sm`}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {hasCode && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    hasDemo ? "flex-1" : "w-full"
                  } flex items-center justify-center gap-2 ${
                    hasDemo
                      ? "border-2 border-[#e99d33] text-[#e99d33] bg-transparent"
                      : "text-white bg-[#e99d33]"
                  } px-4 py-3 rounded-sm transition-colors font-medium text-sm`}
                >
                  <Github size={16} /> View Code
                </a>
              )}
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
      image: "/images/aidsync3.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
      demo: "https://dev.aidsync.io",
      code: "",
      status: "completed",
      archievements: [
        "Handled UI/UX design, ensuring a clean responsive layouts",
        "Implemented Smooth theme mode, to allow users choose whats best",
        "did the overall API integration, server side data fetching, server side actions in a robust way",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio designed with Next.js and TailwindCSS showcasing my skills and work.",
      fullDescription:
        "A sleek and responsive portfolio website featuring smooth animations, dark mode support, and optimized performance. Showcases projects, skills, and professional experience with an intuitive user interface.",
      image: "/images/portfolio2.png",
      tech: ["React", "Next.js", "TailwindCSS"],
      demo: "https://ngoba-steve-portfolio.vercel.app/",
      code: "",
      status: "completed",
      archievements: [
        "Implemented a dynamic projects display using server side data fetching techniques",
        "Implemented Smooth theme mode, to allow users choose whats best",
        "did the overall API integration, server side data fetching, server side actions in a robust way",
      ],
    },
    {
      title: "Ledgr App",
      description:
        "A productivity Expense tracking Mobile application for tracking income and expenses for individuals.",
      fullDescription:
        "Ledgr is a powerful expense tracking application with real-time synchronization, priority labeling, deadline tracking, and team collaboration features. Built with Firebase for seamless cross-device syncing.",
      image: "/images/legr.png",
      tech: [
        "React Native",
        "Expo",
        "NodeJs",
        "PostgreSQL",
        "ExpressJs",
        "Clerk",
        "Redis",
      ],
      demo: "#",
      code: "https://github.com/stevejay675/ledgr-mobile-app",
      status: "in-progress",
      archievements: [
        "created 6 screens mobile app connected with expo router, showing ui based on auth state",
        "Implemented server side(backend) rate limiting using redis on my all APIs",
        "proper data fetching, actions including all crud operations on transactions",
      ],
    },
    {
      title: "Lost2Found",
      description:
        "A lost object image matching mobile application for finding lost items using image recognition.",
      fullDescription:
        "Lost2Found is a mobile application that uses image recognition technology to help users locate lost items. It allows users to upload photos of lost objects and matches them with similar items in a database.",
      image: "/images/lost2found.png",
      tech: ["React Native", "Expo", "Firebase"],
      demo: "#",
      code: "https://github.com/stevejay675/lostImageMatchingApp",
      status: "in-progress",
      archievements: [
        "Handled app ui, structure layouts and connections showing proper",
        "Implemented Smooth theme mode, to allow users choose whats best",
        "did the overall API integration, server side data fetching, server side actions in a robust way",
      ],
    },
    {
      title: "LoopEats Wep App",
      description:
        "A modern responsive food delivery web application designed with Next.js and TailwindCSS showcasing menu, ordering and user accounts.",
      fullDescription:
        "A sleek and responsive food delivery web application featuring smooth animations, dark mode support, and optimized performance. Showcases menu items, ordering system, and user account management with an intuitive user interface.",
      image: "/images/loopeats2.png",
      tech: ["React", "Next.js", "TailwindCSS"],
      demo: "https://loopeats-web-app.vercel.app/",
      code: "",
      status: "completed",
      archievements: [
        "Handled UI/UX design, ensuring a clean responsive layouts",
        "Implemented Smooth theme mode, to allow users choose whats best",
        "did the overall API integration, server side data fetching, server side actions in a robust way",
      ],
    },
    {
      title: "QuickerFill",
      description:
        "A Chrome extension that auto-fills forms and saves time on repetitive tasks.",
      fullDescription:
        "QuickerFill is a productivity Chrome extension that automatically fills out forms and web forms with Realistic mocked data, reducing repetitive data entry tasks and saving valuable time for users.",
      image: "/images/quickerfill.png",
      tech: ["HTML5", "CSS3", "Javascript"],
      demo: "",
      code: "https://github.com/stevejay675/quickerfill-extension/tree/master",
      status: "completed",
      archievements: [
        "Handled UI/UX design, ensuring a clean responsive layouts",
        "Implemented Smooth theme mode, to allow users choose whats best",
        "did the overall API integration, server side data fetching, server side actions in a robust way",
      ],
    },
    {
      title: "Dunamis Design",
      description:
        "A figma design project for a modern IT company service booking and tech gadgets, electronics sales with user-friendly interface and responsive design.",
      fullDescription:
        "Dunamis Design is a comprehensive Figma design project that envisions a modern IT company platform. It features service booking capabilities and a tech gadgets and electronics sales section, all wrapped in a user-friendly and responsive design.",
      image: "/images/dunamis.png",
      tech: ["Figma", "UI/UX Design"],
      demo: "https://www.figma.com/design/8Evl6XuOS9g5joQqTr1woV/DunamisTech?m=draw",
      code: "",
      status: "completed",
      archievements: [
        "Handled UI/UX design, ensuring a clean responsive layouts",
        "Implemented Smooth theme mode, to allow users choose whats best",
        "did the overall API integration, server side data fetching, server side actions in a robust way",
      ],
    },
    {
      title: "LoopTech Website",
      description:
        "A modern responsive Cloud solutions company website designed with Next.js and TailwindCSS showcasing services, portfolio and team.",
      fullDescription:
        "A sleek and responsive company website featuring smooth animations, dark mode support, and optimized performance. Showcases services, portfolio, and professional team with an intuitive user interface.",
      image: "/images/looptech2.png",
      tech: ["React", "Next.js", "TailwindCSS"],
      demo: "https://luptek.com",
      code: "",
      status: "completed",
      archievements: [
        "Handled UI/UX design, ensuring a clean responsive layouts",
        "Implemented Smooth theme mode, to allow users choose whats best",
        "did the overall API integration, server side data fetching, server side actions in a robust way",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-lg font-medium text-gray-700">
            Explore My
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none"
            style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            Major
            {/* <br className="hidden md:block"/> */}
            <span className="text-yellow-500 pb-4 ml-3">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}