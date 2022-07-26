import React from "react";
import NavigationTabs from "../components/UI/NavigationTabs";
// import '../assets/css/custom.css';
// import '../assets/css/style.css';
// import '../assets/css/dash-inner.css';
// import '../assets/css/nice-select.css';
import gain1 from '../assets/images/gain1.png';
import gain2 from '../assets/images/gain2.png';
import trad1 from '../assets/images/trad1.svg'
import trad2 from '../assets/images/trad2.svg'
import trad3 from '../assets/images/trad3.svg'
import bell from '../assets/images/bell.svg'
import axios from "axios";
import { Link } from 'react-router-dom';



const ProTrading = () => {
  return (
    <section className="dashboard-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <NavigationTabs />
              <div className="row">
              <div className="col-md-6">
                <div className="trading-tabs">
                  <div className="flex-tab">
                    <div className="tabs">
                      <div className="tab active">Open Orders(O)</div>
                      <div className="tab">Order History</div>
                      <div className="tab">Trade History</div>
                      <div className="tab">Funds</div>
                    </div>
                    <div className="token-flex">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Show all Tokens
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-item active">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width scope="col">Date</th>
                              <th width scope="col">Pair</th>
                              <th width scope="col">Type</th>
                              <th width scope="col">Side</th>
                              <th width scope="col">Price</th>
                              <th width scope="col">Amount</th>
                              <th width scope="col">Filled</th>
                              <th width scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="content-item">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width scope="col">Date</th>
                              <th width scope="col">Pair</th>
                              <th width scope="col">Type</th>
                              <th width scope="col">Side</th>
                              <th width scope="col">Price</th>
                              <th width scope="col">Amount</th>
                              <th width scope="col">Filled</th>
                              <th width scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="content-item">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width scope="col">Date</th>
                              <th width scope="col">Pair</th>
                              <th width scope="col">Type</th>
                              <th width scope="col">Side</th>
                              <th width scope="col">Price</th>
                              <th width scope="col">Amount</th>
                              <th width scope="col">Filled</th>
                              <th width scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="content-item">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width scope="col">Date</th>
                              <th width scope="col">Pair</th>
                              <th width scope="col">Type</th>
                              <th width scope="col">Side</th>
                              <th width scope="col">Price</th>
                              <th width scope="col">Amount</th>
                              <th width scope="col">Filled</th>
                              <th width scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="content-item">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width scope="col">Date</th>
                              <th width scope="col">Pair</th>
                              <th width scope="col">Type</th>
                              <th width scope="col">Side</th>
                              <th width scope="col">Price</th>
                              <th width scope="col">Amount</th>
                              <th width scope="col">Filled</th>
                              <th width scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-white-box">
                  <ul className="nav nav-tabs upper-list-tabs tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" data-toggle="tab" href="#price1" role="tab" aria-selected="true">
                        <img src={trad1} />
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#price2" role="tab" aria-selected="false">
                        <img src={trad2} />
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#price2" role="tab" aria-selected="false">
                        <img src={trad3} />
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="price1" role="tabpanel">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width="10%" scope="col">Price</th>
                              <th width="5%" scope="col">Amount(ETH)</th>
                              <th width="5%" scope="col">Total(BTC)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="bell-flex">
                          <div className="num">
                            <p>0.074068  <span>₹240,137.84</span></p>
                          </div>
                          <img src={bell} />
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>  
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="price2" role="tabpanel">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width="10%" scope="col">Price</th>
                              <th width="5%" scope="col">Amount(ETH)</th>
                              <th width="5%" scope="col">Total(BTC)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="bell-flex">
                          <div className="num">
                            <p>0.074068  <span>₹240,137.84</span></p>
                          </div>
                          <img src={bell} />
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr> 
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="price2" role="tabpanel">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width="10%" scope="col">Price</th>
                              <th width="5%" scope="col">Amount(ETH)</th>
                              <th width="5%" scope="col">Total(BTC)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="bell-flex">
                          <div className="num">
                            <p>0.074068  <span>₹240,137.84</span></p>
                          </div>
                          <img src={bell} />
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                            <tr>
                              <td className="orange">0.074068</td>
                              <td className="black"><p>0.00003864</p></td>
                              <td className="black"><p>0.0002325</p></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dash-white-box">
                  <div className="table-responsive">
                    <h5>Trades</h5>
                    <table className="table">
                      <thead>
                        <tr>     
                          <th width="10%" scope="col">Price</th>
                          <th width="5%" scope="col">Amount(ETH)</th>
                          <th width="5%" scope="col">Total(BTC)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                        <tr>
                          <td className="orange">0.074068</td>
                          <td className="black"><p>0.00003864</p></td>
                          <td className="black"><p>0.0002325</p></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dash-white-box">
                  <ul className="nav nav-tabs upper-list-tabs mt5 tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" data-toggle="tab" href="#trading1" role="tab" aria-selected="true">
                        Buy
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#trading2" role="tab" aria-selected="false">Sell</a>
                    </li>
                  </ul>
                  <div className="tab-content mt-4" id="myTabContent">
                    <div className="tab-pane fade content show active" id="trading1" role="tabpanel">
                      <div className="fees">
                        <div className="limit">
                          <a href className="active">Limit</a>
                          <a href>Market</a>
                        </div>
                        <p><a href>Fees</a></p>
                      </div>
                      <div className="form">
                        <label>Price</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <div className="dropdown" tabIndex={1}>
                                <div className="select">
                                  <span>BTC</span>
                                  <i className="fa fa-chevron-down" />
                                </div>
                                <input type="hidden" name="gender" />
                                <ul className="dropdown-menu" style={{display: 'none'}}>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                </ul>
                              </div>
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="0.074068" />
                          <div className="input-group-append">
                            <span className="input-group-text">₹240,137.84</span>
                          </div>
                        </div>
                      </div>
                      <div className="form">
                        <label>Amount</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <div className="dropdown" tabIndex={1}>
                                <div className="select">
                                  <span>BTC</span>
                                  <i className="fa fa-chevron-down" />
                                </div>
                                <input type="hidden" name="gender" />
                                <ul className="dropdown-menu" style={{display: 'none'}}>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                </ul>
                              </div>
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="Enter Amount" />
                          <div className="input-group-append">
                            <span className="input-group-text" />
                          </div>
                        </div>
                      </div>
                      <div className="form">
                        <div className="flex-label">
                          <label>Amount</label>
                          <p>Total Balance: 0.00 BTC</p>
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <div className="dropdown" tabIndex={1}>
                                <div className="select">
                                  <span>BTC</span>
                                  <i className="fa fa-chevron-down" />
                                </div>
                                <input type="hidden" name="gender" />
                                <ul className="dropdown-menu" style={{display: 'none'}}>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                </ul>
                              </div>
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="Enter Amount" />
                          <div className="input-group-append">
                            <span className="input-group-text" />
                          </div>
                        </div>
                      </div>
                      <div className="Duration-trading">
                        <a href>30</a>
                        <a href>30</a>
                        <a href>30</a>
                        <a href>30</a>
                      </div>
                      <div className="trading-btn">
                        <a href>Buy ETH</a>
                      </div>
                    </div>
                    <div className="tab-pane fade content" id="trading2" role="tabpanel">
                      <div className="fees">
                        <div className="limit">
                          <a href className="active">Limit</a>
                          <a href>Market</a>
                        </div>
                        <p><a href>Fees</a></p>
                      </div>
                      <div className="form">
                        <label>Price</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <div className="dropdown" tabIndex={1}>
                                <div className="select">
                                  <span>BTC</span>
                                  <i className="fa fa-chevron-down" />
                                </div>
                                <input type="hidden" name="gender" />
                                <ul className="dropdown-menu" style={{display: 'none'}}>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                </ul>
                              </div>
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="0.074068" />
                          <div className="input-group-append">
                            <span className="input-group-text">₹240,137.84</span>
                          </div>
                        </div>
                      </div>
                      <div className="form">
                        <label>Amount</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <div className="dropdown" tabIndex={1}>
                                <div className="select">
                                  <span>BTC</span>
                                  <i className="fa fa-chevron-down" />
                                </div>
                                <input type="hidden" name="gender" />
                                <ul className="dropdown-menu" style={{display: 'none'}}>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                </ul>
                              </div>
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="0.074068" />
                        </div>
                      </div>
                      <div className="form">
                        <div className="flex-label">
                          <label>Amount</label>
                          <p>Total Balance: 0.00 BTC</p>
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <div className="dropdown" tabIndex={1}>
                                <div className="select">
                                  <span>BTC</span>
                                  <i className="fa fa-chevron-down" />
                                </div>
                                <input type="hidden" name="gender" />
                                <ul className="dropdown-menu" style={{display: 'none'}}>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                  <li id>abcde</li>
                                </ul>
                              </div>
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="0.074068" />
                        </div>
                      </div>
                      <div className="Duration-trading">
                        <a href>30</a>
                        <a href>30</a>
                        <a href>30</a>
                        <a href>30</a>
                      </div>
                      <div className="trading-btn">
                        <a href>Buy ETH</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="white-box mt-3">
                  <div className="deposit">
                    <div className="assets-flex">
                      <h6>Assets</h6>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Show all Tokens
                        </label>
                      </div>
                    </div>
                    <div className="assets-flex">
                      <h6>Token</h6>
                      <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Balance
                        </label>
                      </div>
                    </div>
                    <div className="assets-flex">
                      <div className="img">
                        <img src={gain1} />
                        <p>BTC</p>
                      </div>
                      <label>0.00</label>
                    </div>
                    <div className="assets-flex">
                      <div className="img">
                        <img src={gain2} />
                        <p>BTC</p>
                      </div>
                      <label>0.00</label>
                    </div>
                    <div className="trading-btn">
                      <a href>Deposit</a>
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

export default ProTrading;
