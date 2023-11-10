import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../../Pages/Pages.module.css"
import './modal.css'
import axios from 'axios'
import { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '90%',
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border : '3px solid #581c87 ',
  overflow : scrollY,
};


export default function BasicModal({open , handleClose , updateJob}) {
    

  const[company,setCompany] = useState("")
  const[salary,setSalary] = useState("")
  const[jobtype,setJobType] = useState("")
  const[position,setPosition] = useState("")
  const[details,setDetails] = useState("")
  const[address,setAddress] = useState("")
  console.log("updateJob--->",updateJob)
 React.useEffect(()=>{
  setCompany(updateJob.company)
  setSalary(updateJob.salary)
  setJobType(updateJob.jobtype)
  setPosition(updateJob.position)
  setDetails(updateJob.details)
  setAddress(updateJob.address)
 },[updateJob])
const updateData = {
  company,
  salary,
  jobtype,
  position,
  details,
  address
}
const UpdateMyJob  =async(id)=>{
  console.log(id)
  await axios({
    method: "put",
    url: `http://localhost:8000/api/job/updatejob/${id}`,
    data:{
      ...updateData
     }
  
  })
  .then((res)=> {
    console.log(res)
    // setUpdateJob(res.data.jobforUpdate)
   
  })
  .catch((err)=>{

    
    console.log(err)
  } 
    )

}
console.log(updateJob)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className ="modalBox" sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Update Job
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div
                    className={`col-xs-12 col-sm-12 col-md-12 col-lg-12  mt-5 d-flex flex-col   ${styles.mainform}`}
                  >
                    <label className="fw-bold text-center " htmlFor="">
                      Your company's name*
                    </label>
                    <div>
                      <input
                        className="modalInput mb-4 "
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="ENTER COMPNAY NAME"
                      />
                    </div>
                    <label className="fw-bold text-center " htmlFor="">
                      Job Positon
                    </label>
                    <div>
                      <input
                        className=" modalInput mb-4 "
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        type="text"
                        placeholder="ENTER JOB POSITION"
                      />
                    </div>
                    <label className="fw-bold text-center " htmlFor="">
                      Job Type
                    </label>
                    <div>
                      <input
                        className="mb-4 modalInput"
                        value={jobtype}
                        onChange={(e) => setJobType(e.target.value)}
                        type="text"
                        placeholder="Enter Job Type"
                      />
                    </div>
                    <label className="fw-bold text-center " htmlFor="">
                      Salary
                    </label>
                    <div>
                      <input
                        className="mb-4 modalInput"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        type="text"
                        placeholder="Rs 40,000 - Rs 90,0000 a month"
                      />
                    </div>
                    <label className="fw-bold text-center " htmlFor="">
                      Details
                    </label>
                    <div>
                      <input
                        className="mb-4 modalInput"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        type="text"
                        placeholder="ENTER DETAILS"
                      />
                    </div>
                    <label className="fw-bold  text-center" htmlFor="">
                      Address
                    </label>
                    <div>
                      <input
                        className="mb-4 modalInput"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder="ENTER ADDRESS"
                      />
                    </div>
                    <button
                      className=" btn fw-bold    fs-4 btn-success w-100"
                      disabled = {updateJob ? false : true}
                      onClick={()=>UpdateMyJob(updateJob._id)}
                    >
                      Post Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
