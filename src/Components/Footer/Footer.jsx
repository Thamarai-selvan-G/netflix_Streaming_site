import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
// import { IoLanguage } from "react-icons/io5";





const Footer = () => {
  return (
    <div>


<footer>

        <div className="footercontent">
       
         <div className="f1">
         <div className="footericon">
                  <FaFacebookSquare />
                  <FaInstagramSquare />
                  <BsTwitterX />
                  <IoLogoYoutube />
            </div>
            <Link className='none'><h6>FAQ</h6></Link>
            <Link className='none'><h6>Investor Relations</h6></Link>
            <Link className='none'><h6>Privacy</h6></Link>
            <Link className='none'><h6>Speed Test</h6></Link>
         <div className="language-btn">
              <select>
                  <option value="en">English</option>
                  <option value="es">Espanol</option>
                  <option value="fr">Francais</option>
              </select>
         </div>
         <div className="copyright">
                <p>Netflix India</p>
         </div>
         </div>
         <div className='f2'>
             <Link className='none'><h6>Help Center</h6></Link> 
             <Link className='none'><h6>Jobs</h6></Link> 
             <Link className='none'><h6>Cookie Preferences</h6></Link>
             <Link className='none'><h6>Legal Notices</h6></Link> 
            
         </div>
         <div className="f3">
            <Link className='none'><h6>Privacy</h6></Link>
            <Link className='none'><h6>Way to Watch</h6></Link>
            <Link className='none'><h6>Corporate Information</h6></Link> 
            <Link className='none'><h6>Only on Netflix</h6></Link>
        </div>
         <div className='f4'>
           <Link className='none'><h6>Media Center</h6></Link>
           <Link className='none'><h6>Terms of Use</h6></Link>
           <Link className='none'><h6>Contact Us</h6> </Link>
         </div>
          
         </div>
         <div className='mobile2'>
          <div className="mobile1">
            <h6>
                Terms of use
            </h6>
            <h6>
              Privacy statement
            </h6>
            <h6>
              Cookie Preference
            </h6>
            <h6>
              Help Centre
            </h6>
          </div>
         
              
        </div>


        </footer>
    </div>
  )
}

export default Footer