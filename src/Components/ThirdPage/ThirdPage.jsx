import React from 'react'
import Mobile from '../../Assets/mobile.jpg'
import './ThirdPage.css'
function ThirdPage() {
  return (
    <div>
        
        <div className='FullSec'>

           <div className='ImgTag'>
              <img className='tvimg' src={Mobile} alt="" />
           </div>

          <div className="Heading">
             
             <div className='Tag'>
               <h1 className='headTag'>Download your shows to watch offline</h1>
             </div>


             <div className='Tag2'>
               <p className='inLine'>Save your favourites easily and always have something to watch</p>
               
            </div>
         </div>
            
        </div>
    </div>
  )
}

export default ThirdPage