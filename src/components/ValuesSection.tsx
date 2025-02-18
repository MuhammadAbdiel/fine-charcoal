import { useTranslation } from "react-i18next";

export default function ValuesSection() {
  const { t } = useTranslation();

  const values = [
    {
      icon: "/icons/integrity.png",
      title: t("firstValue"),
      description: t("firstValueDesc"),
    },
    {
      icon: "/icons/commitment.png",
      title: t("secondValue"),
      description: t("secondValueDesc"),
    },
    {
      icon: "/icons/trusted.png",
      title: t("thirdValue"),
      description: t("thirdValueDesc"),
    },
    {
      icon: "/icons/credibility.png",
      title: t("fourthValue"),
      description: t("fourthValueDesc"),
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-8 lg:px-24">
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
      >
        {values.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.icon} alt={item.title} className="h-16 mb-4" />
            <h3 className="text-xl font-semibold uppercase">{item.title}</h3>
            <p className="mt-2 text-gray-300 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
