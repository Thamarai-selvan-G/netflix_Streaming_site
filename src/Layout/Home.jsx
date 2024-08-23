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
  const [display, setDisplay] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  const handleSlideClick = (movie) => {
    setSelectedMovie(movie);
    setDisplay(true);
  };
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
          apiData.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img 
                id={movie.id} 
                src={movie.thumpNile} 
                alt={movie.movieName} 
                onClick={() => handleSlideClick(movie)} 
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      { display && <TamSwiper   tamMovieData={selectedMovie} onClose={() => setDisplay(false)} />}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
