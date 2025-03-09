"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Innovator",
  "Code Craftsman"
];

export default function Intro() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState(roles[0].substring(0, 0));
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText === currentRole) {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
    }
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-white relative transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layers */}
      <div className={`absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}`}></div>
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_50%)]`}></div>
      
      {/* Glass effect overlay */}
      <div className={`absolute inset-0 bg-black/[0.05] transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
      
      {/* Subtle reflection patterns */}
      <div className={`absolute inset-0 bg-gradient-to-br from-black/[0.03] via-transparent to-black/[0.03] opacity-100 transition-opacity duration-500`}></div>
      <div className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(0,0,0,0.04)_50%,transparent_100%)] opacity-100 transition-opacity duration-500`}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          <div className="flex-1 text-center md:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-gray-900 transition-all duration-500 hover:scale-105">
              Hi, I'm <span className="text-sky-600 hover:text-sky-700 transition-colors duration-300">Nilay</span>
            </h1>
            <div className="h-[2.5rem] sm:h-[3rem] lg:h-[3.5rem] mb-8">
              <p className="text-lg sm:text-2xl lg:text-3xl text-gray-600">
                <span className="inline-block min-w-[20ch]">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-sky-500 text-white hover:bg-sky-600 px-6 py-3 text-base sm:text-lg lg:text-xl rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-sky-500 text-sky-500 hover:bg-sky-50 px-6 py-3 text-base sm:text-lg lg:text-xl rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[28rem] lg:h-[28rem] transition-all duration-500 hover:scale-105">
              <div className={`absolute inset-0 bg-sky-100 rounded-full opacity-20 animate-pulse transition-opacity duration-500 ${isHovered ? 'opacity-30' : ''}`}></div>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Nilay's profile picture"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 28rem"
                  loading="eager"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 