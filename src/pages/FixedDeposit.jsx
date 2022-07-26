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
// import axios from "axios";
import axios from "../http/axios/axios_main";

import { Link } from 'react-router-dom';
import { coins } from "../assets/coins/coins";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { updateWalletBalance } from "../store/reducers/walletReducer";
import { Card } from "react-bootstrap";
import svgImages from "../assets/images/svg-icons/svgImages";
import Switch from "react-switch";








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

    const payload = {
      amount: inputAmount,
      email: user.email,
      currency: selectedCoin,
      enddate: endDate,
      payoutAmount: payoutAmount,
    };   
  
    const res = await axios.post("/users/create-stake", payload);

    if (res.data.status) {
      toast.success("Money Deposited");
      dispatch(
        updateWalletBalance({
          name: selectedCoin,
          balance: inputAmount,     
        })
      );
    }    
  };          


  console.log({
    balanceError,
    selectedCoin,
    selectedCryptoObj,
    selectedCryptoIndex,
  });      

       
  



  return (


    <section className="dashboard-sec">
         
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <NavigationTabs />
              <div class=" custom-modal" id="menu5">
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
              {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-md-7 nopadding">
                              <div class="head">
                                <h4>Locked Stacking</h4>
                                <button type="button"> 
                                  <i class="fas fa-times close" data-dismiss="modal" aria-label="Close"></i>
                                </button>
                              </div>
                            <div class="lefty">
                              <div class="body-bg">
                                <div class="flex">
                                  <img src="assets/images/gain1.png"/>
                                  <p>Bitcoin</p>
                                </div>
                                <div class="one">
                                  <label>Type</label>
                                  <button type="button" class="btn">Locked</button>
                                </div>
                                <div class="two">
                                  <label>Duration</label>
                                   <div class="tabs">
                                      <div class="tab active">30 Days</div>
                                      <div class="tab">60 Days</div>
                                      <div class="tab">90 Days</div>
                                  </div>
                                  <div class="content">
                                      <div class="content-item active">
                                          <div class="flex">
                                              <p>Lock Amount</p>
                                              <p>Available Amount 0.0 BTC</p>
                                          </div>
                                          <form action="">
                                            <input type="email"  maxlength="50" required placeholder="Enter your email address"/>
                                            <div class="text-block">
                                              <p>BTC | Max</p>
                                            </div>
                                          </form>
                                      </div>
                                      <div class="content-item">
                                          <div class="flex">
                                              <p>Lock Amount</p>
                                              <p>Available Amount 0.0 BTC</p>
                                          </div>
                                          <form action="">
                                            <input type="email"  maxlength="50" required placeholder="Enter your email address"/>
                                            <div class="text-block">
                                              <p>BTC | Max</p>
                                            </div>
                                          </form>
                                      </div>
                                      <div class="content-item">
                                          <div class="flex">
                                              <p>Lock Amount</p>
                                              <p>Available Amount 0.0 BTC</p>
                                          </div>
                                          <form action="">
                                            <input type="email"  maxlength="50" required placeholder="Enter your email address"/>
                                            <div class="text-block">
                                              <p>BTC | Max</p>
                                            </div>
                                          </form>
                                      </div>
                                  </div>
                                </div>
                                <div class="three">
                                  <h5>Locked Amount of Limitation</h5>
                                  <p>Minimum: <span>0.001 BTC </span></p>
                                  <p>Available Quota: <span>80 BTC</span></p>
                                  <p>Total Personal Quota: <span>80 BTC </span></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-5 bg-color">
                            <div class="righty">
                              <div class="close-btn">
                                <div class="title">
                                  Summary
                                </div>
                                <button type="button"> 
                                  <i class="fas fa-times close" data-dismiss="modal" aria-label="Close"></i>
                                </button>
                              </div>
                              <div class="timeline education">
                                  <div class="timeline-items">
                                    <div class="timeline-item">
                                      <div class="flex">
                                        <h3>Stake Date</h3>
                                        <p>2022-04-17 18:17</p>
                                        
                                      </div>
                                    </div>
                                    <div class="timeline-item">
                                      <div class="flex">
                                        <h3>Value Date</h3>
                                        <p>2022-04-18 05:17</p>
                                      </div>
                                       <div class="flex">
                                          <div class="location">Interest Period</div>
                                          <p>1 Days</p>
                                       </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="flex">
                                          <h3>Interest End Date</h3>
                                          <p>2022-04-17 18:17</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                      <div class="flex">
                                        <h3>Redemption Period</h3>
                                        <p>1 Days</p>
                                      </div>
                                    </div>
                                    <div class="timeline-item">
                                      <div class="flex">
                                        <h3>Redemption Date</h3>
                                        <p>2022-04-17 18:17</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div class="flex">
                                <p>Est. APY</p>
                                <p>2022-04-17 18:17</p>
                              </div>
                              <div class="flex">
                                <p>Estimate Interests</p>
                                <p>2022-04-17 18:17</p>
                              </div>
                              <div class="info-txt">
                                <img src="assets/images/alert.png"/>
                                <p>Lorem ipsum dolor sit amet,adipiscing elit. Quisque luctus accumsan vulputate. Aenean pretium mauris at diam</p>
                              </div>
                              <div class="des">
                                <p>*Check holding assets under wallet - Earn - Locked Staking</p>
                              </div>
                              <div class="tacbox">
                                <input id="checkbox" type="checkbox" />
                                <label for="checkbox">I have read and agree to <a href="">Rego Stacking Services Agreement</a></label>
                              </div>
                              <div class="buy-btn" >
                                <a  href="" onClick={() => createFixedDeposit()}>Buy</a>
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
          </div>         
    </section>
  //   <section className="dashboard-sec">
  //   <div className="container">
  //        <div className="row">
  //          <div className="col-md-12">
  //            <div>
  //           <NavigationTabs />   
  //   <div className="row mt-5">
  //     {/* <NavigationTabs /> */}
  //   <div className="col-lg-4">
        
  //     <Card className="shadow-lg">
  //       <Card.Body>
  //         <div className="card-heading">
  //           <div className="font-h3">Fixed Deposit</div>
  //           <div className="d-flex justify-content-between">
  //             {" "}
  //             <span className="card12 m-3">Amount</span>
  //             <span className="card12 m-3">
  //               Balance{" "}
  //               {`${
  //                 selectedCryptoObj?.balance
  //               }  ${selectedCoin.toUpperCase()}`}
  //             </span>
  //           </div>
  //         </div>
  //         <div
  //           className="row"
  //           style={{
  //             display: "flex",
  //             marginTop: "20px",
  //             marginBottom: balanceError ? "30px" : "80px",
  //           }}
  //         >
  //           <select
  //             className="form-control text-uppercase"
  //             style={{
  //               width: "20%",
  //               left: "20px",
  //               position: "absolute",
  //             }}
  //             onChange={(e) => {
  //               setFormData({
  //                 ...formData,
  //                 selectedCoin: e.target.value,
  //                 inputAmount: "",
  //                 payoutAmount: "",
  //               });
  //               setBalanceError(false);
  //             }}
  //           >
  //             {coinOptions.map((item) => (
  //               <option
  //                 className="text-uppercase"
  //                 key={item.id}
  //                 value={item.value}
  //               >
  //                 {item.name}
  //               </option>
  //             ))}
  //           </select>
  //           <input
  //             type="text"
  //             className="form-control"
  //             placeholder="Enter Amount"
  //             value={inputAmount}
  //             onChange={(e) => {
  //               const value = e.target.value;
  //               setFormData({
  //                 ...formData,
  //                 inputAmount: value,
  //                 payoutAmount: interest(value),
  //               });
  //             }}
  //             style={{
  //               width: "65%",
  //               marginLeft: "20px",
  //               position: "absolute",
  //               right: "20px",
  //             }}
  //           />
  //         </div>
  //         {balanceError && (
  //           <p className="text-danger p-0 m-0 ml-1">Insufficient Balance</p>
  //         )}
  //         <div className="term btn m-3 d-flex justify-content-center ">
  //           <div className="term d-flex-column">
  //             <div className="termt">
  //               <span>Term</span>
  //             </div>
  //             <div className="termd">
  //               <span className="text-info">30 Days</span>
  //             </div>
  //           </div>
  //           <div className="btn d-flex justify-content-around ">
  //             <div className="rnwtext termt m-1">
  //               <span>Auto Renew</span>
  //             </div>
  //             <div className="btnt m-1">
  //               <Switch
  //                 checked={autoRenew}
  //                 onChange={handleAutoRenew}
  //                 onColor="#3c81a3"
  //                 offColor="#1a488f"
  //               />
  //             </div>
  //             <div className="optn text-info m-1">
  //               <span>Advanced Options</span>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="coin-balance">
  //             <span className="font-h3 text-uppercase">INTEREST 12% APY</span>
  //           </div>
  //         </div>
  //         <div className="row text-center">
  //           <div className="rate-section" style={{ marginBottom: "105px" }}>
  //             <div>
  //               <div className="font-h4 color-secondary-dark ">
  //                 Payout Amount {selectedCoin.toUpperCase()}{" "}
  //                 {payoutAmount || 0.0}
  //               </div>
  //               <div className="font-h5 color-secondary-hint">
  //                 44.444% higher than our base return
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <button
  //           className="btn buy_now_btn card-action-btn"
  //           onClick={() => createFixedDeposit()}
  //         >
  //           <span>
  //             <span className="v-align-middle d-inline-block ">
  //               Create Fixed Deposit
  //             </span>
  //           </span>
  //         </button>
  //       </Card.Body>
  //     </Card>
  //   </div>
  //   <div className="col-lg-8">
  //     <Card className="shadow-lg" style={{ height: "100%" }}>
  //       <Card.Body>
  //         <div className="card-heading">
  //           <div className="font-h3">Fixed Deposit</div>
  //         </div>
  //         <div className="card-body">
  //           <div className="table-heading flex gap-20 mt-2">
  //             <div className="ml-8">Principle Amount</div>
  //             <div>Start Date</div>
  //             <div>Term</div>
  //             <div>Payout Amount</div>
  //             <div>Payout Date</div>
  //           </div>
  //           <div className="table-body flex justify-center items-center mt-28 flex-col">
  //             <img src={svgImages.noFd} height={120} width={120} />
  //             <div className="font-h3 mt-3">
  //               Create A Fixed Deposit To Get Started
  //             </div>
  //           </div>
  //         </div>
  //       </Card.Body>
  //     </Card>
  //   </div>
  // </div>

  // </div>
  //         </div>
  //          </div>
  //      </div>      
  //    </section>




  );
};

export default SetAnimationPage(FixedDeposit);






