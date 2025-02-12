export default function FounderSection() {
  return (
    <section className="w-full bg-black text-white py-16 px-8 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Bagian Teks */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold">FOUNDER</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-lg">
            Let's build mutually beneficial partnerships and bring green energy
            to the world. Thank you for entrusting me as your business partner.
          </p>
        </div>

        {/* Bagian Gambar */}
        <div className="relative">
          <img
            src="/images/founder.jpg"
            alt="Founder"
            className="w-full h-auto max-w-md mx-auto lg:ml-auto rounded-lg"
          />
          <p className="absolute bottom-4 left-4 text-white text-lg font-medium">
            Fahrul
          </p>
        </div>
      </div>
    </section>
  );
}
