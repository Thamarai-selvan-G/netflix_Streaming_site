import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import "./HomeCover2.css"
import img1 from '../../Assets/Assets/hc1.webp'
import img2 from "../../Assets/Assets/hc6.webp"


const HomeCover2 = () => {
  return (
    <div>
      
<div className="Whole">

    <div className="sec5">

        <img className='homecover5' src={img1} alt="" />

          <div className="sec8">
              <div className="sec6">

               <img className='homecover6' src={img2} alt="" />

               <h1>Watch this season</h1>
               <p>In this Emmy-Winning shows based on the DC comic book series </p>
               <p>a boy's part human, part deer and all heart finds adventure in </p> 
               <p>a postapocalyptic world.</p> 

               <div className="sec7">
                  <div className="homecover">
                     <FaPlay className='play'/>
                    <p>Play</p>
                    </div>
                  <div className="z4">
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

export default HomeCover2