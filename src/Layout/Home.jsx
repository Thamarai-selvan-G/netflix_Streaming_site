import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HomeCover1 from "../Components/HomeCover/HomeCover1";

import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Components/TamCardSwiper/TamswiperComp.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Home = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      let mydata = await axios.get("https://netflixbackend-dysz.onrender.com/movie/viewall");
      let datas = mydata.data;
      // console.log(datas);
      return setApiData(datas.message);
    };
    apiCall();
  }, []);

  console.log(apiData);

  // swiper section code's>>>>>>
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <Navbar />
      {/* <HomeCover1 /> */}
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={5}
        pagination={{
          type: 'false',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          apiData.map((val)=>{
            return (

              <SwiperSlide>
                <img src={val.thumpNile} alt={val.movieName} />
              </SwiperSlide>

            )
          })
        }
       
      </Swiper>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
