import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import { Flex, Box, Text, Button, Heading3, Input } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate'
import { Test } from 'pages/Test';
import React, { useState } from 'react'
import { AiFillAndroid, AiFillApple, AiFillAudio } from 'react-icons/ai';
import { violet } from '@radix-ui/colors';
import { SVGComponent } from 'lib/types/SVGComponent';
import { Select, SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectTrigger, SelectValue, SelectViewport } from 'components/styled/Select';
import { CheckIcon, ChevronDownIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';

function Index() {

  const [selectedCoin, setSelectedCoin] = useState<{ name: string, value: string, icon: SVGComponent }>({
    name: "BTC",
    icon: AiFillApple,
    value: "COIN_BTC"
  })

  const [orderType, setOrderType] = useState<string>("");


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


  //Handles Coin Change between chart and buy/sell tabs
  const handleCoinChange = (e: string) => {
    let newCoin = coins.filter((coin) => coin.value === e);
    setSelectedCoin(newCoin[0])
  }

  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* Market Chart Box */}
        <Box className=" p-3 rounded-xl h-max md:col-span-2">
          <Heading3>Market Rate Chart</Heading3>
          <Box css={{ borderColor: violet.violet8 }} className=" p-3 rounded-xl border">
            <Tabs css={{ flexDirection: "row", width: "100%" }} defaultValue={selectedCoin.value} onValueChange={handleCoinChange} >
              <TabsList css={{ flexDirection: "column" }} className="p-4">
                {coins.map((coin) => (
                  <TabsTrigger css={{
                    marginBottom: 10,
                    padding: 10,
                    borderRadius: 6,
                    '&:hover': { backgroundColor: violet.violet3 },
                    justifyContent: "start"
                  }}
                    key={coin.value}
                    value={coin.value}
                  >
                    <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
                      <coin.icon />
                      <Text css={{ marginBottom: 2, color: "inherit" }} >{coin.name}</Text>
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

        {/* Buy And Sell Box */}
        <Box className=" p-3 rounded-xl h-max">
          <Tabs css={{ width: "inherit" }} defaultValue="BUY">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="BUY">Buy</TabsTrigger>
              <TabsTrigger value="SELL">Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="BUY">

              <Text>INR Balance:{" 1000 "} INR</Text>
              <Flex className="items-center justify-between">
                <Flex className="items-center">
                  <selectedCoin.icon className="text-4xl mx-4" />
                  <Text css={{ marginBottom: 0 }}>INR</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder="Enter Amount in INR" />
              </Flex>

              <Flex className="justify-end my-2">
                <Select onValueChange={(e: string) => setOrderType(e)}>
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
                  <selectedCoin.icon className="text-4xl mx-4" />
                  <Text css={{ marginBottom: 0 }}>{selectedCoin?.name}</Text>
                </Flex>
                <Input css={{ maxWidth: "10rem" }} type="number" min={0} placeholder={`Enter Amount in ${selectedCoin?.name}`} />
              </Flex>

              <Flex className="flex-col">

              <Heading3 className="self-center mt-3">1 {selectedCoin?.name} = {190000} INR</Heading3>
              <Flex className="justify-center items-center gap-x-2">
                <selectedCoin.icon className="text-4xl" />
                <span className="text-xl font-bold text-blue-600">INR</span>
                <DoubleArrowRightIcon className="w-10 h-10 text-violet-500" />
                <selectedCoin.icon className="text-4xl" />
                <span className="text-xl font-bold text-blue-600">{selectedCoin?.name}</span>
              </Flex>
              </Flex>

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

export default AnimatePage(Index);


