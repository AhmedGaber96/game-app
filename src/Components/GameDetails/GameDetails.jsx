import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function GameDetails() {


    useEffect(()=>{
        
        
        getGameDetails()
       

    },[])
    let params= useParams();
    const [onegame, setonegame] = useState(null)
 async function getGameDetails(){
   
    let x = params.id
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: x},
        headers: {
          'X-RapidAPI-Key': 'ff96dee780msh653994497597adap14cf1djsn60523c464c4c',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`,options)
      let yd = data;
     setonegame(yd);
     
     console.log(data)
    ;

}
   
  return (<>
  {onegame?<div className='container bigmargin'>
    <div className="row">
        <div className="col-md-4">
            <img src={onegame?.thumbnail} alt=""  className='rounded-2 w-100'/>
            <div className='d-flex justify-content-between mt-3'>
                <span className='px-3 rounded-3 dark-span mb-3 py-2 cursor'>Free</span>
                <span className='px-3 w-75 rounded-3 btn btn-primary mb-3 py-2 cursor'><a href={onegame?.game_url} type='button' target="_blank">Play Now <i className='fas fa-sign-out-alt'></i></a></span>
            </div>
            
        </div>
        <div className="col-md-8 ">
            <h1>{onegame?.title }</h1>
            <h5>About {onegame?.title }</h5>
            <p>{onegame?.description}</p>
           

            {onegame?.platform==="Web Browser"? <>
            </> : <>
            <ul className='list-unstyled'>
          
         
          <h5>Minimum System Requirements</h5>
           <li> <span className='fw-bold'>Graphic : </span> {onegame?.minimum_system_requirements.graphics} </li>
              <li><span className='fw-bold'>memory : </span> {onegame?.minimum_system_requirements.memory}</li>
              <li><span className='fw-bold'>os : </span> {onegame?.minimum_system_requirements.os}</li>
              <li> <span className='fw-bold'>processor  : </span>{onegame?.minimum_system_requirements.processor }</li>
              <li><span className='fw-bold'>storage: </span> {onegame?.minimum_system_requirements.storage  }</li>
              
          </ul>
            </>}

      




            
            <h4>{onegame?.title} Screenshots</h4>
            <OwlCarousel items='1' autoplay={1} loop={true} className="owl-theme" dots={false}    >
                <div className='item '>
                    <img src={onegame?.screenshots[0].image} alt=""  />

                </div>
                <div className='item '>
                    <img src={onegame?.screenshots[1].image} alt=""  />

                </div>
                <div className='item'>
                    <img src={onegame?.screenshots[2].image} alt=""  />
                </div>
            </OwlCarousel>
            <div className='mt-3 mb-4'>
              <h2 className='mb-3'>Additional Information</h2>
              <div className="row">
                <div className="col-6 col-md-4">
                  <span className='text-muted'>Title</span>
                  <p>{onegame.title}</p>
                  
                </div>
                <div className="col-6 col-md-4">
                  <span className='text-muted'>Developer</span>
                  <p>{onegame.developer}</p>

                </div>
                <div className="col-6 col-md-4">
                  <span className='text-muted'>publisher</span>
                  <p>{onegame.publisher}</p>

                </div>
                <div className="col-6 col-md-4">
                  <span className='text-muted'>Release Date</span>
                  <p>{onegame.release_date}</p>

                </div>
                <div className="col-6 col-md-4">
                  <span className='text-muted'>Genre</span>
                  <p>{onegame.genre}</p>

                </div>
                <div className="col-6 col-md-4">
                  <span className='text-muted'>Platform</span>
                  <p>{onegame.platform==='Web Browser'? <>
                   <i className='fas fa-window-maximize'></i> Web Browser
                  </>:<>
                  <i className='fab fa-windows '></i> Windows

                  </>}</p>

                </div>

              </div>

            </div>
        </div>
    </div>
    

  </div>:<div className='d-flex justify-content-center align-items-center position-fixed bg-dark top-0 start-0 end-0 bottom-0'>
    <i class="fa-solid fa-gamepad fa-spin fs-1 "></i>
    </div>}
  
  
  
  
  </>


  )
}
