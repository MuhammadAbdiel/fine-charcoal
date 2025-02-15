export default function ValuesSection() {
  const values = [
    {
      icon: "/icons/integrity.png",
      title: "INTEGRITY",
      description:
        "Stick to high business ethics and transparency in every step, ensuring trust from partners and clients.",
    },
    {
      icon: "/icons/commitment.png",
      title: "COMMITMENT",
      description:
        "Dedicated to providing the best service, we are focused on long-term success with full support to our partners and customers.",
    },
    {
      icon: "/icons/trusted.png",
      title: "TRUSTED",
      description:
        "Maintaining a solid reputation through consistent service and fulfilling promises, we ensure every transaction runs safely and smoothly.",
    },
    {
      icon: "/icons/credibility.png",
      title: "CREDIBILITY",
      description:
        "Deliver reliable and efficient services with high standards of professionalism, providing solutions tailored to your business needs.",
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
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-300 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
