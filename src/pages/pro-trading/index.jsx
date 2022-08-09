import AnimatePage from 'HOCs/Animate';
import React, { useEffect, useState } from 'react'
import { Box, Text, Flex, Input, Button } from 'components/styled/ui'
import { violet } from '@radix-ui/colors';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/styled/Tabs"
import { Select, SelectTrigger, SelectValue, SelectIcon, SelectItem, SelectContent, SelectViewport, SelectItemText, SelectItemIndicator } from "components/styled/Select";
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { coins, INR } from "assets/coins/coins"
import { getWalletSaga, updateINRBalance } from 'store/reducers/walletReducer';
import { toast } from "react-toastify";
import { updateUserCryptoBalance } from 'store/reducers/authReducer';
import axios from 'axios';


function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coinRate, setCoinRate] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(coins[0])
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const demoOrders = [{ _id: "acnq", name: "order1", type: "market", pair: "INR/BTC" }, { _id: "2hdw", name: "order1", type: "market", pair: "INR/BTC" }, { _id: "23dsd", name: "order1", type: "market", pair: "INR/BTC" }, { _id: "2dwda", name: "order1", type: "market", pair: "INR/BTC" }]
  const [openOrders, setOpenOrders] = useState(demoOrders);
  const [orderHistory, setOrderHistory] = useState(demoOrders);
  const [tradeHistory, setTradeHistory] = useState(demoOrders);
  const [trades, setTrades] = useState(demoOrders)


  const { user } = useSelector((state) => state.auth);
  const { user: {
    cryptoWallet
  } } = useSelector((state) => state.auth);
  const { InrwalletObj, array: cryptowalletObj } = useSelector(
    (state) => state.wallet.userWallet
  );

  //Buy-Sell States
  const [orderType, setOrderType] = useState("");

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
      // await getCoinChart(selectedCoin?.coin_ID);
      setBuyTabForm({
        ...buyTabForm,
        iHaveValue: "",
        iWantValue: "",
        iWantSellTab: "",
        iHaveSellTab: "",
      });
    })()
  }, [selectedCoin])

  useEffect(() => {
    const payload = { email: user.email }
    dispatch(getWalletSaga(payload));
  }, []);



  const selectedCryptoIndex = cryptoWallet?.findIndex(
    (item) => item.name === selectedCoin.name
  );

  if (selectedCryptoIndex !== -1) {
    selectedCryptoObj = cryptoWallet && cryptoWallet[selectedCryptoIndex];
  }



  const handleCoinChange = (e) => {
    let newCoin = coins.filter((coin) => coin.name === e);
    setSelectedCoin(newCoin[0]);
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
        email: user.email,
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
        autoClose: 1000,
        pauseOnHover: false,
      });
      navigate('/history');
      dispatch(updateINRBalance({ balance: payload.inrValue }))
      dispatch(
        updateUserCryptoBalance({
          name: payload?.shortcode,
          balance: payload?.cryptoValue,
        })
      );
      // window.location.pathname = "/history"
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
      <div className='flex flex-col xl:grid xl:grid-cols-3 gap-2'>

        <Box css={{ borderColor: violet.violet8 }} className="p-3 xl:col-span-2 min-w-96 h-max rounded-xl border">
          Prices
        </Box>
        <Box css={{ borderColor: violet.violet8 }} className="p-3 min-w-96 h-max rounded-xl border">
          <Tabs css={{ width: "inherit" }} className="flex-col" defaultValue="BUY">
            <TabsList>
              <TabsTrigger value="BUY">Buy</TabsTrigger>
              <TabsTrigger value="SELL">Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="BUY">
              <Text>INR Balance:&nbsp;&nbsp;&nbsp;{InrwalletObj.Balance} INR</Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="h-12 w-12 mr-1" />
                  <span>
                    <p className="text-base">At Price INR</p>
                    {/* <p className="text-sm text-right -mt-1">INR</p> */}
                  </span>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number"
                  value={iHaveValue}
                  onChange={(e) =>
                    setBuyTabForm({
                      ...buyTabForm,
                      iHaveValue: e.target.value,
                      iWantValue:
                        iHaveValue !== 0 || iHaveValue.length !== 0
                          ? (e.target.value / Number(coinRate)).toFixed(8)
                          : 0,
                    })
                  }
                />
              </Flex>

              <Flex className="justify-end my-1">
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
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="h-12 w-12 mr-1" />
                  <span>
                    <p className="text-base">Amount</p>
                    <p className="text-sm text-right -mt-1">{"BTC"}</p>
                  </span>
                </Flex>
                <Input css={{ maxWidth: "10rem" }}
                  type="number" min={0} placeholder={`Enter Amount in ${selectedCoin?.name}`}
                  value={iWantValue}
                  onChange={(e) =>
                    setBuyTabForm({
                      ...buyTabForm,
                      iWantValue: e.target.value,
                      iHaveValue: e.target.value * Number(coinRate),
                    })
                  }
                />
              </Flex>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="h-12 w-12 mr-1" />
                  <span>
                    <p className="text-base">Total</p>
                    <p className="text-sm text-right -mt-1">INR</p>
                  </span>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number"
                  value={iHaveValue}
                />
              </Flex>
              <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                <Button
                  disabled={buttonDisabled}
                  onClick={() => {
                    buyNowHandler("buy")
                    setButtonDisabled(true)
                  }}
                >{buttonDisabled ? 'Loading...' : 'BUY NOW'}</Button>
              </Flex>
            </TabsContent>
            <TabsContent value="SELL">
              <Text>{selectedCoin?.name} Balance:{selectedCryptoObj !== undefined
                ? `${selectedCryptoObj?.balance
                }`
                : "No Data"} {selectedCoin?.name}</Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="h-12 w-12 mr-1" />
                  <span>
                    <p className="text-base">At Price</p>
                    <p className="text-sm text-right -mt-1">INR</p>
                  </span>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number"
                  min={0} placeholder={`Enter Amount in ${selectedCoin?.name}`}
                  value={iHaveSellTab}
                  onChange={(e) =>
                    setBuyTabForm({
                      ...buyTabForm,
                      iHaveSellTab: e.target.value,
                      iWantSellTab: e.target.value * Number(coinRate),
                    })
                  } />
              </Flex>

              <Flex className="justify-end my-1">
                <Select onValueChange={(e) => setOrderType(e)}>
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
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="h-12 w-12 mr-1" />
                  <span>
                    <p className="text-base">Amount</p>
                    <p className="text-sm text-right -mt-1">{"BTC"}</p>
                  </span>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number"
                  min={0} placeholder={`Enter Amount in INR`}
                  value={iWantSellTab}
                  onChange={(e) => console.log(e)} />
              </Flex>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <img src={INR?.url} className="h-12 w-12 mr-1" />
                  <span>
                    <p className="text-base">Total</p>
                    <p className="text-sm text-right -mt-1">INR</p>
                  </span>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number"
                  value={iHaveSellTab} />
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
        <Box css={{ borderColor: violet.violet8 }} className="p-3 xl:col-span-2 min-w-96 h-max rounded-xl">
          <Tabs css={{ width: "inherit" }} className="flex-col" defaultValue="OPEN_ORDERS">
            <TabsList>
              <TabsTrigger value="OPEN_ORDERS">Open Orders(0)</TabsTrigger>
              <TabsTrigger value="ORDER_HISTORY">Order History</TabsTrigger>
              <TabsTrigger value="TRADE_HISTORY">Trade History</TabsTrigger>
              <TabsTrigger value="FUNDS">Fund</TabsTrigger>
            </TabsList>
            <TabsContent value="OPEN_ORDERS">
              <table className="w-full">
                <thead>
                  <tr style={{ padding: 25 }} className='bg-violet-500'>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Date</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Pair</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Type</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Side</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Price</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Amount</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Filled</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>

                  {openOrders?.map((order) => {
                    return (
                      <tr
                        key={order?._id}
                        className="hover:bg-violet-100 h-16"
                      >
                        <td>
                          <p>{order?.name}</p>
                        </td>
                        <td>
                          <p>{order?.pair ?? "Updating Balance...."}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                      </tr>)
                  })}

                </tbody>
              </table>
            </TabsContent>
            <TabsContent value="ORDER_HISTORY">
              <table className="w-full">
                <thead>
                  <tr style={{ padding: 25 }} className='bg-violet-500'>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Date</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Pair</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Type</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Side</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Price</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Amount</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">status</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>

                  {orderHistory?.map((order) => {
                    return (
                      <tr
                        key={order?._id}
                        className="hover:bg-violet-100 h-16"
                      >
                        <td>
                          <p>{order?.name}</p>
                        </td>
                        <td>
                          <p>{order?.pair ?? "Updating Balance...."}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{"cancelled"}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                      </tr>)
                  })}

                </tbody>
              </table>
            </TabsContent>
            <TabsContent value="TRADE_HISTORY">
              <table className="w-full">
                <thead>
                  <tr style={{ padding: 25 }} className='bg-violet-500'>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Date</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Pair</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Type</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Side</th>
                    <th style={{ width: "10%" }} className="text-start" scope="col">Price</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Amount</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Filled</th>
                    <th style={{ width: "15%" }} className="text-start" scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>

                  {tradeHistory?.map((order) => {
                    return (
                      <tr
                        key={order?._id}
                        className="hover:bg-violet-100 h-16"
                      >
                        <td>
                          <p>{order?.name}</p>
                        </td>
                        <td>
                          <p>{order?.pair ?? "Updating Balance...."}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                        <td>
                          <p>{order?.type}</p>
                        </td>
                      </tr>)
                  })}

                </tbody>
              </table>
            </TabsContent>
            <TabsContent value="FUNDS">Funds</TabsContent>
          </Tabs>
        </Box>
        <Box css={{ borderColor: violet.violet8 }} className="p-3 min-w-96 rounded-xl border">
          <table className="w-full">
            <thead>
              <tr style={{ padding: 25 }} className='bg-violet-500'>
                <th style={{ width: "25%" }} className="text-start" scope="col">Price</th>
                <th style={{ width: "25%" }} className="text-start" scope="col">Amount</th>
                <th style={{ width: "25%" }} className="text-start" scope="col">Volume</th>
                <th style={{ width: "25%" }} className="text-start" scope="col">Total</th>
              </tr>
            </thead>
            <tbody>

              {openOrders?.map((order) => {
                return (
                  <tr
                    key={order?._id}
                    className="hover:bg-violet-100 h-16"
                  >
                    <td>
                      <p>{order?.name}</p>
                    </td>
                    <td>
                      <p>{order?.pair ?? "Updating Balance...."}</p>
                    </td>
                    <td>
                      <p>{order?.type}</p>
                    </td>
                    <td>
                      <p>{order?.type}</p>
                    </td>
                  </tr>)
              })}

            </tbody>
          </table>
        </Box>
      </div>
    </>
  )
}

export default AnimatePage(Index);
