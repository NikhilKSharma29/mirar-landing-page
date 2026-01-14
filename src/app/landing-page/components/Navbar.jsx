"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Btn from "./btn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Solution", href: "#solution" },
    { label: "Benefits", href: "#benefits" },
    { label: "How it Works", href: "#howitworks" },
    // { label: "Pricing", href: "#pricing" },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('header');
      if (open && nav && !nav.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              src="/images/Company Logo.png"
              alt="Company Logo"
              className="h-5 w-auto md:h-5 lg:h-5 h-2"
              style={{ maxHeight: '28px' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm md:text-base"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Btn />
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white border-t border-gray-200">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <Btn className="w-full justify-center" />
          </div>
        </div>
      </div>
    </header>
  );
}
