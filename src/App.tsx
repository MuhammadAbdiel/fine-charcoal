import Footer from "./components/Footer";
import FounderSection from "./components/FounderSection";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import InformationSection from "./components/InformationSection";
import Navbar from "./components/Navbar";
import ProductOptions from "./components/ProductOptions";
import QualitySection from "./components/QualitySection";
import ValuesSection from "./components/ValuesSection";
import WhatsAppButton from "./components/WhatsappButton";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QualitySection />
      <ValuesSection />
      <GallerySection />
      <ProductOptions />
      <InformationSection />
      <FounderSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
