import React , {Children} from 'react'
import Login from '../Login/Login'


export default function Gradroute({userData,children,saveUserData}) {

    if(userData=== null){
        return <Login saveUserData={saveUserData} />
    }
    else{
        return children;
    }
 
}
