import React from 'react'
import './FourthPage.css'
import device from '../../Assets/device.png'
function FourthPage() {
  return (
    <div>
        
        <div className='FullSec'>

          <div className="Heading">
             
             <div className='Tag'>
               <h1 className='headTag'>Watch everywhere</h1>
             </div>


             <div className='Tag2'>
               <p className='inLine'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
               
            </div>
         </div>
         

         <div className='ImgTag'>
           <img className='tvimg' src={device} alt="" />
         </div>
            
        </div>
    </div>
  )
}

export default FourthPage