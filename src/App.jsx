import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import AllJobs from "./Pages/Alljobs";
import MyJobs from "./Pages/Myjob";
import PostJob from "./Pages/PostJob";
import Profile from "./Pages/Profile";
import {  useEffect, useState  , useContext} from "react";
import Usertoken from "./Context/Token.jsx"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const[token , setToken] = useState("")
  useEffect(()=>{

    const usertoken = JSON.parse(localStorage.getItem('token'))
    setToken(usertoken)
  },[])
  return (
    <>
      <Usertoken.Provider value={{token,setToken}}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/alljobs" element={<AllJobs />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/profile" element={<Profile />} />


        </Routes>
      </BrowserRouter>
      </Usertoken.Provider>
    </>
  );
}

export default App;
