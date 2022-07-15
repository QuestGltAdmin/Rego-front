import React from "react";
import { NavLink } from "react-router-dom";

const NavigationTabs = () => {
  return (                
    <ul className="upper-list-tabs">
      <li className="">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/buyCrypto"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Buy Sell  
        </NavLink>
      </li>
      <li>       
        <NavLink
          to="/nft"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          NFT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/swap"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Swap
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/fixed-deposit"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Fixed Deposit
        </NavLink>
      </li>
      <li>      
        <NavLink
          to="/basket-sip"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Basket/SIP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pro-trading"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        > 
          Pro Trading
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/p2p"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          P2P
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog-news"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Blog and News
        </NavLink>
      </li>
    </ul>
  );
};          

export default NavigationTabs;
