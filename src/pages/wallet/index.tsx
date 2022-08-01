import { Fieldset, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import AnimatePage from 'HOCs/Animate';
import React, { useState } from 'react'
import { violet } from '@radix-ui/colors';
import { upperCase } from 'lodash';
import { Box, Text, Flex, Button } from 'components/styled/ui';
import { coins as AllCoins,INR } from 'assets/coins/coins';

function Index() {

  const [coins, setCoins] = useState(AllCoins)
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
        <Box className='p-3 rounded-xl lg:col-span-2 h-max'>
        <Box css={{ borderColor: violet.violet8 }} className="p-2 mb-2 rounded-xl border">
            <table className="w-full">
              <thead>
                <tr style={{ padding: 25 }} className='bg-violet-500'>
                  <th style={{ width: "20%" }} className="text-start" scope="col">Asset Type</th>
                  <th style={{ width: "20%" }} className="text-start" scope="col">Total Balance</th>
                  {/* <th style={{ width: "20%" }} className="text-start" scope="col">Asset Value</th> */}
                  {/* <th style={{ width: "20%" }} className="text-start" scope="col">Interest Earned</th> */}
                  <th style={{ width: "20%" }} className="text-start" scope="col">Actions</th>
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
                      <p>1654647</p>
                    </td>
                    <td>
                      <div className="flex justify-between p-1">
                        <Button variant="green">Buy More</Button>
                      </div>
                    </td>
                  </tr>
              
              </tbody>
            </table>
          </Box>
          <Box css={{ borderColor: violet.violet8 }} className="p-2 rounded-xl border">
            <table className="w-full">
              <thead>
                <tr style={{ padding: 25 }} className='bg-violet-500'>
                  <th style={{ width: "20%" }} className="text-start" scope="col">Asset Type</th>
                  <th style={{ width: "20%" }} className="text-start" scope="col">Total Balance</th>
                  <th style={{ width: "20%" }} className="text-start" scope="col">Asset Value</th>
                  <th style={{ width: "20%" }} className="text-start" scope="col">Interest Earned</th>
                  <th style={{ width: "20%" }} className="text-start" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {coins?.map((item: any) => (
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
                      <p>0.006</p>
                    </td>
                    <td>
                      <p>0.1 BTC</p>
                    </td>
                    <td>
                      <div className="flex justify-between p-1">
                        <Button variant="green">Buy More</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
        <Box css={{}} className="p-3 h-max rounded-xl">
          <Tabs css={{ width: "inherit" }} className="flex-col" defaultValue="DEPOSIT">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="DEPOSIT">Deposit</TabsTrigger>
              <TabsTrigger value="SEND">Send</TabsTrigger>
            </TabsList>
            <TabsContent value="DEPOSIT">
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
            <TabsContent value="SEND">
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
      </div>
    </>
  )
}

export default AnimatePage(Index);
