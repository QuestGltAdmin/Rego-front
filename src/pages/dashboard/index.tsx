import AnimatePage from 'HOCs/Animate'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Label, Fieldset, Input, Button, Heading3 } from 'components/styled/ui'
import { Tabs, TabsList, TabsContent, TabsTrigger } from 'components/styled/Tabs'
import classNames from 'lib/classNames'
import { violet } from '@radix-ui/colors';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';


//Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';

function Index() {
  const { user } = useSelector((state: any) => state.auth)
  const [coinsBalance, setCoinsBalance] = useState<any[]>([]);

  useEffect(() => {
    // console.log(user)
    getCoinsBalance();
  }, [user])

  const getCoinsBalance = async () => {
    try {
      const url = "http://3.128.190.203:3001/users/get-CryptoBalance";
      const payload = { email: user?.user?.email }
      // console.log(url,payload)
      const res = await axios.post(url, payload)
      console.log(res?.data?.obj);
      setCoinsBalance(res?.data?.obj?.array);
      //Update user wallet state also using dispatch
    } catch (err) {
      console.log(err)
    }
  }

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
                  {coinsBalance && coinsBalance.length > 0 && coinsBalance?.map(coin => (
                    <tr className="" key={coin?._id}>
                      <td className=""><div className="flex"><img src={coin?.image} /> {coin?.crypt_name}</div></td>
                      <td><div className=""><i className="fa fa-rupee-sign" /> {coin?.balance}</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
            <Button variant="green" >Deposit INR</Button>
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
                  <Text>Make changes to your account here. Click save when you're done.</Text>
                  <Fieldset>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </Fieldset>
                  <Fieldset>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </Fieldset>
                  <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                    <Button variant="green">Save changes</Button>
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
            <Heading3>NFTs</Heading3>
            <Box css={{ borderColor: violet.violet5 }} className="border p-1 rounded-md">
              <Flex className="flex-col md:flex-row xl:flex-col overflow-y-auto xl:max-h-96">

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
                    <SwiperSlide>
                      <img src="/images/nft.png" className=" aspect-square w-full h-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/nft.jpg" className="aspect-square w-full h-auto" />

                    </SwiperSlide>
                  </Swiper>
                </Box>


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
