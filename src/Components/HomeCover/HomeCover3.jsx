import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import "./HomeCover3.css"
import img1 from '../../Assets/Assets/hc3.webp'
import img2 from "../../Assets/Assets/hc7.webp"


const HomeCover3 = () => {
  return (
    <div>
      
<div className="Whole">

    <div className="sec9">

        <img className='homecover9' src={img1} alt="" />

          <div className="sec12">
              <div className="sec10">

               <img className='homecover10' src={img2} alt="" />

               <h1>Watch this season</h1>
               <p>In this Emmy-Winning shows based on the DC comic book series </p>
               <p>a boy's part human, part deer and all heart finds adventure in </p> 
               <p>a postapocalyptic world.</p> 

               <div className="sec11">
                  <div className="homecover11">
                     <FaPlay className='play'/>
                    <p>Play</p>
                    </div>
                  <div className="homecover12">
                  <IoIosInformationCircleOutline className='info'/>

                    <p>More Info</p>
                    </div>
                </div>
              </div>                   
          </div>
      </div>        
    </div>
  </div>
  )
}

export default HomeCover3