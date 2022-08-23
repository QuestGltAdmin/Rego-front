import React, { useState, useEffect } from "react";
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

const SwapCrypto = () => {


  const [iHaveCryptoCoinRate, setIHaveCryptoCoinRate] = useState(null);
  const [iWantCryptoCoinRate, setIWantCryptoCoinRate] = useState(null);
  const [coinCharData, setCoinChartData] = useState(null);
  const [isCoinSelected, setIsCoinSelected] = useState(true);
  
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
    // console.log(res.data[`${coinId}`]);
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


 



  return (
    <div className="row mt-5 shadow-lg">
      <div className="col-lg-8">
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
        <div className="px-4 ">
          <div className="top mt-5 ">
            <div className="  flex justify-between text-sm text-blue-400">
              <span>I have </span>
              <span>balance 0 Bitcoin</span>
            </div>
            <div className="flex mt-1 mb-2 items-center shadow-md">
              <div className="currency w-1/3 text-center">
                <img
                  src={selectedCoin.url}   
                  width={25}
                  height={25}
                  className="inline mr-3"
                />
                <span className="text-uppercase"> {selectedCoin.name}</span>
              </div>
              <div className="currency flex-1">
                <input
                  type="text"
                  className="w-full py-2 rounded outline-none"
                  placeholder="Enter Amount"
                  // value={iHaveValue}
                  // onChange={(e) =>
                  //   setSwapTabForm({
                  //     ...swapTab,
                  //     sender_amount: e.target.value,
                  //     receiver_amount:
                  //       iHaveValue !== 0 || iHaveValue.length !== 0
                  //         ? (e.target.value / Number(coinRate.inr)).toFixed(8)
                  //         : 0,
                  //   })
                  // }
                />
              </div>
            </div>
            <div className="flex justify-content-end">
              <span className="shadow-sm hover:shadow-md p-1 mx-1">25%</span>
              <span className="shadow-sm hover:shadow-md p-1 mx-1">50%</span>
              <span className="shadow-sm hover:shadow-md p-1 mx-1">75%</span>
              <span className="shadow-sm hover:shadow-md p-1 mx-1">100%</span>
            </div>
          </div>
          <div className="midi mt-5 ">
            <div className="  flex justify-between text-sm text-blue-400 mb-1">
              <span>I Want</span>
            </div>
            <div className="flex items-center mb-4 shadow-md">
              <div className="coin  w-1/3 text-center">
                {/* <img
                  src={coins[2].url}
                  width={25}
                  height={25}
                  className="inline mr-3"
                />
                ETH */}
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
              </div>
              <div className="currency flex-1">
                <input
                  type="text"
                  className="w-full py-2 rounded outline-none"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
            <div className="conversion text-center">1 ETH = 0.06891336 BTC</div>
            <div className="swap-area flex justify-center items-center gap-3 mt-5 text-center">
              <span>BTC</span>
              <img src={coins[1].url} alt="" height={25} width={25} />
              <img
                src={svgImages.exchangeActive}
                alt=""
                height={25}
                width={25}
              />
              <img src={coins[2].url} alt="" height={25} width={25} />
              <span>ETH</span>
            </div>

            <div className="cta mt-5">
              <button className="button w-full  p-3 rounded buy_now_btn">
                Swap Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapCrypto;









