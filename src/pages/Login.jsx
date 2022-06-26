
import React,{useEffect, useState} from 'react'

      

const Login = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  function saveUser()
  {
  //  alert(email, password);
   let data ={email,password}
   fetch("http://3.128.190.203:3001/users/login",{
    method: 'post',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)                           
   }).then((result)=>{

    // alert(result);
   })    
  }


  return (
            <div className="form-data">
              <div className="forms-inputs mb-4">
                {" "}
                <span>Email or username</span>{" "}
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}} 
                  className={"is-invalid"}
                />
                <div className="invalid-feedback">
                  A valid email is required!
                </div>
              </div>
              <div className="forms-inputs mb-4">
                {" "}
                <span>Password</span>{" "}
                <input
                      
                  type="password"
                  name="password" 
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  className={"is-invalid"}
                />
                <div className="invalid-feedback">
                  Password must be 6 character!
                </div>
              </div>
              <div className="mb-3">
                {" "}
                <button
                  className="btn btn-primary w-100"
                  onClick={saveUser}
            
                >
                  Login
                </button>{" "}
              </div>
              <div className="invalid-feedback invalid-login-feedback ">
               
              </div>
            </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
};

export default Login;
