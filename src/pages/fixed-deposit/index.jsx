import { Box, Button, Flex, Heading3, Input, Text } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import React, { useState } from 'react'
import { violet } from '@radix-ui/colors';
import { coins as AllCoins, coins } from 'assets/coins/coins';
import { upperCase } from 'lodash'
import { Select, SelectTrigger, SelectValue, SelectIcon, SelectContent, SelectViewport, SelectItem, SelectItemIndicator, SelectItemText } from 'components/styled/Select';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import axios from 'axios';
import { updateWalletBalance } from 'store/reducers/walletReducer';

const coinOptions = coins
  .map((item) => {
    return { id: item.id, name: item.name, value: item.name, url: item.url };
  })
  .filter((item) => item.name !== "inr");

function FixedDeposit() {
  let selectedCryptoObj;
  const dispatch = useDispatch();
  const { array: cryptowalletObj } = useSelector(
    (state) => state.wallet.userWallet
  );
  const {
    user
  } = useSelector((state) => state.auth);
  console.log({ cryptowalletObj })

  const [coins, setCoins] = useState(AllCoins);
  const [amount, setAmount] = useState(0)
  const [balanceError, setBalanceError] = useState(false);

  const [formData, setFormData] = useState({
    selectedCoin: coinOptions[0].name,
    inputAmount: "",
    payoutAmount: "",
  });

  // const coinChangeHandler = (e) => {
  //   console.log(e)
  //   const newCoin = coins.filter((coin) => coin.name === e)
  //   setSelectedCoin(newCoin[0]);
  // }
  function interest(amt) {
    console.log(amt);
    console.log({ selectedCryptoObj });
    if (!amt) return 0.0;

    if (amt > Number(selectedCryptoObj?.balance)) {
      console.log("less balance check block");
      setBalanceError(true);
    } else {
      setBalanceError(false);
    }

    let total_days = 30;
    total_days = parseFloat(total_days);

    let interest_rate = 12;
    interest_rate = parseFloat(interest_rate);
    interest_rate = interest_rate / 365;

    let interest = (amt * interest_rate * 1) / 100;
    let total_interest = interest * total_days;
    let amount = amt;

    amount = parseFloat(amount);
    total_interest = total_interest + amount;
    return total_interest.toFixed(5);
  }

  const selectedCryptoIndex = cryptowalletObj?.findIndex(
    (item) => item.crypt_name.toLowerCase() === formData.selectedCoin
  );

  if (selectedCryptoIndex !== -1) {
    selectedCryptoObj = cryptowalletObj && cryptowalletObj[selectedCryptoIndex];
  }
  console.log(formData.selectedCoin)
  console.log({ selectedCryptoIndex })


  const createFixedDeposit = async () => {
    console.log('onSubmit fuction call')
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 30);
    if (balanceError) {
      toast.error("Insufficient Balance");
      return;
    }

    if (!formData.inputAmount || !Number(formData.inputAmount)) {
      toast.error("Enter Valid Amount");
      return;
    }
    console.log(formData, user);
    const payload = {
      amount: formData.inputAmount,
      email: user.email,
      currency: formData.selectedCoin,
      enddate: endDate,
      payoutAmount: formData.payoutAmount,
    };
    console.log(payload);
    const res = await axios.post("http://3.128.190.203:3001/users/create-stake", payload);
    console.log({ res });
    if (res.data.status) {
      toast.success("Money Deposited");
      dispatch(
        updateWalletBalance({
          name: formData.selectedCoin,
          balance: formData.inputAmount,
        })
      );
    }
    if (!res.data.status) {
      toast.error(res.data.message);
    }
  };
  return (
    <>
      <div className="flex lg:grid lg:grid-cols-3 gap-2">
        <Flex css={{ borderColor: violet.violet8 }} className=" flex-col p-2 rounded-xl border">
          <Text>Create Deposit</Text>
          <Flex className="items-center justify-between">
            <Select
              // value={selectedCoin}
              onValueChange={(e) => {
                console.log(e)
                setFormData({
                  ...formData,
                  selectedCoin: e,
                  inputAmount: "",
                  payoutAmount: "",
                });
                setBalanceError(false);
              }}
            // onValueChange={(e) => coinChangeHandler(e)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Coin" />
                {/* <SelectIcon>
                  <ChevronDownIcon />
                </SelectIcon> */}
              </SelectTrigger>
              <SelectContent>
                <SelectViewport>
                  {/* {coins?.map((coin) => <SelectItem key={coin?.id} value={coin?.name}> */}
                  {coinOptions.map((item) => (
                    <SelectItem
                      className="text-uppercase"
                      key={item.id}
                      value={item.value}
                    >
                      <SelectItemText>{item.name}</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectViewport>
              </SelectContent>
            </Select>
            <Input css={{ maxWidth: "12rem" }}
              type="number"
              // value={amount}
              value={formData.inputAmount}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({
                  ...formData,
                  inputAmount: value,
                  payoutAmount: interest(value),
                });
              }} />
          </Flex>
          {balanceError && (
            <p className="text-danger p-0 m-0 ml-1">Insufficient Balance</p>
          )}
          <Flex css={{ marginTop: 20 }} className="justify-between items-center">
            <Text css={{ marginBottom: 0 }}>Duration:</Text>
            <Flex className="gap-1">

              <Button>30</Button>
              <Button>40</Button>
              <Button>50</Button>
              <Button>60</Button>
            </Flex>
          </Flex>
          <Flex css={{ marginTop: 20 }} className="justify-between items-center">
            <Text>Interest Rate:</Text>
            <Heading3>{formData.selectedCoin?.interestMsg || "Please Select Coin"}</Heading3>
          </Flex>
          <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
            <Button
              onClick={() => createFixedDeposit()}
              variant="green">Create Fixed Deposit</Button>
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

export default AnimatePage(FixedDeposit);
