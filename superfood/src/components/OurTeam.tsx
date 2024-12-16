import React from 'react'
import { Facebook, Instagram, Twitter, } from "lucide-react";
import Image from 'next/image';
function OurTeam() {
  return (
   <>
    {/* Our Team Section */}
   <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-4xl text-center font-serif text-gray-900 mb-4">
                    Our Special Team
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <Image
                            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/team4-1.jpg"
                            alt="Olivia Boyd"
                            width={256} // Corresponding to w-64 (64 * 4 = 256px)
                            height={256} // Corresponding to h-64 (64 * 4 = 256px)
                            className="object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-1">Olivia Boyd</h3>
                        <p className="uppercase text-sm text-gray-600 tracking-wider mb-3">
                            Designer
                        </p>
                        <p className="text-gray-600 text-center mb-4">
                            Passionate about creating beautiful and functional designs that make
                            a difference.
                        </p>
                        <div className="flex gap-4">
                            <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/team2-1.jpg"
                            alt="Olivia Boyd"
                            width={256} // Corresponding to w-64 (64 * 4 = 256px)
                            height={256} // Corresponding to h-64 (64 * 4 = 256px)
                            className="object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-1">Jackie Brown</h3>
                        <p className="uppercase text-sm text-gray-600 tracking-wider mb-3">
                            Photographer
                        </p>
                        <p className="text-gray-600 text-center mb-4">
                            Capturing life's beautiful moments through the lens of creativity.
                        </p>
                        <div className="flex gap-4">
                            <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/team3-1.jpg"
                            alt="Olivia Boyd"
                            width={256} // Corresponding to w-64 (64 * 4 = 256px)
                            height={256} // Corresponding to h-64 (64 * 4 = 256px)
                            className="object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-1">Greg Wilson</h3>
                        <p className="uppercase text-sm text-gray-600 tracking-wider mb-3">
                            Manager
                        </p>
                        <p className="text-gray-600 text-center mb-4">
                            Leading teams to success through strategic vision and collaboration.
                        </p>
                        <div className="flex gap-4">
                            <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/team7-1.jpg"
                            alt="Olivia Boyd"
                            width={256} // Corresponding to w-64 (64 * 4 = 256px)
                            height={256} // Corresponding to h-64 (64 * 4 = 256px)
                            className="object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-1">Ruben Carpenter</h3>
                        <p className="uppercase text-sm text-gray-600 tracking-wider mb-3">
                            Photographer
                        </p>
                        <p className="text-gray-600 text-center mb-4">
                            Bringing stories to life through the art of photography.
                        </p>
                        <div className="flex gap-4">
                            <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
            </section>
   
   </>
  )
}

export default OurTeam