"use client";

import Image from 'next/image';
import {
    Star,
    Plus,
    Minus,
    ChevronDown,
    Menu,
    X,
    ShoppingCart,
    Search,
  } from "lucide-react";
import Link from "next/link";
  import React, { useState } from "react";
import Footer from '@/components/Footer';
  export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () =>
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    return (
      <>
        <header className="border-b relative">
          <div className="max-w-6xl mx-auto px-4 py-4 md:pl-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href={"./"}>
                
                <h1 className="text-xl md:text-2xl font-bold">SuperFood🍃</h1>
                </Link>
               
              </div>
  
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href={"./"} className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link href={"./about"} className="text-gray-600 hover:text-gray-900">About</Link>
                <Link href={"/contact"} className="text-gray-600 hover:text-gray-900">Get in Touch</Link>
                {/* <Link href={"/detail"} className="text-gray-600 hover:text-gray-900">Detail</Link> */}

                {/* <a className="text-gray-600 hover:text-gray-900">Blog</a>
                <a className="text-gray-600 hover:text-gray-900">Elements</a>
                <a className="text-gray-600 hover:text-gray-900">Shop</a> */}
              </nav>
  
              {/* Right side icons */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </div>
                <button className="hidden md:block">
                  <Search className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
  
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <nav className="md:hidden absolute top-full left-0 right-0 bg-white border-b z-50">
                <div className="flex flex-col px-4 py-2">
                  <Link href={"./"} className="py-2 text-gray-600 hover:text-gray-900">Home</Link>
                  <Link href={"./about"} className="py-2 text-gray-600 hover:text-gray-900">About</Link>
                  <Link href={"/contact"} className="py-2 text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                  {/* <Link href={"/detail"} className="py-2 text-gray-600 hover:text-gray-900">Detail</Link> */}
                  {/* <a className="py-2 text-gray-600 hover:text-gray-900">
                    Elements
                  </a>
                  <a className="py-2 text-gray-600 hover:text-gray-900">Shop</a> */}
                </div>
              </nav>
            )}
          </div>
        </header>
  
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-sm text-gray-500 mb-4 md:mb-8 overflow-x-auto whitespace-nowrap">
            <Link href={"./"}>
            <span className="hover:text-gray-700 cursor-pointer">HOME</span>
            </Link>
           
            <span className="mx-2">/</span>
            <span className="hover:text-gray-700 cursor-pointer">SHOP</span>
            <span className="mx-2">/</span>
            <span className="hover:text-gray-700 cursor-pointer">TEA</span>
            <span className="mx-2">/</span>
            <span className="text-gray-700">MOCK UPS</span>
          </div>
        </div>
  
        <main className="max-w-6xl mx-auto px-4 py-4 md:py-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
            <Image
  src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea2.jpg"
  alt="Coffee cup mockup"
  className="w-full rounded-lg"
  width={800} // Set your desired width
  height={600} // Set your desired height
  priority // Ensures the image loads quickly (optional)
/>
            </div>
  
            {/* Product Details */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Mock ups
              </h1>
  
              <div className="text-3xl md:text-4xl font-bold mb-4">$190.00</div>
  
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 md:w-5 h-4 md:h-5 text-gray-300"
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-500">
                  (1 CUSTOMER REVIEW)
                </span>
              </div>
  
              {/* Review */}
              <p className="text-sm md:text-base text-gray-600 mb-6">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire.
              </p>
  
              {/* Quantity Selector */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <div className="flex items-center border rounded">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center border-x p-2"
                    min="1"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="p-2 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
  
                <button className="w-full sm:w-auto bg-teal-500 text-white px-8 py-2 rounded hover:bg-teal-600">
                  ADD TO CART
                </button>
              </div>
  
              {/* Product Meta */}
              <div className="text-sm text-gray-600 mb-6">
                <p>SKU: PR202</p>
                <p>Category: Tea</p>
              </div>
  
              {/* Description */}
              <div className="border-t pt-4">
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-base md:text-lg font-medium">
                    Description
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isDescriptionOpen ? "rotate-180" : ""}`}
                  />
                </button>
  
                {isDescriptionOpen && (
                  <p className="mt-4 text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat. At vero eos et accusam et justo duo dolores et
                    ea rebum. Stet clita kasd  gubergren.
                  </p>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
  
      </>
    );
  }
