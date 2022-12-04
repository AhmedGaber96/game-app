import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

export default function Showall() {
  useEffect(()=>{
    getsllGame()
    
},[])

function displayMore(){
  
let d= document.querySelector('.but');
let lastcon= document.querySelector('.lastt');
d.classList.add('d-none')
lastcon.classList.remove('d-none','d-block')
console.log(d);
}

  const [allGame, setallGame] = useState([])
  const [some, setsome] = useState([])

  async function getsllGame(){
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'X-RapidAPI-Key': 'ff96dee780msh653994497597adap14cf1djsn60523c464c4c',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
      };
      let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,options)
      let someData = data.splice(0,20)
      setsome(someData)
      console.log(data);
      console.log(someData);
      setallGame(data)

 
}



  return (<>
  {some.length==0? <>
    <div className='d-flex justify-content-center align-items-center position-fixed bg-dark top-0 start-0 end-0 bottom-0'>
    <i class="fa-solid fa-gamepad fa-spin fs-1 "></i>
    </div>
  </>:<>
  <div className="container bigmargin text-center">
      <div className="row gy-3">
      {some.map((some,index)=> <div className="col-md-3" key={index}>
                <Link to={`/gamedetails/${some?.id}`}>
                  
                  <Card some={some}/>

             
                
                </Link>
            </div>)}
      </div >
      <button className='btn btn-danger  mt-4 but' onClick={displayMore}>More Game></button>
    </div>
    <div className="container lastt d-none mt-3">
    <div className="row gy-3">
      {allGame.map((some,index)=> <div className="col-md-3" key={index}>
                <Link to={`/gamedetails/${some?.id}`}>
                <Card some={some}/>

               
                
                </Link>
            </div>)}
      </div >


    </div>

  </>}
    
    </>
  )
}