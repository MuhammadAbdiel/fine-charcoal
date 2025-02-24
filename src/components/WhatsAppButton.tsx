import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const whatsappNumberOne = "+6289515499962";
  const whatsappNumberTwo = "+6285179889913";
  const whatsappLinkOne = `https://wa.me/${whatsappNumberOne}`;
  const whatsappLinkTwo = `https://wa.me/${whatsappNumberTwo}`;

  return (
    <div className="fixed bottom-6 right-6">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-transparent text-white px-3 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          {/* Label "Contact Us" */}
          <span className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full shadow-md">
            {t("contactUs")}
          </span>

          {/* Ikon WhatsApp */}
          <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full">
            <MessageCircle size={24} />
          </div>
        </button>
        {isOpen && (
          <div className="absolute -top-20 right-10 mt-2 w-32 bg-white text-black rounded-md shadow-lg z-50">
            <a
              href={whatsappLinkOne}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-2 py-1 hover:bg-gray-100 rounded-md"
            >
              Admin 1
            </a>
            <a
              href={whatsappLinkTwo}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-2 py-1 hover:bg-gray-100 rounded-md"
            >
              Admin 2
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
