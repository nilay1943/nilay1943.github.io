"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github?: string;
}

function ProjectCard({ title, description, technologies, image, link, github }: ProjectProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] hover:-translate-y-2 border border-gray-100">
      <div className="h-full">
        <div className="aspect-video relative overflow-hidden bg-sky-50">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="eager"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/10 to-sky-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(56,189,248,0.05)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="p-6 lg:p-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
              {title}
            </h3>
            <div className="flex gap-2">
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 -m-2"
              >
                <span className="sr-only">Visit project</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 -m-2"
                >
                  <span className="sr-only">View GitHub repository</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
              )}
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm sm:text-base lg:text-lg bg-sky-50 text-sky-600 rounded-full border border-sky-100 hover:bg-sky-100 hover:border-sky-200 transition-all duration-300 group-hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "ShouldIBuyIt",
      description: "A web application that helps users make informed purchasing decisions by analyzing product reviews and providing insights. Built with modern web technologies and a focus on user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      image: "/images/shouldibuyit.png",
      link: "https://shouldibuyit.site",
      github: "https://github.com/nilay1943/ShouldIBuyIt"
    },
    {
      title: "Project 2",
      description: "A brief description of your second project",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      image: "/images/project2.jpg",
      link: "https://project2.com"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900">Live Projects</h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">A collection of my recent work showcasing my expertise in full-stack development</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
} 