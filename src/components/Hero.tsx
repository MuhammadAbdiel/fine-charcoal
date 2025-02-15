export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.png')",
      }} // Ganti dengan path gambar
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten Hero */}
      <div
        data-aos="fade-down"
        className="relative z-10 flex flex-col justify-center items-start h-full px-8 sm:px-16 lg:px-32 text-white"
      >
        <p className="text-lg sm:text-xl text-gray-300">- About Us</p>
        <h1 className="text-4xl sm:text-6xl font-bold mt-2">
          Premium Coconut Briquette
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl text-gray-300">
          We are a trusted partner in charcoal briquette export from Indonesia,
          committed to providing professional services and high quality products
          to meet global export standards.
        </p>
      </div>
    </section>
  );
}
