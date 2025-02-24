import { Facebook, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const whatsappNumberOne = "+6289515499962";
  const whatsappNumberTwo = "+6285179889913";
  const whatsappLinkOne = `https://wa.me/${whatsappNumberOne}`;
  const whatsappLinkTwo = `https://wa.me/${whatsappNumberTwo}`;

  return (
    <footer className="w-full bg-black text-white py-10 px-8 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bagian Kiri - Informasi Kontak */}
        <div className="flex flex-col">
          <p className="text-lg font-medium">{t("footerTitle")}</p>
          <p className="mt-4 text-gray-300">
            Ruko Canadian Broadway Kota Wisata Cibubur, Jalan Canadian Broadway
            Blok Cbb No. 10, Limus Nunggal, Limusnunggal, Cileungsi
          </p>
          <a
            href={whatsappLinkOne}
            target="_blank"
            className="mt-2 text-gray-300"
          >
            +62 895 1549 9962 : Admin 1
          </a>
          <a
            href={whatsappLinkTwo}
            target="_blank"
            className="mt-2 text-gray-300"
          >
            +62 851 7988 9913 : Admin 2
          </a>
          <a
            href="mailto:sales@finecharcoal.com"
            target="_blank"
            className="mt-2 text-gray-300"
          >
            sales@finecharcoal.com
          </a>
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
