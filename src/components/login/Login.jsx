// import React from "react";
import "./Login.css";
import google from "../../assets/images/google.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  return (
    <div className="container">
      <div className="container-inner">
        <h3 className="login-h3">Login</h3>
        <div className="input-div">
          <label>Email</label>
          <input className="w-full" type="email" />
        </div>
        <div className="input-div relative">
          <label>Password</label>
          <input
            type={`${passShow ? "text" : "password"}`}
            name="password"
            required
          />
          <div
            className="absolute top-10 right-2"
            onClick={() => setPassShow(!passShow)}
          >
            {passShow ? (
              <EyeSlashIcon className="w-7 h-7 font-bold text-black hover:text-orange-400 duration-500" />
            ) : (
              <EyeIcon className="w-7 h-7 font-bold text-black hover:text-orange-400 duration-500" />
            )}
          </div>
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
