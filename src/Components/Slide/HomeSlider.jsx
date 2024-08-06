import React from 'react';
import './HomeSlider.css';
import img1 from '../../Assets/movie_img/img1.jpg';
import img2 from '../../Assets/movie_img/img2.webp';
import img3 from '../../Assets/movie_img/img3.webp';
import img4 from '../../Assets/movie_img/img4.webp';
import img5 from '../../Assets/movie_img/img5.webp';
import img6 from '../../Assets/movie_img/img6.webp';
import img7 from '../../Assets/movie_img/img7.webp';
import img8 from '../../Assets/movie_img/img8.webp';
import img9 from '../../Assets/movie_img/img9.webp';
import img10 from '../../Assets/movie_img/img10.webp';
import img11 from '../../Assets/movie_img/img11.webp';
import img12 from '../../Assets/movie_img/img12.webp';
import img13 from '../../Assets/movie_img/img13.jpg';
import img14 from '../../Assets/movie_img/img14.webp';
import img15 from '../../Assets/movie_img/img15.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Video from '../.'
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
    <div className='body'>

   
   <h3 className="movie_content " >Continue Watching for Kishore</h3>
   

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
         <div className='main1'>
              <div className='main_img1' onClick={() => handleImageClick('item1')} >
                   <img className='movie_img1' src={img1} alt=""  />
               </div>
               
            </div>
            {selectedItem === 'item1' && (
        
        <div className='click_main1'>
        <IoMdClose className='close' onClick={handleCloseClick} />
           
            <div className='video_div1'>
            {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}

            <video className='video1' preload='none' autoPlay  loop ref={videoRef} 
            onClick={handlePlayClick} >
               <source src={Video} type="video/mp4"/>
             </video>
             <button className='play1' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
           </div>

           <div className='cont_main1'>
          
              <div className='video_cont1'>
                 <div className='main_match1'>
                       <h4 className='match1'>98% Match</h4>
                       <h4>2024</h4>
                       <h4>1 Season</h4>
                       <h5 className='hd'>HD</h5>
                 </div>
                 <div className='main_ua'>
                       <h4 className='ua'>U/A 16+</h4>
                       <h5>mature themes, substances, tobacco use, violence</h5>
                 </div>
                 <div className='episode1'>
                       <h3>#1 in TV Shows Today</h3>
                       <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                       <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                 </div>
           </div>

           <div className='cast'>
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
          
     <div className='main2'>
              <div className='main_img2' onClick={() => handleImageClick('item2')} >
                   <img className='movie_img2' src={img2} alt=""  />
               </div>
               
            </div>
            {selectedItem === 'item2' && (
        
        <div className='click_main2'>
        <IoMdClose className='close2' onClick={handleCloseClick} />
           
            <div className='video_div2'>
            {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}

            <video className='video2' preload='none' autoPlay  loop ref={videoRef} 
            onClick={handlePlayClick} >
               <source src={Video} type="video/mp4"/>
             </video>
             <button className='play2' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
           </div>

           <div className='cont_main2'>
          
              <div className='video_cont2'>
                 <div className='main_match2'>
                       <h4 className='match2'>98% Match</h4>
                       <h4>2024</h4>
                       <h4>1 Season</h4>
                       <h5 className='hd2'>HD</h5>
                 </div>
                 <div className='main_ua2'>
                       <h4 className='ua2'>U/A 16+</h4>
                       <h5>mature themes, substances, tobacco use, violence</h5>
                 </div>
                 <div className='episode2'>
                       <h3>#1 in TV Shows Today</h3>
                       <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                       <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                 </div>
           </div>

           <div className='cast2'>
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
          
          <div className='main3'>
                   <div className='main_img3' onClick={() => handleImageClick('item3')} >
                        <img className='movie_img3' src={img3} alt=""  />
                    </div>
                    
                 </div>
                 {selectedItem === 'item3' && (
             
             <div className='click_main3'>
             <IoMdClose className='close3' onClick={handleCloseClick} />
                
                 <div className='video_div3'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video3' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play3' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main3'>
               
                   <div className='video_cont3'>
                      <div className='main_match3'>
                            <h4 className='match3'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd3'>HD</h5>
                      </div>
                      <div className='main_ua3'>
                            <h4 className='ua3'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode3'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast3'>
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
          
          <div className='main4'>
                   <div className='main_img4' onClick={() => handleImageClick('item4')} >
                        <img className='movie_img4' src={img4} alt=""  />
                    </div>
                    
                 </div>
            {selectedItem === 'item4' && (
             
             <div className='click_main4'>
             <IoMdClose className='close4' onClick={handleCloseClick} />
                
                 <div className='video_div4'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video4' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play4' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main4'>
               
                   <div className='video_cont4'>
                      <div className='main_match4'>
                            <h4 className='match4'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd4'>HD</h5>
                      </div>
                      <div className='main_ua4'>
                            <h4 className='ua4'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode4'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast4'>
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
    
          
       <div className='main5'>
                   <div className='main_img5' onClick={() => handleImageClick('item5')} >
                        <img className='movie_img5' src={img5} alt=""  />
                    </div>
                    
                 </div>
                 {selectedItem === 'item5' && (
             
             <div className='click_main5'>
             <IoMdClose className='close5' onClick={handleCloseClick} />
                
                 <div className='video_div5'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video5' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play5' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main5'>
               
                   <div className='video_cont5'>
                      <div className='main_match5'>
                            <h4 className='match5'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd5'>HD</h5>
                      </div>
                      <div className='main_ua5'>
                            <h4 className='ua5'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode5'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast5'>
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
     
            <div className='main6'>
                   <div className='main_img6' onClick={() => handleImageClick('item6')} >
                        <img className='movie_img6' src={img6} alt=""  />
                    </div>
                    
                 </div>
                 {selectedItem === 'item6' && (
             
             <div className='click_main6'>
             <IoMdClose className='close6' onClick={handleCloseClick} />
                
                 <div className='video_div6'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video6' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play6' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main6'>
               
                   <div className='video_cont6'>
                      <div className='main_match6'>
                            <h4 className='match6'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd6'>HD</h5>
                      </div>
                      <div className='main_ua6'>
                            <h4 className='ua6'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode6'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast6'>
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
     
         
            <div className='main7'>
                   <div className='main_img7' onClick={() => handleImageClick('item7')} >
                        <img className='movie_img7' src={img7} alt=""  />
                    </div>
                    
                 </div>
                 {selectedItem === 'item7' && (
             
             <div className='click_main7'>
             <IoMdClose className='close7' onClick={handleCloseClick} />
                
                 <div className='video_div7'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video7' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play7' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main7'>
               
                   <div className='video_cont7'>
                      <div className='main_match7'>
                            <h4 className='match7'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd7'>HD</h5>
                      </div>
                      <div className='main_ua7'>
                            <h4 className='ua7'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode7'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast7'>
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
     
           
     <div className='main8'>
                   <div className='main_img8' onClick={() => handleImageClick('item8')} >
                        <img className='movie_img8' src={img8} alt=""  />
                    </div>
                    
                 </div>
                 {selectedItem === 'item8' && (
             
             <div className='click_main8'>
             <IoMdClose className='close8' onClick={handleCloseClick} />
                
                 <div className='video_div8'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video8' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play8' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main8'>
               
                   <div className='video_cont8'>
                      <div className='main_match8'>
                            <h4 className='match8'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd8'>HD</h5>
                      </div>
                      <div className='main_ua8'>
                            <h4 className='ua8'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode8'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast8'>
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
     
          
     <div className='main9'>
                   <div className='main_img9' onClick={() => handleImageClick('item9')} >
                        <img className='movie_img9' src={img9} alt=""  />
                    </div>
                    
                 </div>
                 {selectedItem === 'item9' && (
             
             <div className='click_main9'>
             <IoMdClose className='close9' onClick={handleCloseClick} />
                
                 <div className='video_div9'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video9' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play9' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main9'>
               
                   <div className='video_cont9'>
                      <div className='main_match9'>
                            <h4 className='match9'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd9'>HD</h5>
                      </div>
                      <div className='main_ua9'>
                            <h4 className='ua9'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode9'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast9'>
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
    
      
     <div className='main10'>
                   <div className='main_img10' onClick={() => handleImageClick('item10')} >
                        <img className='movie_img10' src={img10} alt=""  />
                    </div>
                    
                 </div>
                 {selectedItem === 'item10' && (
             
             <div className='click_main10'>
             <IoMdClose className='close10' onClick={handleCloseClick} />
                
                 <div className='video_div10'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video10' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play10' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main10'>
               
                   <div className='video_cont10'>
                      <div className='main_match10'>
                            <h4 className='match10'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd10'>HD</h5>
                      </div>
                      <div className='main_ua10'>
                            <h4 className='ua10'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode10'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast10'>
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
    
     <div className='main_img11' onClick={() => handleImageClick('item11')} >
                        <img className='movie_img11' src={img11} alt=""  />
                    </div>
                    
            
                 {selectedItem === 'item11' && (
             
             <div className='click_main11'>
             <IoMdClose className='close11' onClick={handleCloseClick} />
                
                 <div className='video_div11'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video11' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play11' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main11'>
               
                   <div className='video_cont11'>
                      <div className='main_match11'>
                            <h4 className='match11'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd11'>HD</h5>
                      </div>
                      <div className='main_ua11'>
                            <h4 className='ua11'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode11'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast11'>
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
    
      
            <div className='main_img12' onClick={() => handleImageClick('item12')} >
                        <img className='movie_img12' src={img12} alt=""  />
                    </div>
                    
            
                 {selectedItem === 'item12' && (
             
             <div className='click_main12'>
             <IoMdClose className='close12' onClick={handleCloseClick} />
                
                 <div className='video_div12'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video12' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play12' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main12'>
               
                   <div className='video_cont12'>
                      <div className='main_match12'>
                            <h4 className='match12'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd12'>HD</h5>
                      </div>
                      <div className='main_ua12'>
                            <h4 className='ua12'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode12'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast12'>
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
    
          
      <div className='main_img13' onClick={() => handleImageClick('item13')} >
                        <img className='movie_img13' src={img13} alt=""  />
                    </div>
                    
            
                 {selectedItem === 'item13' && (
             
             <div className='click_main13'>
             <IoMdClose className='close13' onClick={handleCloseClick} />
                
                 <div className='video_div13'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video13' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play13' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main13'>
               
                   <div className='video_cont13'>
                      <div className='main_match13'>
                            <h4 className='match13'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd13'>HD</h5>
                      </div>
                      <div className='main_ua13'>
                            <h4 className='ua13'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode13'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast13'>
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
    
      
   <div className='main_img14' onClick={() => handleImageClick('item14')} >
                        <img className='movie_img14' src={img14} alt=""  />
                    </div>
                    
            
                 {selectedItem === 'item14' && (
             
             <div className='click_main14'>
             <IoMdClose className='close14' onClick={handleCloseClick} />
                
                 <div className='video_div14'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video14' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play14' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main14'>
               
                   <div className='video_cont14'>
                      <div className='main_match14'>
                            <h4 className='match14'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd14'>HD</h5>
                      </div>
                      <div className='main_ua14'>
                            <h4 className='ua14'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode14'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast14'>
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
    
      
      <div className='main_img15' onClick={() => handleImageClick('item15')} >
                        <img className='movie_img15' src={img15} alt=""  />
                    </div>
                    
            
                 {selectedItem === 'item15' && (
             
             <div className='click_main15'>
             <IoMdClose className='close15' onClick={handleCloseClick} />
                
                 <div className='video_div15'>
                 {/* <iframe className='video1'  src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}
     
                 <video className='video15' preload='none' autoPlay  loop ref={videoRef} 
                 onClick={handlePlayClick} >
                    <source src={Video} type="video/mp4"/>
                  </video>
                  <button className='play15' onClick={handlePlayClick} ><FaCirclePlay />Play</button>
                </div>
     
                <div className='cont_main15'>
               
                   <div className='video_cont15'>
                      <div className='main_match15'>
                            <h4 className='match15'>98% Match</h4>
                            <h4>2024</h4>
                            <h4>1 Season</h4>
                            <h5 className='hd15'>HD</h5>
                      </div>
                      <div className='main_ua15'>
                            <h4 className='ua15'>U/A 16+</h4>
                            <h5>mature themes, substances, tobacco use, violence</h5>
                      </div>
                      <div className='episode15'>
                            <h3>#1 in TV Shows Today</h3>
                            <h3>S1:E1 "Mallikajaan - The Queen of Heeramandi"</h3>
                            <h5>As Mallikajaan reigns over her courtesans, rebellion grows on the streets. Alamzeb has her first brush with love. Wali shares key information with Bibbo.</h5>
                      </div>
                </div>
     
                <div className='cast15'>
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