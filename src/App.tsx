import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Redirect from 'components/Redirect'

//Custom Imports
import HomePage from './pages/homepage';
import LoginPage from './pages/auth/login';
import SignupPage from './pages/auth/signup';
import PrivacyPolicyPage from './pages/privacy-policy';
import TermsAndConditionsPage from './pages/terms-and-conditions';
import HelpAndSupport from './pages/support'

//Protected Pages
import UserCocoon from 'components/Cocoon';
import Dashboard from './pages/dashboard';
import History from './pages/history';
// import BuyCrypto from './pages/buy-crypto';
import NFT from './pages/nft';
// import Swap from './pages/swap';
// import FixedDeposit from './pages/fixed-deposit';
import BasketSip from './pages/basket-sip';
import ProTrading from '././pages/pro-trading';
import P2P from './pages/p2p';
import BlogNews from './pages/blog-news';
import Kyc from './pages/kyc';
import Wallet from './pages/wallet';
import Settings from './pages/settings'
import Referral from 'pages/referral';
import { Test } from './pages/Test';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  
import FixedDeposit from 'pages/fixed-deposit';
import BuyCrypto from 'pages/buy-crypto';
import Swap from 'pages/swap';

function App() {
  return (
    <>
      <ToastContainer />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/error" element={<>Auth Error</>} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/support" element={<HelpAndSupport />} />


          {/* User Public Routes */}
          <Route path="/user" element={<>User Public Route</>} />

          {/* User Private Routes */}
          <Route path="/" element={<UserCocoon />}>

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="history" element={<History />} />
            <Route path="buy-crypto" element={<BuyCrypto />} />
            <Route path="nft" element={<NFT />} />
            <Route path="swap" element={<Swap />} />
            <Route path="fixed-deposit" element={<FixedDeposit />} />
            <Route path="basket-sip" element={<BasketSip />} />
            <Route path="pro-trading" element={<ProTrading />} />
            <Route path="p2p" element={<P2P />} />
            <Route path="blog-news" element={<BlogNews />} />
            <Route path="kyc" element={<Kyc />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="settings" element={<Settings />} />
            <Route path="referral" element={<Referral/>} />
          </Route>

          {/* Testing Route */}
          <Route path="/test" element={<Test/>} />

          {/* Wild Card Route */}
          <Route path="*" element={<Redirect to="/" />} />


        </Routes>
      </AnimatePresence>
      {/* <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div> */}
    </>
  );
}

export default App;
