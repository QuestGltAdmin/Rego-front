import { Fieldset, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import AnimatePage from 'HOCs/Animate';
import React, { useEffect, useState } from 'react'
import { violet } from '@radix-ui/colors';
import { upperCase } from 'lodash';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text, Flex, Button } from 'components/styled/ui';
import { coins as AllCoins, INR } from 'assets/coins/coins';
import { getWalletSaga, updateWalletBalance } from 'store/reducers/walletReducer';

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { InrwalletObj, array: cryptowalletObj } = useSelector((state) => state.wallet.userWallet);


  const [coins, setCoins] = useState(AllCoins);

  //Selected Coin State
  const [selectedCoin, setSelectedCoin] = useState();


  // useEffect(()=>{
  //   if(user?.user?.email){
  //     getWalletData()
  //   }
  // },[])


  //Dispatch Saga to get wallet Data
  const getWalletData = () => {
    try {
      const payload = { email: user?.user?.email };
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

  // console.log(user, cryptowalletObj)

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
                    <p>{user?.balance ?? "Updating Balance...."}</p>
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
                  <th style={{ width: "30%" }} className="text-start" scope="col">Total Balance</th>
                  <th style={{ width: "25%" }} className="text-start" scope="col">Asset Value</th>
                  <th style={{ width: "25%" }} className="text-start" scope="col">Interest Earned</th>
                  {/* <th style={{ width: "20%" }} className="text-start" scope="col">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {user?.cryptoWallet?.map((item) => (
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
                    {/* <td>
                      <div className="flex justify-between p-1">
                        <Button variant="green">Buy More</Button>
                      </div>
                    </td> */}
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
