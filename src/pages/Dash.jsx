import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginSaga } from "../store/reducers/authReducer";

import NavigationTabs from "../components/UI/NavigationTabs";
import SetAnimationPage from "../HOC/SetAnimationPage";

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
                          <div className="col-md-6">
                            <div className="text-center interest-box">
                              <h4>
                                <i className="fa fa-rupee-sign"></i>1250
                              </h4>
                              <p>
                                <small>Current Value</small>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-center interest-box">
                              <h4>
                                <i className="fa fa-rupee-sign"></i>1000
                              </h4>
                              <p>
                                <small>Total Invested</small>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="text-center interest-box green-box">
                              <h4>
                                <i className="fa fa-rupee-sign"></i>250
                              </h4>
                              <p>
                                <small>Total returs</small>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text-center interest-box green-box">
                              <h4>25%</h4>
                              <p>
                                <small>Gain/Loss</small>
                              </p>
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
                          <tbody>
                            <tr className="selected-row">
                              <td>
                                <div>
                                  <img src="assets/images/icon1.png" alt="" />{" "}
                                  INR
                                </div>
                              </td>
                              <td>
                                <div className="light-green-text">
                                  <i className="fa fa-rupee-sign"></i> 654.55
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <img src="assets/images/icon5.png" alt="" />{" "}
                                  USDT{" "}
                                </div>
                              </td>
                              <td>
                                <div className="light-green-text">
                                  <i className="fa fa-rupee-sign"></i> 654.55
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <img src="assets/images/icon2.png" alt="" />{" "}
                                  BTC
                                </div>
                              </td>
                              <td>
                                <div className="light-green-text">
                                  <i className="fa fa-rupee-sign"></i> 654.55
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <img src="assets/images/icon3.png" alt="" />{" "}
                                  ETH
                                </div>
                              </td>
                              <td>
                                <div className="light-green-text">
                                  <i className="fa fa-rupee-sign"></i> 654.55
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <img src="assets/images/icon4.png" alt="" />{" "}
                                  ETH
                                </div>
                              </td>
                              <td>
                                <div className="light-green-text">
                                  <i className="fa fa-rupee-sign"></i> 654.55
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div>
                                  <img src="assets/images/icon2.png" alt="" />{" "}
                                  ETH
                                </div>
                              </td>
                              <td>
                                <div className="light-green-text">
                                  <i className="fa fa-rupee-sign"></i> 654.55
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="text-center">
                        <a href="" className="common-btn">
                          Dposit INR
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="dash-white-box">
                      <h3>NFTs</h3>

                      <ul>
                        <li>
                          <a href="">
                            <div className="nft-list">
                              <img src="assets/images/nft.jpg" alt="" />
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry...
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <div className="nft-list">
                              <img src="assets/images/nft.jpg" alt="" />
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry...
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <div className="nft-list">
                              <img src="assets/images/nft.jpg" alt="" />
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry...
                            </div>
                          </a>
                        </li>
                      </ul>

                      <div>
                        <div className="slider-nft">
                          <div className="item">
                            <img src="assets/images/nft.jpg" alt="" />
                          </div>
                          <div className="item">
                            <img src="assets/images/nft2.jpg" alt="" />
                          </div>
                          <div className="item">
                            <img src="assets/images/nft.jpg" alt="" />
                          </div>
                          <div className="item">
                            <img src="assets/images/nft2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="dash-white-box">
                      <h3>Blogs and News</h3>
                      <ul className="news-list-box">
                        <li>
                          <a href="">
                            <div className="news-row">
                              <img src="assets/images/blog.jpg" alt="" />
                              <div className="side-content">
                                <p>
                                  <small>20 Jan, 2022</small>
                                </p>
                                <h4>Lorem Ipsum is simply dummy </h4>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry....{" "}
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <div className="news-row">
                              <img src="assets/images/blog.jpg" alt="" />
                              <div className="side-content">
                                <p>
                                  <small>20 Jan, 2022</small>
                                </p>
                                <h4>Lorem Ipsum is simply dummy </h4>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry....{" "}
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <div className="news-row">
                              <img src="assets/images/blog.jpg" alt="" />
                              <div className="side-content">
                                <p>
                                  <small>20 Jan, 2022</small>
                                </p>
                                <h4>Lorem Ipsum is simply dummy </h4>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry....{" "}
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <div className="news-row">
                              <img src="assets/images/blog.jpg" alt="" />
                              <div className="side-content">
                                <p>
                                  <small>20 Jan, 2022</small>
                                </p>
                                <h4>Lorem Ipsum is simply dummy </h4>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry....{" "}
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="" className="view-all-link">
                            View All
                          </a>
                        </li>
                      </ul>
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
