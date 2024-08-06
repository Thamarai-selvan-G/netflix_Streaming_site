import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import "./HomeCover4.css"
import img1 from '../../Assets/Assets/hc2.webp'
import img2 from "../../Assets/Assets/hc7.webp"


const HomeCover4 = () => {
  return (
    <div>
      
<div className="Whole">

    <div className="sec13">

        <img className='homecover13' src={img1} alt="" />

          <div className="sec16">
              <div className="sec14">

               <img className='homecover14' src={img2} alt="" />

               <h1>Watch this season</h1>
               <p>In this Emmy-Winning shows based on the DC comic book series </p>
               <p>a boy's part human, part deer and all heart finds adventure in </p> 
               <p>a postapocalyptic world.</p> 

               <div className="sec15">
                  <div className="homecover15">
                     <FaPlay className='play'/>
                    <p>Play</p>
                    </div>
                  <div className="homecover16">
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

export default HomeCover4