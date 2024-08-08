import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Slide from '../Components/Slide/HomeSlider'
import Slide2 from "../Components/Slide/HomeSlide2"
import Slide3 from "../Components/Slide/HomeSlide3"
import HomeCover3 from "../Components/HomeCover/HomeCover3"
import Slider1 from "../Components/Slider1/Slider1";
import Slider2 from "../Components/Slider2/Slider2";



const TvShows = () => {
  return (
    <div>
       <Navbar />
      <HomeCover3 />
     
      <Slider1 />
      <Footer />
     
    </div>
  )
}

export default TvShows