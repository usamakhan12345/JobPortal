import React from "react";
import Appbar from "../Components/Navbar/Navbar.jsx";
import styles from "./Pages.module.css";
import {AiOutlineMail} from "react-icons/ai"
import { RiLockPasswordFill} from "react-icons/ri"
import { useNavigate } from "react-router-dom";
import {IoMdMail} from "react-icons/io"
import axios from "axios";
import { useState } from "react";


const Login = () => {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const redirect = useNavigate()
  const loginDetails = {
    email,
    password
  }
  const Userlogin = ()=>{
    axios({
      method: "post",
      url: "http://localhost:8000/api/user/login",
      data:{
       ...loginDetails
      }
    })
    .then((res)=> {
        console.log(res)
        console.log(res.data.token)
        localStorage.setItem('token',JSON.stringify(res.data.token))
        localStorage.setItem('id',JSON.stringify(res.data.id))
        redirect('/profile')
    })
    .catch((err)=> console.log(err))


  }
  const gotoSignUp = ()=>{
    redirect('/signup')
  }
  return (
    <>
      <div className={styles.login}>
        <Appbar />
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="col-md-6 ">
              <div>
                <div className=" mt-5">
                  <label htmlFor="exampleInputEmail1" className={`${styles.label} form-label fs-5 fw-bold`}>
                    Email address
                  </label>
                  <span >
                      <IoMdMail  className={`${styles.loginIcon} relative`}/>
                    </span>
                  <input
                    type="email"
                    className={`${styles.loginInput} form-control`}
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                 
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleInputPassword1" className={`${styles.label} form-label fs-5  fw-bold`}>
                    Password
                  </label>
                  <span >
                      <RiLockPasswordFill className={`${styles.loginIcon} relative`}/>
                    </span>
                  <input
                    type="password"
                    className={`${styles.loginInput} form-control `}
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mb-3"
                  />
                  <label className={`${styles.label} form-check-label mb-3 fw-bold`} htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className={` ${styles.loginBtn} btn text-light mb-3 fw-bold fs-4 w-100 bg-purple-900`}
                  onClick={()=> Userlogin()}
                >
                  Login
                </button>
                <div>
                    <h5 className={` ${styles.loginText} fw-bold text-light fs-4 text-center`}>Don't have an account ?  <span><button onClick={()=> gotoSignUp()} className="bg-purple-900 text-light px-3 py-1">Sign Up</button></span></h5>
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
