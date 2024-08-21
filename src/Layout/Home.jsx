import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HomeCover1 from "../Components/HomeCover/HomeCover1";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../Components/TamCardSwiper/TamswiperComp.css";

// import required modules
import { Navigation } from "swiper/modules";

const Home = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      let mydata = await axios.get("http://localhost:4000/movie/viewall");
      let datas = mydata.data;
      // console.log(datas);
      return setApiData(datas.message);
    };
    apiCall();
  }, []);

  console.log(apiData);

  return (
    <div>
      <Navbar />
      {/* <HomeCover1 /> */}
      {apiData.map((val, index) => {
        return (
          <div key={index}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper">
              <SwiperSlide>
                <img src={val.thumpNile} alt={val.movieName} />
              </SwiperSlide>
            </Swiper>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Home;
