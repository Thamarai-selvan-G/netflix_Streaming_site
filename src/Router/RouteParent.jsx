import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes , Route } from 'react-router-dom'
import Home from '../Layout/Home'
import BrowseLan from '../Layout/BrowseLan'
import MyList from '../Layout/MyList'
import NewsNdPopular from '../Layout/NewsNdPopular'
import TvShows from '../Layout/TvShows'
import Movies from '../Layout/Movies'
import Account from '../Layout/Account'





const RouteParent = () => {
  return (
    <div>
        <Router>
            <Routes>
                
                <Route path='/' element= {<Home/>} />
                <Route path='/Movies' element= {<Movies/>} />
                <Route path='/TvShows' element= {<TvShows/>} />
                <Route path='/NewsNdPopular' element= {<NewsNdPopular/>} />
                <Route path='/MyList' element= {<MyList/>} />
                <Route path='/BrowseLan' element= {<BrowseLan/>} />
                <Route path='/Account' element= {<Account/>} />

               
            </Routes>
        </Router>
    </div>
  )
}

export default RouteParent