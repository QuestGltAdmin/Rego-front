import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginSaga } from "../Store/reducers/authReducer";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMsg, isAuthenticated } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    isEmailInValid: null,
    password: "",
    isPasswordInValid: null,
    loginError: false,
  });    

  const { email, isEmailInValid, password, isPasswordInValid, loginError } =
    formData;

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      isEmailInValid: null,
      isPasswordInValid: null,
    });
  };
  useEffect(()=>{
    if(isAuthenticated){
      navigate("/dashboard")
    }
  },[isAuthenticated])


  // const redirectToDashboardAfterLogin = () => {
  //   if(isAuthenticated){
  //   navigate("/wallet");
  //   }
  // };

  const submitHandler = async () => {
  
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(email)) {
      setFormData({ ...formData, isEmailInValid: true });
      return;
    }
    if (password.length < 6) {
      console.log("password invalid");
      setFormData({ ...formData, isPasswordInValid: true });
      return;
    }
    setFormData({ ...formData, isEmailInValid: null, isPasswordInValid: null });
    dispatch(
      loginSaga({
        formData: { email, password },
        toast,
        // redirectToDashboardAfterLogin
      })
      );
  };

  return (
    <section id="login_form">
    <div className="container">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-6 ">
          <div className="card px-5 py-5 login_form_box" id="form1">
            <h2 className="sign_in_head">Welcome to Exchange</h2>
            <h2 className="sign_in_log">Login</h2>
            <div className="form-data">
              <div className="forms-inputs mb-4">
                {" "}
                <span>Email or username</span>{" "}
                <input
                  value={email}
                  type="text"
                  name="email"
                  onChange={(e) => inputHandler(e)}
                  className={isEmailInValid && "is-invalid"}
                />
                <div className="invalid-feedback">
                  A valid email is required!
                </div>
              </div>
              <div className="forms-inputs mb-4">
                {" "}
                <span>Password</span>{" "}
                <input
                  value={password}
                  type="password"
                  name="password"
                  onChange={(e) => inputHandler(e)}
                  className={isPasswordInValid && "is-invalid"}
                />
                <div className="invalid-feedback">
                  Password must be 6 character!
                </div>
              </div>
              <div className="mb-3">
                {" "}
                <button
                  className="btn btn_login w-100"
                  onClick={() => submitHandler()}
                >
                  Login
                </button>{" "}
              </div>
              {/* <div className="invalid-feedback invalid-login-feedback ">
                {errorMsg}
              </div> */}
              <span>New User ?</span>
              <span>
                {/* <Link to="/user/singup" style={{ textDecoration: 'none' }}>
                  <span className="new_signup" > Sign Up</span>
                </Link> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;
