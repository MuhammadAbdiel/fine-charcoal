import { useEffect } from "react";
import Footer from "./components/Footer";
// import FounderSection from "./components/FounderSection";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import InformationSection from "./components/InformationSection";
import Navbar from "./components/Navbar";
import ProductOptions from "./components/ProductOptions";
import QualitySection from "./components/QualitySection";
import ValuesSection from "./components/ValuesSection";
import WhatsAppButton from "./components/WhatsAppButton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-out" });
  }, []);

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
      {/* <div data-aos='fade-down' id="founder">
        <FounderSection />
      </div> */}
      <div data-aos="fade-down" id="footer">
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
