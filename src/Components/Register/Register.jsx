import React, { useState } from 'react'
import img1 from '../../img/gaming.ebaf2ffc84f4451d.jpg'
import  Axios  from 'axios';
import Joi from 'joi'; 
import { useNavigate } from 'react-router-dom';
export default function Register() {
  let navigate = useNavigate();
  const [error,setError] = useState('');
  const [errorlist,setErrorlist] = useState([ ]);
  const[load,setload]= useState(false)
  const [user,setUser] = useState({
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    password:'',
})  
async function sendUserDataToApi(){
  let{data}= await Axios.post(` https://route-egypt-api.herokuapp.com/signup` , user)
    if(data.message==='success'){
        setload(false)
        console.log(data.message);
        navigate('/')

     }

     else{
        setload(false)
        setError(data.message)
     }

}

function getDataFromUser(e){
       
  let myUser= {...user};
  myUser[e.target.name]= e.target.value
  setUser(myUser)
  }

  function validation(){
    let scheme =  Joi.object({
        first_name:Joi.string().min(3).max(8).required(),
        last_name:Joi.string().min(3).max(8).required(),
        age:Joi.number().min(16).max(80).required(),
        email:Joi.string().email({tlds : {allow:['com','net']} }),
        password:Joi.string().pattern(/^[A-Z][a-z]{3,8}$/)
    })
   return scheme.validate(user,{abortEarly:false});
}

function submiteFromRigst(e){

  e.preventDefault();
  setload(true)
  
 let valll =  validation()
 if(valll.error){
  setErrorlist(valll.error.details)

 }
 else{
  sendUserDataToApi();

 }



}










  return (
    <div className='bigmargin'>
        <div className="container secound-color p-0 my-5">
          <div className="row g-0">
            <div className="col-lg-6 d-none  m-0 d-lg-block imghight">
            </div>
            <div className="col-lg-6 text-center  p-3  ">
              <h3 className='h4 text-secondary mb-3 '>Create My Account!</h3>
              {error? <div className="alert alert-danger">
                {error}
            </div>:''}
              <form onSubmit={submiteFromRigst}>
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" name='first_name' id='first_name' className='form-control form-bg' placeholder="First Name" onChange={getDataFromUser} />
                    <p className='text-danger'>
                    {errorlist.filter((error)=>error.context.label==='first_name')[0]?.message}
                </p>
                  </div>
                  <div className="col-sm-6">
                    <input type="text" name='last_name' id='last_name' className='form-control form-bg' placeholder="Second Name" onChange={getDataFromUser} />
                    <p className='text-danger'>
                    {errorlist.filter((error)=>error.context.label==='last_name')[0]?.message}

                </p>
                  </div>
                  <div className="col-12 mt-3">
                  <input type="email" className='form-control form-bg' name='email' id='email' placeholder="Email Address" onChange={getDataFromUser} />
                  <p className='text-danger'>
                    {errorlist.filter((error)=>error.context.label==='email')[0]?.message}

                </p>
                  </div>
                  <div className="col-12 mt-3">
                  <input type="number" className='form-control form-bg' name='age' id='age' placeholder="age" onChange={getDataFromUser} />
                  <p className='text-danger'>
                    {errorlist.filter((error)=>error.context.label==='age')[0]?.message}
                </p>
                  </div>
                  <div className="col-12 mt-3">
                  <input type="password" className='form-control form-bg' name='password' id='password' placeholder="password" onChange={getDataFromUser} />
                  <p className='text-danger'>
                    {errorlist.filter((error)=>error.context.label==='password')[0]?.message}
                </p>
                  </div>
                  <div className="col-12 mt-3">
                    <button className='btn btn-outline-secondary text-white w-100' type='submit'>{load? <i className='fas fa-spinner fa-spin'></i>:'Create Account'}</button> 
                  </div>
                  <div className="col-12 mt-3 text-muted small border-bottom border-secondary">
                  <p className='d-inline small'>This site is protected by reCAPTCHA and the Google </p> 
                  <a href="https://policies.google.com/privacy" className='text-secondary text-decoration-underline small '>Privacy Policy</a>
                  <p className='d-inline small'> and </p>
                  <a href="https://policies.google.com/terms" className='text-secondary text-decoration-underline small '>Terms of Service</a>
                  <p className='d-inline small'>  apply.</p>
                  </div>

                </div>

              </form>
            </div>
          </div>

        </div>
    </div>
  )
}
