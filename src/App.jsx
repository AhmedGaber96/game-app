import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate, Router} from 'react-router-dom';
import { Children, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout'
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import jwtDecode from 'jwt-decode';
import Home from './Components/Home/Home';
import GameDetails from './Components/GameDetails/GameDetails';
import Showall from './Components/Showall/Showall';
import Platform from './Components/Platform/Platform';
import Browser from './Components/Browser/Browser'
import RelasDate from './Components/RelaseDate/RelasDate';
import Alphabetical from './Components/Alphabetical/Alphabetical'
function App() {
  const [userData, setuserData] = useState(null)
  let routers = createBrowserRouter([
    {path:'/',element:<Layout userData={userData} logOut={logOut}/>,children:[
      {path:'register',element:<Register/>},
      {path:'home',element:<Home/>},
      {path:'showall',element:<Showall/>},
      {path:'Platform/:pppp',element:<Platform/>},
      {path:'Platformm/:sss',element:<Browser/>},
      {path:'release-date/:fff',element:<RelasDate/>},
      {path:'alphabetical/:gg',element:<Alphabetical/>},
      {index:true,element:<Login saveUserData={saveUserData}/>},
      {path:'gamedetails/:id',element:<GameDetails saveUserData={saveUserData}/>},
    ]} 
  ])

useEffect(()=>{
  if(localStorage.getItem('usertoken')!==null)
  {
    saveUserData()
  }
},[])

  function saveUserData(){
    let decode = localStorage.getItem('usertoken');
    let decodeToken = jwtDecode(decode)
    setuserData(decodeToken)

  }

  function logOut(){
    localStorage.removeItem('usertoken');
    setuserData(null);
    return <Navigate to='/'/>
  }
  
  return(<>
  <RouterProvider router={routers}/>
  </>);
}

export default App;




