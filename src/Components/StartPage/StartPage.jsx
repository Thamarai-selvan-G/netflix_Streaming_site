import React from 'react'
import './StartPage.css'

import Logo from '../../Assets/Netflix_image-removebg-preview.png'
import { GoChevronRight } from "react-icons/go";
function StartPage() {
  return (
    <div>
        <div className="bgimg">
        

         <div className="Header">
            <img className='netflix' src={Logo} alt="" />

            <div className='row1'>

               <div className='option'>
                  {/* <p className='tag'>English</p> */}
                  <select className='language'>
                   <option value="en">English</option>
                   <option value="es">Espanol</option>
                   <option value="fr">Francais</option>
                 </select>
               </div>

              <button className='btn'>Sign In</button>
            </div>
           
        </div>

        <div className='row2' >

            <div className='items'>
              <h1 className='headLine'>Unlimited movies, TV shows and more</h1>
              <h3 className='line1'>Watch anywhere. Cancel anytime.</h3>
              <h3 className='line2'>Ready to watch? Enter your email to create or restart your membership.</h3>

              <div className="signIN">
                <input className='emailInp' type="email" placeholder='Email address' name="" id="" />
                <button className='getBtn'> Get Started <GoChevronRight/> </button>
             </div>

            </div>
            

        </div>

        </div>

    </div>
  )
}

export default StartPage