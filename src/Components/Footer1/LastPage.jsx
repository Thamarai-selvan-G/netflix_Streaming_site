import React from 'react'
import './LastPage.css'
import { FaPlus } from "react-icons/fa6";
// import { IoAdd } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
function LastPage() {
  return (
    <div>

        <div className="HollNav">

            <div className='Head'>

              <div className="Header">
                <h1 className='uppercase'>Frequently Asked Questions</h1>
              </div>

              <div className="Fullhead">
                
                  <div className='FrstQus'>
                      <div className='tags'>
                         <p className='Question'>What is Netflix?</p>  
                         <p className='icon'>< FaPlus/>  </p>          
                     </div>
                  </div>

                  <div className='FrstQus'>
                      <div className='tags'>
                         <p className='Question'>How much dose Netflix cost?</p>
                         <p className='icon'>< FaPlus/>  </p>          
                     </div>
                  </div>

                  <div className='FrstQus'>
                      <div className='tags'>
                         <p className='Question'>Where can I watch?</p>  
                         <p className='icon'>< FaPlus/>  </p>          
                     </div>
                  </div>

                  <div className='FrstQus'>
                      <div className='tags'>
                         <p className='Question'>How do I cancel?</p>  
                         <p className='icon'>< FaPlus/>  </p>          
                     </div>
                  </div>

                  <div className='FrstQus'>
                      <div className='tags'>
                         <p className='Question'>What can I watch on Netfilx?</p>  
                         <p className='icon'>< FaPlus/>  </p>          
                     </div>
                  </div>

                  <div className='FrstQus'>
                      <div className='tags'>
                         <p className='Question'>Is Netflix good for kids?</p>  
                         <p className='icon'>< FaPlus/>  </p>          
                     </div>
                  </div>
                  
              </div>

              <div className='Line'>
                
                <p className='hTag'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="id">
                  <input className='emailId' type="Email" placeholder='Email address'/>
                  <button className='btnId'>Get Start <GoChevronRight/> </button>
                </div>
              </div>

            </div>

        </div>

    </div>
  )
}

export default LastPage