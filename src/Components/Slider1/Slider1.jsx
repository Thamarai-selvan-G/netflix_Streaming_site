import React from 'react'
// import '../Components/HomeCover'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slider1.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { IoIosInformationCircleOutline } from "react-icons/io";
import img3 from '../../Assets/Assets/today1.webp'
import img4 from '../../Assets/Assets/today2.webp'
import img5 from '../../Assets/Assets/today3.webp'
import img6 from '../../Assets/Assets/today4.webp'
import img7 from '../../Assets/Assets/today5.webp'
import img8 from '../../Assets/Assets/today6.webp'
import img9 from '../../Assets/Assets/today7.webp'
import img10 from '../../Assets/Assets/today8.webp'
import img11 from '../../Assets/Assets/today9.webp'
import img12 from '../../Assets/Assets/today10.webp'

// import Slider2 from '../Slider2/Slider2';



const Slider1 = () => {
  return (
     <div className='whole'>

    <div className="movieslide"> 
    <h1>Top 10 Movies in india</h1>
    </div>

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={5}
    slidesPerView={6}
    navigation
    className='sw'
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
      
    >
     <div className="Slider">

     <SwiperSlide>
        <div className="aravind1">
            <h1 >1</h1>
            <img className='t1' src={img3} alt=""  />
           </div></SwiperSlide>

      <SwiperSlide>
        <div className="aravind1">
            <h1>2</h1>
            <img className='t2' src={img4} alt="" srcset="" />
           </div>
           </SwiperSlide>

      <SwiperSlide>
         
      <div className="aravind1">
            <h1>3</h1>
            <img className='t3' src={img5} alt="" srcset="" />
           </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="aravind1">
            <h1>4</h1>
            <img className='t4' src={img6} alt="" srcset="" />
           </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="aravind1">
            <h1>5</h1>
            <img className='t5' src={img7} alt="" srcset="" />
           </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="aravind1">
            <h1>6</h1>
            <img className='t6' src={img8} alt="" srcset="" />
           </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="aravind1">
            <h1>7</h1>
            <img className='t7' src={img9} alt="" srcset="" />
           </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="aravind1">
            <h1>8</h1>
            <img className='t8' src={img10} alt="" srcset="" />
           </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="aravind1">
            <h1>9</h1>
            <img className='t9' src={img11} alt="" srcset="" />
           </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="aravind1">
            <h1>10</h1>
            <img className='t10' src={img12} alt="" srcset="" />
           </div> 

      </SwiperSlide>

     </div>
            ...
    </Swiper>
    </div>
    
  )
}

export default Slider1