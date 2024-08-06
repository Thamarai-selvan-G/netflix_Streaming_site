import React from 'react'
import './FifthPage.css'
import children from '../../Assets/children.png'
const FifthPage = () => {
  return (
    <div>
        
        <div className='FullSec'>

           <div className='ImgTag'>
              <img className='tvimg' src={children} alt="" />
           </div>

          <div className="Heading">
             
             <div className='Tag'>
               <h1 className='headTag'>Create profiles for kids</h1>
             </div>


             <div className='Tag2'>
               <p className='inLine'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
               
            </div>
         </div>
            
        </div>
    </div>
  )
}

export default FifthPage