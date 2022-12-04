import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../img/logo.png'

export default function Navbar({userData,logOut}) {
  let pcx='pc';
  let pcy='browser';
  let release = 'release-date'
  let alphabetical = 'alphabetical'

  return <div>
  <nav className="navbar  navbar-expand-lg Navbar_bg navbar-dark fixed-top start-0 end-0 top-0 w-100  ">
  <div className="container px-2">
    <Link className="navbar-brand logow d-flex justify-content-center align-items-center" to='/home'> <img src={img1} className="logowidth p-0" alt="" srcset="" />Gameover</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    {userData?<>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to='/showall'>All</Link>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Platforms
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/platform/pc`}>pc</Link></li>
            <li><Link className="dropdown-item" to={`/platform/browser`}>browser</Link></li>

          </ul>
        </li>
        
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          sort-by
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/sort-by/release-date`}>release-date</Link></li>
            <li><Link className="dropdown-item" to={`/sort-by/popularity`}>popularity</Link></li>
            <li><Link className="dropdown-item" to={`/sort-by/alphabetical`}>alphabetical</Link></li>
            <li><Link className="dropdown-item" to={`/sort-by/relevance`}>relevance</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/categories/racing`}>racing</Link></li>
            <li><Link className="dropdown-item" to={`/categories/sports`}>sports</Link></li>
            <li><Link className="dropdown-item" to={`/categories/social`}>social</Link></li>
            <li><Link className="dropdown-item" to={`/categories/shooter`}>shooter</Link></li>
            <li><Link className="dropdown-item" to={`/categories/open-world`}>open-world</Link></li>
            <li><Link className="dropdown-item" to={`/categories/zombie`}>zombie</Link></li>
            <li><Link className="dropdown-item" to={`/categories/fantasy`}>fantasy</Link></li>
            <li><Link className="dropdown-item" to={`/categories/action-rpg`}>action-rpg</Link></li>
            <li><Link className="dropdown-item" to={`/categories/action`}>action</Link></li>
            <li><Link className="dropdown-item" to={`/categories/flight`}>flight</Link></li>
            <li><Link className="dropdown-item" to={`/categories/battle-royale`}>battle-royale</Link></li>
          </ul>
        </li>
        
      </ul>
    </div>





    
      <button className='btn btn-outline-info' onClick={logOut}>Logout</button>
    </>
    :<>


    <Link href="" className='d-inline-block ms-auto  text-secondary' to='/'>login</Link>
    
    <button className='btn btn-outline-info ms-4'><Link to='/register'>join free</Link></button>
    </>}
    
  </div>
</nav>
   
   
   </div>
 
}




