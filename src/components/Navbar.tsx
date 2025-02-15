import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex md:gap-24 max-md:justify-between items-center h-16">
          <div className="flex items-center">
            <span className="font-semibold text-xl">Charcoal</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-gray-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("quality")}
              className="hover:text-gray-300"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-gray-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("product")}
              className="hover:text-gray-300"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("info")}
              className="hover:text-gray-300"
            >
              News
            </button>
            {/* <button
              onClick={() => scrollToSection("founder")}
              className="hover:text-gray-300"
            >
              Team
            </button> */}
            <button
              onClick={() => scrollToSection("footer")}
              className="hover:text-gray-300"
            >
              Contact
            </button>
          </div>

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

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-white absolute top-16 left-0 w-full shadow-md transition-all duration-300">
          <button
            onClick={() => scrollToSection("hero")}
            className="block py-3 px-6"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("quality")}
            className="block py-3 px-6"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block py-3 px-6"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("product")}
            className="block py-3 px-6"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("info")}
            className="block py-3 px-6"
          >
            News
          </button>
          {/* <button
            onClick={() => scrollToSection("founder")}
            className="block py-3 px-6"
          >
            Team
          </button> */}
          <button
            onClick={() => scrollToSection("footer")}
            className="block py-3 px-6 hover:bg-gray-700"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
