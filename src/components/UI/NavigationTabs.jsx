import React from "react";
import { NavLink } from "react-router-dom";

const NavigationTabs = () => {
  return (                
    <ul className="upper-list-tabs">
      <li className="">
        <NavLink
          to="/new-dashboard"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new-buy-sell"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Buy Sell  
        </NavLink>
      </li>
      <li>       
        <NavLink
          to="/new-nft"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          NFT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new-swap"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Swap
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new-fixed-deposit"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Fixed Deposit
        </NavLink>
      </li>
      <li>      
        <NavLink
          to="/new-basket-sip"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Basket/SIP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new-pro-trading"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        > 
          Pro Trading
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new-loan"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Loan
        </NavLink>
      </li>
    </ul>
  );
};          

export default NavigationTabs;
