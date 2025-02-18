import { useTranslation } from "react-i18next";

export default function InformationSection() {
  const { t } = useTranslation();

  const articles = [
    {
      image: "/info-1.jpg",
      title: t("firstNewsTitle"),
      description: t("firstNewsDesc"),
    },
    {
      image: "/info-2.jpg",
      title: t("secondNewsTitle"),
      description: t("secondNewsDesc"),
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-8 lg:px-24 text-center">
      {/* Judul */}
      <h2 data-aos="fade-down" className="text-3xl sm:text-4xl font-semibold">
        {t("newsTitle")}
      </h2>
      <p
        data-aos="fade-down"
        className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto"
      >
        {t("newsDesc")}
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
