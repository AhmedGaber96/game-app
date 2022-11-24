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
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            <li><Link className="dropdown-item" to={`/platform/${pcx}`}>pc</Link></li>
            <li><Link className="dropdown-item" to={`/platformm/${pcy}`}>browser</Link></li>

          </ul>
        </li>
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          sort-by
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/release-date/${release}`}>release-date</Link></li>
            <li><Link className="dropdown-item" to={`/alphabetical/${alphabetical}`}>alphabetical</Link></li>
          </ul>
        </li>
        
      </ul>:<></>}
    </div>
    {userData?<button className='btn btn-outline-info' onClick={logOut}>Logout</button>:<>
    <Link href="" className='d-inline-block mx-4 text-secondary' to='/'>login</Link>
    
    <button className='btn btn-outline-info'><Link to='/register'>join free</Link></button>
    </>}
    
  </div>
</nav>
   
   
   </div>
 
}




