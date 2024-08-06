import React from 'react'
import './SecondPage.css'
import tv from '../../Assets/tv.png'
function SecondPage() {
  return (
    <div>

        <div className='FullSec'>

          <div className="Heading">
             
             <div className='Tag'>
               <h1 className='headTag'>Enjoy on your TV</h1>
             </div>


             <div className='Tag2'>
               <p className='inLine'>Watch on smart TVs, PlayStation, Xbox, Chromecast,   Apple TV, Blu-ray players and more.</p>
               
            </div>
         </div>
         

         <div className='ImgTag'>
           <img className='tvimg' src={tv} alt="" />
         </div>
            
        </div>

    </div>
  )
}

export default SecondPage