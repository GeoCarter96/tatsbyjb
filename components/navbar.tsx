'use client'
import React, { useState } from 'react';
import { BadgeDollarSign, ShieldAlert, Calendar, Menu, X, Instagram } from 'lucide-react';
import Link from 'next/link';
export default function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the mobile menu after a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  // Helper component for navigation links to ensure they close the menu
  const NavLink = ({ href, children, isButton = false }: { href: string, children: React.ReactNode, isButton?: boolean }) => (
    <a 
      href={href} 
      onClick={closeMenu}
      // Added classes for mobile menu styling (stacking vertically, padding)
      className={`
        ${isButton ? 'bg-black text-white px-6 py-2 hover:bg-[#880808] transition-all flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0' : 'hover:text-[#880808] transition-colors py-2 md:py-0'}
      `}
    >
      {children}
    </a>
  );

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-8 py-4 border-b-8 border-black bg-white sticky top-0 z-40 gap-4">
      
      {/* Logo and Mobile Toggle Button Container */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="font-black text-3xl text-black tracking-tighter uppercase flex items-center gap-2">
          <Link href="/" className="cursor-pointer transition-opacity hover:opacity-80">
  <img 
    src="tatslogo.png" 
    alt="Tats By JB Logo" 
    className="w-16 h-16 object-contain" 
  />
</Link>
       
        </div>
        
        {/* Mobile menu button (visible only on small screens) */}
        <button 
          className="md:hidden p-2 text-black hover:text-[#880808] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links Container */}
      <div 
        className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex 
          flex-col md:flex-row 
          gap-4 md:gap-8 
          items-start md:items-center 
          font-bold text-xs uppercase tracking-widest 
          w-full md:w-auto
        `}
      >
        {/* Links */}
        <NavLink href="/gallery">Gallery</NavLink>
        
        <NavLink href="/prices">
          <div className="flex items-center gap-2">
            <BadgeDollarSign size={16} /> Prices
          </div>
        </NavLink>
        
        <NavLink href="/policy">
          <div className="flex items-center gap-2">
            <ShieldAlert size={16} /> Policy
          </div>
        </NavLink>
        
        {/* Booking Button */}
        <NavLink href="/booking" isButton>
          <Calendar size={16} /> Booking
        </NavLink>

        {/* Social Media Link */}
        <div className='mt-4 md:mt-0'>
            <a 
                href="https://www.instagram.com/tatsbyjb1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#880808] transition-colors flex items-center gap-2"
                aria-label="Visit Instagram Profile"
            >
               <Instagram size={20} />  Instagram
            </a>
        </div>
        
      </div>
    </nav>
  );
}
