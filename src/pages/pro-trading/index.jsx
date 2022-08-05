import AnimatePage from 'HOCs/Animate';
import React, { useState } from 'react'
import { Box,Text,Flex, Input, Button } from 'components/styled/ui'
import { violet } from '@radix-ui/colors';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/styled/Tabs"
import { Select, SelectTrigger, SelectValue, SelectIcon, SelectItem, SelectContent, SelectViewport, SelectItemText, SelectItemIndicator} from "components/styled/Select";
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import {INR} from 'assets/coins/coins'

function Index() {

  const demoOrders = [{_id:"acnq",name:"order1",type:"market",pair:"INR/BTC"},{_id:"2hdw",name:"order1",type:"market",pair:"INR/BTC"},{_id:"23dsd",name:"order1",type:"market",pair:"INR/BTC"},{_id:"2dwda",name:"order1",type:"market",pair:"INR/BTC"}]
  const [openOrders, setOpenOrders] = useState(demoOrders);
  const [orderHistory, setOrderHistory] = useState(demoOrders);
  const [tradeHistory, setTradeHistory] = useState(demoOrders);
  const [trades, setTrades] = useState(demoOrders)

  //Buy-Sell States
  const [orderType, setOrderType] = useState("");




  return (
    <>
    <div className='flex flex-col xl:grid xl:grid-cols-3 gap-2'>
      
      <Box css={{borderColor:violet.violet8}} className="p-3 xl:col-span-2 min-w-96 h-max rounded-xl border">
        Prices
      </Box>
      <Box css={{borderColor:violet.violet8}} className="p-3 min-w-96 h-max rounded-xl border">
        <Tabs css={{width:"inherit"}} className="flex-col" defaultValue="BUY">
          <TabsList>
            <TabsTrigger value="BUY">Buy</TabsTrigger>
            <TabsTrigger value="SELL">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value="BUY">
            <Text>INR Balance:{" 1000 "} INR</Text>
            <Flex className="items-center justify-between">
              <Flex className="items-center">
                <img src={INR?.url} className="h-12 w-12 mr-1" />
                <span>
                  <p className="text-base">At Price</p>
                  <p className="text-sm text-right -mt-1">INR</p>
                </span>
              </Flex>
              <Input css={{maxWidth:"10rem"}} type="number" />
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
              <Input css={{maxWidth:"10rem"}} type="number" />
            </Flex>
            <Flex className="items-center justify-between">
              <Flex className="items-center">
                <img src={INR?.url} className="h-12 w-12 mr-1" />
                <span>
                  <p className="text-base">Total</p>
                  <p className="text-sm text-right -mt-1">INR</p>
                </span>
              </Flex>
              <Input css={{maxWidth:"10rem"}} type="number" />
            </Flex>
            <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
              <Button>Buy Now</Button>
            </Flex>
          </TabsContent>
          <TabsContent value="SELL">
          <Text>INR Balance:{" 1000 "} INR</Text>
            <Flex className="items-center justify-between">
              <Flex className="items-center">
                <img src={INR?.url} className="h-12 w-12 mr-1" />
                <span>
                  <p className="text-base">At Price</p>
                  <p className="text-sm text-right -mt-1">INR</p>
                </span>
              </Flex>
              <Input css={{maxWidth:"10rem"}} type="number" />
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
              <Input css={{maxWidth:"10rem"}} type="number" />
            </Flex>
            <Flex className="items-center justify-between">
              <Flex className="items-center">
                <img src={INR?.url} className="h-12 w-12 mr-1" />
                <span>
                  <p className="text-base">Total</p>
                  <p className="text-sm text-right -mt-1">INR</p>
                </span>
              </Flex>
              <Input css={{maxWidth:"10rem"}} type="number" />
            </Flex>
            <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
              <Button >Sell Now</Button>
            </Flex>
          </TabsContent>
        </Tabs>
      </Box>
      <Box css={{borderColor:violet.violet8}} className="p-3 xl:col-span-2 min-w-96 h-max rounded-xl">
        <Tabs css={{width:"inherit"}} className="flex-col" defaultValue="OPEN_ORDERS">
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
            
                  {openOrders?.map((order)=>{
                  return(
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
                  </tr>)})}
              
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
            
                  {orderHistory?.map((order)=>{
                  return(
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
                  </tr>)})}
              
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
            
                  {tradeHistory?.map((order)=>{
                  return(
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
                  </tr>)})}
              
              </tbody>
            </table>
          </TabsContent>
          <TabsContent value="FUNDS">Funds</TabsContent>
        </Tabs>
      </Box>
      <Box css={{borderColor:violet.violet8}} className="p-3 min-w-96 rounded-xl border">
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
            
                  {openOrders?.map((order)=>{
                  return(
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
                  </tr>)})}
              
              </tbody>
            </table>
      </Box>
    </div>
    </>
  )
}

export default AnimatePage(Index);
