import { Box, Button, Flex, Heading2, Heading4, Input, Text } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import React, { useState } from 'react'
import { SVGComponent } from 'lib/types/SVGComponent';
import { violet } from '@radix-ui/colors'
import { AiFillAccountBook, AiFillAlert, AiFillAlipayCircle } from 'react-icons/ai';
import { Select, SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectTrigger, SelectValue, SelectViewport } from 'components/styled/Select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';

function Index() {

  const [fromCoin, setFromCoin] = useState<{ name: string, ticker: string, icon: SVGComponent, value: string }>({
    name: "Bitcoin",
    ticker: "BTC",
    icon: AiFillAccountBook,
    value: "BTC"
  })

  const [toCoin, setToCoin] = useState<{ name: string, ticker: string, icon: SVGComponent, value: string }>({
    name: "Bitcoin",
    ticker: "BTC",
    icon: AiFillAccountBook,
    value: "BTC"
  })


  const coins = [
    {
      name: "Bitcoin",
      ticker: "BTC",
      icon: AiFillAccountBook,
      value: "BTC"
    },
    {
      name: "Ethereum",
      ticker: "ETH",
      icon: AiFillAlert,
      value: "ETH"
    },
    {
      name: "Polygon",
      ticker: "MATIC",
      icon: AiFillAlipayCircle,
      value: "MATIC"
    }
  ]

  const handleCoinChange = (e: string, type: "TO" | "FROM") => {
    let newCoin = coins.filter((coin) => coin.value === e)
    type === "TO"
      ? setToCoin(newCoin[0])
      : setFromCoin(newCoin[0]);
  }

  return (
    <Box className=" p-3 md:w-5/6 lg:w-4/6 xl:w-3/6  mx-auto rounded-xl">
      <Heading4 css={{ marginBottom: 2 }} className="text-center">Bitshares to Tether Price</Heading4>
      <Heading2 className="text-center" >BTS To USDT Converter</Heading2>
      <Flex className="justify-between px-4">
        <Flex className="flex-col">
          <Text css={{ marginBottom: 2 }} className="font-medium">{`1 ${fromCoin.ticker} equals to`}</Text>
          <Heading2>{`0.0002 ${toCoin.ticker}`}</Heading2>
        </Flex>
        <Flex className="flex-col">
          <Text css={{ marginBottom: 2 }} className="font-medium text-right">{`1 ${toCoin.ticker} equals to`}</Text>
          <Heading2>{`0.0002 ${fromCoin.ticker}`}</Heading2>
        </Flex>
      </Flex>

      <Flex className="flex-col 2xl:flex-row items-center 2xl:justify-between gap-4">
        <Box css={{ borderColor: violet.violet8 }} className="p-3 w-fit rounded-xl border">
          <Flex className="items-center gap-2">
            <fromCoin.icon className="w-10 h-10" />
            <Input css={{ maxWidth: "13rem" }} type="number" min={0} />
            <Select onValueChange={(e) => handleCoinChange(e, "FROM")}>
              <SelectTrigger>
                <SelectValue placeholder="Select Coin" />
                <SelectIcon>
                  <ChevronDownIcon />
                </SelectIcon>
              </SelectTrigger>
              <SelectContent>
                <SelectViewport>
                  {coins.map((coin) => (
                    <SelectItem key={coin.value} value={coin?.value} >
                      <SelectItemText>{coin?.name}</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectViewport>
              </SelectContent>

            </Select>
          </Flex>
        </Box>

        <Box css={{ borderColor: violet.violet8 }} className="p-3 w-fit rounded-xl border">
          <Flex className="items-center gap-2">
            <toCoin.icon className="w-10 h-10" />
            <Input css={{ maxWidth: "13rem" }} type="number" min={0} />
            <Select onValueChange={(e) => handleCoinChange(e, "TO")}>
              <SelectTrigger>
                <SelectValue placeholder="Select Coin" />
                <SelectIcon>
                  <ChevronDownIcon />
                </SelectIcon>
              </SelectTrigger>
              <SelectContent>
                <SelectViewport>
                  {coins.map((coin) => (
                    <SelectItem key={coin.value} value={coin?.value} >
                      <SelectItemText>{coin?.name}</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectViewport>
              </SelectContent>

            </Select>
          </Flex>
        </Box>
        <Button css={{width:"20rem"}} variant={"green"} className="align-right">Convert</Button>
      </Flex>
    </Box>
  )
}

export default AnimatePage(Index);