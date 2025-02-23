import { Facebook, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-black text-white py-10 px-8 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bagian Kiri - Informasi Kontak */}
        <div>
          <p className="text-lg font-medium">{t("footerTitle")}</p>
          <p className="mt-4 text-gray-300">
            Jl. Kesehatan, Gg Keluarga Bersama No 45, Kalimantan Barat,
            Pontianak, Indonesia.
          </p>
          <p className="mt-2 text-gray-300">+62 851 7683 1582</p>
          <p className="mt-2 text-gray-300">sales.nitrocharcoal@gmail.com</p>
        </div>

        {/* Bagian Kanan - Social Media */}
        <div className="text-right">
          <h3 className="text-lg font-medium">{t("followUs")}</h3>
          <p className="mt-2 text-gray-300">{t("followUsDesc")}</p>
          <div className="mt-4 flex justify-end space-x-4">
            <a
              href="#"
              className="p-2 border border-white rounded-full hover:bg-gray-800 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-2 border border-white rounded-full hover:bg-gray-800 transition"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        {t("copyright")}
      </div>
    </footer>
  );
}
