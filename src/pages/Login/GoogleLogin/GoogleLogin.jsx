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




// import React,{useEffect, useState} from 'react'
// import { Link, Navigate } from 'react-router-dom';
      

// const Login = () => {
//   const [email, setEmail]=useState("");
//   const [password, setPassword]=useState("");

//   function saveUser()
//   {
//   //  alert(email, password);        
//    let data ={email,password}
//    fetch("http://3.128.190.203:3001/users/login",{
//     method: 'post',
//     headers:{
//       'Accept':'application/json',
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify(data)                           
//    }).then((result)=>{

//     // alert(result);
//    })    
//    }
 

//   return (

//     <div className='container mt-5'>
//       <div className='row d-flex justify-content-center'>
//         <div className='col-md-6'>
//           <div className='card px-5 py-5' id='form1'>
//             <div className="form-data">
//               <div className="forms-inputs mb-4">
//                 {" "}
//                 <span>Email or username</span>{" "}
//                 <input
//                   type="text"
//                   name="email" 
//                   value={email}
//                   onChange={(e)=>{setEmail(e.target.value)}} 
//                   className={"is-invalid"}
//                 />
//                 {/* <div className="invalid-feedback">
//                   A valid email is required!
//                 </div> */}
//               </div>
//               <div className="forms-inputs mb-4">
//                 {" "}
//                 <span>Password</span>{" "}
//                 <input
//                   type="password"
//                   name="password" 
//                   value={password}
//                   onChange={(e)=>{setPassword(e.target.value)}}
//                   className={"is-invalid"}
//                 />
//                 {/* <div className="invalid-feedback">
//                   Password must be 6 character!
//                 </div> */}
//               </div>
//               <div className="mb-3">
//                 {" "}
//                 <Link to='/Dashboard'>  <button
//                   className="btn btn-primary w-100"
//                   onClick={saveUser}  
//                 >Login
          
//                 </button></Link> {" "}
//               </div>      
//               <div className="invalid-feedback invalid-login-feedback ">
               
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Login;
