import { Home, Instagram, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-300 mt-20 px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/">
              <h2 className="text-white text-2xl font-bold mb-4">
                SuperFood<span className="text-[20px]">🍃</span>
              </h2>
            </Link>

            <p className="mb-6">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd guber gren. Aenean sollici tudin lorem quis biben dum
              auci elit clita.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Home size={20} />
              <span>+1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Eighth Avenue 487, New York</span>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-gray-700 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-700 rounded"
              />
              <textarea
                placeholder="Comment"
                rows={4}
                className="w-full p-3 bg-gray-700 rounded"
              />
              <button className="w-full bg-[#00BFB3] text-white py-3 rounded hover:bg-[#00ABA0] transition-colors">
                SUBMIT
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-4">Twitter feed</h3>
            <p className="mb-6">Couldn&apos;t connect with Twitter</p>
            <div className="flex gap-4">
              <a
                className="flex items-center gap-2 hover:text-white"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
                Instagram
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
                Facebook
              </a>
              <a
                className="flex items-center gap-2 hover:text-white"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p>©2024 darakhshanshah8@gmail.com, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
