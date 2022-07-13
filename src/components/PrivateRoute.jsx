import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from '../components/Header/Header';

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  console.log(auth); 
  return auth ? (
    <>
      <Header/>
      <Container style={{ maxWidth: "1320px !important" }}>
        {children}
      </Container>
    </> 
  ) : (
    <Navigate to="/" />                  
  );
};      

export default PrivateRoute;
