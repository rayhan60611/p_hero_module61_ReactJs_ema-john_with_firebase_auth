// import React from "react";
import "./Login.css";
import google from "../../assets/images/google.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { authContext } from "../authProvider/AuthProviders";
import { toast } from "react-toastify";
import { authErrors } from "../../firebase/firebaseErrorCodes";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const { logIn } = useContext(authContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        // Signed in

        const user = result.user;
        console.log(user);
        toast.success("User Login Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/shop");
      })
      .catch((error) => {
        toast.error(authErrors[error.code.replace(`auth/`, "")], {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    form.reset();
  };
  return (
    <div className="container">
      <form onSubmit={handleLoginSubmit}>
        <div className="container-inner">
          <h3 className="login-h3">Login</h3>
          <div className="input-div">
            <label>Email</label>
            <input className="w-full" type="email" name="email" />
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
      </form>
    </div>
  );
};

export default Login;
