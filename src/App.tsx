import Footer from "./components/Footer";
import FounderSection from "./components/FounderSection";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import InformationSection from "./components/InformationSection";
import Navbar from "./components/Navbar";
import ProductOptions from "./components/ProductOptions";
import QualitySection from "./components/QualitySection";
import ValuesSection from "./components/ValuesSection";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="quality">
        <QualitySection />
      </div>
      <div id="values">
        <ValuesSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="product">
        <ProductOptions />
      </div>
      <div id="info">
        <InformationSection />
      </div>
      <div id="founder">
        <FounderSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
