import React, { useState } from 'react'
import AnimatePage from 'HOCs/Animate';
import { Box, Flex, Button, Heading3, Input, Text, Fieldset, Label } from 'components/styled/ui';
import { violet } from '@radix-ui/colors';
import { useSelector } from 'react-redux';
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import ReferralModal from 'components/modals/ReferralModal';
import { ClipboardIcon } from '@radix-ui/react-icons'

function Index() {
  const { user } = useSelector((state) => state.auth);
  const [refferalModel, setRefferalModel] = useState(false);
  console.log("USER", user);



  //Helper Function to handle copying of wallet address
  const handleCopyToClipboard = () => {
    //it'll only work with https
    console.log("depositAddress");
  }


  return (
    <>
      <Box css={{ borderColor: violet.violet8 }} className="p-3 rounded-xl border bg-cover bg-referral-img ">
        <Text css={{ marginBottom: 2 }}>{"Invite Friends &"}</Text>
        <Heading3>{"Start Earning"}</Heading3>
        <Text>Invite a friend to rego and enjoy a lifetime of earnings from their activity.Earn</Text>
        <div className="flex flex-col lg:grid lg:grid-cols-3 p-3 gap-2">
          <div className="lg:col-span-2">
            <div className="flex">
            <div className=" justify-center p-2 w-36 h-36">
                <p className=" text-lg text-center text-blue-800 font-semibold">40%</p>
                <p className="text-sm text-center text-gray-500 font-normal">of their trading fees under pro trading</p>
              </div>
              <div className=" justify-center p-2 w-36 h-36">
                <p className=" text-lg text-center text-blue-800 font-semibold">5%</p>
                <p className="text-sm text-center text-gray-500 font-normal">Of the interest paid out on the assets</p>
              </div>
              <div className=" justify-center p-2 w-36 h-36">
                <p className=" text-lg text-center text-blue-800 font-semibold">5%</p>
                <p className="text-sm text-center text-gray-500 font-normal">Of the interest accured on their loans</p>
              </div>
              
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col justify-center p-2 w-32 h-32 drop-shadow-2xl shadow-xl">
                <p className="text-base text-center text-blue-800 font-semibold">0.00</p>
                <p className="text-sm text-center text-gray-500 font-normal">Total Referral Earnings</p>
              </div>
              <div className="flex flex-col justify-center p-2 w-32 h-32 shadow-xl">
                <p className="text-base text-center text-blue-800 font-semibold">0.00</p>
                <p className="text-sm text-center text-gray-500 font-normal">Total Referred Users</p>
              </div>
              <div className="flex flex-col justify-center p-2 w-32 h-32 shadow-xl">
                <p className="text-base text-center text-blue-800 font-semibold">0.00</p>
                <p className="text-sm text-center text-gray-500 font-normal">Earnings passed on as kickbacks</p>
              </div>
              <div className="flex flex-col justify-center p-2 w-32 h-32 shadow-xl">
                <p className="text-base text-center text-blue-800 font-semibold">0.00</p>
                <p className="text-sm text-center text-gray-500 font-normal">Earning Received As Kickbacks</p>
              </div>
            </div>
          </div>
          <Box css={{ borderColor: violet.violet8 }} className="rounded-xl p-3 border">
            <Flex className='flex-col w-4/5 gap-3 mx-auto'>
              <Heading3 className="text-center">Your Default Campaign</Heading3>
              <Fieldset>
                <Label htmlFor='link' >Link</Label>
                <Input id="link" name="link" readOnly type="text" value={`https://regoex.com/signup?code=${user?.ref_code}`} />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="code" >Code</Label>
                <div className="relative flex ">
                <Input id="code" name="code" readOnly type="text" value={user.ref_code} />
                <ClipboardIcon onClick={() => handleCopyToClipboard()} className="hover:text-blue-800  cursor-pointer absolute h-6 w-6 top-1 right-0 ml-1  "/>
                </div>
              </Fieldset>
              <Button
                onClick={() => {
                  setRefferalModel(true)
                }}>Share</Button>
            </Flex>
          </Box>
        </div>
      </Box>

      {refferalModel && <ReferralModal onClose={() => setRefferalModel(false)} />}
    </>
  )
}

export default AnimatePage(Index);
