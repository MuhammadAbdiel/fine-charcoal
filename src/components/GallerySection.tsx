import { useState } from "react";

export default function GallerySection() {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const galleryImages = [
    "/images/gallery1.jpg", // Ganti dengan path gambar
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-8 lg:px-24 text-center">
      {/* Judul */}
      <h2 className="text-3xl sm:text-4xl font-semibold">GALLERY</h2>
      <p className="mt-4 text-lg text-gray-300">
        You can view our gallery here, click to view and find the charcoal
        briquettes that suit your needs. Each image is a reflection of our
        commitment to quality and customer satisfaction.
      </p>

      {/* Grid Gambar */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden"
            onClick={() => setZoomedIndex(zoomedIndex === index ? null : index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className={`w-full h-60 object-cover rounded-lg transition-transform duration-300 ${
                zoomedIndex === index ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
