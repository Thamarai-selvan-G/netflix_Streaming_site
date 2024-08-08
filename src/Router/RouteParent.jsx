import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes , Route } from 'react-router-dom'
import Home from '../Layout/Home'
import SignIn from '../Components/SignIn/SignIn'







const RouteParent = () => {
  return (
    <div>
        <Router>
            <Routes>
              <Route path = '/' element = {<SignIn/>}/>
              <Route path='/home' element= {<Home/>} />
               

               
            </Routes>
        </Router>
    </div>
  )
}

export default RouteParent