import React from 'react'
import './SignIn.css'
import axios from "axios"
import Logo from '../SignIn/Netflixlogo.png'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'


const SignIn = () => {

  let navigate = useNavigate()
  const userEmail = useRef("")
  const userPassword = useRef("")

  const authUser = async ()=>{

    let userData ={
      email : userEmail.current.value,
      password : userPassword.current.value
    }
    console.log(userData);
    
    const checkuser = await axios.post("https://netflixbackend-dysz.onrender.com/vendor/login",userData)

    if (!checkuser) {
      alert('invalid password !!')
      return console.log("login error");
      
    }
    return navigate('/home')
  }

  return (
<div>
    <div className='Navbar'>
        <nav className='logo'>
       <img src={Logo} alt="" />
      </nav>
  </div>
  <div className="container">
    <h1>Sign In</h1>
    <div className="form">
      <input type="email" placeholder='Email or Mobile Number' name='userEmail' ref={userEmail}/>
      <input type="password" placeholder='Password' name='userPassword' ref={userPassword} />
      <button className='button1' onClick={authUser}>Sign In</button>
      <p>OR</p>
      <button className='button2'>Use a sign in code</button>
      <p className='FP'>Forget Password?</p>
      <input type="checkbox" />
      <label>Remember Me</label>
    </div>
    <div className="signup">
      <h2>New to Netflix? </h2>
      <p className='content'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
    </div>
  </div>
</div>
  )
}

export default SignIn