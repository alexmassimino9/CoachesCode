import React from "react";
import {
  TestimonialSection,
  FeatureSection,
  HeroSection,
  CtaSection,
} from "./homePageComponents";

const HomePage = () => {
  return (
    <main className="">
      <HeroSection />
      <CtaSection />
      <FeatureSection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;
