import React from 'react'
import {Star} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

function Products() {
  return (
    <>
    
    
         {/* Products Section */}
         <div className="pt-8">
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600">Discover our collection of premium teas</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">

          {/* <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <img
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea1-300x300.jpg"
                alt="Flowering tea product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">Flowering tea</h3>

            <div className="text-gray-500 mb-2">Rating: 5/5</div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <img
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea2-300x300.jpg"
                alt="Mock ups product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">Mock ups</h3>
            <div className="text-gray-500 mb-2">Rating: 4.5/5</div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <img
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea3-300x300.jpg"
                alt="Fruit tea product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">Fruit tea</h3>
            <div className="text-gray-500 mb-2">Rating: 4/5</div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <img
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea4-300x300.jpg"
                alt="Green tea product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">Green tea</h3>
            <div className="text-gray-500 mb-2">Rating: 4.8/5</div>
            <span className="text-xl font-semibold">$190.00</span>
          </div> */}
          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <Image
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea1-300x300.jpg"
                alt="Flowering tea product"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <Link href={"/detail"}>
            <h3 className="text-lg font-medium mb-2 hover:underline">Flowering tea</h3>
            </Link>
          
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#4A9C9C] fill-[#4A9C9C]"
                />
              ))}
            </div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <Image
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea2-300x300.jpg"
                alt="Mock ups product"
                width={300}
                height={300}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <Link href={"/detail"}>
            <h3 className="text-lg font-medium mb-2 hover:underline">Mock ups</h3>
            </Link>
            
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#4A9C9C] fill-[#4A9C9C]"
                />
              ))}
            </div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <Image
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea3-300x300.jpg"
                alt="Fruit tea product"
                width={300} // Set image width
                height={300} // Set image height
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <Link href={"/detail"}>
            <h3 className="text-lg font-medium mb-2 hover:underline">Fruit tea</h3>
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#4A9C9C] fill-[#4A9C9C]"
                />
              ))}
            </div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <Image
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea4-300x300.jpg"
                alt="Green tea product"
                width={300} // Set image width
                height={300} // Set image height
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <Link href={"/detail"}>
            <h3 className="text-lg font-medium mb-2 hover:underline">Green tea</h3>
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#4A9C9C] fill-[#4A9C9C]"
                />
              ))}
            </div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>
          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4 hover:underline">
              <Image
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea5-300x300.jpg"
                alt="Flowering tea product"
                width={300} // Set image width
                height={300} // Set image height
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <Link href={"/detail"}>
            <h3 className="text-lg font-medium mb-2 hover:underline">Black tea</h3>
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#4A9C9C] fill-[#4A9C9C]"
                />
              ))}
            </div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4 hover:underline">
              <Image
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea6-300x300.jpg"
                alt="Mock ups product"
                width={300} // Set image width
                height={300} // Set image height
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <Link href={"/detail"}>
            <h3 className="text-lg font-medium mb-2 hover:underline">Herbal tea</h3>
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#4A9C9C] fill-[#4A9C9C]"
                />
              ))}
            </div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4 hover:underline">
              <Image
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea7-300x300.jpg"
                alt="Fruit tea product"
                width={300} // Set image width
                height={300} // Set image height
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <Link href={"/detail"}>
            <h3 className="text-lg font-medium mb-2 hover:underline">Metal box tea</h3>
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#4A9C9C] fill-[#4A9C9C]"
                />
              ))}
            </div>
            <span className="text-xl font-semibold ">$190.00</span>
          </div>

          <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg p-4">
            <div className="w-full aspect-square mb-4">
              <Image
                src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea8-300x300.jpg"
                alt="Green tea product"
                width={300} // Set image width
                height={300} // Set image height
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <Link href={"/detail"}>
            <h3 className="text-lg font-medium mb-2 hover:underline">Blueberry tea</h3>
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#4A9C9C] fill-[#4A9C9C]"
                />
              ))}
            </div>
            <span className="text-xl font-semibold">$190.00</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products