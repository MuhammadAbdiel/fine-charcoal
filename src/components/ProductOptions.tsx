import { Download } from "lucide-react";

export default function ProductOptions() {
  const products = [
    {
      image: "/superior.png",
      title: "Superior Shisha Briquette",
    },
    {
      image: "/extra.png",
      title: "Extra Shisha Briquette",
    },
    {
      image: "/premium.png",
      title: "Premium Shisha Briquette",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-8 lg:px-24 text-center">
      {/* Judul */}
      <h2 data-aos="fade-down" className="text-3xl sm:text-4xl font-semibold">
        CHARCOAL BRIQUETTE OPTIONS
      </h2>
      <p
        data-aos="fade-down"
        className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
      >
        With a reputation as a major provider of Charcoal Briquettes, we
        guarantee high quality in every product we offer. Our Charcoal Briquette
        are produced from the best natural raw materials and go through a strict
        quality control process.{" "}
        <span className="italic font-semibold">
          Click the image to see further specifications and download to see more
          details.
        </span>
      </p>

      {/* Grid Produk */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            data-aos="fade-down"
            key={index}
            className="relative cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-3 text-lg font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Button Download */}
      <div data-aos="fade-down" className="mt-10 flex justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 flex items-center gap-2 rounded-lg font-semibold transition">
          <Download size={20} />
          DOWNLOAD CATALOG
        </button>
      </div>
    </section>
  );
}
