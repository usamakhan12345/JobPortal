import React, { useState } from "react";
import styles from "./Pages.module.css";
import { AiFillCamera } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRef } from "react";
import user from "../assets/user.jpg"
import Appbar from "../Components/Navbar/Navbar";





const Profile = () => {
  const [Image, setImage] = useState();
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[phone,setPhone] = useState("")
  const[password,setPassword] = useState("")


  const imageInputref = useRef(0);
  const userImage = useRef(0);

  const uploadImage = () => {
    imageInputref.current.click();
  };
  const updateProfile = () => {
    const profileDetails = {
      name,
      email,
      phone,
      password
    }
    console.log(profileDetails)
  };
  const handleImageSet = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <Appbar myjob={"All Jobs"} postJob={"Post Job"} head={"Profile"} />
      <div>
        <div className="d-flex justify-content-center mb-3">
          <div className={` ${styles.imgageDiv}`}>
              <img
                ref={userImage}
                src={Image ? Image  : user}
                alt=""
                width="100%"
                height="100%"
                className={`bg-primary ${styles.profilePic}`} 
              />
            <div>
              <input
                ref={imageInputref}
                onChange={handleImageSet}
                type="file"
                className={`${styles.imageInput}`}
              />
              <AiFillCamera
                onClick={uploadImage}
                className={` ${styles.cameraIcon}`}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              className={`col-12 col-md-12 col-lg-12  d-flex justify-content-center mt-4  ${styles.profileInput}`}
            >
              <div>
                <FaUserAlt
                  className={`${styles.profileIcon} position-relative`}
                />
              </div>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div
              className={`col-12 col-md-12 col-lg-12  d-flex justify-content-center mt-4 ${styles.profileInput}`}
            >
              <div>
                <IoMdMail
                  className={`${styles.profileIcon} position-relative`}
                />
              </div>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div
              className={`col-12 col-md-12 col-lg-12  d-flex justify-content-center mt-4  ${styles.profileInput}`}
            >
              <div>
                <BsFillTelephoneFill
                  className={`${styles.profileIcon} position-relative`}
                />
              </div>
              <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div
              className={`col-12 col-md-12 col-lg-12  d-flex justify-content-center mt-4  ${styles.profileInput}`}
            >
              <div>
                <RiLockPasswordFill
                  className={`${styles.profileIcon} position-relative`}
                />
              </div>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div
              className={`col-12 col-md-12 col-lg-12  d-flex justify-content-center mt-4  ${styles.profileInput}`}
            >
              <div className="w-300">
                <button onClick={updateProfile} className={styles.updateBtn}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
