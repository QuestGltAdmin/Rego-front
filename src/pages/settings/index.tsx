import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import AnimatePage from 'HOCs/Animate';
import React from 'react'
import { indigo } from '@radix-ui/colors';
import { Box, Flex, Text, Heading3, Fieldset, Input, Label, Button } from 'components/styled/ui'
import ChangePassword from 'components/settings/ChangePassword';

function Index() {
  return (
    /**
     * Setting Page Requirements
     * 
     * edit name
     * 
     * 
     */
    <>
      {/* <Box css={{ borderColor: indigo.indigo8 }} className='p-3 rounded-xl h-max border'>
        <Heading3>Settings</Heading3> */}
        <Tabs className="flex-col w-full" defaultValue='PROFILE' >
          <TabsList className="flex gap-5 justify-around">
            <TabsTrigger css={{
              marginBottom: 10,
              padding: 10,
              borderRadius: 6,
              '&:hover': { backgroundColor: indigo.indigo3 },
              justifyContent: "center",
              height: "fit-content",
              maxHeight: "1.5rem",

            }} value="PROFILE">
              <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
                {/* <img src={coin?.url} /> */}
                {/* <coin.url /> */}
                <p className='text-gray-500 text-lg font-semibold'>{"Profile"}</p>
              </Flex>
            </TabsTrigger>
            <TabsTrigger css={{
              marginBottom: 10,
              padding: 10,
              borderRadius: 6,
              '&:hover': { backgroundColor: indigo.indigo3 },
              justifyContent: "center",
              height: "fit-content",
              maxHeight: "1.5rem"

            }} value="SECURITY">
              <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
                {/* <img src={coin?.url} /> */}
                {/* <coin.url /> */}
                <p className='text-gray-500 text-lg font-semibold'>{"Security"}</p>
              </Flex>
            </TabsTrigger>
            <TabsTrigger css={{
              marginBottom: 10,
              padding: 10,
              borderRadius: 6,
              '&:hover': { backgroundColor: indigo.indigo3 },
              justifyContent: "center",
              height: "fit-content",
              maxHeight: "1.5rem"

            }} value="OTHER">
              <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
                {/* <img src={coin?.url} /> */}
                {/* <coin.url /> */}
                <p className='text-gray-500 text-lg font-semibold'>{"Other"}</p>
              </Flex>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="PROFILE">
            <div className="flex flex-col gap-2 max-w-[600px] mx-auto p-4 border border-blue-800 rounded-xl">
              <div className="sm:flex gap-3">
                <Fieldset>
                  <Label htmlFor="fullname" >Name</Label>
                  <Input id="fullname" placeholder="Fullname" />
                </Fieldset>
                <Fieldset>
                  <Label htmlFor="email" >Email</Label>
                  <Input id="email" placeholder="Email" />
                </Fieldset>
              </div>
              <Fieldset>
                <Label htmlFor="phone_no" >Phone Number</Label>
                <Input id="phone_no" placeholder="Phone Number" />
              </Fieldset>
              <div className="sm:flex items-center w-fit gap-4">
                <Fieldset>
                  <Label>Preview</Label>
                  <img src={"/images/profile.png"} className=" h-24 w-24" />
                </Fieldset>
                <Fieldset>
                  <Label>Upload Profile Pic</Label>
                  <input type="file" placeholder='Upload' />
                </Fieldset>
              </div>
              <Button>Save Changes</Button>
            </div>
          </TabsContent>
          <TabsContent value="SECURITY">
            <div className="flex flex-col gap-2 max-w-96 mx-auto p-4 border border-blue-800 rounded-xl">
              <ChangePassword/>
            </div>
          </TabsContent>
          <TabsContent value="OTHER">
            Other
          </TabsContent>
        </Tabs>
      {/* </Box> */}
    </>
  )
}

export default AnimatePage(Index);