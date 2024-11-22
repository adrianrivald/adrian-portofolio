import Image from "next/image";
import React from "react";
import { FaBars } from "react-icons/fa";

export function Navbar() {
  return (
    // border border-neutral-100 rounded-lg shadow bg-gradient-to-r from-indigo-950 to-indigo-900
    <nav className="fixed w-full z-[99] py-8 px-24 mx-auto text-neutral-200  gap-8">
      <Image
        src="/ar.png"
        width={281}
        height={319}
        alt="logo"
        className="w-8 lg:w-16"
      />
      <ul className="hidden lg:flex flex-col items-center gap-16">
        <li className="px-6 py-2 hover:opacity-50 cursor-pointer">Home</li>
        <li className="px-6 py-2 hover:opacity-50 cursor-pointer">Profile</li>
        <li className="px-6 py-2 hover:opacity-50 cursor-pointer">Works</li>
        <li className="px-6 py-2 hover:opacity-50 cursor-pointer">
          Contact Me
        </li>
      </ul>
      <div className="block lg:hidden">
        <FaBars className="w-8 h-8" />
      </div>
    </nav>
  );
}
