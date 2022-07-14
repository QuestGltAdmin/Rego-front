import React from "react";
import NavigationTabs from "../components/UI/NavigationTabs";
import '../assets/css/custom.css';
import '../assets/css/style.css';
import '../assets/css/dash-inner.css';
import '../assets/css/nice-select.css';
import gain1 from '../assets/images/gain1.png';
import gain2 from '../assets/images/gain2.png';
import gain3 from '../assets/images/gain3.png';
import gain4 from '../assets/images/gain4.png';
import gain5 from '../assets/images/gain5.png';
import gain6 from '../assets/images/gain6.png';
import frame1 from '../assets/images/Frame1.png'
import frame3 from '../assets/images/Frame3.png'
import equity from '../assets/images/equity.png'
import low from '../assets/images/low.png'  
import over1 from '../assets/images/over1.png'
import alertcircle from '../assets/images/alert-circle.png'
import refresh from '../assets/images/refresh.png'

import { Link } from 'react-router-dom';

const BasketSip = () => {
  return (
    <section className="dashboard-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <NavigationTabs />
            <div className="basket">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="basket-box active">
                        <div className="upload-icon">
                          <input type="file" id="real-file" hidden="hidden" />
                          <i className="fa fa-plus" id="custom-button" />
                          <p id="custom-text" />
                        </div>
                        <div className="des">
                          <h4>Create New SIP</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                      </div>
                      <div className="basket-box">
                        <div className="icon">
                          <img src={frame1} />
                        </div>
                        <div className="des">
                          <h4>Ideal for new investors</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                      </div>
                      <div className="basket-box">
                        <div className="icon">
                          <img src={frame3} />
                        </div>
                        <div className="des">
                          <h4>Trackers</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                      </div>
                      <div className="basket-box">
                        <div className="icon">
                          <img src={frame3} />
                        </div>
                        <div className="des">
                          <h4>Trackers</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="basket-box">
                        <div className="icon">
                          <img src={frame1} />
                        </div>
                        <div className="des">
                          <h4>Ideal for new investors</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                      </div>
                      <div className="basket-box">
                        <div className="icon">
                          <img src={frame3} />
                        </div>
                        <div className="des">
                          <h4>Trackers</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                      </div>
                      <div className="basket-box">
                        <div className="icon">
                          <img src={frame3} />
                        </div>
                        <div className="des">
                          <h4>Trackers</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                      </div>
                      <div className="basket-box">
                        <div className="icon">
                          <img src={frame3} />
                        </div>
                        <div className="des">
                          <h4>Trackers</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="lefty">
                    <div className="head">
                      <p><i className="fas fa-arrow-left" /> Create New SIP</p>
                      <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                      </ul>
                    </div>
                    <div className="search-flex">
                      <p>Select your tokens</p>
                      <div className="search">
                        <i className="fas fa-search" aria-hidden="true" />
                        <input type="text" className placeholder="Search Tokens" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain1} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain2} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain3} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain4} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain5} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain6} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain1} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain2} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain3} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain4} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain5} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain6} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain1} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain2} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain3} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain4} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain5} />
                          <p>BTC</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-3">
                        <div className="mini-box">
                          <img src={gain6} />
                          <p>BTC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="basket-btn">
                        <a href>Create Allocation</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basket-details">
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="equity-flex">
                        <img src={equity} />   
                        <div className="des">
                          <h3>Equity &amp; Gold</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id luctus odio, ornare placerat diam.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="low-flex">
                        <div className="des">
                          <p>3Y CAGR</p>
                          <h3>17.92%</h3>
                        </div>
                        <div className="detail-btn">
                          <a href><img src={low} />Low Volatility</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="popular">
                      <h3>Popular</h3>
                      <ul>
                        <li>More than 20K new investors last month</li>
                      </ul>
                    </div>
                    <div className="overview">
                      <h4>Overview</h4>
                      <div className="row">
                        <div className="col-md-7">
                          <div className="des">
                            <h5>About</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id luctus odio, ornare placerat diam. Aenean et ipsum nec metus commodo gravida. <br />Vestibulum tempor felis vitae lorem rutrum scelerisque. Sed sit amet ultricies diam.</p>
                            <ul>
                              <li>
                                Donec a velit ut eros vehicula convallis. In laoreet, dui at lobortis imperdiet, lectus leo pellentesque ligula, non vulputate leo turpis quis libero.
                              </li>
                            </ul>
                          </div> 
                        </div>
                        <div className="col-md-5">
                          <div className="overview-detail">
                            <div className="over-flex">
                              <img src={over1} />
                              <div className="des-txt">
                                <h6>Methodology</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                              </div>
                            </div>
                            <div className="over-flex">
                              <img src={over1} />
                              <div className="des-txt">
                                <h6>Methodology</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                              </div>
                            </div>
                            <p>Created By Windmill Capital</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="righty">
                      <div className="head">
                        <p>Minimum Investment Amount<img src={alertcircle}/></p>
                        <h4>₹281 <img src={refresh} /></h4>
                      </div>
                      <div className="desc">
                        <p>Get free access forever</p>
                        <h6>See more benefits</h6>
                      </div>
                      <div className="btn-info-detail">
                        <div className="btn-detail">
                          <a data-toggle="modal" data-target="#exampleModalCenter">Invest Now</a>
                        </div>
                        <div className="btn-detail1">
                          <a href>Add to watchlist</a>
                        </div>
                      </div>
                      <div className="social-info">
                        <ul>
                          <li>Share On</li>
                          <li><i className="fab fa-facebook-f" /></li>
                          <li><i className="fab fa-twitter" /></li>
                          <li><i className="fab fa-whatsapp" /></li>
                          <li><i className="far fa-clone" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="basket-modal">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="head">
                              <div className="title">
                                <img src={equity} />
                                <p>Investing in Best Crypto Assets</p>
                              </div>
                              <button type="button"> 
                                <i className="fas fa-times close" data-dismiss="modal" aria-label="Close" />
                              </button>
                            </div>
                          </div>
                          <div className="col-md-12 nopadding">
                            <p>Complete your transaction in 4:47, Before sassion Expires</p>
                          </div>
                          <div className="col-md-12">
                            <div className="tab-head">
                              <h6>Confirm Investment Amount</h6>
                              Min. Investment Amount: ₹281.00 <a href>Learn more</a>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="tabs">
                              <div className="tab active">Monthly SIP</div>
                              <div className="tab">One Time</div>
                            </div>
                            <div className="content">
                              <div className="content-item active">
                                <p>Next installment will be due on May 17,2022.
                                  You can edit anytime</p>
                              </div>
                              <div className="content-item">
                                Content 2
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="form-flex">
                              <div className="input-field">
                                <input type="number" name />
                              </div>
                              <div className="form-btn">
                                <a href>Confirm Account</a>
                              </div>
                            </div>
                            <div className="number-input">
                              <ul>
                                <li><a href>+1000</a></li>
                                <li><a href>+5000</a></li>
                                <li><a href>+10000</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="table-head">
                              <h4>Review Orders</h4>
                            </div>
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th width="35%" scope="col">Constituents</th>
                                    <th width="20%" scope="col">Current Price(₹)</th>
                                    <th width="15%" scope="col">Weights(%)</th>
                                    <th width="15%" scope="col">Quantity</th>
                                    <th width="15%" scope="col">Order Type</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td width="35%">
                                      Nippons india Nifty 50 ETF
                                    </td>
                                    <td width="20%">189.54</td>
                                    <td width="15%">67.45</td>
                                    <td width="15%">1</td>
                                    <td width="15%">BUY</td>
                                  </tr>
                                  <tr>
                                    <td width="35%">
                                      Nippons india Nifty 50 ETF
                                    </td>
                                    <td width="20%">189.54</td>
                                    <td width="15%">67.45</td>
                                    <td width="15%">1</td>
                                    <td width="15%">BUY</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-12 nopadding1">
                            <div className="basket-btm">
                              <div className="des">
                                <p>You will invest</p>
                                <h3>₹281 <img src={refresh} /></h3>
                              </div>
                              <div className="bottom-btn">
                                <a href>Start Monthly SIP</a>
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
  );
};

export default BasketSip;
