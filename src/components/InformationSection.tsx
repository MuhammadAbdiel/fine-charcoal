export default function InformationSection() {
  const articles = [
    {
      image: "/info-1.jpg",
      title: "Indonesia Exports 1,000 tons Coconut Shell Charcoal to Sri Lanka",
      description:
        "TEMPO.CO, Trading Company or PPI, in collaboration with the Indonesian Integrated Coconut Cooperative (KKTI), exports 1,000 tons of coconut shell charcoal to Sri Lanka. “This is the ...",
    },
    {
      image: "/info-2.jpg",
      title: "Charcoal Are Constantly In Demand By The International Market",
      description:
        "Indonesia is one of the world's top producers of coconuts. In 2020, it is estimated that Indonesia produced 2.81 million tons of coconut. Besides exporting ...",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-8 lg:px-24 text-center">
      {/* Judul */}
      <h2 data-aos="fade-down" className="text-3xl sm:text-4xl font-semibold">
        EXPLORE COMPLETE INFORMATION
      </h2>
      <p
        data-aos="fade-down"
        className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto"
      >
        Find in-depth information about coconut briquette charcoal, including
        product benefits, sustainable production processes, and a guide to
        selecting high-quality briquettes.
      </p>

      {/* Grid Informasi */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-black p-4 rounded-lg">
            <div
              data-aos="fade-down"
              className="relative cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3
              data-aos="fade-down"
              className="mt-4 text-lg font-semibold text-left"
            >
              {article.title}
            </h3>
            <p data-aos="fade-down" className="mt-2 text-gray-300 text-left">
              {article.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
