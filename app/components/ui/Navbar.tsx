
"use client";

import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import Logo from "../navbar/Logo";
import NavMenu from "../navbar/NavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-gray-primary relative z-50 flex items-center justify-between px-2 md:px-10 py-3
      backdrop-blur-md
      border-b border-gray-100
      shadow-[0_2px_15px_rgba(0,0,0,0.06)]">


      {/* Logo */}
      <a href="/" className="">
        <Logo />
      </a>

      {/* Menu Button */}
      <button
        className="cursor-pointer p-2 rounded-xl
          text-gray-700
          transition-all duration-300
          hover:bg-brand-navy-primary/10
          hover:shadow-[0_4px_12px_rgba(137,129,164,0.18)]
          active:scale-95"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <LuMenu size={32} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        
        <div className="absolute left-0 top-full z-50 w-full
        bg-brand-gray-primary text-brand-navy-primary border-gray-700
          text-lg md:text-xl font-medium
          shadow-[0_12px_30px_rgba(0,0,0,0.2)]
          animate-slide-down">

          <NavMenu setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
