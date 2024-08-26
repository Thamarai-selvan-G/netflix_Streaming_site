import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TamSwiper.css";
import movieVideo from "../Assets/SampleVideos/sample.mp4";
import { ImCancelCircle } from "react-icons/im";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const TamSwiper = () => {
  const [apiData, setApiData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const apiCall = async () => {
      let mydata = await axios.get(
        "https://netflixbackend-dysz.onrender.com/movie/viewall"
      );
      let datas = mydata.data;
      setApiData(datas.message);
    };
    apiCall();
  }, []);

  const displayData = (id) => {
    let filterData = apiData.find((val) => id === val.id);
    setSelectedMovie(filterData);
    setDisplay(true);
  };

  return (
    <>
      <div className="swiper-container">
        <Swiper
          slidesPerView={6}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={5}
          initialSlide={0}>
          {apiData.map((val) => (
            <SwiperSlide key={val.id}>
              <img
                className="parentConrainer"
                src={val.thumpnile}
                alt={val.movieName}
                onClick={() => displayData(val.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {selectedMovie && display && (
          <div className="movieContent">
            <div className="movieVideo">
              <video
                controls
                autoPlay
                muted
                loop
                src={movieVideo}
                className="movie"></video>
            </div>
            <div className="aboutMovie">
              <div className="basicinfo">
                <h2 className="movieName">{selectedMovie.movieName}</h2>
                <h4 className="movieYear">{selectedMovie.relesedYear}</h4>
                <h4 className="movieRating">{selectedMovie.rating}</h4>
                <h3 className="movieCensor">{selectedMovie.censor}</h3>
              </div>
              <div className="movieDes">
                <h4>Genre: {selectedMovie.genre}</h4>
                <p>{selectedMovie.about}</p>
              </div>
            </div>
            <p className="close" onClick={() => setDisplay(false)}>
              <ImCancelCircle />
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TamSwiper;
