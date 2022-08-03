import { Box, Button, Flex, Heading3, Input, Text } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import React, { useState } from 'react'
import { violet } from '@radix-ui/colors';
import { coins as AllCoins } from 'assets/coins/coins';
import { upperCase } from 'lodash'
import { Select, SelectTrigger, SelectValue, SelectIcon, SelectContent, SelectViewport, SelectItem, SelectItemIndicator, SelectItemText } from 'components/styled/Select';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons'

function Index() {

  const [coins, setCoins] = useState(AllCoins);
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [amount, setAmount] = useState(0)


  const coinChangeHandler = (e) => {
    const newCoin = coins.filter((coin)=>coin.name===e)
    setSelectedCoin(newCoin[0]);
  }

  return (
    <>
      <div className="flex lg:grid lg:grid-cols-3 gap-2">
        <Flex css={{ borderColor: violet.violet8 }} className=" flex-col p-2 rounded-xl border">
          <Text>Create Deposit</Text>
          <Flex className="items-center justify-between">
            <Select value={selectedCoin?.name} onValueChange={(e) => coinChangeHandler(e)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Coin" />
                <SelectIcon>
                  <ChevronDownIcon />
                </SelectIcon>
              </SelectTrigger>
              <SelectContent>
                <SelectViewport>
                  {coins?.map((coin) => <SelectItem key={coin?.id} value={coin?.name}>
                    <SelectItemText>{coin?.name}</SelectItemText>
                    <SelectItemIndicator>
                      <CheckIcon />
                    </SelectItemIndicator>
                  </SelectItem>)}

                </SelectViewport>
              </SelectContent>
            </Select>
            <Input css={{ maxWidth: "12rem" }} type="number" value={amount} onChange={(e) => setAmount(e.target.valueAsNumber)} />
          </Flex>
          <Flex css={{ marginTop: 20 }} className="justify-between items-center">
            <Text css={{marginBottom:0}}>Duration:</Text>
            <Flex className="gap-1">

            <Button>30</Button>
            <Button>40</Button>
            <Button>50</Button>
            <Button>60</Button>
            </Flex>
          </Flex>
          <Flex css={{ marginTop: 20 }} className="justify-between items-center">
            <Text>Interest Rate:</Text>
            <Heading3>{selectedCoin.interestMsg}</Heading3>
          </Flex>
          <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
            <Button variant="green">Create Fixed Deposit</Button>
          </Flex>
        </Flex>
        <Box css={{ borderColor: violet.violet8 }} className="p-2 rounded-xl border col-span-2">
          <Text>Fixed Deposits</Text>
          <table className="w-full">
            <thead>
              <tr style={{ padding: 25 }} className='bg-violet-500'>
                <th style={{ width: "25%" }} className="text-start" scope="col">Token</th>
                <th style={{ width: "20%" }} className="text-start" scope="col">Est. APY</th>
                <th style={{ width: "30%" }} className="text-start" scope="col">Duration(days)</th>
                <th style={{ width: "25%" }} className="text-start" scope="col">Minimum Locked Amount</th>
              </tr>
            </thead>
            <tbody>
              {coins?.map((item) => (
                <tr
                  key={item?.id}
                  // value={item.value}

                  className="hover:bg-violet-100 h-16"
                >
                  <th scope="row">
                    <div className="flex gap-2 items-center">
                      <img src={item?.url} />
                      <p>{upperCase(item?.name)}</p>
                    </div>
                  </th>
                  <td>
                    <p>16.98%</p>
                  </td>
                  <td>
                    <div className="flex flex-col md:flex-row md:gap-2">
                      <div className="flex gap-2">

                        <Button>30</Button>
                        <Button>30</Button>
                      </div>
                      <div className="flex gap-2">

                        <Button>30</Button>
                        <Button>30</Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-between p-1">
                      <p>0.1 BTC</p>
                      <Button variant="green">Stake Now</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>


      </div>
    </>
    // <Box css={{ borderColor: violet.violet8 }} className="p-2 rounded-xl border">
    //   <table className="w-full">
    //     <thead>
    //       <tr style={{padding:25}} className='bg-violet-500'>
    //         <th style={{ width: "25%" }} className="text-start" scope="col">Token</th>
    //         <th style={{ width: "20%" }} className="text-start" scope="col">Est. APY</th>
    //         <th style={{ width: "30%" }} className="text-start" scope="col">Duration(days)</th>
    //         <th style={{ width: "25%" }} className="text-start" scope="col">Minimum Locked Amount</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {coins?.map((item: any) => (
    //         <tr
    //           key={item?.id}
    //         // value={item.value}

    //         className="hover:bg-violet-100 h-16"
    //         >
    //           <th scope="row">
    //             <div className="flex gap-2 items-center">
    //               <img src={item?.url} />
    //               <p>{upperCase(item?.name)}</p>
    //             </div>
    //           </th>
    //           <td>
    //             <p>16.98%</p>
    //           </td>
    //           <td>
    //             <div className="flex flex-col md:flex-row md:gap-2">
    //               <div className="flex gap-2">

    //               <Button>30</Button>
    //               <Button>30</Button>
    //               </div>
    //               <div className="flex gap-2">

    //               <Button>30</Button>
    //               <Button>30</Button>
    //               </div>
    //             </div>
    //           </td>
    //           <td>
    //             <div className="flex justify-between p-1">
    //               <p>0.1 BTC</p>
    //               <Button variant="green">Stake Now</Button>
    //             </div>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </Box>
  )
}

export default AnimatePage(Index);
