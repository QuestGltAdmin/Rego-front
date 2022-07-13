import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import "./App.css";
import Dashboard from './components/Dashboard/Dashboard';
import History from "./pages/History";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";           
import { AnimatePresence } from "framer-motion";
import UserSingup from "./pages/UserSingup";
import BuyCrypto from "./pages/BuyCrypto";


const Home = () => {
  return <div>Home</div>;
};         
function App() {
  const location = window.location;
  const location2 = useLocation();
  return (
    <>
      <ToastContainer />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location2.pathname} location={location2}>
          <Route path="/" element={<Login />} />
          <Route
          // path="/"
          // element={
          //   <PrivateRoute>
          //     <Header />
          //   </PrivateRoute>
          // }
        />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History/>
              </PrivateRoute> 
            }
          />
          <Route
            path="/user/singup"
            element={<UserSingup/>}
          />                        

          <Route
            path="/buyCrypto"
            element={
              <PrivateRoute>
                <BuyCrypto />
              </PrivateRoute>
            }
          />

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;



















































// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header/Header';
// import Dashboard from './components/Dashboard/Dashboard';
// import Login from './pages/Login';
// import GoogleLogin from './pages/Login/GoogleLogin/GoogleLogin'
// import {router,route,routes, Routes, Route, Router} from 'react-router-dom'
// import History from './pages/History';
// function App() {
//   return (
  
  
//   <div>
 

//  <Header/>
// <Routes>
//   <Route path='/' element={<Login/>}><Route path='/history' element={<History/>}/></Route>
//  <Route path='/Dashboard' element={<Dashboard/>}/>
  
// </Routes>
        
//     {/* <GoogleLogin/> */}
//   </div>
  
//   );
// }

// export default App;
