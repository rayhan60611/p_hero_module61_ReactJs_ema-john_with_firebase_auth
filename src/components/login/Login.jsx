// import React from "react";
import "./Login.css";
import google from "../../assets/images/google.png";

const Login = () => {
  return (
    <div className="container">
      <div className="container-inner">
        <h3 className="login-h3">Login</h3>
        <div className="input-div">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="input-div">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="btn-login">Login</button>
        <a href="#" className="login-a-tag1">
          New to Ema-john? <span>Create new Account</span>
        </a>
        <div className="hr-div">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <a className="btn-google">
          <img className="google-img" src={google} alt="" />
          Continue With Google
        </a>
      </div>
    </div>
  );
};

export default Login;
