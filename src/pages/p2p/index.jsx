import { MagnifyingGlassIcon, UpdateIcon } from '@radix-ui/react-icons';
import { CocoonSubHeading } from 'components/Cocoon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import { Button, Fieldset, Flex, Input, Label } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import classNames from 'lib/classNames';
import React, { useState } from 'react'

function Index() {

  const coins = ["btc", "eth", "ltc", "bnb", "etc", "tron", "eos"]
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  return (
    <>
      {/* <CocoonSubHeading title="Binance P2P" subtitle="Buy/Sell Your Crypto Locally"/> */}
      <div className="flex flex-col gap-2">

        <Flex className="gap-2 p-2 rounded-full justify-center overflow-x-auto">
          {coins?.map((item, index) => {
            return (
              <div key={item} onClick={() => setSelectedCoin(item)} className={classNames(
                selectedCoin === item
                  ? "bg-blue-800  text-white font-semibold text-lg"
                  : "bg-blue-100 ",
                ' hover:drop-shadow-2xl shadow-xl cursor-pointer hover:bg-blue-600 rounded-full p-2 min-w-24 ')}>
                <p className="text-center ">
                  {item.toUpperCase()}
                </p>
              </div>
            )
          })}
        </Flex>
        <Tabs className='flex-col' defaultValue={"BUY"}>
          <TabsList >

            <TabsTrigger value='BUY'>BUY</TabsTrigger>
            <TabsTrigger value='SELL'>SELL</TabsTrigger>
          </TabsList>
          <TabsContent value='BUY'>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  {/* <Label htmlFor="amount_search">Amount</Label> */}
                  <span className="relative">
                    <Input css={{ paddingInlineEnd: 30 }} id="amount_search" placeholder='Search Amount' className='pr-24' />
                    <MagnifyingGlassIcon className=" mr-1 absolute right-0 top-0 cursor-pointer text-gray-500 w-6 h-6" />
                  </span>
                </div>
                <div>
                  <Button>Refresh <UpdateIcon className="mx-1" /> </Button>
                </div>
              </div>
              <div className="">
                <table className='w-full'>
                  <thead>
                    <tr>
                      <th className="text-left text-base font-semibold text-gray-500 w-3/12">Advertisers</th>
                      <th className="text-left text-base font-semibold text-gray-500 w-1/12">Price</th>
                      <th className="text-left text-base font-semibold text-gray-500 w-3/12">Limit/Available</th>
                      <th className="text-left text-base font-semibold text-gray-500 w-2/12">Payment</th>
                      <th className="text-left text-base font-semibold text-gray-500 w-2/12">Trade</th>
                    </tr>
                    <tr className="border-b border-gray-400">
                      <hr className='my-1 border-none' />
                    </tr>
                  </thead>
                  <tbody>
                    {coins?.map((item) => {
                      return (
                        <>
                          <tr className='h-16'>
                            <td className="pl-2">
                              <div className="flex gap-2">
                                <img src={"/images/profile.png"} className="w-6 h-6 rounded-full" />
                                <p className="text-base font-semibold">SKP Trades</p>
                              </div>
                              <p className="text-base text-gray-500 font-normal">97 orders 100.00% completion</p>
              
                            </td>
                            <td>
                              <p className='text-lg font-semibold'>80.0 INR</p>
                            </td>
                            <td>
                              <div className="flex gap-2">
                                <p className="text-base text-gray-500">Available :</p>
                                <p>5144 USDT</p>
                              </div>
                              <div className="flex gap-2">
                                <p className="text-base text-gray-500">Limit :</p>
                                <p>1000 USDT - 2000 USDT</p>
                              </div>
                            </td>
                            <td>
                              <div className="flex gap-2">
                                <div className="px-2 text-base font-medium text-blue-800 rounded-sm bg-gray-100">UPI</div>
                                <div className="px-2 text-base font-medium text-blue-800 rounded-sm bg-gray-100">IMPS</div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <Button variant="green" >Buy USDT</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <hr className="my-1 border-none" />
                          </tr>
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            Buy
          </TabsContent>
          <TabsContent value='SELL'>
            Sell
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default AnimatePage(Index);
