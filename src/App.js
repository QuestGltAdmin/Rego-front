import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login';
import GoogleLogin from './pages/Login/GoogleLogin/GoogleLogin'
import {router,route,routes, Routes, Route, Router} from 'react-router-dom'
import History from './pages/History';
function App() {
  return (
  
  
  <div>
 

 <Header/>
<Routes>
  <Route path='/' element={<Login/>}><Route path='/history' element={<History/>}/></Route>
 <Route path='/Dashboard' element={<Dashboard/>}/>
 
</Routes>
        
    {/* <GoogleLogin/> */}
  </div>
  
  );
}

export default App;
