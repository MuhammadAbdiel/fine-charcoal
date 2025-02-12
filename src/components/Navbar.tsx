import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex md:gap-24 max-md:justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img src="/logo.png" alt="Logo" className="h-10 w-auto mr-2" /> */}
            <span className="font-semibold text-xl">Charcoal</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="hover:text-gray-300">
              Gallery
            </a>
            <a href="#" className="hover:text-gray-300">
              Product
            </a>
            <a href="#" className="hover:text-gray-300">
              News
            </a>
            <a href="#" className="hover:text-gray-300">
              Team
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white absolute top-16 left-0 w-full shadow-md transition-all duration-300">
          <a
            href="#"
            className="block py-3 px-6 border-b border-gray-700 hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-3 px-6 border-b border-gray-700 hover:bg-gray-700"
          >
            About Us
          </a>
          <a
            href="#"
            className="block py-3 px-6 border-b border-gray-700 hover:bg-gray-700"
          >
            Gallery
          </a>
          <a
            href="#"
            className="block py-3 px-6 border-b border-gray-700 hover:bg-gray-700"
          >
            Product
          </a>
          <a
            href="#"
            className="block py-3 px-6 border-b border-gray-700 hover:bg-gray-700"
          >
            News
          </a>
          <a
            href="#"
            className="block py-3 px-6 border-b border-gray-700 hover:bg-gray-700"
          >
            Team
          </a>
          <a href="#" className="block py-3 px-6 hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
