import React from "react";
import NavigationTabs from "../components/UI/NavigationTabs";




const P2P = () => {
  return (
    <section className="dashboard-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <NavigationTabs />
              <div className="p2p-content">
              <div className="head">
                <h1>Binance P2P: Buy/Sell Your Crypto Locally</h1>
              </div>
              <div className="row p2p-strip">
                <div className="col-md-3">
                  <div className="p2p-tabs">
                    <ul className="nav nav-tabs upper-list-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a className="nav-link active" data-toggle="tab" href="#p2p-buy" role="tab" aria-selected="true">Buy</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" data-toggle="tab" href="#p2p-sell" role="tab" aria-selected="true">Sell</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <ul className="nav nav-tabs upper-list-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" data-toggle="tab" href="#p2p1" role="tab" aria-selected="true">USDT</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#p2p2" role="tab" aria-selected="true">BTC</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#p2p3" role="tab" aria-selected="true">BUSD</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#p2p4" role="tab" aria-selected="true">ETH</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#p2p5" role="tab" aria-selected="true">ADA</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#p2p6" role="tab" aria-selected="true">TRX</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#p2p7" role="tab" aria-selected="true">SHIB</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#p2p8" role="tab" aria-selected="true">MATIC</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#p2p9" role="tab" aria-selected="true">WRX</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt5">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="heading-form">
                        <div className="p2p-input">
                          <label>Amount</label>
                          <div className="input-amount">
                            <input type name placeholder="Enter Amount" />
                            <div className="input-btn">
                              <div className="input-txt">INR</div>
                              <button className="p2p-btn">Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="input-select">
                        <label>Fiat</label>
                        <select name>
                          <option value={1}>AED</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                          <option value={4}>Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-select">
                        <label>Payment</label>
                        <select name>
                          <option value={1}>All payments</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                          <option value={4}>Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-check pt-4">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Only show merchant ads
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dropdown1">
                    <button onclick="myFunction1()" className="dropbtn1"><i className="fas fa-sync-alt" /> Refresh</button>
                    <div id="myDropdown1" className="dropdown-content1">
                      <a href="#">Not Now</a>
                      <a href="#">5s to refresh</a>
                      <a href="#">10s to refresh</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="tab-content mt-4" id="myTabContent">
                    <div className="tab-pane fade show active" id="p2p-buy" role="tabpanel">
                      <div className="tab-content mt-4" id="myTabContent">
                        <div className="tab-pane fade show active" id="p2p1" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="p2p2" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody> 
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="p2p3" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="p2p4" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="p2p5" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="p2p6" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="p2p7" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="p2p8" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>    
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="p2p9" role="tabpanel">
                          <div className="p2p-table">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Advertisers</th>
                                    <th>Price <span className="red">lowest to highest</span></th>
                                    <th>Limit/Available</th>
                                    <th>Payment</th>
                                    <th>Trade <span className="green">0 Fee</span></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="one">
                                        <span>R</span>
                                        Rb trades
                                      </div>
                                      <div className="des">
                                        97 orders 100.00% completion
                                      </div>
                                    </td>
                                    <td>
                                      82.80<span className="inr">INR</span>
                                    </td>
                                    <td>
                                      <div className="limit-flex">
                                        <span>Available</span>
                                        <h6>5,141.11 USDT</h6>
                                      </div>
                                      <div className="limit-flex">
                                        <span>Limit</span>
                                        <h6>₹425,000.00 - ₹425,683.90</h6>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="upi-payment">
                                        <a href>UPI</a>
                                        <a href>IMPS</a>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="table-btn">
                                        <a href>Buy USDT</a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="p2p-sell" role="tabpanel">2</div>
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

export default P2P;
