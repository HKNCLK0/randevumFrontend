import React from "react";
import { Header, Footer } from "../components/main";
import {
  Meets,
  HeroSection,
  Category,
  HowToWorks,
  MobileAppBanner,
} from "../components/Home";

const Home = () => {
  const token = sessionStorage.getItem("token");
  return (
    <>
      <Header />
      {token ? <Meets /> : <HeroSection />}
      <div className="container mx-auto mt-8 flex flex-col gap-10">
        <Category />
        <HowToWorks />
        <MobileAppBanner />
      </div>
      <Footer />
    </>
  );
};

export default Home;
