import React, { useState } from "react";
import { Header, Footer } from "../components/main";
import {
  Meets,
  HeroSection,
  Category,
  HowToWorks,
  MobileAppBanner,
} from "../components/Home";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  console.log(process.env.REACT_APP_SECRET_NAME);
  return (
    <>
      <Header />
      {loggedIn ? <Meets /> : <HeroSection />}
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
