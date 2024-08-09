import React, { useState } from 'react'
import './TamSwiper.css'
import movieVideo from "../Assets/SampleVideos/sample.mp4"
import { ImCancelCircle } from "react-icons/im";
const TamSwiper = (props) => {
     
    let movieApiData = props.tamMovieData
    console.log(movieApiData.map(val=>console.log(val)
    ));
    
    

    const [display,setDisplay] = useState(false)

  return (
    <>
        {
            movieApiData.map((value,id)=>{
               return( <div key={id} className='parentConrainer'>
                <img src={value.thumpNile} alt=""  className='thumpNile' onClick={()=>setDisplay(!display)}/>
                   { display === true ?  
                   <div className="movieContent">
                        <div className="movieVideo">
                            <video controls autoPlay muted loop src={movieVideo} className='movie'></video>
                        </div>
                        <div className="aboutMovie">
                            <div className='basicinfo'>
                                <h2 className='movieName'> {value.movieNamme} </h2>
                                <h4 className='movieYear'> {value.relesedYear} </h4>
                                <h4 className='movieRating'> {value.rating} </h4>
                                <h3 className='movieCensor'> {value.censor} </h3>
                            </div>
                            <div className="movieDes">
                                <h4> Genre : {value.genre}</h4>
                                <p> {value.about} </p>
                            </div>
                        </div>
                        <p className='close' onClick={()=>setDisplay(false)}> <ImCancelCircle /></p>
                    </div> : null}
             </div>)
            })
        }
    </>
  )
}

export default TamSwiper