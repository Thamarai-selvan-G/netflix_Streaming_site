import React from 'react'
import './FooterPage2.css'
function FooterPage2() {
  return (
    <div>
        <div className="Footer">
          <div className="Fulldiv">

          <div className='div'>

               
             <div className='Given'>

            <div className="qus">
              <p className='h1'>Questions? Call 000-800-919-1694</p>
            </div>

                <p className='pTag'>FAQ</p>
                <p className='pTag'>Investor Relations</p>
                <p className='pTag'>Privacy</p>
                <p className='pTag'>Speed Test</p>
                {/* <p className='pTag'>English</p> */}

                <select className='languages'>
                  <option value="en">English</option>
                  <option value="es">Espanol</option>
                  <option value="fr">Francais</option>
              </select>
                <p className='pTag'>Netflix India</p>
             </div>

             <div className="Firstdiv">

             <div className='Given1'>
                <p className='pTag'>Help Centre</p>
                <p className='pTag'>Jobs</p>
                <p className='pTag'>Cookie Preferences</p>
                <p className='pTag'>Legal Notices</p>
             </div> 
             <div className='Given1'>
                <p className='pTag'>Account</p>
                <p className='pTag'>Ways to Watch</p>
                <p className='pTag'>Corporate Information</p>
                <p className='pTag'>Only on Netflix</p>
                
             </div>
             <div className='Given1'>
                <p className='pTag'>Media Centre</p>
                <p className='pTag'>Terms of Use</p>
                <p className='pTag'>Contact Us</p>
             </div>
             </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default FooterPage2