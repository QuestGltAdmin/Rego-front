import React, { useState } from "react";
import { toast } from "react-toastify";
            
const GoogleLogin = ({ setUserState, changeSection }) => {
  const [email, setEmail] = useState("");

  const proceedToLoginHandler = (e) => {
    e.preventDefault();
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(email)) {
      toast.error("Please Enter Valid Email");
      return;                                
    }

    setUserState((prevState) => ({ ...prevState, email }));
    changeSection("login");
  };

  return (
    <div className="right-login-box">
      <h2>Welcome to Rego</h2>
      <button className="google-btn">
        <img src="assets/images/search.png" /> Continue with Google
      </button>
      <div className="or-box">
        <span>Or</span>
      </div>
      <div className="form-group">
        <input
          type="text"
          name=""
          className="form-control"
          placeholder="Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <a className="common-btn" onClick={proceedToLoginHandler}>
          Continue
        </a>
        <p className="tnc-line">
          By proceeding, I agree to <a href="">T&C</a> and{" "}
          <a href="">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default GoogleLogin;
