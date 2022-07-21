import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import svgImages from "../assets/images/svg-icons/svgImages";
import { coins } from "../assets/coins/coins";
import { Line } from "react-chartjs-2";
import KycModal from "../components/KycModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import '../assets/css/style.css'

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
import axios from "axios";
import NavigationTabs from "../components/UI/NavigationTabs";
import SetAnimationPage from "../HOC/SetAnimationPage";

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

const BuyCrypto = () => {
  const navigate = useNavigate();
  const [coinRate, setCoinRate] = useState(null);
  const [coinCharData, setCoinChartData] = useState(null);
  const [chartType, setChartType] = useState(0);
  const [isCoinSelected, setIsCoinSelected] = useState(true);
  const [selectedCoin, setSelectedCoin] = useState(coins[1]);
  const [showModel, setShowModel] = useState(false);
  let selectedCryptoObj;

  const { user } = useSelector((state) => state.auth);

  const { InrwalletObj, array: cryptowalletObj } = useSelector(
    (state) => state.wallet.userWallet
  );
  console.log({ InrwalletObj, cryptowalletObj });

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
    // console.log(res.data[`${coinId}`]);
    setCoinRate(res.data[`${coinId}`]);
  };

  console.log(coinRate);
  useEffect(() => {
    getGraph();
    getCoinRate();
  }, []);

  useEffect(() => {
    getGraph(selectedCoin.coin_ID);
    getCoinRate(selectedCoin.coin_ID);
    setBuyTabForm({
      ...buyTabForm,
      iHaveValue: "",
      iWantValue: "",
      iWantSellTab: "",
      iHaveSellTab: "",
    });
  }, [selectedCoin]);

  const chartCoinClickHandle = (item) => {
    setIsCoinSelected(true);
    console.log({ selectedCoin: item });
    setSelectedCoin(item);
  };

  const cryptoTimestamp = [];
  const cryptoPrice = [];

  if (coinCharData?.length > 0) {
    for (let i = coinCharData?.length - 20; i < coinCharData?.length; i++) {
      cryptoTimestamp.push(new Date(coinCharData[i][0]).toLocaleTimeString());
      cryptoPrice.push(coinCharData[i][1]);
    }
  }

  const selectedCryptoIndex = cryptowalletObj?.findIndex(
    (item) => item.name.toLowerCase() === selectedCoin.name
  );

  if (selectedCryptoIndex !== -1) {
    selectedCryptoObj = cryptowalletObj && cryptowalletObj[selectedCryptoIndex];
  }
      
  console.log({ selectedCryptoObj, selectedCryptoIndex });
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
                                      
  const buyNowHandler = async (type) => {
    let payload;
    if (type === "buy") {
      if (iHaveValue === 0 || iHaveValue === "") {
        toast.error("insert values first");
        return;
      }

      if (Number(iHaveValue) > Number(user.balance)) {
        toast.error("you do not have sufficient balance");
        return;
      }

      let inrValue = +iHaveValue;
      payload = {
        email: user.user.email,
        type: "Buy",
        shortcode: selectedCoin.name.toUpperCase(),
        inrValue,
        cryptoValue: Number.parseFloat(iWantValue).toFixed(8),
        limitValue: marketLimitOption === "Limit" ? limitValue : "",
      };
    } else if (type === "sell") {
      if (iHaveSellTab === 0 || iHaveSellTab === "") {
        toast.error("insert values first");
        return;
      }
  
      if (
        selectedCryptoObj === undefined ||
        Number(iHaveSellTab) > Number(selectedCryptoObj?.balance)
      ) {
        toast.error("you do not have sufficient balance");
        return;
      }
      let inrValue = +iWantSellTab;
      payload = {
        email: user.user.email,
        type: "Sell",
        shortcode: selectedCoin.name.toUpperCase(),
        inrValue,
        cryptoValue: Number.parseFloat(iHaveSellTab),
      };
    }
        
    console.log({ payload });
    const res = await axios.post(
      "http://3.128.190.203:3001/users/buy-sell",
      payload
    );
    console.log("buy/sell success", res);
    if (res.status === 200) {
      toast.success("Transaction Successfull");
      setTimeout(() => {
        navigate("/history");
      }, 2000);
    } else {
      toast.error("something went wrong");
    }

    setBuyTabForm({
      ...buyTabForm.class_name.prototype.method_name = function(first_argument) {
        // body...
      },
      iHaveValue: "",
      iWantValue: "",
      iWantSellTab: "",
      iHaveSellTab: "",
    });
  };

  console.log({ marketLimitOption });
              
  return (
    <>
      <section className="dashboard-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <NavigationTabs />
                
                <div className="row mt-5 shadow-lg">
                  <div className="col-lg-8">
                    {/* Heading */}
                    <div className="flex justify-between px-4 py-3 border-b-2 ">
                      <div className="font-h4">Buy And Sell Rates</div>
                      {/* <div className="flex gap-1">
            {chartButtons.map((item) => (
              <div
                key={item.id}
                className={`p-2  shadow-md ${
                  chartType === item.id ? "bg-blue-100" : ""
                }`}
                onClick={() => setChartType(item.id)}
              >
                <img src={item.url} height={15} width={15} />
              </div>
            ))}
          </div> */}
                    </div>
                    {/* Chart & Table Start */}
                    <div className="row">
                      <div className="col-lg-2">
                        <div
                          className="overflow-y-scroll chart-coins"
                          style={{ height: "500px" }}
                        >
                          {coins.map((item) => {
                            if (item.name !== "inr") {
                              return (
                                <CoinItem
                                  key={item.id}
                                  name={item.name}
                                  img={item.url}
                                  item={item}
                                  onClick={chartCoinClickHandle}
                                  selectedCoin={selectedCoin}
                                />
                              );
                            }
                          })}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <Line options={options} data={data} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4" style={{ height: "80vh" }}>
                    <Tabs
                      defaultActiveKey="first"
                      className="justify-content-around"
                    >
                      <Tab eventKey="first" title="Buy" className="px-4 ">
                        <div className="top mt-5 ">
                          <div className="  flex justify-between text-sm text-blue-400">
                            <span>I have INR</span>
                            <span>balance {user.balance} INR</span>
                          </div>
                          <div className="flex mt-1 mb-2 items-center shadow-md ">
                            <div className="currency w-1/3 text-center">
                              <img
                                src={coins[0].url}
                                width={25}
                                height={25}
                                className="inline mr-3"
                              />
                              INR
                            </div>
                            <div className="currency flex-1">
                              <input
                                type="text"
                                className="w-full py-2 rounded outline-none inpt"
                                placeholder="Enter Amount"
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
                                            Number(coinRate.inr)
                                          ).toFixed(8)
                                        : 0,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="">
                            {/* <span className="shadow-sm hover:shadow-md p-1 mx-1">25%</span>
                <span className="shadow-sm hover:shadow-md p-1 mx-1">50%</span>
                <span className="shadow-sm hover:shadow-md p-1 mx-1">75%</span>
                <span className="shadow-sm hover:shadow-md p-1 mx-1">100%</span> */}
                            <select
                              name="market-type"
                              id=""
                              className=""
                              value={marketLimitOption}
                              onChange={(e) =>
                                setBuyTabForm((prev) => ({
                                  ...prev,
                                  marketLimitOption: e.target.value,
                                }))
                              }
                            >
                              <option value="">Select Type</option>
                              <option value="Market">Market</option>
                              <option value="Limit">Limit</option>
                            </select>
                          </div>
                          {marketLimitOption === "Limit" && (
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control "
                                name="limitValue"
                                value={limitValue}
                                placeholder="Enter Limit Value"
                                onChange={(e) =>
                                  setBuyTabForm((prev) => ({
                                    ...prev,
                                    limitValue: e.target.value,
                                  }))
                                }
                              />
                            </div>
                          )}
                        </div>
                        <div className="midi mt-5 ">
                          <div className="  flex justify-between text-sm text-blue-400 mb-1">
                            <span>I Want</span>
                          </div>
                          <div className="flex items-center mb-4 shadow-md">
                            <div className="coin  w-1/3 text-center">
                              <img
                                src={selectedCoin.url}
                                width={25}
                                height={25}
                                className="inline mr-3"
                              />
                              <span className="text-uppercase">
                                {" "}
                                {selectedCoin.name}
                              </span>
                            </div>
                            <div className="currency flex-1">
                              <input
                                type="text"
                                className="w-full py-2 rounded outline-none inpt"
                                placeholder="Enter Amount"
                                value={iWantValue}
                                onChange={(e) =>
                                  setBuyTabForm({
                                    ...buyTabForm,
                                    iWantValue: e.target.value,
                                    iHaveValue:
                                      e.target.value * Number(coinRate.inr),
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="conversion text-center">
                            1
                            <span className="text-uppercase">
                              {" "}
                              {selectedCoin.name}
                            </span>
                            = {coinRate && coinRate.inr} INR
                          </div>
                          <div className="swap-area flex justify-center items-center gap-3 mt-5 text-center">
                            <span>INR</span>
                            <img
                              src={coins[0].url}
                              alt=""
                              height={25}
                              width={25}
                            />
                            <img
                              src={svgImages.exchangeActive}
                              alt=""
                              height={25}
                              width={25}
                            />
                            <img
                              src={selectedCoin.url}
                              alt=""
                              height={25}
                              width={25}
                            />
                            <span className="text-uppercase">
                              {" "}
                              {selectedCoin.name}
                            </span>
                          </div>

                          <div className="cta mt-5">
                            <div
                              className="common-btn button w-full bg-blue-500 p-3 text-center rounded font-bold buy-now-button focus:bg-blue-800"
                              onClick={() => buyNowHandler("buy")}
                            >
                              Buy Now
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="second" title="Sell" className="px-4 ">
                        <div className="top mt-5 ">
                          <div className="  flex justify-between text-sm text-blue-400">
                            <span>I have </span>
                            <span>
                              balance{" "}
                              {selectedCryptoObj !== undefined
                                ? `${
                                    selectedCryptoObj?.balance
                                  } ${selectedCryptoObj.name.toUpperCase()}`
                                : "No Data"}
                            </span>
                          </div>
                          <div className="flex mt-1 mb-2 items-center shadow-md">
                            <div className="currency w-1/3 text-center">
                              <img
                                src={selectedCoin.url}
                                width={25}
                                height={25}
                                className="inline mr-3"
                              />           
                              <span className="text-uppercase">
                                {" "}
                                {selectedCoin.name}
                              </span>
                            </div>
                            <div className="currency flex-1">
                              <input     
                                type="text"
                                className="w-full py-2 round
                                ed outline-none inpt"
                                placeholder="Enter Amount"
                                value={iHaveSellTab}
                                onChange={(e) =>
                                  setBuyTabForm({
                                    ...buyTabForm,
                                    iHaveSellTab: e.target.value,
                                    iWantSellTab:
                                      e.target.value * Number(coinRate.inr),
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex justify-content-end">
                            <span className="shadow-sm hover:shadow-md p-1 mx-1">
                              25%
                            </span>
                            <span className="shadow-sm hover:shadow-md p-1 mx-1">
                              50%
                            </span>
                            <span className="shadow-sm hover:shadow-md p-1 mx-1">
                              75%
                            </span>
                            <span className="shadow-sm hover:shadow-md p-1 mx-1">
                              100%
                            </span>
                          </div>
                        </div>
                        <div className="midi mt-5 ">
                          <div className="  flex justify-between text-sm text-blue-400 mb-1">
                            <span>I Want</span>
                          </div>
                          <div className="flex items-center mb-4 shadow-md">
                            <div className="coin  w-1/3 text-center">
                              <img
                                src={coins[0].url}
                                width={25}
                                height={25}
                                className="inline mr-3"
                              />
                              INR
                            </div>
                            <div className="currency flex-1">
                              <input
                                type="text"
                                className="w-full py-2 rounded outline-none inpt"
                                placeholder="Enter Amount"
                                value={iWantSellTab}
                                onChange={(e) => console.log(e)}
                              />
                            </div>
                          </div>
                          <div className="conversion text-center">
                            1 BTC = {coinRate?.inr} INR
                          </div>
                          <div className="swap-area flex justify-center items-center gap-3 mt-5 text-center">
                            <span className="text-uppercase">
                              {" "}
                              {selectedCoin.name}
                            </span>
                            <img
                              src={selectedCoin.url}
                              alt=""
                              height={25}
                              width={25}
                            />
                            <img
                              src={svgImages.exchangeActive}
                              alt=""
                              height={25}
                              width={25}
                            />
                            <img
                              src={coins[0].url}
                              alt=""
                              height={25}
                              width={25}
                            />
                            <span>INR</span>
                          </div>
                          <div className="cta mt-5">
                            <div
                              className="common-btn button w-full bg-blue-500 p-3 rounded text-center font-bold visited:text-blue"
                              onClick={() => buyNowHandler("sell")}
                            >
                              Sell Now
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                  <KycModal showModel={showModel} setShowModel={setShowModel} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SetAnimationPage(BuyCrypto);
