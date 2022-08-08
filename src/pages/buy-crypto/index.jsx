import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import { Flex, Box, Text, Button, Heading3, Input } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate'
import { Test } from 'pages/Test';
import React, { useEffect, useState } from 'react'
import { AiFillAndroid, AiFillApple, AiFillAudio } from 'react-icons/ai';
import { violet } from '@radix-ui/colors';
import { SVGComponent } from 'lib/types/SVGComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Select, SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectTrigger, SelectValue, SelectViewport } from 'components/styled/Select';
import { CheckIcon, ChevronDownIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { coins, INR } from "assets/coins/coins"
import { upperCase } from 'lodash'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { toast } from "react-toastify";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  // LayoutPosition
} from "chart.js";
import { updateINRBalance } from 'store/reducers/walletReducer';
import { updateUserCryptoBalance } from 'store/reducers/authReducer';
import { useNavigate } from 'react-router-dom';
// import { isNumberObject } from 'util/types';

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



function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Chart States
  const [coinChartData, setCoinChartData] = useState([]);
  const [coinRate, setCoinRate] = useState(null);

  //Buy-Sell States
  const [orderType, setOrderType] = useState("");

  //Common States
  const [selectedCoin, setSelectedCoin] = useState(coins[0])


  const [buttonDisabled, setButtonDisabled] = useState(false);

  //Redux State
  const { user } = useSelector((state) => state.auth);
  const { user: {
    cryptoWallet
  } } = useSelector((state) => state.auth);
  const { InrwalletObj, array: cryptowalletObj } = useSelector(
    (state) => state.wallet.userWallet
  );
  console.log({ InrwalletObj, cryptowalletObj });
  //Input Fields
  const [buyTabForm, setBuyTabForm] = useState({
    iHaveValue: "",
    iWantValue: "",
    marketLimitOption: "",
    iWantSellTab: "",
    iHaveSellTab: cryptowalletObj.balance,
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

  let selectedCryptoObj;

  useEffect(() => {
    (async () => {
      await getCoinRate(selectedCoin?.coin_ID);
      await getCoinChart(selectedCoin?.coin_ID);
    })()
  }, [selectedCoin])

  useEffect(() => {
    setBuyTabForm({
      ...buyTabForm,
      iHaveValue: "",
      iWantValue: "",
      iWantSellTab: "",
      iHaveSellTab: "",
    });
  }, [selectedCoin]);

  //Coin Chart Logic and Options
  const cryptoTimestamp = [];
  const cryptoPrice = [];

  if (coinChartData?.length > 0) {
    for (let i = coinChartData?.length - 20; i < coinChartData?.length; i++) {
      cryptoTimestamp.push(new Date(coinChartData[i][0]).toLocaleTimeString());
      cryptoPrice.push(coinChartData[i][1]);
    }
  }

  const selectedCryptoIndex = cryptoWallet?.findIndex(
    (item) => item.name === selectedCoin.name
  );

  if (selectedCryptoIndex !== -1) {
    selectedCryptoObj = cryptoWallet && cryptoWallet[selectedCryptoIndex];
  }

  const data = {
    labels: cryptoTimestamp?.length > 0 ? cryptoTimestamp : undefined,
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



  //API to get specified coin's chart vs INR
  const getCoinChart = async (coin_id = "bitcoin") => {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=INR&days=1`
      const res = await axios.get(url);
      // console.log(res);
      setCoinChartData(res?.data?.prices)
    } catch (err) {
      console.log(err)
    }
  }

  //API to get specified coin's rate vs INR
  const getCoinRate = async (coin_id = "bitcoin") => {
    try {
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=INR`
      const res = await axios.get(url);
      // console.log(res);
      setCoinRate(res?.data[`${coin_id}`]?.inr);
    } catch (err) {
      console.log(err);
    }
  }

  // console.log(coinChartData, coinRate)

  //Handles Coin Change between chart and buy/sell tabs
  const handleCoinChange = (e) => {
    let newCoin = coins.filter((coin) => coin.name === e);
    setSelectedCoin(newCoin[0]);
  }

  const buyNowHandler = async (type) => {
    console.log("enter in submit button", { type })
    let payload;
    if (type === "buy") {
      if (iHaveValue === 0 || iHaveValue === "") {
        toast.error("insert values first", {
          autoClose: 1500,
          pauseOnHover: false,
        });
        setTimeout(() => {
          setButtonDisabled(false);
        }, 2500);
        return;
      }

      if (Number(iHaveValue) > Number(user.balance)) {
        toast.error("you do not have sufficient balance", {
          autoClose: 1500,
          pauseOnHover: false,
        });
        setTimeout(() => {
          setButtonDisabled(false);
        }, 2500);
        return;
      }

      let inrValue = +iHaveValue;
      payload = {
        email: user.user.email,
        type: "Buy",
        shortcode: selectedCoin.name.toUpperCase(),
        inrValue,
        cryptoValue: Number(iWantValue).toFixed(8),
        limitValue: marketLimitOption === "Limit" ? limitValue : "",
      };
    } else if (type === "sell") {
      if (iHaveSellTab === 0 || iHaveSellTab === "") {
        toast.error("insert values first", {
          autoClose: 1500,
          pauseOnHover: false,
        });
        setTimeout(() => {
          setButtonDisabled(false);
        }, 2500);
        return;
      }

      if (
        selectedCryptoObj === undefined ||
        Number(iHaveSellTab) > Number(selectedCryptoObj?.balance)
      ) {
        toast.error("you do not have sufficient balance", {
          autoClose: 1500,
          pauseOnHover: false,
        });
        setTimeout(() => {
          setButtonDisabled(false);
        }, 2500);
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
      toast.success("Transaction Successfull", {
        autoClose: 1500,
        pauseOnHover: false,
      });
      dispatch(updateINRBalance({ balance: payload.inrValue }))
      dispatch(
        updateUserCryptoBalance({
          name: payload?.shortcode,
          balance: payload?.cryptoValue,
        })
      );
      setTimeout(() => {
        navigate("/history");
      }, 2000);
    } else {
      toast.error("something went wrong", {
        autoClose: 1500,
        pauseOnHover: false,
      });
    }

    setBuyTabForm({
      ...buyTabForm,
      iHaveValue: 0,
      iWantValue: 0,
      iWantSellTab: "",
      iHaveSellTab: "",
    });
  };
  return (
    <>
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-2">

        {/* Market Chart Box */}
        <Box css={{ borderColor: violet.violet8 }} className=" p-3 rounded-xl h-max xl:col-span-2 border">

          <Heading3>Market Rate Chart</Heading3>


          <Tabs className="flex-col xl:flex-row w-full" defaultValue={selectedCoin.name} onValueChange={handleCoinChange} >
            <TabsList className=" xl:flex-col p-2">
              {coins.map((coin) => (
                <TabsTrigger css={{
                  marginBottom: 10,
                  padding: 10,
                  borderRadius: 6,
                  '&:hover': { backgroundColor: violet.violet3 },
                  justifyContent: "start",
                  height: "fit-content",
                  maxHeight: "1.5rem"

                }}
                  key={coin?.name}
                  value={coin?.name}
                >
                  <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
                    <img src={coin?.url} />
                    {/* <coin.url /> */}
                    <Text css={{ marginBottom: 2, color: "inherit" }} >{upperCase(coin.name)}</Text>
                  </Flex>
                </TabsTrigger>
              ))}
            </TabsList>
            {coins.map((coin) => (
              <TabsContent key={coin?.name} value={coin?.name}>
                {/* {coin.name} */}
                <Line className="w-auto max-w-full" options={options} data={data} />
              </TabsContent>
            ))}
          </Tabs>
        </Box>

        {/* Buy And Sell Box */}
        <Box css={{ borderColor: violet.violet8 }} className=" p-3 rounded-xl h-max min-w-96 border">
          <Tabs css={{ width: "inherit" }} className="flex-col" defaultValue="BUY">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="BUY">Buy</TabsTrigger>
              <TabsTrigger value="SELL">Sell</TabsTrigger>
            </TabsList>

            {/* Buy Tab Content */}
            <TabsContent value="BUY">

              <Text>INR Balance:&nbsp;&nbsp;&nbsp;{InrwalletObj.Balance} INR</Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="text-4xl mx-4" />
                  {/* <selectedCoin.icon className="text-4xl mx-4" /> */}
                  <Text css={{ marginBottom: 0 }}>INR</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder="Enter Amount in INR"
                  value={iHaveValue}
                  onChange={(e) =>
                    setBuyTabForm({
                      ...buyTabForm,
                      iHaveValue: e.target.value,
                      iWantValue:
                        iHaveValue !== 0 || iHaveValue.length !== 0
                          ? (e.target.value / Number(coinRate.inr)).toFixed(8)
                          : 0,
                    })
                  }
                />
              </Flex>

              <Flex className="justify-end my-2">
                <Select value={marketLimitOption}
                  onChange={(e) =>
                    setBuyTabForm((prev) => ({
                      ...prev,
                      marketLimitOption: e.target.value,
                    }))
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Order Type" />
                    <SelectIcon>
                      <ChevronDownIcon />
                    </SelectIcon>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectViewport>
                      <SelectItem value="market">
                        <SelectItemText>Market</SelectItemText>
                        <SelectItemIndicator>
                          <CheckIcon />
                        </SelectItemIndicator>
                      </SelectItem>
                      <SelectItem value="limit">
                        <SelectItemText>Limit</SelectItemText>
                        <SelectItemIndicator>
                          <CheckIcon />
                        </SelectItemIndicator>
                      </SelectItem>
                    </SelectViewport>
                  </SelectContent>
                </Select>
              </Flex>

              <Flex className="justify-end my-2">
                {orderType === "limit" && <Input css={{ maxWidth: "10rem" }} type="number"
                  name="limitValue"
                  value={limitValue}
                  placeholder="Enter Limit Value"
                  onChange={(e) =>
                    setBuyTabForm((prev) => ({
                      ...prev,
                      limitValue: e.target.value,
                    }))
                  }
                />}
              </Flex>
              <hr className="border border-violet-200 my-3" />
              <Text>I Want : </Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={selectedCoin?.url} className="text-4xl mx-4" />
                  {/* <selectedCoin.icon className="text-4xl mx-4" /> */}
                  <Text css={{ marginBottom: 0 }}>{upperCase(selectedCoin?.name)}</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder={`Enter Amount in ${selectedCoin?.name}`}
                  value={iWantValue}
                  onChange={(e) =>
                    setBuyTabForm({
                      ...buyTabForm,
                      iWantValue: e.target.value,
                      iHaveValue: e.target.value * Number(coinRate.inr),
                    })
                  } />
              </Flex>

              <Flex className="flex-col">

                <Heading3 className="self-center mt-3">1 {upperCase(selectedCoin?.name)} = {coinRate} INR</Heading3>
                <Flex className="justify-center items-center gap-x-2">
                  <img src={INR?.url} className="text-4xl" />
                  {/* <selectedCoin.icon className="text-4xl" /> */}
                  <span className="text-xl font-bold text-blue-600">INR</span>
                  <DoubleArrowRightIcon className="w-10 h-10 text-violet-500" />
                  <img src={selectedCoin?.url} className="text-4xl" />
                  {/* <selectedCoin.icon className="text-4xl" /> */}
                  <span className="text-xl font-bold text-blue-600">{upperCase(selectedCoin?.name)}</span>
                </Flex>
              </Flex>

              <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                <Button
                  disabled={buttonDisabled}
                  onClick={() => {
                    buyNowHandler("buy")
                    setButtonDisabled(true)
                  }}
                > {buttonDisabled ? 'Loading...' : 'BUY NOW'}</Button>
              </Flex>
            </TabsContent>

            {/* Sell Tab Content */}
            <TabsContent value="SELL">
              <Text>{upperCase(selectedCoin?.name)} Balance:{selectedCryptoObj !== undefined
                ? `${selectedCryptoObj?.balance
                }`
                : "No Data"} {upperCase(selectedCoin?.name)}</Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={selectedCoin?.url} className="text-4xl mx-4" />
                  {/* <selectedCoin.icon className="text-4xl mx-4" /> */}
                  <Text css={{ marginBottom: 0 }}>{upperCase(selectedCoin?.name)}</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder={`Enter Amount in ${selectedCoin?.name}`}
                  value={iHaveSellTab}
                  onChange={(e) =>
                    setBuyTabForm({
                      ...buyTabForm,
                      iHaveSellTab: e.target.value,
                      iWantSellTab: e.target.value * Number(coinRate.inr),
                    })
                  }
                />
              </Flex>
              <Flex className="gap-1 justify-end mt-2">
                <Button>{"25%"}</Button>
                <Button>{"50%"}</Button>
                <Button>{"75%"}</Button>
                <Button>{"100%"}</Button>
              </Flex>
              <hr className="border border-violet-200 my-3" />
              <Text>I Want : </Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="text-4xl mx-4" />
                  {/* <selectedCoin.icon className="text-4xl mx-4" /> */}
                  <Text css={{ marginBottom: 0 }}>{"INR"}</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder={`Enter Amount in INR`}
                  value={iWantSellTab}
                  onChange={(e) => console.log(e)} />
              </Flex>

              <Flex className="flex-col">

                <Heading3 className="self-center mt-3">1 {upperCase(selectedCoin?.name)} = {coinRate} INR</Heading3>
                <Flex className="justify-center items-center gap-x-2">
                  <img src={selectedCoin?.url} className="text-4xl" />
                  {/* <selectedCoin.icon className="text-4xl" /> */}
                  <span className="text-xl font-bold text-blue-600">{upperCase(selectedCoin?.name)}</span>
                  <DoubleArrowRightIcon className="w-10 h-10 text-violet-500" />

                  <img src={INR?.url} className="text-4xl" />
                  {/* <selectedCoin.icon className="text-4xl" /> */}
                  <span className="text-xl font-bold text-blue-600">INR</span>
                </Flex>
              </Flex>

              <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                <Button
                  disabled={buttonDisabled}
                  onClick={() => {
                    buyNowHandler("sell")
                    setButtonDisabled(true)
                  }}>{buttonDisabled ? 'Loading...' : 'SELL NOW'}</Button>
              </Flex>
            </TabsContent>
          </Tabs>

        </Box>
      </div>
    </>
  )
}

export default AnimatePage(Index);


