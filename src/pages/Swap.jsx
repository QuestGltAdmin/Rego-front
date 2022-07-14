import React from "react";
import NavigationTabs from "../components/UI/NavigationTabs";
import '../assets/css/custom.css';
import '../assets/css/style.css';
import '../assets/css/dash-inner.css';
import '../assets/css/nice-select.css';
import gain1 from '../assets/images/gain1.png';
import drop1 from '../assets/images/drop1.png'
import { Link } from 'react-router-dom';

const Swap = () => {
  return (
    <section className="dashboard-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <NavigationTabs />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swap;
