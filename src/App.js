import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import "./App.css";
// import Dashboard from './components/Dashboard/Dashboard';
import History from "./pages/History";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";           
import { AnimatePresence } from "framer-motion";
import UserSingup from "./pages/UserSingup";
import BuyCrypto from "./pages/BuyCrypto";
import Dash from './pages/Dashboard';
import NFT from "./pages/NFT";
import Swap from "./pages/Swap";
import FixedDeposit from "./pages/FixedDeposit";
import BasketSip from "./pages/BasketSip";
import ProTrading from "./pages/ProTrading.jsx";
import P2P from "./pages/P2P";
import BlogandNews from "./pages/BlogandNews";
import KYC from "./pages/KYC";


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
                <Dash />
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/ndashboard"
            element={
              <PrivateRoute>
                <Dash />
              </PrivateRoute>
            }
          /> */}
          
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

          <Route
            path="/nft"
            element={
              <PrivateRoute>
                <NFT />
              </PrivateRoute>
            }
          />

            <Route
            path="/swap"
            element={
              <PrivateRoute>
                <Swap />
              </PrivateRoute>
            }
          />

           <Route
            path="/fixed-deposit"
            element={
              <PrivateRoute>
                <FixedDeposit />
              </PrivateRoute>
            }
          />

           <Route
            path="/basket-sip"
            element={
              <PrivateRoute>
                <BasketSip />
              </PrivateRoute>
            }
          />


          <Route
          path="/pro-trading"
          element={
            <PrivateRoute>
              <ProTrading/>
            </PrivateRoute>
          }
          />

          <Route
          path="/p2p"
          element={
            <PrivateRoute>
              <P2P/>
            </PrivateRoute>
          }
          />

          <Route
          path="/blog-news"
          element={
            <PrivateRoute>
              <BlogandNews/>
            </PrivateRoute>
          }
          />

           <Route
            path="/kyc"
            element={
              <PrivateRoute>
                <KYC />
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
