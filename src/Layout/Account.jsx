import React from 'react'

import '../Assets/Accounts/Account.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { AiFillCreditCard } from "react-icons/ai";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { PiDevicesFill } from "react-icons/pi";
import { AiFillRobot } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { RiExchange2Fill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbAlertOctagonFilled } from "react-icons/tb";
import Navbar from '../Components/Navbar/Navbar';





const Account = () => {
  return (
    <div>
        <Navbar/>
        <div className='pageparent'>
            <div className='parentSpace'>
                <div className='accounterMenu'>
                  <div className='backButton'>
                     <FaArrowLeftLong />
                     <p>Back to Netflix</p>
                  </div>
                  <div className='sideMenuBar'>
                    <ul>
                      <li>< GoHomeFill className='sideMenuicon'/> <p>Overview</p> </li>
                      <li><AiFillCreditCard className='sideMenuicon'/> <p>Membership</p></li>
                      <li>< IoShieldCheckmarkSharp  className='sideMenuicon'/> <p>Security</p> </li>
                      <li>< PiDevicesFill className='sideMenuicon'/> <p>Devices</p></li>
                      <li>< AiFillRobot className='sideMenuicon'/><p>Profiles</p> </li>
                    </ul>
                  </div>
                </div>
                <div className='accountContentParent'>
                  <div className='memberShip'>
                    <div className='title'>
                      <h2>Account</h2>
                      <p>Membership details</p>
                    </div>
                    <div className='planInfo'>
                      <p className='tag'>Membership since May 2024</p>
                      <div className='memberInfo'>
                        <h4>Basic plan</h4>
                        <p>Next payment 15 June 2024</p>
                        <p><FaGooglePay  className='gpayTag'/> h****@oksbibank</p>
                      </div >
                      <div className='endTitle'>
                         <h4>Manage membership</h4>
                         <IoIosArrowForward />
                      </div>
                    </div>
                  </div>
                  <div className='quickLinks'>
                    <h3>Quick links</h3>
                    <div className='planTools' >
                      <div className='tool'>
                          <div className='planToolsItems'><RiExchange2Fill className='sideEndMenuicon' /> <p> Change plan</p></div>
                          <div><IoIosArrowForward /></div>
                      </div>
                      <div className='tool'>
                          <div className='planToolsItems'><AiFillCreditCard className='sideEndMenuicon'/> <p>Manage payment method</p></div>
                          <div><IoIosArrowForward /></div>
                      </div>
                      <div className='tool'>
                          <div className='planToolsItems'><PiDevicesFill className='sideEndMenuicon'/> <p>Manage access and devices</p></div>
                          <div><IoIosArrowForward /></div>
                      </div>
                      <div className='tool'>
                          <div className='planToolsItems'><RiLockPasswordFill className='sideEndMenuicon'/> <p>Update password</p></div>
                          <div><IoIosArrowForward /></div>
                      </div>
                      <div className='tool'>
                          <div className='planToolsItems'><AiFillRobot className='sideEndMenuicon'/> <p>Transfer a profile</p></div>
                          <div><IoIosArrowForward /></div>
                      </div>
                      <div className='tool'>
                          <div className='planToolsItems'><TbAlertOctagonFilled className='sideEndMenuicon'/> <p>Adjust parental controls</p></div>
                          <div><IoIosArrowForward /></div>
                      </div>
                      <div className='tool'>
                          <div className='planToolsItems'><AiFillCreditCard className='sideEndMenuicon'/> <p>Edit settings</p></div>
                          <div><IoIosArrowForward /></div>
                      </div>
                      
                    </div>
                    

                    <div className='theEnd'>
                    <div className='endTool'>
                          <div className='planToolsEndItems'> <p>Edit settings</p> <IoIosArrowForward /></div>
                          
                      </div>
                    </div>
                    
                  </div>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Account