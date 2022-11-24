import  Axios  from 'axios';
import Joi from 'joi'; 
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../../img/logo.png'
export default function Login({saveUserData}) {
  
  let navigate = useNavigate();
    const [user,setUser] = useState({
        email:'',
        password:'',
    })  
///// variable/////////
    const [error,setError] = useState('');
    const [errorlist,setErrorlist] = useState([ ]);
    const[load,setload]= useState(false)
///// validationLogin function /////////
    function validationLogin(){
        let scheme =  Joi.object({
            email:Joi.string().email({tlds : {allow:['com','net']} }),
            password:Joi.string().pattern(/^[A-Z][a-z]{3,8}$/)
        })
       return scheme.validate(user,{abortEarly:false});
    }

//////// send data to api////////////
    async function sendUserDataToApi(){
     let{data}= await Axios.post(` https://route-egypt-api.herokuapp.com/signin` , user)
     if(data.message==='success'){
        setload(false)
        localStorage.setItem('usertoken',data.token)
        saveUserData()
        navigate('/home')
      

     }

     else{
        setload(false)
        setError(data.message)
     }
    }

    function submiteLoginForm(e){

        e.preventDefault();
        setload(true)
        
       let valll =  validationLogin()
       if(valll.error){
        setErrorlist(valll.error.details)

       }
       else{
        sendUserDataToApi();

       }

    

    }
///////// get user from user//////////
    function getDataFromUser(e){
       
    let myUser= {...user};
    myUser[e.target.name]= e.target.value
    setUser(myUser)
    
    }
  return (
    <div className='bigmargin'>
    <div className="container secound-color p-0 my-5 ">
      <div className="row g-0">
        <div className="col-lg-6 d-none  m-0 d-lg-block imghight">
        </div>
        <div className="col-lg-6 text-center  p-5 ">
            <img src={img} alt="" className='logo-login mb-1' />
          <h3 className='h4 text-secondary mb-1 '>Log in to GameOver</h3>
          {error? <div className="alert alert-danger">
            {error}
        </div>:''}
          <form onSubmit={submiteLoginForm}>
            <div className="row ">
              <div className="col-12 mt-1">
              <input type="email" className='form-control ' name='email' id='email' placeholder="Email Address" onChange={getDataFromUser} />
              <p className='text-danger'>
                {errorlist.filter((error)=>error.context.label==='email')[0]?.message}

            </p>
              </div>
              <div className="col-12 mt-1">
              <input type="password" className='form-control ' name='password' id='password' placeholder="password" onChange={getDataFromUser} />
              <p className='text-danger'>
                {errorlist.filter((error)=>error.context.label==='password')[0]?.message}
            </p>
              </div>
              <div className="col-12 mt-3">
                <button className='btn btn-outline-secondary text-white w-100 ' type='submit'>{load? <i className='fas fa-spinner fa-spin'></i>:'login'}</button> 
              </div>
              <div className='border-top border-secondary mt-3'>
                <a className='small text-primary' onClick={()=>alert('روح اعمل واحد جديد مفيش وقت للتفسير')}>Forgot Password?</a>

              </div>
        
            </div>

          </form>
        </div>
      </div>

    </div>
</div>
  );
}
