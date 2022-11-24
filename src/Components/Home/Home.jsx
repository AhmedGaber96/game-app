import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [game, setgame] = useState([])

    useEffect(()=>{
        getThreeGmae()
        
    },[])

async function getThreeGmae(){
    const options = {
        method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {'sort-by': 'popularity'},
  headers: {
    'X-RapidAPI-Key': 'ff96dee780msh653994497597adap14cf1djsn60523c464c4c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
      };
      let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,options)
      let x=data.splice(0,3);
        setgame(x)
 
}





  return (<>
  {game.length==0? <>
    <div className='d-flex justify-content-center align-items-center position-fixed bg-dark top-0 start-0 end-0 bottom-0'>
    <i class="fa-solid fa-gamepad fa-spin fs-1 "></i>
    </div>

  </> : <>
  <section className='find-track text-center mt-5'>
        <div className="container px-5">
            <h1 className='text-secondary'>Find & track the best <span className='headspan'> free-to-play </span> games!</h1>
            <p className='lead text-muted'>Track what you've played and search for what to play next! Plus get free premium loot! </p>
            <Link className='btn btn-outline-secondary text-muted ' to='/showall'>Browse Games</Link>
        </div>

    </section>

    <section>
        
        <div className="container my-5">
        <h3 className='text-muted'>
            <i className='fas fa-robot mr-2'></i>
            Personalized Recommendations
        </h3>
        <div className="row">
            {game.map((game,index)=> <div className="col-md-4" key={index}>
                <Link to={`/gamedetails/${game?.id}`}>

                <div className="Card w-100 text-secondary shadow">
                    <img src={game?.thumbnail} alt="" className='w-100' />
                    <div className='p-3 d-flex justify-content-between align-items-center'>
                    <h4>{game?.title}</h4>
                    <span className='px-2 py-1 rounded-2 three-color text-white small'>Free</span>

                    </div>
                    


                </div>
                
                </Link>
            </div>)}
           
        </div>
        </div>
     
    </section>

  </> }

  

      



    </>
    

  )
}
