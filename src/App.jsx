import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import AllJobs from "./Pages/Alljobs";
import MyJobs from "./Pages/Myjob";
import PostJob from "./Pages/PostJob";
import Profile from "./Pages/Profile";
import { Provider } from "react-redux";
import {store} from "./Store/Store.jsx"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <Provider store={store}>
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
          </Provider>
    </>
  );
}

export default App;
