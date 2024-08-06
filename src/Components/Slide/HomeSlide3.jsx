import React from 'react';
import './HomeSlide3.css';
import img31 from '../../Assets/movie_img/img31.jpg';
import img32 from '../../Assets/movie_img/img32.webp';
import img33 from '../../Assets/movie_img/img33.jpg';
import img34 from '../../Assets/movie_img/img34.jpg';
import img35 from '../../Assets/movie_img/img35.webp';
import img36 from '../../Assets/movie_img/img36.jpg';
import img37 from '../../Assets/movie_img/img37.webp';
import img38 from '../../Assets/movie_img/img38.jpg';
import img39 from '../../Assets/movie_img/img39.jpg';
import img40 from '../../Assets/movie_img/img40.webp';
import img41 from '../../Assets/movie_img/img41.webp';
import img42 from '../../Assets/movie_img/img42.jpg';
import img43 from '../../Assets/movie_img/img43.webp';
import img44 from '../../Assets/movie_img/img44.jpg';
import img45 from '../../Assets/movie_img/img45.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Video12 from "../../Assets/SampleVideos/sample.mp4"
import { FaCirclePlay } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import  { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import Video from "../../Assets/SampleVideos/sample.mp4"
import  { useRef } from 'react';
const Slide = () => {
      const [selectedItem, setSelectedItem] = useState(null);

      const handleImageClick = (item) => {
            setSelectedItem(item);
        
      };
    
      const handleCloseClick = () => {
            setSelectedItem(null);
      
      };

      const videoRef = useRef(null);

      const handlePlayClick = () => {
        if (videoRef.current) {
          videoRef.current.play();
          if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
          } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
            videoRef.current.mozRequestFullScreen();
          } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            videoRef.current.webkitRequestFullscreen();
          } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
            videoRef.current.msRequestFullscreen();
          }
        }
      };
      
  return (
    <div className='body3'>

   
   <h3 className="movie_content3 " >Your Next Watch</h3>
   

   <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={5}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        
      >
         {/* 1 */}
        <SwiperSlide>
            <div className='main1003'>
                 <div className='main_img1003' onClick={() => handleImageClick('item163')} >
                      <img className='movie_img31' src={img31} alt=""  />
                  </div>
                  
               </div>
               {selectedItem === 'item163' && (
           
           <div className='click_main1003'>
           <IoMdClose className='close003' onClick={handleCloseClick} />
              
               <div className='video_div1003'>
               {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
   
               <video className='video1003' preload='none' autoPlay  loop ref={videoRef} 
               onClick={handlePlayClick} >
                  <source src={Video} type="video/mp4"/>
                </video>
                <button className='play003' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
              </div>
   
              <div className='cont_main1003'>
             
                 <div className='video_cont1003'>
                    <div className='main_match1003'>
                          <h4 className='match1003'>98% Match</h4>
                          <h4>2024</h4>
                          <h4>1 Season</h4>
                          <h5 className='hd003'>HD</h5>
                    </div>
                    <div className='main_ua003'>
                          <h4 className='ua003'>U/A 16+</h4>
                          <h5>mature themes, substances, tobacco use, violence</h5>
                    </div>
                    <div className='episode1003'>
                          <h3>#1 in TV Shows Today</h3>
                          <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                          <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                    </div>
              </div>
   
              <div className='cast003'>
                    <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                    <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                    <h5>This Show is:Emotional,Romantic</h5>
              </div>
   
              </div>
           </div>
   
          
          
           )
        };
          </SwiperSlide>
   
   {/* 2 */}
        <SwiperSlide>
             
        <div className='main23'>
                 <div className='main_img23' onClick={() => handleImageClick('item23')} >
                      <img className='movie_img32' src={img32} alt=""  />
                  </div>
                  
               </div>
               {selectedItem === 'item23' && (
           
           <div className='click_main23'>
           <IoMdClose className='close23' onClick={handleCloseClick} />
              
               <div className='video_div23'>
               {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
   
               <video className='video23' preload='none' autoPlay  loop ref={videoRef} 
               onClick={handlePlayClick} >
                  <source src={Video} type="video/mp4"/>
                </video>
                <button className='play23' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
              </div>
   
              <div className='cont_main23'>
             
                 <div className='video_cont23'>
                    <div className='main_match23'>
                          <h4 className='match23'>98% Match</h4>
                          <h4>2024</h4>
                          <h4>1 Season</h4>
                          <h5 className='hd23'>HD</h5>
                    </div>
                    <div className='main_ua23'>
                          <h4 className='ua23'>U/A 16+</h4>
                          <h5>mature themes, substances, tobacco use, violence</h5>
                    </div>
                    <div className='episode23'>
                          <h3>#1 in TV Shows Today</h3>
                          <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                          <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                    </div>
              </div>
   
              <div className='cast23'>
                    <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                    <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                    <h5>This Show is:Emotional,Romantic</h5>
              </div>
   
              </div>
           </div>
   
          
          
           )
        };
             
             </SwiperSlide>
   {/* 3 */}
            <SwiperSlide>
             
             <div className='main33'>
                      <div className='main_img33' onClick={() => handleImageClick('item33')} >
                           <img className='movie_img33' src={img33} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item33' && (
                
                <div className='click_main33'>
                <IoMdClose className='close33' onClick={handleCloseClick} />
                   
                    <div className='video_div33'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video33' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play33' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main33'>
                  
                      <div className='video_cont33'>
                         <div className='main_match33'>
                               <h4 className='match33'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd33'>HD</h5>
                         </div>
                         <div className='main_ua33'>
                               <h4 className='ua33'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode33'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast33'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };
                  
          </SwiperSlide>
   
   {/* 4 */}
   <SwiperSlide>
             
             <div className='main43'>
                      <div className='main_img43' onClick={() => handleImageClick('item43')} >
                           <img className='movie_img34' src={img34} alt=""  />
                       </div>
                       
                    </div>
               {selectedItem === 'item43' && (
                
                <div className='click_main43'>
                <IoMdClose className='close43' onClick={handleCloseClick} />
                   
                    <div className='video_div43'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video43' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play43' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main43'>
                  
                      <div className='video_cont43'>
                         <div className='main_match43'>
                               <h4 className='match43'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd43'>HD</h5>
                         </div>
                         <div className='main_ua43'>
                               <h4 className='ua43'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode43'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast43'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };
                  
          </SwiperSlide>
   
   
   
        <SwiperSlide>
       
             
          <div className='main53'>
                      <div className='main_img53' onClick={() => handleImageClick('item53')} >
                           <img className='movie_img35' src={img35} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item53' && (
                
                <div className='click_main53'>
                <IoMdClose className='close53' onClick={handleCloseClick} />
                   
                    <div className='video_div53'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video53' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play53' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main53'>
                  
                      <div className='video_cont53'>
                         <div className='main_match53'>
                               <h4 className='match53'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd53'>HD</h5>
                         </div>
                         <div className='main_ua53'>
                               <h4 className='ua53'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode53'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast53'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };
            
        </SwiperSlide>
   
        <SwiperSlide>
        
               <div className='main63'>
                      <div className='main_img63' onClick={() => handleImageClick('item63')} >
                           <img className='movie_img36' src={img36} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item63' && (
                
                <div className='click_main63'>
                <IoMdClose className='close63' onClick={handleCloseClick} />
                   
                    <div className='video_div63'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video63' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play63' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main63'>
                  
                      <div className='video_cont63'>
                         <div className='main_match63'>
                               <h4 className='match63'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd63'>HD</h5>
                         </div>
                         <div className='main_ua63'>
                               <h4 className='ua63'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode63'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast63'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };          
            
        </SwiperSlide>
   
        <SwiperSlide>
        
            
               <div className='main73'>
                      <div className='main_img73' onClick={() => handleImageClick('item73')} >
                           <img className='movie_img37' src={img37} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item73' && (
                
                <div className='click_main73'>
                <IoMdClose className='close73' onClick={handleCloseClick} />
                   
                    <div className='video_div73'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video73' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play73' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main73'>
                  
                      <div className='video_cont73'>
                         <div className='main_match73'>
                               <h4 className='match73'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd73'>HD</h5>
                         </div>
                         <div className='main_ua73'>
                               <h4 className='ua73'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode73'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast73'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };   
             
        </SwiperSlide>
   
        <SwiperSlide>
        
              
        <div className='main83'>
                      <div className='main_img83' onClick={() => handleImageClick('item83')} >
                           <img className='movie_img38' src={img38} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item83' && (
                
                <div className='click_main83'>
                <IoMdClose className='close83' onClick={handleCloseClick} />
                   
                    <div className='video_div83'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video83' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play83' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main83'>
                  
                      <div className='video_cont83'>
                         <div className='main_match83'>
                               <h4 className='match83'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd83'>HD</h5>
                         </div>
                         <div className='main_ua83'>
                               <h4 className='ua83'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode83'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast83'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };   
   
             
        </SwiperSlide>
   
        <SwiperSlide>
        
             
        <div className='main93'>
                      <div className='main_img93' onClick={() => handleImageClick('item93')} >
                           <img className='movie_img39' src={img39} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item93' && (
                
                <div className='click_main93'>
                <IoMdClose className='close93' onClick={handleCloseClick} />
                   
                    <div className='video_div93'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video93' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play93' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main93'>
                  
                      <div className='video_cont93'>
                         <div className='main_match93'>
                               <h4 className='match93'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd93'>HD</h5>
                         </div>
                         <div className='main_ua93'>
                               <h4 className='ua93'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode93'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast93'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };   
            
        </SwiperSlide>
   
        <SwiperSlide>
       
         
        <div className='main103'>
                      <div className='main_img103' onClick={() => handleImageClick('item103')} >
                           <img className='movie_img40' src={img40} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item103' && (
                
                <div className='click_main103'>
                <IoMdClose className='close103' onClick={handleCloseClick} />
                   
                    <div className='video_div103'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video103' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play103' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main103'>
                  
                      <div className='video_cont103'>
                         <div className='main_match103'>
                               <h4 className='match103'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd103'>HD</h5>
                         </div>
                         <div className='main_ua103'>
                               <h4 className='ua103'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode103'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast103'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };   
   
        </SwiperSlide>
   
        <SwiperSlide>
       
        <div className='main_img113' onClick={() => handleImageClick('item113')} >
                           <img className='movie_img41' src={img41} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item113' && (
                
                <div className='click_main113'>
                <IoMdClose className='close113' onClick={handleCloseClick} />
                   
                    <div className='video_div113'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video113' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play113' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main113'>
                  
                      <div className='video_cont113'>
                         <div className='main_match113'>
                               <h4 className='match113'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd113'>HD</h5>
                         </div>
                         <div className='main_ua113'>
                               <h4 className='ua113'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode113'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast113'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };   
       
     
   
    </SwiperSlide>
         <SwiperSlide>
       
         
               <div className='main_img123' onClick={() => handleImageClick('item123')} >
                           <img className='movie_img42' src={img42} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item123' && (
                
                <div className='click_main123'>
                <IoMdClose className='close123' onClick={handleCloseClick} />
                   
                    <div className='video_div123'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video123' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play123' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main123'>
                  
                      <div className='video_cont123'>
                         <div className='main_match123'>
                               <h4 className='match123'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd123'>HD</h5>
                         </div>
                         <div className='main_ua123'>
                               <h4 className='ua123'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode123'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast123'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };   
   
     
   
         </SwiperSlide>
         <SwiperSlide>
       
             
         <div className='main_img133' onClick={() => handleImageClick('item133')} >
                           <img className='movie_img43' src={img43} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item133' && (
                
                <div className='click_main133'>
                <IoMdClose className='close133' onClick={handleCloseClick} />
                   
                    <div className='video_div133'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video133' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play133' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main133'>
                  
                      <div className='video_cont133'>
                         <div className='main_match133'>
                               <h4 className='match133'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd133'>HD</h5>
                         </div>
                         <div className='main_ua133'>
                               <h4 className='ua133'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode133'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast133'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };   
       
     
   
         </SwiperSlide>
      <SwiperSlide>
       
         
      <div className='main_img143' onClick={() => handleImageClick('item143')} >
                           <img className='movie_img44' src={img44} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item143' && (
                
                <div className='click_main143'>
                <IoMdClose className='close143' onClick={handleCloseClick} />
                   
                    <div className='video_div143'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video143' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play143' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main143'>
                  
                      <div className='video_cont143'>
                         <div className='main_match143'>
                               <h4 className='match143'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd143'>HD</h5>
                         </div>
                         <div className='main_ua143'>
                               <h4 className='ua143'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode143'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast143'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };  
     
   
   </SwiperSlide>
         <SwiperSlide>
       
         
         <div className='main_img153' onClick={() => handleImageClick('item153')} >
                           <img className='movie_img45' src={img45} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item153' && (
                
                <div className='click_main153'>
                <IoMdClose className='close153' onClick={handleCloseClick} />
                   
                    <div className='video_div153'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video153' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play153' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main153'>
                  
                      <div className='video_cont153'>
                         <div className='main_match153'>
                               <h4 className='match153'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd153'>HD</h5>
                         </div>
                         <div className='main_ua153'>
                               <h4 className='ua153'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode153'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast153'>
                         <h5>Cast:Manisha Korila, SonikshaSinha, Aditi Rao  Hydari,more</h5>
                         <h5>Genres:Romantic TV Dramas, Political TV Shows, TV Dramas</h5>
                         <h5>This Show is:Emotional,Romantic</h5>
                   </div>
        
                   </div>
                </div>
        
               
               
                )
             };  
     
   
   </SwiperSlide>
        
      </Swiper>

   </div>
   
 )

}

export default Slide;
