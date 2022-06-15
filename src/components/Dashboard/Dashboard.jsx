import React from 'react'
import '../../assets/css/custom.css';
import '../../assets/css/style.css';
import '../../assets/css/dash-inner.css';
import '../../assets/css/nice-select.css';
import icone1 from '../../assets/images/icon1.png';
import icone2 from '../../assets/images/icon2.png';
import icone3 from '../../assets/images/icon3.png';
import icone4 from '../../assets/images/icon4.png';
import icone5 from '../../assets/images/icon5.png';
import nft from '../../assets/images/nft.jpg';
import nft2 from '../../assets/images/nft2.jpg';
import nftcrtn from '../../assets/images/nft.png';
// import gain from '../../assets/images/gain.png';
import gain1 from '../../assets/images/gain1.png';
import gain2 from '../../assets/images/gain2.png';
import gain3 from '../../assets/images/gain3.png';
import gain4 from '../../assets/images/gain4.png';
import gain5 from '../../assets/images/gain5.png';
import gain6 from '../../assets/images/gain6.png';
import share from '../../assets/images/share.png'; 
import share2 from '../../assets/images/share-2.png';
import facebook from '../../assets/images/Facebook.svg';
import instagram from '../../assets/images/Instagram.svg';
import twitter from '../../assets/images/Twitter.svg';
import bookmark from '../../assets/images/bookmark.png';
import wallet from '../../assets/images/wallet.png'
import triangle from '../../assets/images/triangle.png'
import nftprofile from '../../assets/images/nft-profile.png'
import drop1 from '../../assets/images/drop1.png'
import alert from '../../assets/images/alert.png'
import frame1 from '../../assets/images/Frame1.png'
import frame3 from '../../assets/images/Frame3.png'
import equity from '../../assets/images/equity.png'
import low from '../../assets/images/low.png'  
import over1 from '../../assets/images/over1.png'
import over2 from '../../assets/images/over2.png'
import alertcircle from '../../assets/images/alert-circle.png'
import refresh from '../../assets/images/refresh.png'
import trad1 from '../../assets/images/trad1.svg'
import trad2 from '../../assets/images/trad2.svg'
import trad3 from '../../assets/images/trad3.svg'
import bell from '../../assets/images/bell.svg'
import blog from '../../assets/images/blog.jpg'
import blog1 from '../../assets/images/blog1.png'
import blog2 from '../../assets/images/blog2.png'
import blog3 from '../../assets/images/blog3.png'
import blog4 from '../../assets/images/blog4.png'
import blog5 from '../../assets/images/blog5.png'





   



export default function Dashboard() {
  return (
    <div>

<section className="dashboard-sec pb-0">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <ul className="nav nav-tabs upper-list-tabs mt5" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" data-toggle="tab" href="#menu1" role="tab" aria-selected="true">Dashboard</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#menu2" role="tab" aria-selected="false">Buy Sell</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#menu3" role="tab" aria-selected="false">NFT</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#menu4" role="tab" aria-selected="false">Swap</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#menu5" role="tab" aria-selected="false">Fixed Deposit</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#menu6" role="tab" aria-selected="false">Basket/SIP</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#menu7" role="tab" aria-selected="false">Pro Trading</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#menu8" role="tab" aria-selected="false">P2P</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#menu9" role="tab" aria-selected="false">Blogs and News</a>
          </li>
        </ul>
        <div className="tab-content mt-4" id="myTabContent">
          <div className="tab-pane fade show active" id="menu1" role="tabpanel">
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
                      <tbody>
                        <tr className="selected-row">
                          <td><div><img src={icone1}/> INR</div></td>
                          <td><div className="light-green-text"><i className="fa fa-rupee-sign" /> 654.55</div></td>
                        </tr>
                        <tr>
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
                        </tr>
                      </tbody>
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
          <div className="tab-pane fade" id="menu2" role="tabpanel">
            <div className="row">
              <div className="col-md-12">
                <div className="search">
                  <i className="fas fa-search" />
                  <input type="text" className placeholder="Search Tokens" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-8">
                    <div className="graph-head">
                      <img src={gain1} />
                      <div className="des">
                        <p>Bitcoin</p>
                      </div>
                      <p>₹32,44,752.18 <span>+1,16,811.08(3.60%)</span></p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-flex">
                      <p>
                        <a className="change-price">About Coin</a>
                      </p>
                      <div className="share-icon-box">
                        <img src={share2} />           
                        <ul className="icon-list">
                          <li><a href><img src={facebook} /></a></li>
                          <li><a href><img src={instagram} /></a></li>
                          <li><a href><img src={twitter} /></a></li>
                        </ul>
                      </div>
                      <img src={bookmark}/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="none-sq-price">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="sq-price">
                      <div id="line-chart-buy" style={{height: '400px', width: '100%'}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="buy-sell dash-white-box">
                  <ul className="nav nav-tabs upper-list-tabs tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" data-toggle="tab" href="#buy" role="tab" aria-selected="true">
                        Buy
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" data-toggle="tab" href="#sell" role="tab" aria-selected="false">Sell</a>
                    </li>
                  </ul>
                  <div className="tab-content mt-4" id="myTabContent">
                    <div className="tab-pane fade content show active" id="buy" role="tabpanel">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="info-flex">
                            <p>Type Delivery</p>
                            <div className="input-field">
                              <input type name />
                            </div>
                          </div>
                          <div className="info-flex">
                            <div className="dropdown" tabIndex={1}>
                              <div className="select">
                                <span>No. Of  <b>Coins</b></span>
                                <i className="fa fa-chevron-down" />
                              </div>
                              <input type="hidden" name="gender" />
                              <ul className="dropdown-menu" style={{display: 'none'}}>
                                <li id>abcde</li>
                                <li id>abcde</li>
                                <li id>abcde</li>
                              </ul>
                            </div>
                            <div className="input-field">
                              <input type name />
                            </div>
                          </div>
                          <div className="info-flex">
                            <p>Type Delivery</p>
                            <div className="input-field">
                              <input type name />
                            </div>
                          </div>
                          <div className="info-flex">
                            <p>Price Market</p>
                            <p>₹32,44,752.18</p>
                          </div>
                          <div className="info-flex-txt">
                            <h5>Balance</h5>
                            <div className="des">
                              <p>
                                <img src={wallet} />
                                ₹0.00
                              </p>
                            </div>
                          </div>
                          <div className="bottom-btn">
                            <div className="buy-btn">
                              <a data-toggle="modal" data-target="#exampleModal1">Buy</a>
                            </div>
                          </div>
                          {/* <div class="des">
                            <h6><i class="fas fa-chevron-left"></i> Market Depth</h6>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade content" id="sell" role="tabpanel">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="info-flex">
                            <p>Type Delivery</p>
                            <div className="input-field">
                              <input type name />
                            </div>
                          </div>
                          <div className="info-flex">
                            <div className="dropdown" tabIndex={1}>
                              <div className="select">
                                <span>No. Of  <b>Coins</b></span>
                                <i className="fa fa-chevron-down" />
                              </div>
                              <input type="hidden" name="gender" />
                              <ul className="dropdown-menu" style={{display: 'none'}}>
                                <li id>abcde</li>
                                <li id>abcde</li>
                                <li id>abcde</li>
                              </ul>
                            </div>
                            <div className="input-field">
                              <input type name />
                            </div>
                          </div>
                          <div className="info-flex">
                            <p>Type Delivery</p>
                            <div className="input-field">
                              <input type name />
                            </div>
                          </div>
                          <div className="info-flex">
                            <p>Price Market</p>
                            <p>₹32,44,752.18</p>
                          </div>
                          <div className="info-flex-txt">
                            <h5>Balance</h5>
                            <div className="des">
                              <p>
                                <img src={wallet} />
                                ₹0.00
                              </p>
                            </div>
                          </div>
                          <div className="bottom-btn">
                            <div className="buy-btn">
                              <a data-toggle="modal" data-target="#exampleModal1">Buy</a>
                            </div>
                          </div>
                          {/* <div class="des">
                              <h6><i class="fas fa-chevron-left"></i> Market Depth</h6>
                            </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade custom-buyer" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="buy-modal">
                            <div className="img">
                              <img src={triangle} />
                            </div>
                            <div className="des">
                              <h4>Attention</h4>
                              <p>Trading on DCXfuture involves a high degree of risk with potential for both great profits and significant losses.</p>
                              <p>Please be aware that in the event of extreme price movement, there is a chance that all your locked balance may be liquidated. Before deciding t0 participate in the Crypto Futures market, we advise you to carefully consider your investment objectives, level of experience and risk appetite.</p>
                            </div>
                            <div className="footer">
                              <h6>I hereby confirm that i/we do not come under any restricted pr sanctioned list as outlined in the' Customer Acceptance Term' of the Regoex Policy.</h6>
                              <div className="modal-btn">
                                <a href>I Understand/Agree</a>
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
          <div className="tab-pane fade" id="menu3" role="tabpanel">
            <div className="nft">
              <div className="row">
                <div className="col-md-12">
                  <div className="card-flex">
                    <div className="head cards">
                      <h3>Tranding</h3><br />
                      <p>See all <i className="fa fa-long-arrow-right" /></p>
                    </div>
                    <div className="cards">
                      <div className="img">
                        <img src={nftcrtn} />
                      </div>                    
                      <div className="profile-flex">
                        <img src={nftprofile} />
                        <p>Metamarse</p>             
                      </div>
                      <div className="des">
                        <h4>Cartoon NFT</h4>
                        <p>28.00 BNB <span>($11,650.80)</span></p>
                      </div>
                    </div>
                    <div className="cards"> 
                      <div className="img">
                        <img src={nft} />
                      </div>
                      <div className="profile-flex">
                        <img src={nftprofile} />
                        <p>Metamarse</p>
                      </div>
                      <div className="des">
                        <h4>Cartoon NFT</h4>
                        <p>28.00 BNB <span>($11,650.80)</span></p>
                      </div>
                    </div>
                    <div className="cards">
                      <div className="img">
                        <img src={nft} />
                      </div>
                      <div className="profile-flex">
                        <img src={nftprofile} />
                        <p>Metamarse</p>
                      </div>
                      <div className="des">
                        <h4>Cartoon NFT</h4>
                        <p>28.00 BNB <span>($11,650.80)</span></p>
                      </div>
                    </div>
                    <div className="cards">
                      <div className="img">
                        <img src={nft}/>
                      </div>
                      <div className="profile-flex">
                        <img src={nftprofile} />
                        <p>Metamarse</p>
                      </div>
                      <div className="des">
                        <h4>Cartoon NFT</h4>
                        <p>28.00 BNB <span>($11,650.80)</span></p>
                      </div>
                    </div>
                    <div className="head cards">
                      <h3>Comaing Soon</h3><br />
                      <p>See all <i className="fa fa-long-arrow-right" /></p>
                    </div>
                    <div className="cards">
                      <div className="img">
                        <img src={nft} />
                      </div>
                      <div className="profile-flex">
                        <img src={nftprofile} />
                        <p>Metamarse</p>
                      </div>
                      <div className="des">
                        <h4>Cartoon NFT</h4>
                        <p>28.00 BNB <span>($11,650.80)</span></p>
                      </div>
                    </div>
                    <div className="cards">
                      <div className="img">
                        <img src={nft} />
                      </div>
                      <div className="profile-flex">
                        <img src={nftprofile} />
                        <p>Metamarse</p>
                      </div>
                      <div className="des">
                        <h4>Cartoon NFT</h4>
                        <p>28.00 BNB <span>($11,650.80)</span></p>
                      </div>
                    </div>
                    <div className="cards">
                      <div className="img">
                        <img src={nft}/>
                      </div>
                      <div className="profile-flex">
                        <img src={nftprofile} />
                        <p>Metamarse</p>
                      </div>
                      <div className="des">
                        <h4>Cartoon NFT</h4>
                        <p>28.00 BNB <span>($11,650.80)</span></p>
                      </div>
                    </div>
                    <div className="cards">
                      <div className="img">
                        <img src={nft} />
                      </div>
                      <div className="profile-flex">
                        <img src={nftprofile} />
                        <p>Metamarse</p>
                      </div>
                      <div className="des">
                        <h4>Cartoon NFT</h4>
                        <p>28.00 BNB <span>($11,650.80)</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="menu4" role="tabpanel">
            <div className="row">
              <div className="col-sm-10 m-auto">
                <div className="swap-box">
                  <div className="head">
                    <span>Bitshares to Tether Price</span>
                    <h2>BTS to USDT Convertor</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <div className="righty">
                        <span>1 BTS equals to</span>
                        <h2>0.022 USDT</h2>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="lefty">
                        <span>1 USDT equals to</span>
                        <h2>44.62 BTS</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="drop-one">
                        <form>
                          <div className="flex-img">
                            <img src={drop1} />
                          </div>
                          <input type="number" name placeholder="44,620.321815241" />                          
                          <div className="dropdown">
                            <div className="select">
                              <span>Bitshares</span>
                              <i className="fa fa-chevron-down" />
                            </div>     
                            <input type="hidden" name="gender" />
                            <ul className="dropdown-menu">
                              <li id><img src={gain1} />Bitcon</li>
                              <li id><img src={gain1} />Bitcon</li>
                              <li id><img src={gain1} />Bitcon</li>
                              <li id><img src={gain1} />Bitcon</li>
                              <li id><img src={gain1} />Bitcon</li>
                            </ul>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="drop-one">
                        <form>
                          <div className="flex-img">
                            <img src={drop1} />
                          </div>
                          <input type="number" name placeholder="44,620.321815241" />                          
                          <div className="dropdown">
                            <div className="select">
                              <span>Bitshares</span>
                              <i className="fa fa-chevron-down" />
                            </div>
                            <input type="hidden" name="gender" />
                            <ul className="dropdown-menu">
                              <li id><img src={gain1} />Bitcon</li>
                              <li id><img src={gain1} />Bitcon</li>
                              <li id><img src={gain1} />Bitcon</li>
                              <li id><img src={gain1} />Bitcon</li>
                              <li id><img src={gain1} />Bitcon</li>
                            </ul>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade custom-modal" id="menu5" role="tabpanel">
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
                      <tr>
                        <th scope="row">
                          <div className="token-flex">
                            <img src={gain1} />
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
                      </tr>
                    </tbody>
                  </table>
                </div>
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
          <div className="tab-pane fade" id="menu6" role="tabpanel">
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
          <div className="tab-pane fade" id="menu7" role="tabpanel">
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
          <div className="tab-pane fade" id="menu8" role="tabpanel">
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
          <div className="tab-pane fade" id="menu9" role="tabpanel">
            <div className="row blogs">
              <div className="col-lg-12">
                <div className="card-flex">
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog1} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog2} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog3} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog4} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog4} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card-flex">
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog1} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog2} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog3} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog4} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <a href>
                      <div className="img-cont">
                        <div className="overlay" />
                        <img src={blog4} />
                        <div className="bottom-right">
                          <h5>What is Blockchain? What is Cryptocurrency?</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="blog">
              <div className="col-md-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <i className="fas fa-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
                 




    </div>
  )
}
