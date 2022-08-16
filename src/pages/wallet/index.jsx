import { Fieldset, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import AnimatePage from 'HOCs/Animate';
import React, { useEffect, useState } from 'react'
import { violet } from '@radix-ui/colors';
import { upperCase } from 'lodash';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { QRCodeSVG } from 'qrcode.react'
import { Box, Text, Flex, Button } from 'components/styled/ui';
import { coins as AllCoins, INR } from 'assets/coins/coins';
import { getWalletSaga, updateWalletBalance } from 'store/reducers/walletReducer';
import { Select, SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectTrigger, SelectValue, SelectViewport } from 'components/styled/Select';
import { CheckIcon, ChevronDownIcon, ClipboardIcon } from '@radix-ui/react-icons';
import RegoLoader from 'components/RegoLoader';

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { InrwalletObj, array: cryptowalletObj } = useSelector((state) => state.wallet.userWallet);


  const [coins, setCoins] = useState(AllCoins);

  //Selected Coin State
  const [selectedCoin, setSelectedCoin] = useState();
  const [depositAddress, setDepositAddress] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");


  useEffect(() => {
    if (user?.email) {
      getWalletData()
    }
  }, [])


  //Dispatch Saga to get wallet Data
  const getWalletData = () => {
    try {
      const payload = { email: user?.email };
      dispatch(getWalletSaga(payload));
    } catch (err) {
      console.log(err);
    }
  }


  //Send Handler
  const sendHandler = () => {
    try {

    } catch (err) {
      console.log(err)
    }
  }

  //Deposit Handler
  const depositHandler = () => {
    try {

    } catch (err) {
      console.log(err);
    }
  }

  console.log(user, cryptowalletObj)

  //Helper Function to handle copying of wallet address
  const handleCopyToClipboard = () => {
    //it'll only work with https
    console.log(depositAddress);
  }


  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
        <Box className='p-3 rounded-xl lg:col-span-2 h-max'>
          <Box css={{ borderColor: violet.violet8 }} className="p-2 mb-2 rounded-xl border">
            <table className="w-full">
              <thead className="border-b border-gray-500 pb-2 h-10">
                <tr>


                <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">Asset Type</th>
                <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">Total Balance</th>
                {/* <th style={{ width: "20%" }} className="text-start" scope="col">Asset Value</th> */}
                {/* <th style={{ width: "20%" }} className="text-start" scope="col">Interest Earned</th> */}
                {/* <th style={{ width: "20%" }} className="text-start" scope="col">Actions</th> */}
                </tr>
              </thead>
              <tbody>

                <tr
                  // key={item?.id}
                  // value={item.value}

                  className="hover:bg-violet-100 h-16"
                >
                  <th scope="row">
                    <div className="flex gap-2 items-center">
                      <img src={INR?.url} />
                      <p>{upperCase(INR?.name)}</p>
                    </div>
                  </th>
                  <td>
                    <p>{InrwalletObj?.Balance ?? "Updating Balance...."}</p>
                  </td>
                  {/* <td>
                    <div className="flex justify-between p-1">
                      <Button variant="green">Buy More</Button>
                    </div>
                  </td> */}
                </tr>

              </tbody>
            </table>
          </Box>
          <Box css={{ borderColor: violet.violet8 }} className="p-2 rounded-xl border">
            <table className="w-full">
              <thead className="border-b border-gray-500 pb-2 h-10">
                <tr>

                <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">Asset Type</th>
                <th style={{ width: "30%" }} className="text-left text-base font-semibold text-gray-500" scope="col">Total Balance</th>
                <th style={{ width: "25%" }} className="text-left text-base font-semibold text-gray-500" scope="col">Asset Value</th>
                <th style={{ width: "25%" }} className="text-left text-base font-semibold text-gray-500" scope="col">Interest Earned</th>
                </tr>
                {/* <th style={{ width: "20%" }} className="text-start" scope="col">Actions</th> */}
              </thead>
              <tbody>
                
                {cryptowalletObj?.map((item) => (
                  <tr
                  key={item?._id}
                  // value={item.value}

                    className="hover:bg-violet-100 h-16"
                  >
                    <th scope="row">
                      <div className="flex gap-2 items-center">
                        <img src={item?.image} />
                        <p>{upperCase(item?.crypt_name)}</p>
                      </div>
                    </th>
                    <td>
                      <p>{item?.balance}</p>
                    </td>
                    <td>
                      <p>0.006</p>
                    </td>
                    <td>
                      <p>{item?.interest_earned}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {cryptowalletObj.length===0 && <div className='flex justify-center pt-10'>
               <RegoLoader  loaderAutoResize={false} />
            </div>}
          </Box>
        </Box>
        <Box css={{}} className="p-3 h-max rounded-xl">
          <Tabs css={{ width: "inherit" }} className="flex-col" defaultValue="DEPOSIT">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="DEPOSIT">Deposit</TabsTrigger>
              <TabsTrigger value="SEND">Send</TabsTrigger>
            </TabsList>
            <TabsContent value="DEPOSIT">
              {/* Here we have options to deposit money using wallet address or by scanning the QR Code */}
              <Text>Deposit money into your wallet by scanning QR Code or using using below address.</Text>
              <div className="flex gap-2 justify-between items-center">

                {/* Dropdown for selecting coin */}
                <Select
                  onValueChange={(e) => {
                    let coin = cryptowalletObj.filter((item) => item._id === e)[0];
                    setSelectedCoin(coin)
                    console.log(coin, e)
                    setDepositAddress(coin.wallet_address)
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Coin" />
                    <SelectIcon>
                      <ChevronDownIcon />
                    </SelectIcon>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectViewport>
                      {cryptowalletObj?.map((item) => {
                        return (
                          <SelectItem key={item?._id} value={item?._id}>
                            <SelectItemText>{item?.crypt_name}</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                        )
                      })
                      }
                    </SelectViewport>
                  </SelectContent>
                </Select>
                {/* QR Code for the wallet address */}
                <QRCodeSVG value={depositAddress} />
              </div>

              {/* User's Crypto address for depositing the crypto coins into   */}
              <Fieldset>
                <Label htmlFor="address">Address</Label>
                <div className="flex relative">

                  <Input css={{ paddingInlineEnd: 30 }} id="address" readOnly defaultValue={depositAddress} />
                  <ClipboardIcon onClick={() => handleCopyToClipboard()} className="text-gray-400 hover:text-blue-800  cursor-pointer absolute h-6 w-6 top-1 right-0 ml-1  " />
                </div>
              </Fieldset>
            </TabsContent>
            <TabsContent value="SEND">
              <Flex className="flex-col">

                <Text>Select coin, enter amount with receiver address to send coins .</Text>
                <div className="flex items-center justify-around">
                  <img className='w-10 h-10' src={selectedCoin?.image || "/images/profile.png"} />
                  {/* Dropdown for selecting coin */}
                  <Select
                    onValueChange={(e) => {
                      let coin = cryptowalletObj.filter((item) => item._id === e)[0];
                      setSelectedCoin(coin)
                      // console.log(coin, e)
                      // setDepositAddress(coin.wallet_address)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Coin" />
                      <SelectIcon>
                        <ChevronDownIcon />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectViewport>
                        {cryptowalletObj?.map((item) => {
                          return (
                            <SelectItem key={item?._id} value={item?._id}>
                              <SelectItemText>{item?.crypt_name}</SelectItemText>
                              <SelectItemIndicator>
                                <CheckIcon />
                              </SelectItemIndicator>
                            </SelectItem>
                          )
                        })
                        }
                      </SelectViewport>
                    </SelectContent>
                  </Select>
                </div>
                <Fieldset>
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" placeholder="Enter Amount" type="number" />
                  <div className="mt-1 flex gap-1 justify-end ">
                    <Button>25%</Button>
                    <Button>50%</Button>
                    <Button>75%</Button>
                    <Button>100%</Button>
                  </div>
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="receiver_wallet_address">Receiver's Wallet Address</Label>
                  <Input id="receiver_wallet_address" placeholder="Enter Receiver's Wallet Address" value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} type="text" />
                </Fieldset>
                <Button>Send</Button>
              </Flex>
            </TabsContent>
          </Tabs>
        </Box>
      </div>
    </>
  )
}

export default AnimatePage(Index);
