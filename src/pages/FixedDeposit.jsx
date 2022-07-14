import React from "react";
import NavigationTabs from "../components/UI/NavigationTabs";
import SetAnimationPage from "../HOC/SetAnimationPage";
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
import axios from "axios";
import { Link } from 'react-router-dom';

const NewFixedDeposit = () => {
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetAnimationPage(NewFixedDeposit);
