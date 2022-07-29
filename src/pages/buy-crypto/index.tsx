import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import { Flex, Box, Text, Button, Heading3 } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate'
import { Test } from 'pages/Test';
import React from 'react'
import { AiFillAndroid, AiFillApple, AiFillAudio } from 'react-icons/ai';
import { violet } from '@radix-ui/colors';

function index() {


  const coins = [
    {
      name: "BTC",
      icon: AiFillApple,
      value: "COIN_BTC"
    },
    {
      name: "ETH",
      icon: AiFillAndroid,
      value: "COIN_ETH"
    },
    {
      name: "BNB",
      icon: AiFillAudio,
      value: "COIN_BNB"
    },
    {
      name: "MATIC",
      icon: AiFillApple,
      value: "COIN_MATIC"
    }
  ]
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Box className=" p-3 rounded-xl h-max md:col-span-2">
          <Heading3>Market Rate Chart</Heading3>
          <Box css={{borderColor:violet.violet8}} className=" p-3 rounded-xl border">
            <Tabs css={{ flexDirection: "row", width: "100%" }} defaultValue="COIN_BTC" >
              <TabsList css={{ flexDirection: "column" }} className="p-4">
                {coins.map((coin) => (
                  <TabsTrigger css={{
                    marginBottom: 10,
                    padding: 10,
                    borderRadius: 6,
                    '&:hover': { backgroundColor: violet.violet3 },
                    justifyContent:"start"
                    }} 
                    key={coin.value}
                    value={coin.value}
                  >
                    <Flex css={{backgroundColor:"transparent"}} className="items-center gap-2 justify-items-start">
                      <coin.icon/>
                      <Text css={{ marginBottom: 2, color:"inherit" }} >{coin.name}</Text>
                    </Flex>
                  </TabsTrigger>
                ))}
              </TabsList>
              {coins.map((coin) => (
                <TabsContent key={coin.name} value={coin.value}>
                  {coin.name}
                </TabsContent>
              ))}
            </Tabs>
          </Box>
        </Box>
        <Box className=" p-3 rounded-xl h-max">
          <Tabs css={{ width: "inherit" }} defaultValue="BUY">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="BUY">Buy</TabsTrigger>
              <TabsTrigger value="SELL">Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="BUY">
              Buy
              <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                <Button variant="green">Buy Now</Button>
              </Flex>
            </TabsContent>
            <TabsContent value="SELL">

              Sell
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

export default AnimatePage(index);


