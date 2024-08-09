import React, { useEffect, useState } from "react";
import "./Home.css"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HomeCover1 from "../Components/HomeCover/HomeCover1";
import TamSwiper from "../Components/TamSwiper";
import axios from "axios";

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

  // console.log(apiData);

  return (
    <div>
      <Navbar />
      <HomeCover1 />
      <div className="tamSwiper">
      <TamSwiper let tamMovieData={apiData}/>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
