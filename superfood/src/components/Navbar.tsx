'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              SuperFood<span className="text-sm">🍃</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex font-bold items-center space-x-8">
            <Link href="/" className="text-white hover:opacity-75 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="text-white hover:opacity-75 transition-opacity">
              About
            </Link>
            <Link href="/contact" className="text-white hover:opacity-75 transition-opacity">
              Get in Touch
            </Link>
            {/* <Link href="/detail" className="text-white hover:opacity-75 transition-opacity">
              Detail
            </Link> */}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:opacity-75 transition-opacity relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-white text-[#40BFB4] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </button>
            <button className="text-white hover:opacity-75 transition-opacity">
              <Search size={24} />
            </button>

            {/* Hamburger Menu */}
            <button
              className="md:hidden text-white hover:opacity-75 transition-opacity"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#40BFB4] z-50 transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-white text-2xl font-bold">
            SuperFood<span className="text-sm">🍃</span>
          </Link>
          <button
            className="text-white hover:opacity-75 transition-opacity"
            onClick={toggleSidebar}
          >
            <X size={24} />
          </button>
        </div>

        <div className="mt-8 flex flex-col space-y-4 px-6">
          <Link href="/" className="text-white hover:opacity-75 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="text-white hover:opacity-75 transition-opacity">
            About
          </Link>
          <Link href="/contact" className="text-white hover:opacity-75 transition-opacity">
            Get in Touch
          </Link>
          {/* <Link href="/detail" className="text-white hover:opacity-75 transition-opacity">
            Detail
          </Link> */}
        </div>
      </div>
    </div>
  );
}
