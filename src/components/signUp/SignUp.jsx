import { useContext, useState } from "react";
import google from "../../assets/images/google.png";
import "./SignUp.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../authProvider/AuthProviders";
import { toast } from "react-toastify";
import { authErrors } from "../../firebase/firebaseErrorCodes";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(authContext);
  const [passShow, setPassShow] = useState(false);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(name, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        // console.log(user);
        toast.success("User Created Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/login");
        // ...
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
        // ..
      });
    form.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <div className="container-inner">
          <h3 className="login-h3">Sign Up</h3>
          <div className="input-div">
            <label>Name</label>
            <input type="text" name="name" required></input>
          </div>
          <div className="input-div">
            <label>Email</label>
            <input type="email" name="email" required></input>
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
          <button className="btn-login" type="submit">
            Sign Up
          </button>
          <Link to="/login" className="login-a-tag1">
            Already have an Account? <span>Login Now!</span>
          </Link>
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

export default SignUp;
