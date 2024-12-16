'use client'

import Slider from "@/components/Slider";
import Features from "@/components/Features";
import Products from "@/components/Products";



export default function LandingPage() {

  

  return (
    <main className="min-h-screen relative overflow-hidden">

      {/* Hero Section */}
         <Slider />

 
     {/* Features Section */}
     <Features />
     
      {/* Products Section */}
      <Products />

    </main>

  );
}

