import React from "react";
import NavigationTabs from "../components/UI/NavigationTabs";
import '../assets/css/custom.css';
import '../assets/css/style.css';
import '../assets/css/dash-inner.css';
import '../assets/css/nice-select.css';
import nftcrtn from '../assets/images/nft.png';
import nftprofile from '../assets/images/nft-profile.png'
import axios from "axios";
import { Link } from 'react-router-dom';


const NFT = () => {
  return (
    <section className="dashboard-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <NavigationTabs />
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
                        <img src={nftcrtn}/>
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
                        <img src={nftcrtn}/>
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

export default NFT;
