import React, { useState } from "react";
import Appbar from "../Components/Navbar/Navbar.jsx";
import styles from "./Pages.module.css";
import {AiOutlineMail} from "react-icons/ai"
import { RiLockPasswordFill} from "react-icons/ri"
import {BsFillTelephoneFill} from "react-icons/bs"
import {FaUserAlt} from 'react-icons/fa'
import {IoMdMail} from "react-icons/io"
import { useNavigate } from "react-router-dom";
import axios from 'axios' ; 
import {usersignup} from "../Slices/SignUpSlice.jsx"

const Login = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[phone,setPhone] = useState("")
  const[password,setPassword] = useState("")
  const redirect = useNavigate()

  const signDetails = {
    name,
    email,
    phone,
    password
  }
  const signUpData = ()=>{
      console.log("func is working")
      console.log(signDetails)
    axios({
      method: "post",
      url: "http://localhost:8000/api/user/signup",
      data:{
       ...signDetails
      }
    })
    .then((res)=> {
        console.log(res)
        redirect('/')
    })
    .catch((err)=> console.log(err))
  }
  
  const gotoLogin = ()=>{
    redirect('/')
  }
  
  return (
    <>
      <div className={styles.login}>
        <Appbar />
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="col-md-6 ">
              <div className={`${styles.form}`}>
                <div>
                  <div >

                  <label htmlFor="exampleInputEmail1" className={`${styles.label} form-label fs-5 fw-bold`}>
                    Full Name
                  </label>
                  </ div>
                  <span  >
                      <FaUserAlt  className={`${styles.loginIcon} relative`}/>
                    </span>
                  <input
                    type="string"
                    className={`${styles.signupinput} form-control` }
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                 
                </div>
                <div className=" mt-1">
                  
                  <label htmlFor="exampleInputEmail1" className={`${styles.label} form-label fs-5 fw-bold`}>
                    Email
                  </label>
                  <span >
                      <IoMdMail className={`${styles.loginIcon} relative`}/>
                    </span>
                  <input
                    type="email"
                    className={`${styles.signupinput} form-control` }
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                 
                </div>
                <div>
                  <label htmlFor="exampleInputEmail1" className={`${styles.label} form-label fs-5 fw-bold`}>
                    Phone
                  </label>
                  <span >
                      <BsFillTelephoneFill className={`${styles.loginIcon} relative`}/>
                    </span>
                  <input
                    type="text"
                    className={`${styles.signupinput} form-control` }
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                    />
                 
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="">
                  <label htmlFor="exampleInputPassword1" className={`${styles.label} form-label fs-5  fw-bold`}>
                    Password
                  </label>
                  <span  >
                      <RiLockPasswordFill className={`${styles.loginIcon} relative`}/>
                    </span>
                  <input
                    type="password"
                    className={`${styles.signupinput} ${styles.signpassInput} form-control` }
                    // id="exampleInputPassword1"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
               
                <button
                  className={` ${styles.loginBtn} btn text-light  mt-4 mb-2 fw-bold fs-4 w-100 bg-purple-900`}
                  onClick={()=> signUpData()}
                >
                  SignUp
                </button>
                <div className="mb-3">
                    <h5 className= { `${styles.des} fw-bold  fs-4 text-center`}>Already have an account ?  <span><button onClick={()=>gotoLogin()} className="bg-purple-900 text-light px-3 py-1">Log in</button></span></h5>
                </div>
              </div>
            </div>
        

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
