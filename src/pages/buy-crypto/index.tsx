import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import { Flex, Box, Text, Button, Heading3, Input } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate'
import { Test } from 'pages/Test';
import React, { useEffect, useState } from 'react'
import { AiFillAndroid, AiFillApple, AiFillAudio } from 'react-icons/ai';
import { violet } from '@radix-ui/colors';
import { SVGComponent } from 'lib/types/SVGComponent';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectTrigger, SelectValue, SelectViewport } from 'components/styled/Select';
import { CheckIcon, ChevronDownIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import {coins, INR} from "assets/coins/coins"
import {upperCase} from 'lodash'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LayoutPosition
} from "chart.js";

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
      position:"top" as LayoutPosition,
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

  //Chart States
  const [coinChartData, setCoinChartData] = useState([]);
  const [coinRate, setCoinRate] = useState<number|null>(null);

  //Buy-Sell States
  const [orderType, setOrderType] = useState<"limit"|"market"|"">("");

  //Common States
  const [selectedCoin, setSelectedCoin] = useState<{ id: number, coin_ID: string, name:string, type:string, interestMsg:string, url: string }>(coins[0])
  
  //Redux State
  const { user } = useSelector((state:any)=>state.auth);
  const { InrwalletObj, array: cryptowalletObj } = useSelector(
    (state:any) => state.wallet.userWallet
  );
  console.log({ InrwalletObj, cryptowalletObj });

  
  useEffect(()=>{
    (async ()=>{
      await getCoinRate(selectedCoin?.coin_ID);
      await getCoinChart(selectedCoin?.coin_ID);
    })()
  },[selectedCoin])


  //Coin Chart Logic and Options
  const cryptoTimestamp = [];
  const cryptoPrice: never[] = [];

  if (coinChartData?.length > 0) {
    for (let i = coinChartData?.length - 20; i < coinChartData?.length; i++) {
      cryptoTimestamp.push(new Date(coinChartData[i][0]).toLocaleTimeString());
      cryptoPrice.push(coinChartData[i][1]);
    }
  }

  const data = {
    labels: cryptoTimestamp?.length > 0 ? cryptoTimestamp:undefined,
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
  const getCoinChart = async (coin_id:string="bitcoin") => {
    try {
      const url=`https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=INR&days=1`
      const res = await axios.get(url);
      // console.log(res);
      setCoinChartData(res?.data?.prices)
    } catch (err) {
      console.log(err)
    }
  }

  //API to get specified coin's rate vs INR
  const getCoinRate = async (coin_id:string="bitcoin") => {
    try {
      const url =  `https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=INR`
      const res = await axios.get(url);
      // console.log(res);
      setCoinRate(res?.data[`${coin_id}`]?.inr);
    } catch (err) {
      console.log(err);
    }
  }




  console.log(coinChartData, coinRate)



  //Handles Coin Change between chart and buy/sell tabs
  const handleCoinChange = (e: string) => {
    let newCoin = coins.filter((coin) => coin.name === e);
    setSelectedCoin(newCoin[0]);
  }

  return (
    <>
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-2">

        {/* Market Chart Box */}
        <Box css={{borderColor:violet.violet8}} className=" p-3 rounded-xl h-max xl:col-span-2 border">

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
                    height:"fit-content",
                    maxHeight:"1.5rem"
                    
                  }}
                    key={coin?.name}
                    value={coin?.name}
                  >
                    <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
                      <img src={coin?.url}/>
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
        <Box css={{borderColor:violet.violet8}} className=" p-3 rounded-xl h-max min-w-96 border">
          <Tabs css={{ width: "inherit" }} className="flex-col" defaultValue="BUY">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="BUY">Buy</TabsTrigger>
              <TabsTrigger value="SELL">Sell</TabsTrigger>
            </TabsList>

            {/* Buy Tab Content */}
            <TabsContent value="BUY">

              <Text>INR Balance:{" 1000 "} INR</Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="text-4xl mx-4" />
                  {/* <selectedCoin.icon className="text-4xl mx-4" /> */}
                  <Text css={{ marginBottom: 0 }}>INR</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder="Enter Amount in INR" />
              </Flex>

              <Flex className="justify-end my-2">
                <Select onValueChange={(e:any) => setOrderType(e)}>
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
                {orderType === "limit" && <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder="Enter Limit Value" />}
              </Flex>
              <hr className="border border-violet-200 my-3" />
              <Text>I Want : </Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                <img src={selectedCoin?.url} className="text-4xl mx-4" />
                  {/* <selectedCoin.icon className="text-4xl mx-4" /> */}
                  <Text css={{ marginBottom: 0 }}>{upperCase(selectedCoin?.name)}</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder={`Enter Amount in ${selectedCoin?.name}`} />
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
                <Button variant="green">Buy Now</Button>
              </Flex>
            </TabsContent>

            {/* Sell Tab Content */}
            <TabsContent value="SELL">
              <Text>{upperCase(selectedCoin?.name)} Balance:{" 1000 "} {upperCase(selectedCoin?.name)}</Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                <img src={selectedCoin?.url} className="text-4xl mx-4" />
                  {/* <selectedCoin.icon className="text-4xl mx-4" /> */}
                  <Text css={{ marginBottom: 0 }}>{upperCase(selectedCoin?.name)}</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder={`Enter Amount in ${selectedCoin?.name}`} />
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
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder={`Enter Amount in INR`} />
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
                <Button variant="red">Sell Now</Button>
              </Flex>
            </TabsContent>
          </Tabs>

        </Box>
      </div>
    </>
  )
}

export default AnimatePage(Index);


