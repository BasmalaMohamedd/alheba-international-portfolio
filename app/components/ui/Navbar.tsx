
"use client";

import React, { useState, useRef, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import Logo from "../navbar/Logo";
import NavMenu from "../navbar/NavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 w-full bg-brand-gray-primary z-50 flex items-center justify-between px-2 md:px-10 py-3
      backdrop-blur-md border-b border-gray-100
      shadow-[0_2px_15px_rgba(0,0,0,0.06)]"
    >
      {/* Logo */}
      <a href="/">
        <Logo />
      </a>

      {/* Menu Button */}
      <button
        className="cursor-pointer p-2 rounded-xl text-gray-700
        transition-all duration-300 hover:bg-brand-navy-primary/10
        active:scale-95"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <LuMenu size={32} />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute left-0 top-full z-50 w-full
          bg-brand-gray-primary text-brand-navy-primary
          text-lg md:text-xl font-medium
          shadow-[0_12px_30px_rgba(0,0,0,0.2)]

          transition-all duration-300 ease-in-out

          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-3 invisible pointer-events-none"
          }
        `}
      >
        <NavMenu setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
