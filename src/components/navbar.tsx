"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import { MdTranslate } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f9fbfe] py-4 px-4 shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image
            className="dark:invert"
            src="/assets/logo.svg"
            alt="Supreme Group logo"
            width={145}
            height={40}
            priority
          />

          {/* Hamburger Toggle - Only Mobile */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <RxCross2 /> : <FaBars />}
          </button>
        </div>

        {/* Right Side Navigation */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center gap-4 md:gap-4 mt-4 md:mt-0`}
        >
          <Link
            href="/#contact"
            className="bg-sky-400 hover:bg-sky-500 transition text-black font-medium py-2 px-5 rounded-full text-sm sm:text-base"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl hover:text-sky-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaLinkedin />
          </Link>

          <div className="flex items-center gap-1 text-sm text-black">
            <MdTranslate className="text-xl" />
            <span>ENG</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
