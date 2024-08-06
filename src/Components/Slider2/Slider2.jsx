import React from "react";
// import '../Components/HomeCover'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider2.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
// import { IoIosInformationCircleOutline } from "react-icons/io";
import tv1 from "../../Assets/Assets/tv1.jpg";
import tv2 from "../../Assets/Assets/tv2.webp";
import tv3 from "../../Assets/Assets/tv3.jpg";
import tv4 from "../../Assets/Assets/tv4.jpg";
import tv5 from "../../Assets/Assets/tv5.jpg";
import tv6 from "../../Assets/Assets/tv6.jpg";
import tv7 from "../../Assets/Assets/tv7.jpg";
import tv8 from "../../Assets/Assets/tv8.jpg";
import tv9 from "../../Assets/Assets/tv9.jpg";
import tv10 from "../../Assets/Assets/tv10.jpg";

const Slider2 = () => {
  return (
    <div className="whole">
      <div className="tvslide">
        <h1>Top 10 TV Shows in india</h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={6}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="harshini1">
            <h1>1</h1>
            <img className="t1" src={tv1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>2</h1>
            <img className="t2" src={tv2} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>3</h1>
            <img className="t3" src={tv3} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>4</h1>
            <img className="t4" src={tv4} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>5</h1>
            <img className="t5" src={tv5} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>6</h1>
            <img className="t6" src={tv6} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>7</h1>
            <img className="t7" src={tv7} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>8</h1>
            <img className="t8" src={tv8} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>9</h1>
            <img className="t9" src={tv9} alt="" srcset="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="harshini1">
            <h1>10</h1>
            <img className="t10" src={tv10} alt="" srcset="" />
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Slider2;
