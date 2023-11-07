import Appbar from "../Components/Navbar/Navbar.jsx";
import styles from "./Pages.module.css";
import { NavLink } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import {TiTick} from "react-icons/ti"
import {IoIosArrowDroprightCircle} from "react-icons/io"
import { useEffect , useState } from "react";
import axios from "axios";
import React from 'react'
import Loader from "../Components/Loader/Loader.jsx"

const AllJobs = () => {

  const [alljobs, setAlljobs] = useState([])
  const [show,setShowLoader] = useState(true)
useEffect(()=>{
    axios({
        method: "get",
        url: "http://localhost:8000/api/job/alljobs",
       
      })
      .then((res)=> {
        setAlljobs(res.data.allJobs)
        console.log(res.data.allJobs)
        setShowLoader(false)
        //   redirect('/')
      })
      .catch((err)=> console.log(err))

},[])
  return (
    <>
    <Appbar head = {'All Jobs'} login={"Login"} postjob = {"Post Job"} />
    <div className="container">
      <div className="row">
        <Loader show ={show ?  'flex' : 'none'} />
      {alljobs.map((job,index)=>(
            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className={styles.jobs}>
              <h1 className={`fs-4 fw-bold mx-3 pt-4 ${styles.jobHead}`}>{job.position}</h1>
              <h3 className={`fw-bold  mx-3  mt-3 mb-1 ${styles.jobHead}`}>{job.company}</h3>
                <div className="d-flex align-items-center mt-2 mx-3 ">
                  <SlLocationPin style={{marginRight : 8 , fontSize : 19 , color : 'green', fontWeight : 'bold'}}/>
                  <h5 className={`fw-bold ${styles.jobHead}`}>{job.address}</h5>
                </div>
                <div className="d-flex ">
                  <h1 className={`fw-bold mt-4 bg-success text-light mx-3 ${styles.salary}`}>{job.salary}<TiTick style={{display : "inline-block" , fontSize : 30} }/></h1>
                </div>
                <div><h3 className={`${styles.fulltime}`}>Full-time</h3></div>
                <div className="d-flex mt-3 mx-3">
                  <IoIosArrowDroprightCircle style={{fontSize : 25 , color : '#63189d'}}/> <h3 className={`fs-6 mt-1 fw-bold`}> <NavLink>Apply Now </NavLink> </h3>
                </div>
  
                <div><h5 className={`${styles.timestamp}`}>just posted </h5></div>
            </div>
          </div>
      ))}
       
      </div>
    </div>
    </>
  )
}

export default AllJobs