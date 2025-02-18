import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function GallerySection() {
  const { t } = useTranslation();
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const galleryImages = [
    "/gallery-1.jpeg", // Ganti dengan path gambar
    "/gallery-2.png",
    "/gallery-3.png",
    "/gallery-4.png",
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-8 lg:px-24 text-center">
      {/* Judul */}
      <h2
        data-aos="fade-down"
        className="text-3xl sm:text-4xl font-semibold uppercase"
      >
        {t("gallery")}
      </h2>
      <p data-aos="fade-down" className="mt-4 text-lg text-gray-300">
        {t("galleryDesc")}
      </p>

      {/* Grid Gambar */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div
            data-aos="fade-down"
            key={index}
            className="relative cursor-pointer overflow-hidden"
            onClick={() => setZoomedIndex(zoomedIndex === index ? null : index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className={`w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-125 ${
                zoomedIndex === index ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
