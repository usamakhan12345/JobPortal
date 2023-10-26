import React from "react";
import styles from "./Pages.module.css"

import Appbar from "../Components/Navbar/Navbar";
const Profile = () => {
  return (
    <>
    <Appbar myjob={"All Jobs"} postJob={"Post Job"} head={"Profile"} />
    <div>
        <div className="d-flex justify-content-center">

        <div className={` ${styles.imgageDiv}`}>
            <img src="" alt="" />
            
        </div>
        </div>
    </div>
    </>
  );
};

export default Profile;
