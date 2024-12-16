import {ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Image from 'next/image';

function Slider() {

    const images = [
        "https://images.unsplash.com/photo-1492778297155-7be4c83960c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://thumbs.dreamstime.com/b/beautiful-herbal-teas-copy-space-generative-ai-illustration-336856386.jpg",
        // "https://images.unsplash.com/photo-1587496679742-bad502958fbf",
        "https://thumbs.dreamstime.com/b/flat-lay-two-cups-herbal-tea-surrounded-various-dried-flowers-herbs-light-blue-background-left-324871859.jpg",
        "https://plus.unsplash.com/premium_photo-1730833407755-6faaac25251f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ];


    const [currentImage, setCurrentImage] = useState(0);
    const handleNext = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };
    const handlePrevious = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
    const handleDotClick = (index: number) => {
      setCurrentImage(index);
    };
    

  return (
    
    <>
    
     
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-white text-6xl md:text-7xl font-bold mb-6">
            The Art of Tea.
          </h1>
          <p className="text-white text-xl mb-10 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, agam viris at vel. Mei tollit facilisi
            et, audire nam. Rebum, te posse impetus pro.
          </p>
          <button className="bg-[#4fd1c5] text-white px-8 py-3 rounded hover:bg-[#38b2ac] transition-colors">
            VIEW FEATURES
          </button>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentImage * 100}%)`,
            }}
          >

            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0">
                <Image
                  src={image}
                  alt="hero image"
                  className="w-full h-full object-cover"
                  width={1200}
                  height={800}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-bold hover:opacity-75 transition-opacity z-20"
        >
          <ChevronLeft size={52} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-bold hover:opacity-75 transition-opacity z-20"
        >
          <ChevronRight size={52} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentImage === index ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

    
    </>
  )
}

export default Slider