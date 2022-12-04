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
import SortBy from './Components/SortBy/SortBy';
import Categories from './Components/Categories/Categories';
import PageError from './Components/PageError/PageError';
import Gradroute from './Components/Gardroute/Gradroute';




function App() {
  const [userData, setuserData] = useState(null)
  let routers = createBrowserRouter([
    {path:'/',element:<Layout userData={userData} logOut={logOut}/>,children:[
      {path:'register',element:<Register/>},
      {path:'home',element: <Gradroute userData={userData} saveUserData={saveUserData}><Home userData={userData}/></Gradroute> },
      {path:'showall',element: <Gradroute userData={userData} saveUserData={saveUserData}><Showall userData={userData}/></Gradroute> },
      {path:'Platform/:pppp',element: <Gradroute userData={userData} saveUserData={saveUserData}><Platform userData={userData}/></Gradroute> },
      {path:'sort-by/:fff',element: <Gradroute userData={userData} saveUserData={saveUserData}><SortBy userData={userData}/></Gradroute> },
      {path:'categories/:ccc',element: <Gradroute userData={userData} saveUserData={saveUserData}><Categories userData={userData}/></Gradroute> },
      {path:'gamedetails/:id',element:<Gradroute userData={userData} saveUserData={saveUserData}><GameDetails userData={userData} /></Gradroute>},
      {index:true,element:<Login saveUserData={saveUserData}/>},
      {path:'*',element:<PageError/>},
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




