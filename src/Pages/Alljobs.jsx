import Appbar from "../Components/Navbar/Navbar.jsx";

import React from 'react'

const AllJobs = () => {
  return (
    <>
    <Appbar head = {'All Jobs'} login={"Login"} postjob = {"Post Job"} />
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
        <div class="card  mb-3">
        <div class="card-body">
    <h3 class="card-title">Cyphion </h3>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllJobs