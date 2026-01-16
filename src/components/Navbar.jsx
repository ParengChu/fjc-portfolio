
import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white/80 backdrop-blur-md py-4 border-neutral-200" : "bg-transparent py-6 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-black tracking-tighter cursor-pointer text-neutral-900"
        >
          FUSEN<span className="text-indigo-600">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Projects', 'Experience', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
             onClick={() => scrollToSection('contact')}
             className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-bold rounded-full hover:bg-neutral-800 transition-colors"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};
