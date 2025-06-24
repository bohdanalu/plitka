import React from "react";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import FaqSection from "../components/FaqSection/FaqSection";
import TilesCtaSection from "../components/TilesCtaSection/TilesCtaSection";

const Home: React.FC = () => (
  <>
    <Hero />
    <Gallery />
    <TilesCtaSection />
    <FaqSection />
  </>
);

export default Home;
