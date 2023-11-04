import React, { useState } from 'react'
import styles from "./Pages.module.css"
import Appbar from "../Components/Navbar/Navbar.jsx";


const PostJob = () => {
  const[company,setCompany] = useState("")
  const[salary,setSalary] = useState("")
  const[jobType,setJobType] = useState("")
  const[position,setPosition] = useState("")
  const[details,setDetails] = useState("")
  const[address,setAddress] = useState("")

    const postJobDetails = ()=>{
      const JobDetails = {
        company,
        salary,
        position,
        details,
        address,
          jobType
      }
      console.log(JobDetails)
      setCompany("")
      setSalary("")
      setDetails("")
      setAddress("")
      setPosition("")
      setJobType("")
    }

  return (
      <>
        <Appbar myjob = {'All Jobs'} profile = {'Profile'} />
        <div className="container">
          <div className="row">
            <div className="col ">
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
                <input className='mb-4'  value={jobType} onChange={(e)=> setJobType(e.target.value)} type="text" placeholder='Enter Job Type' />
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
                <button className=' btn fw-bold    fs-4 btn-success w-100' onClick={postJobDetails}>Post Job</button>
                  </div>
                  </div>
            </div>
      </>
    )
}

export default PostJob