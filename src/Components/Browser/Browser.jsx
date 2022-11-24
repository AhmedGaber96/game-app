import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



export default function Platform() {
    let params= useParams();
    let gamepath= params.sss;

    useEffect(()=>{
        getplatform()
        
    },[])
    const [platform, setallGame] = useState([])
    const [someplatform, setsomeplatform] = useState([])
    function displayMore(){
  
        let d= document.querySelector('.but');
        let lastcon= document.querySelector('.lastt');
        d.classList.add('d-none')
        lastcon.classList.remove('d-none','d-block')
        console.log(d);
        }
        



  
    async function getplatform(){
      const options = {
        method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {platform: gamepath},
  headers: {
    'X-RapidAPI-Key': 'ff96dee780msh653994497597adap14cf1djsn60523c464c4c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
        };
        let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,options)
        let someData = data.splice(0,20)
        setsomeplatform(someData)
        console.log(data);
        console.log(someData);
        setallGame(data)
  
   
  }
  



















  
  return (<>
  {someplatform.length==0? <>
    <div className='d-flex justify-content-center align-items-center position-fixed bg-dark top-0 start-0 end-0 bottom-0'>
    <i class="fa-solid fa-gamepad fa-spin fs-1 "></i>
    </div>
  </> : <>
  <div className="container bigmargin text-center">
      <div className="row gy-3">
      {someplatform.map((someplatform,index)=> <div className="col-md-3" key={index}>
                <Link to={`/gamedetails/${someplatform?.id}`}>

                <div className="Card w-100 text-secondary shadow">
                    <img src={someplatform?.thumbnail} alt="" className='w-100' />
                    <div className='p-3 d-flex justify-content-between align-items-center'>
                    <h4>{someplatform?.title.split("").splice(0,10).join("")}</h4>
                    <span className='px-2 py-1 rounded-2 three-color text-white small'>Free</span>

                    </div>
                    


                </div>
                
                </Link>
            </div>)}
      </div >
      <button className='btn btn-danger  mt-4 but' onClick={displayMore}>More Game></button>
    </div>
    <div className="container lastt d-none mt-3">
    <div className="row gy-3">
      {platform.map((platform,index)=> <div className="col-md-3" key={index}>
                <Link to={`/gamedetails/${platform?.id}`}>

                <div className="Card w-100 text-secondary shadow">
                    <img src={platform?.thumbnail} alt="" className='w-100' />
                    <div className='p-3 d-flex justify-content-between align-items-center'>
                    <h4>{platform?.title.split("").splice(0,10).join("")}</h4>
                    <span className='px-2 py-1 rounded-2 three-color text-white small'>Free</span>

                    </div>
                    


                </div>
                
                </Link>
            </div>)}
      </div >


    </div>

  </> }
   
    </>
    

  
    )
}
