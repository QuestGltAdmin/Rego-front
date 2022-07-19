import React from "react";
import NavigationTabs from "../components/UI/NavigationTabs";
import SetAnimationPage from "../HOC/SetAnimationPage";
// import '../assets/css/custom.css';
import '../assets/css/style.css';
// import '../assets/css/dash-inner.css';
// import '../assets/css/nice-select.css';
import gain1 from '../assets/images/gain1.png';
import gain2 from '../assets/images/gain2.png';
import gain3 from '../assets/images/gain3.png';
import gain4 from '../assets/images/gain4.png';
import gain5 from '../assets/images/gain5.png';
import gain6 from '../assets/images/gain6.png';
import alert from '../assets/images/alert.png'
import axios from "axios";
import { Link } from 'react-router-dom';
import { coins } from "../assets/coins/coins";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const coinOptions = coins
  .map((item) => {
    return { id: item.id, name: item.name, value: item.name, url: item.url };
  })
  .filter((item) => item.name !== "inr");
const FixedDeposit = () => {

    let selectedCryptoObj;
    const dispatch = useDispatch();
    const {
      user: { user },
    } = useSelector((state) => state.auth);
    const { array: cryptowalletObj } = useSelector(
      (state) => state.wallet.userWallet
    );


  const [autoRenew, setAutoRenew] = useState(false);
  const [balanceError, setBalanceError] = useState(false);
  const [formData, setFormData] = useState({
    selectedCoin: coinOptions[0].name,
    inputAmount: "",
    payoutAmount: "",
  });

  const { inputAmount, payoutAmount, selectedCoin } = formData;

  const handleAutoRenew = () => {
    setAutoRenew(!autoRenew);
  };


  function interest(amt) {
    if (!amt) return 0.0;

    if (amt > Number(selectedCryptoObj?.balance)) {
      console.log("less balance check block");
      setBalanceError(true);
    } else {
      setBalanceError(false);
    } 
    let total_days = 30;
    total_days = parseFloat(total_days);

    let interest_rate = 12;
    interest_rate = parseFloat(interest_rate);
    interest_rate = interest_rate / 365;      

    let interest = (amt * interest_rate * 1) / 100;
    let total_interest = interest * total_days;
    let amount = amt; 

    amount = parseFloat(amount);
    total_interest = total_interest + amount;
    return total_interest.toFixed(5);
  }

  const selectedCryptoIndex = cryptowalletObj?.findIndex(
    (item) => item.name.toLowerCase() === selectedCoin
  );

  if (selectedCryptoIndex !== -1) {
    selectedCryptoObj = cryptowalletObj && cryptowalletObj[selectedCryptoIndex];
  }
    

  const createFixedDeposit = async () => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 30);

    if (balanceError) {
      toast.error("Insufficient Balance");
      return;
    }

    if (!inputAmount || !Number(inputAmount)) {
      toast.error("Enter Valid Amount");
      return;
    } 

  }


  return (
    <section className="dashboard-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <NavigationTabs />

              <div className="row">
              <div className="col-md-12 fixed-deposit">
                <div className="table-responsive">
                  <table className="table  table-hover">
                    <thead>
                      <tr>
                        <th width="25%" scope="col">Token</th>
                        <th width="20%" scope="col">Est. APY</th>
                        <th width="30%" scope="col">Duration(days)</th>
                        <th width="25%" scope="col">Minimum Locked Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                    {coinOptions.map((item) => (
                      <tr
                       key={item.id}
                      value={item.value}>
                        <th scope="row">
                          <div className="token-flex">
                            <img src={item.url} />
                            <p>{item.name}</p>
                          </div>
                        </th>
                        <td>
                          <p>16.98%</p>
                        </td>
                        <td>
                          <div className="Duration">
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                          </div>              
                        </td>         
                        <td>                       
                          <div className="minimum">
                            <p>0.1 BTC</p>
                            <div className="btn1">
                              <a data-toggle="modal" data-target="#exampleModal">Stake Now</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                       ))}
                      {/* <tr>
                        <th scope="row">
                          <div className="token-flex">
                            <img src={gain2} />
                            <p>Bitcoin</p>
                          </div>
                        </th>
                        <td>
                          <p>16.98%</p>
                        </td>
                        <td>
                          <div className="Duration">
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                          </div>
                        </td>
                        <td>
                          <div className="minimum">
                            <p>0.1 BTC</p>
                            <div className="btn1">
                              <a data-toggle="modal" data-target="#exampleModal">Stake Now</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="token-flex">
                            <img src={gain3} />
                            <p>Bitcoin</p>
                          </div>
                        </th>
                        <td>
                          <p>16.98%</p>
                        </td>
                        <td>
                          <div className="Duration">
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                          </div>
                        </td>
                        <td>
                          <div className="minimum">
                            <p>0.1 BTC</p>
                            <div className="btn1">
                              <a data-toggle="modal" data-target="#exampleModal">Stake Now</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="token-flex">
                            <img src={gain4} />
                            <p>Bitcoin</p>
                          </div>
                        </th>
                        <td>
                          <p>16.98%</p>
                        </td>
                        <td>
                          <div className="Duration">
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                          </div>   
                        </td>
                        <td>
                          <div className="minimum">
                            <p>0.1 BTC</p>
                            <div className="btn1">
                              <a data-toggle="modal" data-target="#exampleModal">Stake Now</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="token-flex">
                            <img src={gain5} />
                            <p>Bitcoin</p>
                          </div>
                        </th>
                        <td>
                          <p>16.98%</p>
                        </td>
                        <td>
                          <div className="Duration">
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                          </div>
                        </td>
                        <td>
                          <div className="minimum">
                            <p>0.1 BTC</p>
                            <div className="btn1">
                              <a data-toggle="modal" data-target="#exampleModal">Stake Now</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="token-flex">
                            <img src={gain6} />
                            <p>Bitcoin</p>
                          </div>
                        </th>
                        <td>
                          <p>16.98%</p>
                        </td>
                        <td>
                          <div className="Duration">
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                            <a href>30</a>
                          </div>
                        </td>
                        <td>
                          <div className="minimum">
                            <p>0.1 BTC</p>
                            <div className="btn1">
                              <a data-toggle="modal" data-target="#exampleModal">Stake Now</a>
                            </div>
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
               {/* Modal */}      
               <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-7 nopadding">
                        <div className="head">
                          <h4>Locked Stacking</h4>
                          <button type="button"> 
                            <i className="fas fa-times close" data-dismiss="modal" aria-label="Close" />
                          </button>
                        </div>                      
                        <div className="lefty">
                          <div className="body-bg">
                            <div className="flex">
                              <img src={gain1} />
                              <p>Bitcoin</p>
                            </div>
                            <div className="one">
                              <label>Type</label>
                              <button type="button" className="btn">Locked</button>
                            </div>
                            <div className="two">
                              <label>Duration</label>
                              <div className="tabs">
                                <div className="tab active">15 Days</div>
                                <div className="tab">30 Days</div>
                                <div className="tab">90 Days</div>
                              </div>
                              <div className="content">
                                <div className="content-item active">
                                  <div className="flex">
                                    <p>Lock Amount</p>
                                    <p>Available Amount 0.0 BTC</p>
                                  </div>
                                  <form action>
                                    <input type="email" maxLength={50} required placeholder="Enter your email address" />
                                    <div className="text-block">
                                      <p>BTC | Max</p>
                                    </div>
                                  </form>
                                </div>
                                <div className="content-item">
                                  <div className="flex">
                                    <p>Lock Amount</p>
                                    <p>Available Amount 0.0 BTC</p>
                                  </div>
                                  <form action>
                                    <input type="email" maxLength={50} required placeholder="Enter your email address" />
                                    <div className="text-block">
                                      <p>BTC | Max</p>
                                    </div>
                                  </form>
                                </div>
                                <div className="content-item">
                                  <div className="flex">
                                    <p>Lock Amount</p>
                                    <p>Available Amount 0.0 BTC</p>
                                  </div>
                                  <form action>
                                    <input type="email" maxLength={50} required placeholder="Enter your email address" />
                                    <div className="text-block">
                                      <p>BTC | Max</p>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="three">
                              <h5>Locked Amount of Limitation</h5>
                              <p>Minimum: <span>0.001 BTC </span></p>
                              <p>Available Quota: <span>80 BTC</span></p>
                              <p>Total Personal Quota: <span>80 BTC </span></p>
                            </div>
                          </div>
                        </div>
                      </div>      
                      <div className="col-md-5 bg-color">
                        <div className="righty">
                          <div className="close-btn">
                            <div className="title">
                              Summary
                            </div>
                            <button type="button"> 
                              <i className="fas fa-times close" data-dismiss="modal" aria-label="Close" />
                            </button>
                          </div>
                          <div className="timeline education">
                            <div className="timeline-items">
                              <div className="timeline-item">
                                <div className="flex">
                                  <h3>Stake Date</h3>
                                  <p>2022-04-17 18:17</p>
                                </div>
                              </div>
                              <div className="timeline-item">
                                <div className="flex">
                                  <h3>Value Date</h3>
                                  <p>2022-04-18 05:17</p>
                                </div>
                                <div className="flex">
                                  <div className="location">Interest Period</div>
                                  <p>1 Days</p>
                                </div>
                              </div>
                              <div className="timeline-item">
                                <div className="flex">
                                  <h3>Interest End Date</h3>
                                  <p>2022-04-17 18:17</p>
                                </div>
                              </div>
                              <div className="timeline-item">
                                <div className="flex">
                                  <h3>Redemption Period</h3>
                                  <p>1 Days</p>
                                </div>
                              </div>
                              <div className="timeline-item">
                                <div className="flex">
                                  <h3>Redemption Date</h3>
                                  <p>2022-04-17 18:17</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            <p>Est. APY</p>
                            <p>2022-04-17 18:17</p>
                          </div>
                          <div className="flex">
                            <p>Estimate Interests</p>
                            <p>2022-04-17 18:17</p>
                          </div>
                          <div className="info-txt">
                            <img src={alert} />
                            <p>Lorem ipsum dolor sit amet,adipiscing elit. Quisque luctus accumsan vulputate. Aenean pretium mauris at diam</p>
                          </div>
                          <div className="des">
                            <p>*Check holding assets under wallet - Earn - Locked Staking</p>
                          </div>
                          <div className="tacbox">
                            <input id="checkbox" type="checkbox" />
                            <label htmlFor="checkbox">I have read and agree to <a href>Rego Stacking Services Agreement</a></label>
                          </div>
                          <div className="buy-btn">
                            <a href>Buy</a>
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

  );
};

export default SetAnimationPage(FixedDeposit);
