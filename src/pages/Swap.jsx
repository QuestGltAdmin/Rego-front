import React from "react";
import NavigationTabs from "../components/UI/NavigationTabs";
// import '../assets/css/custom.css';
// import '../assets/css/style.css';
// import '../assets/css/dash-inner.css';
// import '../assets/css/nice-select.css';
import gain1 from '../assets/images/gain1.png';
import drop1 from '../assets/images/drop1.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import svgImages from "../assets/images/svg-icons/svgImages";
import { coins } from "../assets/coins/coins";

import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";




const chartButtons = [
  { id: 0, url: svgImages.lineChart, name: "Line Chart" },
  { id: 1, url: svgImages.graphChart, name: "Graph Chart" },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    scales: {
      xAxes: [
        {
          ticks: {
            reverse: true,
          },
        },
      ],
    },
  },
};

const labels = [
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
]; 


const Swap = () => {



  const [iHaveCryptoCoinRate, setIHaveCryptoCoinRate] = useState(null);
  const [iWantCryptoCoinRate, setIWantCryptoCoinRate] = useState(null);
  const [coinCharData, setCoinChartData] = useState(null);
  const [isCoinSelected, setIsCoinSelected] = useState(true);
  const [coinRate, setCoinRate] = useState(null);
  
  const [selectedCoin, setSelectedCoin] = useState(coins[1]);
  const [selectedIWantCoin, setSelectedIWantCoin] = useState(coins[2]);

  const [swapTab, setSwapTabForm] = useState({
    from_shortcode: "",
    sender_amount: "",
    to_shortcode: "",
    receiver_amount: "",
  });



  const { from_shortcode, sender_amount, to_shortcode, receiver_amount } =
    swapTab;

  const { InrwalletObj, array: cryptowalletObj } = useSelector(
    (state) => state.wallet.userWallet
  );

  const getGraph = async (apiId = "bitcoin") => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${apiId}/market_chart?vs_currency=INR&days=1`
    );
    setCoinChartData(response.data.prices);
  };
  const getCoinRate = async (coinId = "bitcoin") => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=INR`
    );
    console.log(res.data);
    setIHaveCryptoCoinRate(res.data[`${coinId}`].inr);
  };

  console.log(iHaveCryptoCoinRate && { iHaveCryptoCoinRate });
  console.log(coinCharData && { coinCharData });
  console.log(selectedIWantCoin && { selectedIWantCoin });
  useEffect(() => {
    getGraph();
    getCoinRate();
  }, []);

  useEffect(() => {
    getGraph(selectedCoin.coin_ID);
    getCoinRate(selectedCoin.coin_ID);
    setSwapTabForm({
      from_shortcode: "",
      sender_amount: "",
      to_shortcode: "",
      receiver_amount: "",
    });
  }, [selectedCoin]);

  const cryptoTimestamp = [];
  const cryptoPrice = [];

  if (coinCharData?.length > 0) {
    for (let i = coinCharData?.length - 20; i < coinCharData?.length; i++) {
      cryptoTimestamp.push(new Date(coinCharData[i][0]).toLocaleTimeString());
      cryptoPrice.push(coinCharData[i][1]);
    }
  }

  const data = {
    labels: cryptoTimestamp?.length > 0 && cryptoTimestamp,
    datasets: [
      {
        label: "",
        data: cryptoPrice?.length > 0 && cryptoPrice,
        fill: true,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        tension: 0,
      },
    ],
  };

  const chartCoinClickHandle = (item) => {
    console.log({ selectedCoin: item });
    setSelectedCoin(item);
  };
  const CoinItem = (props) => (
    <div
      className={`flex flex-col text-center my-1 hover:border-l-4
     border-blue-400
     ${props.item.id === props.selectedCoin?.id ? "border-l-4 shadow-md" : ""}
     `}
      onClick={() => props.onClick(props.item)}
    >
      <div className="coin flex justify-center text-lg">
        <img src={props.img} width={25} height={25} />
        <span className="text-uppercase">{props.name}</span>
      </div>
      {/* <div className="text-sm">B : 2,951,155,0.6</div> */}
    </div>
  );


  const [buyTabForm, setBuyTabForm] = useState({
    iHaveValue: "",
    iWantValue: "",
    marketLimitOption: "",
    iWantSellTab: "",
    iHaveSellTab: "",
    limitValue: "",
  });
  
  const {
    iHaveValue,
    iWantValue,
    iWantSellTab,
    iHaveSellTab,
    marketLimitOption,
    limitValue,
  } = buyTabForm;


 


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
                            {/* <img src={coins[0].url}/> */}
                          </div>
                          <input type="number" name="crypto" placeholder="Enter Amount" 
                          value={iHaveValue}
                          onChange={(e) =>
                            setBuyTabForm({
                              ...buyTabForm,
                              iHaveValue: e.target.value,
                              iWantValue:
                                iHaveValue !== 0 ||
                                iHaveValue.length !== 0
                                  ? (
                                      e.target.value /
                                      Number(coinRate?.inr)
                                    ).toFixed(8)
                                  : 0,
                                })
                              }
                          />                          
                          {/* <div className="dropdown">
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
                          </div> */}


                <select
                  name=""
                  id=""
                  className="form-control text-uppercase w-auto"
                  onChange={(e) => {
                    const value = e.target.value;
                    const parsedValue = JSON.parse(value);
                    setSelectedIWantCoin(parsedValue);
                  }}
                  value={selectedIWantCoin.name}
                >
                  {coins.map((item, index) => {
                    if (
                      item.type !== "currency" &&
                      item.name !== selectedCoin.name
                    ) {
                      return (
                       
                        <option key={index} value={JSON.stringify(item)}>
                          {item.name}
                          
                        </option>
                      );
                    }
                  })}
                </select>




                        </form>
                      </div>
                    </div> 
                    <div className="col-md-12">
                      <div className="drop-one">
                        <form>
                          <div className="flex-img">
                            <img src={drop1} />
                            
                          </div>



                          <input type="number" name="cryptoblance" placeholder="Enter Amount"
                          
                          value={iWantValue}
                                onChange={(e) =>
                                  setBuyTabForm({
                                    ...buyTabForm,
                                    iWantValue: e.target.value,
                                    iHaveValue:
                                      e.target.value * Number(coinRate?.inr),
                                  })
                                }
                          
                          
                          />                          
                          {/* <div className="dropdown">
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
                          </div> */}


                <select
                  name=""
                  id=""
                  className="form-control text-uppercase w-auto"
                  onChange={(e) => {
                    const value = e.target.value;
                    const parsedValue = JSON.parse(value);
                    setSelectedIWantCoin(parsedValue);
                  }}
                  value={selectedIWantCoin.name}
                >
                  {coins.map((item, index) => {
                        
                    if (
                      item.type !== "currency" &&
                      item.name !== selectedCoin.name
                    ) {
                      return (
                         
                        <option key={index} value={JSON.stringify(item)}>
                          {item.name}
                          

                        </option>
                        
                      );
                    }
                    
                  })}
                </select>

<Link to="/swapcrypto"> Swap Crypto</Link>




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
