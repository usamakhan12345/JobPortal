import React from "react";
import Appbar from "../Components/Navbar/Navbar.jsx";
import styles from "./Pages.module.css";
const Login = () => {
  return (
    <>
      <div className={styles.login}>
        <Appbar />
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="col-md-6 ">
              <form>
                <div className="mb-3 mt-5">
                  <label htmlFor="exampleInputEmail1" className={`${styles.label} form-label fs-5 mb-3 fw-bold`}>
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className={`${styles.label} form-label fs-5 mb-3 fw-bold`}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mb-3"
                    id="exampleCheck1"
                  />
                  <label className={`${styles.label} form-check-label mb-3 fw-bold`} htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className={` ${styles.loginBtn} btn text-light mb-3 fw-bold fs-4 w-100 bg-purple-900`}
                >
                  Login
                </button>
              </form>
            </div>
        

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
