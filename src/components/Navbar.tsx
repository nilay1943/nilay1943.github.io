"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-sm' : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-gray-900 text-xl font-bold hover:text-sky-600 transition-colors">
            Nilay
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-600 hover:text-sky-600 transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-gray-600 hover:text-sky-600 transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-gray-600 hover:text-sky-600 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-sky-600 transition-colors">
              Contact
            </a>
          </div>
          <button className="md:hidden text-gray-900 hover:text-sky-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 