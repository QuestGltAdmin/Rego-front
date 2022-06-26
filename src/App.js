import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login';
import GoogleLogin from './pages/Login/GoogleLogin/GoogleLogin'
function App() {
  return (
  
  
  <div>
    <Header/>
    <Dashboard/>
    <Login/>       
    <GoogleLogin/>
  </div>
  
  );
}

export default App;
