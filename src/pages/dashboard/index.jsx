import AnimatePage from 'HOCs/Animate'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Label, Fieldset, Input, Button, Heading3, Heading4 } from 'components/styled/ui'
import { Tabs, TabsList, TabsContent, TabsTrigger } from 'components/styled/Tabs'
import classNames from 'lib/classNames'
import { violet } from '@radix-ui/colors';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';


//Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import { getWalletSaga } from 'store/reducers/walletReducer'
import { Link, useNavigate } from 'react-router-dom'

function Index() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const [coinsBalance, setCoinsBalance] = useState([]);
  const { InrwalletObj,
    array: cryptowalletObj
  } = useSelector((state) => state.wallet.userWallet);
  const { loading, errorMsg } = useSelector((state) => state.wallet);

  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(user)
    if (user.email) {
      getCoinsBalance();
    }
  }, [])

  const getCoinsBalance = async () => {
    console.log(user);
    const payload = { email: user.email }
    dispatch(getWalletSaga(payload));

    // try {
    //   const url = "http://3.128.190.203:3001/users/get-CryptoBalance";
    //   const payload = { email: user?.email }
    //   // console.log(url,payload)
    //   const res = await axios.post(url, payload)
    //   console.log(res?.data?.obj?.array);
    //   setCoinsBalance(res?.data?.obj?.array);
    //   //Update user wallet state also using dispatch
    // } catch (err) {
    //   console.log(err)
    // }
  }
  const [nfts, setNfts] = useState([])

  const fetchData = async () => {
    const res = await axios.post(`http://nft.regoex.com:3001/users/content/`)
    console.log(res.data.data.content)
    setNfts(res.data.data.content)
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-2">

        {/* First Box */}
        <Box css={{ borderColor: violet.violet8 }} className="p-3 rounded-xl h-max border">
          <Flex className="flex-col">
            <Heading3>Total Asset Value</Heading3>
            <Box className='grid grid-cols-2 gap-4 rounded-xl p-3'>
              <Flex className="flex-col items-center">
                <div className='font-bold text-xl text-gray-700'>$ 1000</div>
                <Text className="font-medium">Current Value</Text>
              </Flex>
              <Flex className="flex-col items-center">
                <div className='font-bold text-xl text-gray-700'>$ 1000</div>
                <Text className="font-medium">Total Invested</Text>
              </Flex>
              <Flex className="flex-col items-center">
                <div className={classNames('font-bold text-xl text-gray-700')}>$ 1000</div>
                <Text css={{ color: "LimeGreen" }} className="font-medium ">Total Returns</Text>
              </Flex>
              <Flex className="flex-col items-center">
                <div className={classNames('font-bold text-xl text-gray-700')}>$ 1000</div>
                <Text css={{ color: "LimeGreen" }} className="font-medium">Gain / Loss</Text>
              </Flex>
            </Box>

            <Box className="p-3 rounded-xl mt-4">
              <table className="w-full">
                <thead>
                  <tr className='bg-violet-300 '>
                    <th className='  whitespace-nowrap'>Asset Type</th>
                    <th className="whitespace-nowrap">Available Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptowalletObj?.length > 0 &&
                    cryptowalletObj?.map((item, index) => {
                      if (!loading)
                        return (

                          <tr className="" key={item?._id}>
                            <td className=""><div className="flex"><img src={item?.image} /> {item?.crypt_name}</div></td>
                            <td><div className=""><i className="fa fa-rupee-sign" /> {item?.balance}</div></td>
                          </tr>
                        )
                    })}
                </tbody>
              </table>
            </Box>
            <Button >Deposit INR</Button>
          </Flex>
        </Box>

        {/* Second Box */}



        <Box css={{ borderColor: violet.violet8 }} className="p-2 rounded-xl h-max border">
          <Flex className="flex-col">
            <Heading3>Market</Heading3>
            <Box css={{}} className="rounded-xl" >
              <Tabs css={{ width: "inherit" }} className="flex-col" defaultValue="GAINERS">
                <TabsList aria-label="Manage your account">
                  <TabsTrigger className='' value="GAINERS">Top Gainers</TabsTrigger>
                  <TabsTrigger value="LOSERS">Top Losers</TabsTrigger>
                </TabsList>
                <TabsContent value="GAINERS">
                  <Flex className="flex-col gap-3 max-h-80 overflow-y-auto">

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                      return (
                        <Flex key={item} className="items-center justify-between">
                          <Flex className="items-center gap-2">
                            <img src={item % 2 === 0 ? "/images/nft.jpg" : "/images/nft.png"} className="h-12 w-12 rounded-full" />
                            <span>
                              <h1>Bitcoin</h1>
                              <p>BTC</p>
                            </span>
                          </Flex>
                          <Flex>
                            data
                          </Flex>
                        </Flex>)
                    })}
                  </Flex>
                </TabsContent>
                <TabsContent value="LOSERS">
                  <Text>Change your password here. After saving, you'll be logged out.</Text>
                  <Fieldset>
                    <Label htmlFor="currentPassword">Current password</Label>
                    <Input id="currentPassword" type="password" />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="newPassword">New password</Label>
                    <Input id="newPassword" type="password" />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input id="confirmPassword" type="password" />
                  </Fieldset>
                  <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                    <Button variant="green">Change password</Button>
                  </Flex>
                </TabsContent>
              </Tabs>
            </Box>
          </Flex>
        </Box>

        {/* Third Box */}
        <Box css={{ borderColor: violet.violet8 }} className="p-2 rounded-xl h-inherit  border md:col-span-2 xl:col-span-1">
          <Flex className="flex-col">
            <Flex className="items-center justify-between mb-2">

            <Heading3 css={{marginBottom:0}}>NFTs</Heading3>
            <Button onClick={()=>navigate("/nft")} >
                <p>See All</p>
            </Button>
            </Flex>
            <Box css={{ borderColor: violet.violet5 }} className="border p-1 rounded-md">
              <Flex className="flex-col md:flex-row xl:flex-col overflow-y-auto xl:max-h-96 gap-2">

                {/* Swiper */}
                <Box className="md:w-1/2 xl:w-full pr-3 ">

                  <Swiper
                    className="max-w-full"
                    modules={[Navigation]}
                    spaceBetween={2}
                    slidesPerView={1}
                    direction="horizontal"
                    navigation
                    autoplay={true}
                    loop={true}

                  >
                    {nfts.map((items, index) => {
                      return (
                        <SwiperSlide>
                          <img src={`${"http://nft.regoex.com:3001/content/"}${items.image}`} className=" aspect-square w-full h-auto" />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </Box>
                <Flex className=" flex-col md:w-1/2 xl:w-full p-2 gap-2 pr-3">
                  {nfts.map((items, index) => {
                    return (
                      <Flex className="p-2 gap-2 border border-violet-400">
                        <img src={`${"http://nft.regoex.com:3001/content/"}${items.image}`} className="w-12 h-12 rounded-full" />
                        <p>{items.title}</p>
                      </Flex>
                    )
                  })}
                </Flex>
                {/* Flex Col to contain cards */}
              </Flex>
            </Box>


          </Flex>
        </Box>
      </div>
    </div>
  )
}

export default AnimatePage(Index)
