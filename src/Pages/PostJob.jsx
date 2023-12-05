import React, { useState } from 'react'
import styles from "./Pages.module.css"
import Appbar from "../Components/Navbar/Navbar.jsx";
import Loader from "../Components/Loader/Loader.jsx"
import {Toast , notify} from "../Components/Toast/Toast.jsx"
import moment from 'moment';
import axios from 'axios';


const PostJob = () => {
  const[company,setCompany] = useState("")
  const[salary,setSalary] = useState("")
  const[jobtype,setJobType] = useState("")
  const[position,setPosition] = useState("")
  const[details,setDetails] = useState("")
  const[address,setAddress] = useState("")
  const [show,setShowLoader] = useState(false)


  const UserJobPost = ()=>{
    console.log("func is working")
    const owner = JSON.parse(localStorage.getItem('id'))

    const postDetails = {
      salary,
      company,
      jobtype,
      position,
      details,
      address,
      owner,
      postTime : moment().startOf('minute').fromNow()   
      
    }
    console.log(postDetails)
    setShowLoader(true)
  axios({
    method: "post",
    url: "http://localhost:8000/api/job/post",
    data:{
      ...postDetails
    }
  })
  .then((res)=> {
      console.log(res)
      setShowLoader(false)
      notify("JOB POST SUCCESSFULY" , "success")

  })
  .catch((err)=>{
      console.log(err)
    notify("JOB NOT POST" , 'error')
    setShowLoader(false)
  })


}

  return (
      <>
        <Appbar myjob = {'All Jobs'} profile = {'Profile'} />
        <Toast/>
        <div className="container">
          <div className="row">
            <div className="col ">
            <Loader show ={show ?  'flex' : 'none'} />

              <div className={styles.head}>
                <div className={styles.text}>
                  <h1 className={styles.heading}>Create an employer <br /> account </h1>
                </div>
                <div className={styles.image}>
                  
                </div>
                
              </div>
            </div>
        
          </div>

            <div className="col  mt-5">
                  <h1 className={styles.heading1}>You haven't posted a job before, so you'll need to create an employer account.</h1>
                  
            </div>
            <div className= {`row  ${styles.parent}`}>
            <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12  mt-5 d-flex flex-col   ${styles.mainform}`}>

                <label className='fw-bold text-center ' htmlFor="">Your company's name*</label>
                  <div>
                <input className='mb-4 ' type="text" value={company} onChange={(e)=> setCompany(e.target.value)} placeholder='ENTER COMPNAY NAME' />
                </div>
                <label className='fw-bold text-center ' htmlFor="">Job Positon</label>
                  <div>
                <input className='mb-4' value={position} onChange={(e)=> setPosition(e.target.value)} type="text" placeholder='ENTER JOB POSITION' />
                </div>
                <label className='fw-bold text-center ' htmlFor="">Job Type</label>
                  <div>
                <input className='mb-4'  value={jobtype} onChange={(e)=> setJobType(e.target.value)} type="text" placeholder='Enter Job Type' />
                </div>
                <label className='fw-bold text-center ' htmlFor="">Salary</label>
                  <div>
                <input className='mb-4'  value={salary} onChange={(e)=> setSalary(e.target.value)} type="text" placeholder='Rs 40,000 - Rs 90,0000 a month' />
                </div>
                <label className='fw-bold text-center ' htmlFor="">Details</label>
                  <div>
                <input className='mb-4' value={details} onChange={(e)=> setDetails(e.target.value)} type="text" placeholder='ENTER DETAILS' />
                </div>
                <label className='fw-bold  text-center' htmlFor="">Address</label>
                  <div>
                <input className='mb-4' value={address} onChange={(e)=> setAddress(e.target.value)} type="text" placeholder='ENTER ADDRESS' />
                </div>  
                <button className=' btn fw-bold    fs-4 btn-success w-100' onClick={UserJobPost}>Post Job</button>
                  </div>
                  </div>
            </div>
      </>
    )
}

export default PostJob