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
import { useContext } from "react";
import userToken from "../Context/Token.jsx";
import Modal from "../Components/Modal/Modal.jsx"

const Myjobs = () => {

  const [myjobs, setMyjobs] = useState([])
  const [show,setShowLoader] = useState(true)
  const [token,setToken] = useState("")
  const [userID,setUserId] = useState("")
  const [open,setOpen] = useState("")
  const [updateJob,setUpdateJob] = useState({})
  const usertoken = useContext(userToken)
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(()=>{
    const userId = JSON.parse(localStorage.getItem('id'))
    setToken(usertoken)
    setUserId(userId)
    console.log(userID)
    console.log(usertoken.token)
    axios({
      method: "post",
      url: "http://localhost:8000/api/job/myjobs",
      data:{
        userID
      }
    })
    .then((res)=> {
      console.log(res.data.myjobs[0]._id)
        console.log(res.data.myjobs)
        setMyjobs(res.data.myjobs)
        setShowLoader(false)
    })
    .catch((err)=>{

      setShowLoader(false)
      
      console.log(err)
    } 
      )

},[userID , usertoken , open])

const deleteJob =async   (jobId)=>{
  console.log('delete job ID' , jobId)

  await axios({
    method: "delete",
    url: `http://localhost:8000/api/job/deletejob/${jobId}`,
  
  })
  .then((res)=> {
    console.log(res.data.deleteUser._id)
    console.log(res)
    setMyjobs((prev)=> prev.filter((job) => job._id !== res.data.deleteUser._id ))
   
  })
  .catch((err)=>{

    
    console.log(err)
  } 
    )
}
const UpdateJob = async (jobId)=>{
  console.log(jobId)

  handleOpen()
  
  await axios({
    method: "get",
    url: `http://localhost:8000/api/job/singlejob/${jobId}`,
  
    
  })
  .then((res)=> {
    console.log(res.data.jobforUpdate)
    setUpdateJob(res.data.jobforUpdate)
   
  })
  .catch((err)=>{

    
    console.log(err)
  } 
    )
}
  return (
    <>
    <Appbar head = {'My Jobs'} login={token ? 'logout' : 'login'} postjob = {"Post Job"} />
    <div className="container">
      <div className="row">
        <Modal updateJob = {updateJob} open={open} handleClose ={handleClose}/>
        <Loader show ={show ?  'flex' : 'none'} />
      {myjobs.map((job,index)=>(
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
                <div className="mt-5 mx-4">
                  <button onClick={()=>deleteJob(myjobs[index ]._id)} className={styles.deleteBtn}>Delete</button>
                  <button onClick={()=>UpdateJob(myjobs[index ]._id)}  className={`${styles.updatejobBtn} bg-success`}>Update</button>
                </div>
            </div>
          </div>
      ))}
       
      </div>
    </div>
    </>
  )
}

export default Myjobs