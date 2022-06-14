import React from 'react'
import '../../assets/css/custom.css';
import '../../assets/css/style.css';
import Logo from '../../assets/images/logo-white.png';
import wallet from '../../assets/images/favicon.png'
export default function Header() {
  return (
    <div>

<header className="header-main">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-brand justify-content-center"> 
            <a href="#"><img src={Logo} className="image-fluid" /></a>
          </div>
          {/*  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
        </button> */}
          <div className=" navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <div className="input-group search-group-new dashboard-search">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-search" /></span>
                  </div>
                  <input type="text" className="form-control" placeholder="What are you looking for today?" />
                </div>
              </li>
              <li className="nav-item">
                <a href="javascript:void(0)" className="search-icon-mobile d-none"><i className="fa fa-search" /></a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item left-content">
                <a className="nav-link" href="#"><i className="fa fa-wallet" /> Wallet</a>
              </li>
              <li className="nav-item">
                {/* <div class="dropdown">
                  <button class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="assets/images/favicon.png">
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="deposit.php"><i class="fa fa-rupee-sign"></i> Deposit INR</a>
                    <a class="dropdown-item" href="#"><i class="fa fa-rupee-sign"></i> Import Funds</a>
                    <a class="dropdown-item" href="History.php"><i class="fa fa-list"></i> History</a>
                    <a class="dropdown-item" href="kyc.php"><i class="fa fa-file"></i> KYC</a>
                    <a class="dropdown-item" href="help-support.php"><i class="fa fa-phone"></i> Help and support</a>
                    <a class="dropdown-item" href="setting.php"><i class="fa fa-gear"></i> Setting</a>
                    <a class="dropdown-item" href="#"><i class="fa fa-sign-out"></i> Logout</a>
                  </div>
                </div> */}
                <div className="dropdown">
                  {/* <button onclick="myFunction()" class="dropbtn">Dropdown</button> */}
                  <img onclick="myFunction()" className="dropbtn" src={wallet} />
                  <div id="myDropdown" className="dropdown-content">
                    <a href><i className="fa fa-rupee-sign" aria-hidden="true" />Deposit INR</a>
                    <a href><i className="fa fa-rupee-sign" aria-hidden="true" /> Import Funds</a>
                    <a href="history.php"><i className="fa fa-list" aria-hidden="true" />History</a>
                    <a href><i className="fa fa-file" aria-hidden="true" />KYC</a>
                    <a href><i className="fa fa-phone" aria-hidden="true" />Help and support</a>
                    <a href="settings.php"><i className="fa fa-gear" aria-hidden="true" />Setting</a>
                    <a href><i className="fa fa-sign-out" aria-hidden="true" /> Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</header>
</div>
  )
}
