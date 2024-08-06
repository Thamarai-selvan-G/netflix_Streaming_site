import React from 'react';
import './HomeSlide2.css';
import img16 from '../../Assets/movie_img/img16.webp';
import img17 from '../../Assets/movie_img/img17.webp';
import img18 from '../../Assets/movie_img/img18.webp';
import img19 from '../../Assets/movie_img/img19.webp';
import img20 from '../../Assets/movie_img/img20.webp';
import img21 from '../../Assets/movie_img/img21.webp';
import img22 from '../../Assets/movie_img/img22.webp';
import img23 from '../../Assets/movie_img/img23.webp';
import img24 from '../../Assets/movie_img/img24.webp';
import img25 from '../../Assets/movie_img/img25.webp';
import img26 from '../../Assets/movie_img/img26.webp';
import img27 from '../../Assets/movie_img/img27.webp';
import img28 from '../../Assets/movie_img/img28.webp';
import img29 from '../../Assets/movie_img/img29.webp';
import img30 from '../../Assets/movie_img/img30.webp';
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
      <div className='body2'>

   
      <h3 className="movie_content2" >Made in India</h3>
      
   
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
            <div className='main1002'>
                 <div className='main_img1002' onClick={() => handleImageClick('item16')} >
                      <img className='movie_img16' src={img16} alt=""  />
                  </div>
                  
               </div>
               {selectedItem === 'item16' && (
           
           <div className='click_main1002'>
           <IoMdClose className='close002' onClick={handleCloseClick} />
              
               <div className='video_div1002'>
               {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
   
               <video className='video1002' preload='none' autoPlay  loop ref={videoRef} 
               onClick={handlePlayClick} >
                  <source src={Video} type="video/mp4"/>
                </video>
                <button className='play002' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
              </div>
   
              <div className='cont_main1002'>
             
                 <div className='video_cont1002'>
                    <div className='main_match1002'>
                          <h4 className='match1002'>98% Match</h4>
                          <h4>2024</h4>
                          <h4>1 Season</h4>
                          <h5 className='hd002'>HD</h5>
                    </div>
                    <div className='main_ua002'>
                          <h4 className='ua002'>U/A 16+</h4>
                          <h5>mature themes, substances, tobacco use, violence</h5>
                    </div>
                    <div className='episode1002'>
                          <h3>#1 in TV Shows Today</h3>
                          <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                          <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                    </div>
              </div>
   
              <div className='cast002'>
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
             
        <div className='main22'>
                 <div className='main_img22' onClick={() => handleImageClick('item22')} >
                      <img className='movie_img17' src={img17} alt=""  />
                  </div>
                  
               </div>
               {selectedItem === 'item22' && (
           
           <div className='click_main22'>
           <IoMdClose className='close22' onClick={handleCloseClick} />
              
               <div className='video_div22'>
               {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
   
               <video className='video22' preload='none' autoPlay  loop ref={videoRef} 
               onClick={handlePlayClick} >
                  <source src={Video} type="video/mp4"/>
                </video>
                <button className='play22' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
              </div>
   
              <div className='cont_main22'>
             
                 <div className='video_cont22'>
                    <div className='main_match22'>
                          <h4 className='match22'>98% Match</h4>
                          <h4>2024</h4>
                          <h4>1 Season</h4>
                          <h5 className='hd22'>HD</h5>
                    </div>
                    <div className='main_ua22'>
                          <h4 className='ua22'>U/A 16+</h4>
                          <h5>mature themes, substances, tobacco use, violence</h5>
                    </div>
                    <div className='episode22'>
                          <h3>#1 in TV Shows Today</h3>
                          <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                          <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                    </div>
              </div>
   
              <div className='cast22'>
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
             
             <div className='main32'>
                      <div className='main_img32' onClick={() => handleImageClick('item32')} >
                           <img className='movie_img18' src={img18} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item32' && (
                
                <div className='click_main32'>
                <IoMdClose className='close32' onClick={handleCloseClick} />
                   
                    <div className='video_div32'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video32' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play32' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main32'>
                  
                      <div className='video_cont32'>
                         <div className='main_match32'>
                               <h4 className='match32'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd32'>HD</h5>
                         </div>
                         <div className='main_ua32'>
                               <h4 className='ua32'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode32'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast32 '>
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
             
             <div className='main42'>
                      <div className='main_img42' onClick={() => handleImageClick('item42')} >
                           <img className='movie_img19' src={img19} alt=""  />
                       </div>
                       
                    </div>
               {selectedItem === 'item42' && (
                
                <div className='click_main42'>
                <IoMdClose className='close42' onClick={handleCloseClick} />
                   
                    <div className='video_div42'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video42' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play42' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main42'>
                  
                      <div className='video_cont42'>
                         <div className='main_match42'>
                               <h4 className='match42'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd42'>HD</h5>
                         </div>
                         <div className='main_ua42'>
                               <h4 className='ua42'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode42'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast42'>
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
       
             
          <div className='main52'>
                      <div className='main_img52' onClick={() => handleImageClick('item52')} >
                           <img className='movie_img20' src={img20} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item52' && (
                
                <div className='click_main52'>
                <IoMdClose className='close52' onClick={handleCloseClick} />
                   
                    <div className='video_div52'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video52' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play52' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main52'>
                  
                      <div className='video_cont52'>
                         <div className='main_match52'>
                               <h4 className='match52'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd52'>HD</h5>
                         </div>
                         <div className='main_ua52'>
                               <h4 className='ua52'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode52'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast52'>
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
        
               <div className='main62'>
                      <div className='main_img62' onClick={() => handleImageClick('item62')} >
                           <img className='movie_img21' src={img21} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item62' && (
                
                <div className='click_main62'>
                <IoMdClose className='close62' onClick={handleCloseClick} />
                   
                    <div className='video_div62'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video62' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play62' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main62'>
                  
                      <div className='video_cont62'>
                         <div className='main_match62'>
                               <h4 className='match62'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd62'>HD</h5>
                         </div>
                         <div className='main_ua62'>
                               <h4 className='ua62'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode62'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast62'>
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
        
            
               <div className='main72'>
                      <div className='main_img72' onClick={() => handleImageClick('item72')} >
                           <img className='movie_img22' src={img22} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item72' && (
                
                <div className='click_main72'>
                <IoMdClose className='close72' onClick={handleCloseClick} />
                   
                    <div className='video_div72'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video72' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play72' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main72'>
                  
                      <div className='video_cont72'>
                         <div className='main_match72'>
                               <h4 className='match72'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd72'>HD</h5>
                         </div>
                         <div className='main_ua72'>
                               <h4 className='ua72'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode72'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast72'>
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
        
              
        <div className='main82'>
                      <div className='main_img82' onClick={() => handleImageClick('item82')} >
                           <img className='movie_img23' src={img23} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item82' && (
                
                <div className='click_main82'>
                <IoMdClose className='close82' onClick={handleCloseClick} />
                   
                    <div className='video_div82'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video82' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play82' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main82'>
                  
                      <div className='video_cont82'>
                         <div className='main_match82'>
                               <h4 className='match82'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd82'>HD</h5>
                         </div>
                         <div className='main_ua82'>
                               <h4 className='ua82'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode82'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast82'>
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
        
             
        <div className='main92'>
                      <div className='main_img92' onClick={() => handleImageClick('item92')} >
                           <img className='movie_img24' src={img24} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item92' && (
                
                <div className='click_main92'>
                <IoMdClose className='close92' onClick={handleCloseClick} />
                   
                    <div className='video_div92'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video92' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play92' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main92'>
                  
                      <div className='video_cont92'>
                         <div className='main_match92'>
                               <h4 className='match92'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd92'>HD</h5>
                         </div>
                         <div className='main_ua92'>
                               <h4 className='ua92'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode92'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast92'>
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
       
         
        <div className='main102'>
                      <div className='main_img102' onClick={() => handleImageClick('item102')} >
                           <img className='movie_img25' src={img25} alt=""  />
                       </div>
                       
                    </div>
                    {selectedItem === 'item102' && (
                
                <div className='click_main102'>
                <IoMdClose className='close102' onClick={handleCloseClick} />
                   
                    <div className='video_div102'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video102' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play102' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main102'>
                  
                      <div className='video_cont102'>
                         <div className='main_match102'>
                               <h4 className='match102'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd102'>HD</h5>
                         </div>
                         <div className='main_ua102'>
                               <h4 className='ua102'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode102'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast102'>
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
       
        <div className='main_img112' onClick={() => handleImageClick('item112')} >
                           <img className='movie_img26' src={img26} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item112' && (
                
                <div className='click_main112'>
                <IoMdClose className='close112' onClick={handleCloseClick} />
                   
                    <div className='video_div112'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video112' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play112' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main112'>
                  
                      <div className='video_cont112'>
                         <div className='main_match112'>
                               <h4 className='match112'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd112'>HD</h5>
                         </div>
                         <div className='main_ua112'>
                               <h4 className='ua112'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode112'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast112'>
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
       
         
               <div className='main_img122' onClick={() => handleImageClick('item122')} >
                           <img className='movie_img27' src={img27} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item122' && (
                
                <div className='click_main122'>
                <IoMdClose className='close122' onClick={handleCloseClick} />
                   
                    <div className='video_div122'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video122' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play122' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main122'>
                  
                      <div className='video_cont122'>
                         <div className='main_match122'>
                               <h4 className='match122'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd122'>HD</h5>
                         </div>
                         <div className='main_ua122'>
                               <h4 className='ua122'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode122'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast122'>
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
       
             
         <div className='main_img132' onClick={() => handleImageClick('item132')} >
                           <img className='movie_img28' src={img28} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item132' && (
                
                <div className='click_main132'>
                <IoMdClose className='close132' onClick={handleCloseClick} />
                   
                    <div className='video_div132'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video132' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play132' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main132'>
                  
                      <div className='video_cont132'>
                         <div className='main_match132'>
                               <h4 className='match132'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd132'>HD</h5>
                         </div>
                         <div className='main_ua132'>
                               <h4 className='ua132'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode132'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast132'>
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
       
         
      <div className='main_img142' onClick={() => handleImageClick('item142')} >
                           <img className='movie_img29' src={img29} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item142' && (
                
                <div className='click_main142'>
                <IoMdClose className='close142' onClick={handleCloseClick} />
                   
                    <div className='video_div142'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video142' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play142' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main142'>
                  
                      <div className='video_cont142'>
                         <div className='main_match142'>
                               <h4 className='match142'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd142'>HD</h5>
                         </div>
                         <div className='main_ua142'>
                               <h4 className='ua142'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode142'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast142'>
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
       
         
         <div className='main_img152' onClick={() => handleImageClick('item152')} >
                           <img className='movie_img30' src={img30} alt=""  />
                       </div>
                       
               
                    {selectedItem === 'item152' && (
                
                <div className='click_main152'>
                <IoMdClose className='close152' onClick={handleCloseClick} />
                   
                    <div className='video_div152'>
                    {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
        
                    <video className='video152' preload='none' autoPlay  loop ref={videoRef} 
                    onClick={handlePlayClick} >
                       <source src={Video} type="video/mp4"/>
                     </video>
                     <button className='play152' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                   </div>
        
                   <div className='cont_main152'>
                  
                      <div className='video_cont152'>
                         <div className='main_match152'>
                               <h4 className='match152'>98% Match</h4>
                               <h4>2024</h4>
                               <h4>1 Season</h4>
                               <h5 className='hd152'>HD</h5>
                         </div>
                         <div className='main_ua152'>
                               <h4 className='ua152'>U/A 16+</h4>
                               <h5>mature themes, substances, tobacco use, violence</h5>
                         </div>
                         <div className='episode152'>
                               <h3>#1 in TV Shows Today</h3>
                               <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                               <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                         </div>
                   </div>
        
                   <div className='cast152'>
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
