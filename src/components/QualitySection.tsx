export default function QualitySection() {
  return (
    <section className="w-full bg-black text-white py-16 px-8 lg:px-24 flex flex-col lg:flex-row items-center">
      {/* Gambar di kiri */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/your-image.jpg"
          alt="Coconut Charcoal"
          className="max-w-md lg:max-w-lg"
        />
      </div>

      {/* Teks di kanan */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          High Quality of Charcoal Briquette
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Our briquette charcoal is made from{" "}
          <span className="font-semibold italic">100% coconut shell</span>,
          ensuring a{" "}
          <span className="italic">
            cleaner burn without excess odor or smoke
          </span>
          , making it perfect for indoor use. The{" "}
          <span className="italic">low moisture content</span> ensures a quick
          start time, while the <span className="italic">long burn time</span>{" "}
          means you won’t have to replace the briquettes as often, saving on
          running costs. After use, the{" "}
          <span className="italic">low ash content</span> makes it easy to
          clean, making it a practical solution for your business.
        </p>

        <p className="mt-6 text-lg text-gray-300">
          Working with us means you choose a partner who is committed to
          providing the best energy solutions, supporting environmental
          sustainability, and strengthening your business position in local and
          regional markets.
        </p>
      </div>
    </section>
  );
}
