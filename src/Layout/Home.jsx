// import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HomeCover1 from "../Components/HomeCover/HomeCover1";
import TamSwiper from  "../Components/TamSwiper"

const Home = () => {

  return (
    <div>
      <Navbar />
      <HomeCover1 />
      <TamSwiper/>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
