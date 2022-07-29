import AnimatePage from 'HOCs/Animate'
import React from 'react'
import {Box, Flex, Text, Label, Fieldset, Input, Button, Heading3} from 'components/styled/ui'
import { Tabs, TabsList, TabsContent, TabsTrigger } from 'components/styled/Tabs'
import classNames from 'lib/classNames'

function index() {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6">

      {/* First Box */}
      <Box className="p-3 rounded-xl h-max">
        <Flex className="flex-col">
          <Heading3>Total Asset Value</Heading3>
          <Box className='grid grid-cols-2 gap-4 rounded-xl p-3'>
            <Flex className="flex-col items-center">
              <div className='font-bold text-xl text-gray-700'>$ 1000</div>
              <Text className="font-medium">Current Value</Text>
            </Flex>
            <Flex className="flex-col items-center">
              <div className='font-bold text-xl text-gray-700'>$ 1000</div>
              <Text className="font-medium">Total Invested</Text>
            </Flex>
            <Flex className="flex-col items-center">
              <div className={classNames('font-bold text-xl text-gray-700')}>$ 1000</div>
              <Text css={{color:"LimeGreen"}} className="font-medium ">Total Returns</Text>
            </Flex>
            <Flex className="flex-col items-center">
              <div className={classNames('font-bold text-xl text-gray-700')}>$ 1000</div>
              <Text css={{color:"LimeGreen"}} className="font-medium">Gain / Loss</Text>
            </Flex>
          </Box>

          <Box className="p-3 rounded-xl mt-4">
            Table
          </Box>

        </Flex>
      </Box>

      {/* Second Box */}
      <Box className="p-2 rounded-xl h-max">
        <Flex className="flex-col">
        <Heading3>NFTs</Heading3>
        </Flex>
      </Box>

      {/* Third Box */}
      <Box className="p-2 rounded-xl h-max">
        <Flex className="flex-col">
        <Heading3>Market</Heading3>
        <Box css={{}} className="rounded-xl" >
          <Tabs css={{width:"inherit"}} defaultValue="GAINERS">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="GAINERS">Top Gainers</TabsTrigger>
              <TabsTrigger value="LOSERS">Top Losers</TabsTrigger>
            </TabsList>
            <TabsContent value="GAINERS">
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
            <TabsContent value="LOSERS">
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
        </Flex>
      </Box>
      </div>
    </div>
  )
}

export default AnimatePage(index)
