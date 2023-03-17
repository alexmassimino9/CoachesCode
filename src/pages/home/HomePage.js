import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import {
  TestimonialSection,
  FeatureSection,
  HeroSection,
  CtaSection,
} from "./homePageComponents";

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);

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
