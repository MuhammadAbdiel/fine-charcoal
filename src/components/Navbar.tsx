import { useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex max-md:justify-between gap-24 items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="bg-white" width={90} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-gray-300"
              >
                {t("home")}
              </button>
              <button
                onClick={() => scrollToSection("quality")}
                className="hover:text-gray-300"
              >
                {t("aboutUs")}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="hover:text-gray-300"
              >
                {t("gallery")}
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className="hover:text-gray-300"
              >
                {t("product")}
              </button>
              <button
                onClick={() => scrollToSection("info")}
                className="hover:text-gray-300"
              >
                {t("news")}
              </button>
              <button
                onClick={() => scrollToSection("footer")}
                className="hover:text-gray-300"
              >
                {t("contact")}
              </button>
            </div>

            {/* Dropdown Bahasa di sebelah kanan */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 hover:text-gray-300 focus:outline-none"
              >
                <Globe size={20} />
                <span className="uppercase">{i18n.language}</span>
                <ChevronDown size={16} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg z-50">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("id")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Indonesian
                  </button>
                  <button
                    onClick={() => changeLanguage("ar")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
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
            {t("home")}
          </button>
          <button
            onClick={() => scrollToSection("quality")}
            className="block py-3 px-6"
          >
            {t("aboutUs")}
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block py-3 px-6"
          >
            {t("gallery")}
          </button>
          <button
            onClick={() => scrollToSection("product")}
            className="block py-3 px-6"
          >
            {t("product")}
          </button>
          <button
            onClick={() => scrollToSection("info")}
            className="block py-3 px-6"
          >
            {t("news")}
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="block py-3 px-6 hover:bg-gray-700"
          >
            {t("contact")}
          </button>
          {/* Dropdown Bahasa pada menu mobile */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 w-full px-6 py-3 hover:bg-gray-700 focus:outline-none"
            >
              <Globe size={20} />
              <span className="uppercase">{i18n.language}</span>
              <ChevronDown size={16} />
            </button>
            {isLangOpen && (
              <div className="w-full bg-white text-black rounded-md shadow-lg z-50">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("id")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Indonesian
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
