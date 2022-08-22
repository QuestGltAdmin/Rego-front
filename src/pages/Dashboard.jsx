import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginSaga } from "../store/reducers/authReducer";
import NavigationTabs from "../components/UI/NavigationTabs";
import SetAnimationPage from "../HOC/SetAnimationPage";
// import '../assets/css/custom.css';
// import '../assets/css/style.css';
// import '../assets/css/dash-inner.css';
// import '../assets/css/nice-select.css';
import nft from '../assets/images/nft.jpg';
import nft2 from '../assets/images/nft2.jpg';
import gain1 from '../assets/images/gain1.png';
import gain2 from '../assets/images/gain2.png';
import gain3 from '../assets/images/gain3.png';
import gain4 from '../assets/images/gain4.png';
import gain5 from '../assets/images/gain5.png';
import gain6 from '../assets/images/gain6.png';
import share from '../assets/images/share.png'; 
import axios from "axios";
import { Link } from 'react-router-dom';


const jQuery = window.jQuery;

const imageSlider = ($) => {
  $(document).ready(function () {
    $(".slider-nft").slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".price-type-box").slick({
      dots: false,
      infinite: true,
      speed: 500,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
};

const NewDashboardNoNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    imageSlider(jQuery);
  }, []);

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

  const redirectToDashboardAfterLogin = () => {
    navigate("/dashboard");
  };

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
        redirectToDashboardAfterLogin,
      })
    );
  };
  const { user } = useSelector((state) => state.auth);
  const [users, setUsers]=useState([])
    const fetchData = async () => {
      const res = await axios.post("http://3.128.190.203:3001/users/get-CryptoBalance",{email:user.user.email})
      
      console.log(res.data)
      setUsers(res.data)
      } 
    useEffect(()=>{
    fetchData();
        
    },[])    
  return (
    <>
      <section className="dashboard-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <NavigationTabs />
                {/* <ul className="upper-list-tabs">
                  <li className="active-link">
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <a href="#">Buy Sell</a>
                  </li>
                  <li>
                    <a href="#">NFT</a>
                  </li>
                  <li>
                    <a href="#">Swap</a>
                  </li>
                  <li>
                    <a href="#">Fixed Deposit</a>
                  </li>
                  <li>
                    <a href="#">Basket/SIP</a>
                  </li>
                  <li>
                    <a href="#">Pro Trading</a>
                  </li>
                  <li>
                    <a href="#">Loan</a>
                  </li>
                </ul> */}
                {/* <!--  <ul className="value-index">
              <li>Market Index : 2000</li>
              <li>Rego: 2000</li>
              <li>Bitcoin: 2000</li>
              <li>Ether: 2000</li>
            </ul> --> */}
             <div className="row align-items-stretch">
              <div className="col-md-4">
                <div className="dash-white-box fund-box-outer">
                  <h3>Total Asset Value</h3>
                  <div className="outer-box-value">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-6">
                        <div className="text-center interest-box">
                          <h4><i className="fa fa-rupee-sign" />1250</h4>
                          <p><small>Current Value</small></p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <div className="text-center interest-box">
                          <h4><i className="fa fa-rupee-sign" />1000</h4>
                          <p><small>Total Invested</small></p>
                        </div>              
                       </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-6">
                        <div className="text-center interest-box green-box">
                          <h4><i className="fa fa-rupee-sign" />250</h4>
                          <p><small>Total returs</small></p>
                        </div> 
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">  
                        <div className="text-center interest-box green-box">
                          <h4>25%</h4> 
                          <p><small>Gain/Loss</small></p>
                        </div>
                      </div>                
                    </div>
                  </div>
                  <div className="table-outer">
                    <table className=" table currency-table">
                      <thead>
                        <tr>
                          <th>Asset Type</th>
                          <th>Available Balance</th>
                        </tr>  
                      </thead>
                      {users?.obj?.array?.map(post=>(
                      <tbody>    
                        <tr className="selected-row"  key={post._id.value}>
                          <td><div><img src={post.image}/> {post.crypt_name}</div></td>    
                          <td><div className="light-green-text"><i className="fa fa-rupee-sign" /> {post.balance}</div></td>
                        </tr> 
                        {/* <tr>
                          <td><div><img src={icone5} /> USDT</div></td>
                          <td><div className="light-green-text"><i className="fa fa-rupee-sign" /> 654.55</div></td>
                        </tr>
                        <tr>
                          <td><div><img src={icone2} /> BTC</div></td>                          
                          <td><div className="light-green-text"><i className="fa fa-rupee-sign" /> 654.55</div></td>
                        </tr>         
                        <tr>         
                          <td><div><img src={icone3} /> ETH</div></td>
                          <td><div className="light-green-text"><i className="fa fa-rupee-sign" /> 654.55</div></td>
                        </tr>
                        <tr>
                          <td><div><img src={icone4} /> ETH</div></td>
                          <td><div className="light-green-text"><i className="fa fa-rupee-sign" /> 654.55</div></td>
                        </tr>
                        <tr>
                          <td><div><img src={icone2} /> ETH</div></td>
                          <td><div className="light-green-text"><i className="fa fa-rupee-sign" /> 654.55</div></td>
                        </tr> */}
                      </tbody>      
                      ))}
                    </table>    
                  </div>
                  <div className="text-center">
                    <a href className="common-btn">Dposit INR</a>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="dash-white-box">
                  <h3>NFTs</h3>
                  <ul>
                    <li>
                      <a href>
                        <div className="nft-list">
                          <img src={nft} />
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <div className="nft-list">
                          <img src={nft} />
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </div>                         
                      </a>
                    </li>
                    <li>
                      <a href>
                        <div className="nft-list">
                          <img src={nft}/>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div>
                    <div className="slider-nft">
                      <div className="item">
                        <img src={nft} />
                      </div> 
                      <div className="item">      
                        <img src={nft2} />
                      </div>
                      <div className="item">   
                        <img src={nft} />
                      </div>                          
                      <div className="item">
                        <img src={nft2} />
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              <div className="col-md-4"> 
                <div className="dash-white-box">
                  <ul className="nav nav-tabs upper-list-tabs mt5 tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" data-toggle="tab" href="#gainer" role="tab" aria-selected="true">Top Gainers</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#looser" role="tab" aria-selected="false">Top Losers</a>
                    </li>
                  </ul> 
                  <div className="tab-content mt-4" id="myTabContent">
                    <div className="tab-pane fade content show active" id="gainer" role="tabpanel">
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain1} />
                            <div className="des">
                              <h5>Bitcoin</h5>
                              <span>BTC</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>           
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain2} />
                            <div className="des">
                              <h5>Ethereum</h5>
                              <span>ETH</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />      
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5"> 
                          <div className="gain-info">
                            <img src={gain3} />
                            <div className="des">
                              <h5>Tether</h5>
                              <span>USDT</span>
                            </div>  
                          </div>
                        </div> 
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info"> 
                            <img src={gain4} />        
                            <div className="des">
                              <h5>Binance Coin</h5>
                              <span>USDT</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain5} />
                            <div className="des">
                              <h5>Cardano</h5>
                              <span>USDT</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain6} />
                            <div className="des">
                              <h5>USD Coin</h5>
                              <span>USDT</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>      
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade content" id="looser" role="tabpanel">
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain1} />
                            <div className="des">
                              <h5>Bitcoin</h5>
                              <span>BTC</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain2} />
                            <div className="des">
                              <h5>Ethereum</h5>
                              <span>ETH</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain3} />
                            <div className="des">
                              <h5>Tether</h5>
                              <span>USDT</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain4} />
                            <div className="des">
                              <h5>Binance Coin</h5>
                              <span>USDT</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain5} />
                            <div className="des">
                              <h5>Cardano</h5>
                              <span>USDT</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />  
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-5">
                          <div className="gain-info">
                            <img src={gain6} />
                            <div className="des">
                              <h5>USD Coin</h5>
                              <span>USDT</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-7">
                          <div className="gain-info1">
                            <img src={share} />
                            <div className="des">
                              <h5>₹32,44,752.18</h5>
                              <span>+1,16,811.08(3.60%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     


    </>
  );
};

export default SetAnimationPage(NewDashboardNoNav);
