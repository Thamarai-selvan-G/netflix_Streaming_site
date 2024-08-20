import React, { useEffect, useState } from "react";
import "./Home.css"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HomeCover1 from "../Components/HomeCover/HomeCover1";
import TamSwiper from "../Components/TamSwiper";
import axios from "axios";
// import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Components/TamCardSwiper/TamswiperComp.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Home = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      let mydata = await axios.get("http://localhost:4000/movie/viewall");
      let datas = mydata.data;
      // console.log(datas);
      return setApiData(datas.message)
    };
    apiCall();
  }, []);

  console.log(apiData);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <HomeCover1 /> */}
      
      <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><TamSwiper  tamMovieData={apiData}/></SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
      

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
