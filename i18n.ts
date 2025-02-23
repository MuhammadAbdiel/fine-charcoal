import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      contactUs: "Contact Us",
      home: "Home",
      aboutUs: "About Us",
      gallery: "Gallery",
      news: "News",
      product: "Product",
      contact: "Contact",
      heroTitle: "Premium Coconut Briquette",
      heroDesc:
        "We are a trusted partner in charcoal briquette export from Indonesia, committed to providing professional services and high quality products to meet global export standards.",
      aboutTitle: "High Quality of Charcoal Briquette",
      aboutFirstPar:
        "Our briquette charcoal is made from 100% coconut shell, ensuring a cleaner burn without excess odor or smoke, making it perfect for indoor use. The low moisture content ensures a quick start time, while the long burn time means you won't have to replace the briquettes as often, saving on running costs. After use, the low ash content makes it easy to clean, making it a practical solution for your business.",
      aboutSecondPar:
        "Working with us means you choose a partner who is committed to providing the best energy solutions, supporting environmental sustainability, and strengthening your business position in local and regional markets.",
      firstValue: "Integrity",
      secondValue: "Commitment",
      thirdValue: "Trusted",
      fourthValue: "Credibility",
      firstValueDesc:
        "Stick to high business ethics and transparency in every step, ensuring trust from partners and clients.",
      secondValueDesc:
        "Dedicated to providing the best service, we are focused on long-term success with full support to our partners and customers.",
      thirdValueDesc:
        "Maintaining a solid reputation through consistent service and fulfilling promises, we ensure every transaction runs safely and smoothly.",
      fourthValueDesc:
        "Deliver reliable and efficient services with high standards of professionalism, providing solutions tailored to your business needs.",
      galleryDesc:
        "You can view our gallery here, click to view and find the charcoal briquettes that suit your needs. Each image is a reflection of our commitment to quality and customer satisfaction.",
      productTitle: "CHARCOAL BRIQUETTE OPTIONS",
      productDesc:
        "With a reputation as a major provider of Charcoal Briquettes, we guarantee high quality in every product we offer. Our Charcoal Briquette are produced from the best natural raw materials and go through a strict quality control process.",
      ctaProduct:
        "Click the image to see further specifications and download to see more details.",
      firstProduct: "Superior Shisha Briquette",
      secondProduct: "Extra Shisha Briquette",
      thirdProduct: "Premium Shisha Briquette",
      downloadCatalog: "DOWNLOAD CATALOG",
      newsTitle: "EXPLORE COMPLETE INFORMATION",
      newsDesc:
        "Find in-depth information about coconut briquette charcoal, including product benefits, sustainable production processes, and a guide to selecting high-quality briquettes.",
      firstNewsTitle:
        "Indonesia Exports 1,000 tons Coconut Shell Charcoal to Sri Lanka",
      firstNewsDesc:
        "TEMPO.CO, Trading Company or PPI, in collaboration with the Indonesian Integrated Coconut Cooperative (KKTI), exports 1,000 tons of coconut shell charcoal to Sri Lanka. “This is the ...",
      secondNewsTitle:
        "Charcoal Are Constantly In Demand By The International Market",
      secondNewsDesc:
        "Indonesia is one of the world's top producers of coconuts. In 2020, it is estimated that Indonesia produced 2.81 million tons of coconut. Besides exporting ...",
      footerTitle:
        "Entrust Global Partnership to Us, Trusted Exporter of Coconut Briquette Charcoal from Indonesia",
      followUs: "Follow Us",
      followUsDesc:
        "Follow us on social media, and some updates about company information",
      copyright:
        "Copyright © 2025 Indonesian Coconut Charcoal Briquette Exporter for Shisha & BBQ. All Rights Reserved.",
      address:
        "Kesehatan Street, Keluarga Bersama Alley Number 45, West Kalimantan, Pontianak, Indonesia.",
    },
  },
  id: {
    translation: {
      contactUs: "Hubungi Kami",
      home: "Beranda",
      aboutUs: "Tentang Kami",
      gallery: "Galeri",
      news: "Berita",
      product: "Produk",
      contact: "Kontak",
      heroTitle: "Briket Kelapa Premium",
      heroDesc:
        "Kami adalah mitra terpercaya dalam ekspor briket arang dari Indonesia, berkomitmen untuk memberikan layanan profesional dan produk berkualitas tinggi untuk memenuhi standar ekspor global.",
      aboutTitle: "Kualitas Tinggi Briket Arang",
      aboutFirstPar:
        "Briket arang kami terbuat dari 100% cangkang kelapa, memastikan pembakaran yang lebih bersih tanpa bau atau asap berlebih, sehingga cocok untuk digunakan di dalam ruangan. Kandungan air yang rendah memastikan waktu start yang cepat, sementara waktu bakar yang lama berarti Anda tidak perlu sering mengganti briket, menghemat biaya operasional. Setelah digunakan, kandungan abu yang rendah membuatnya mudah dibersihkan, menjadikannya solusi yang praktis untuk bisnis Anda.",
      aboutSecondPar:
        "Bekerja dengan kami berarti Anda memilih mitra yang berkomitmen untuk memberikan solusi energi terbaik, mendukung keberlanjutan lingkungan, dan memperkuat posisi bisnis Anda di pasar lokal dan regional.",
      firstValue: "Integritas",
      secondValue: "Komitmen",
      thirdValue: "Terpercaya",
      fourthValue: "Kredibilitas",
      firstValueDesc:
        "Menjaga etika bisnis tinggi dan transparansi dalam setiap langkah, memastikan kepercayaan dari mitra dan klien.",
      secondValueDesc:
        "Dedikasi untuk memberikan layanan terbaik, kami berfokus pada kesuksesan jangka panjang dengan dukungan penuh kepada mitra dan pelanggan.",
      thirdValueDesc:
        "Menjaga reputasi yang solid melalui layanan yang konsisten dan memenuhi janji, kami memastikan setiap transaksi berjalan dengan aman dan lancar.",
      fourthValueDesc:
        "Memberikan layanan yang andal dan efisien dengan standar profesionalisme yang tinggi, menyediakan solusi yang disesuaikan dengan kebutuhan bisnis Anda.",
      galleryDesc:
        "Anda dapat melihat galeri kami di sini, klik untuk melihat dan menemukan briket arang yang sesuai dengan kebutuhan Anda. Setiap gambar adalah cerminan dari komitmen kami terhadap kualitas dan kepuasan pelanggan.",
      productTitle: "PILIHAN BRIKET ARANG",
      productDesc:
        "Dengan reputasi sebagai penyedia utama Briket Arang, kami menjamin kualitas tinggi dalam setiap produk yang kami tawarkan. Briket Arang kami diproduksi dari bahan baku alami terbaik dan melalui proses kontrol kualitas yang ketat.",
      ctaProduct:
        "Klik gambar untuk melihat spesifikasi lebih lanjut dan unduh untuk melihat detail lebih lanjut.",
      firstProduct: "Briket Shisha Superior",
      secondProduct: "Briket Shisha Extra",
      thirdProduct: "Briket Shisha Premium",
      downloadCatalog: "UNDUH KATALOG",
      newsTitle: "EKSPLORASI INFORMASI LENGKAP",
      newsDesc:
        "Temukan informasi mendalam tentang briket arang kelapa, termasuk manfaat produk, proses produksi berkelanjutan, dan panduan memilih briket berkualitas tinggi.",
      firstNewsTitle:
        "Indonesia Ekspor 1.000 ton Arang Briket Cangkang Kelapa ke Sri Lanka",
      firstNewsDesc:
        "TEMPO.CO, Perusahaan Perdagangan atau PPI, bekerja sama dengan Koperasi Kelapa Terpadu Indonesia (KKTI), mengekspor 1.000 ton arang briket cangkang kelapa ke Sri Lanka. “Ini adalah...",
      secondNewsTitle: "Arang Terus Diminati Pasar Internasional",
      secondNewsDesc:
        "Indonesia merupakan salah satu produsen kelapa terbesar di dunia. Pada tahun 2020, diperkirakan Indonesia memproduksi 2,81 juta ton kelapa. Selain mengekspor...",
      footerTitle:
        "Percayakan Kemitraan Global kepada Kami, Eksportir Terpercaya Briket Arang Kelapa dari Indonesia",
      followUs: "Ikuti Kami",
      followUsDesc:
        "Ikuti kami di media sosial, dan beberapa pembaruan tentang informasi perusahaan",
      copyright:
        "Hak Cipta © 2025 Eksportir Briket Arang Kelapa Indonesia untuk Shisha & BBQ. Seluruh Hak Dilindungi.",
      address:
        "Jl. Kesehatan, Gg Keluarga Bersama No 45, Kalimantan Barat, Pontianak, Indonesia.",
    },
  },
  ar: {
    translation: {
      contactUs: "اتصل بنا",
      home: "الرئيسية",
      aboutUs: "من نحن",
      gallery: "المعرض",
      news: "الأخبار",
      product: "المنتج",
      contact: "اتصل",
      heroTitle: "فحم جوز الهند الفاخر",
      heroDesc:
        "نحن شريك موثوق لتصدير فحم جوز الهند من إندونيسيا، ملتزمون بتقديم خدمات احترافية ومنتجات عالية الجودة لتلبية معايير التصدير العالمية.",
      aboutTitle: "جودة عالية لفحم جوز الهند",
      aboutFirstPar:
        "فحمنا مصنوع من قشر جوز الهند بنسبة 100٪، مما يضمن احتراقًا أنظف بدون روائح أو دخان زائد، مما يجعله مثاليًا للاستخدام الداخلي. انخفاض محتوى الرطوبة يضمن بدء تشغيل سريع، بينما يعني وقت الاحتراق الطويل أنك لن تحتاج إلى تغيير الفحم بشكل متكرر، مما يوفر التكاليف التشغيلية. بعد الاستخدام، يجعل انخفاض محتوى الرماد التنظيف أمرًا سهلاً، مما يجعله حلاً عمليًا لأعمالك.",
      aboutSecondPar:
        "العمل معنا يعني أنك تختار شريكًا ملتزمًا بتقديم أفضل الحلول للطاقة، ودعم الاستدامة البيئية، وتعزيز موقع عملك في الأسواق المحلية والإقليمية.",
      firstValue: "النزاهة",
      secondValue: "الالتزام",
      thirdValue: "الموثوق",
      fourthValue: "المصداقية",
      firstValueDesc:
        "التمسك بمعايير عالية للأخلاق التجارية والشفافية في كل خطوة، مما يضمن الثقة من الشركاء والعملاء.",
      secondValueDesc:
        "ملتزمون بتقديم أفضل الخدمات، نركز على النجاح على المدى الطويل مع دعم كامل لشركائنا وعملائنا.",
      thirdValueDesc:
        "الحفاظ على سمعة قوية من خلال خدمة متسقة والوفاء بالوعود، نضمن أن كل معاملة تسير بأمان وسلاسة.",
      fourthValueDesc:
        "تقديم خدمات موثوقة وفعالة بمعايير عالية من الاحترافية، وتوفير حلول مصممة لتلبية احتياجات عملك.",
      galleryDesc:
        "يمكنك مشاهدة معرضنا هنا، انقر للمشاهدة والعثور على الفحم الذي يناسب احتياجاتك. كل صورة هي انعكاس لالتزامنا بالجودة ورضا العملاء.",
      productTitle: "خيارات فحم جوز الهند",
      productDesc:
        "باعتبارنا مزودًا رئيسيًا لفحم جوز الهند، نضمن جودة عالية في كل منتج نقدمه. يتم إنتاج فحمنا من أفضل المواد الخام الطبيعية ويمر بعملية صارمة لمراقبة الجودة.",
      ctaProduct:
        "انقر على الصورة للاطلاع على المواصفات وتحميلها لرؤية المزيد من التفاصيل.",
      firstProduct: "فحم شيشة فائق الجودة",
      secondProduct: "فحم شيشة إضافي",
      thirdProduct: "فحم شيشة فاخر",
      downloadCatalog: "تحميل الكتالوج",
      newsTitle: "استكشف المعلومات الكاملة",
      newsDesc:
        "اكتشف معلومات مفصلة حول فحم جوز الهند، بما في ذلك فوائد المنتج، وعمليات الإنتاج المستدامة، ودليل اختيار الفحم عالي الجودة.",
      firstNewsTitle:
        "إندونيسيا تصدر 1000 طن من فحم قشر جوز الهند إلى سريلانكا",
      firstNewsDesc:
        'تيمبو.كو، شركة تداول أو PPI، بالتعاون مع التعاونيات المتكاملة لجوز الهند في إندونيسيا (KKTI)، تصدر 1000 طن من فحم قشر جوز الهند إلى سريلانكا. "هذا هو..."',
      secondNewsTitle: "الفحم مطلوب باستمرار في الأسواق الدولية",
      secondNewsDesc:
        "تُعد إندونيسيا واحدة من أكبر منتجي جوز الهند في العالم. في عام 2020، يُقدّر أن إندونيسيا أنتجت 2.81 مليون طن من جوز الهند. بالإضافة إلى التصدير...",
      footerTitle:
        "اعتمد شراكتك العالمية علينا، نحن المصدر الموثوق لفحم جوز الهند من إندونيسيا",
      followUs: "تابعنا",
      followUsDesc:
        "تابعنا على وسائل التواصل الاجتماعي، وآخر التحديثات عن معلومات الشركة",
      copyright:
        "حقوق النشر © 2025 مصدر فحم جوز الهند الإندونيسي للشيشة والشواء. كل الحقوق محفوظة.",
      address:
        "شارع الصحة، زقاق العائلة المتحدة رقم 45، كاليمانتان الغربية، بونتياناك، إندونيسيا.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
