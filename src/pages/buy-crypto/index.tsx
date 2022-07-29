import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import { Flex,Box,Button, Heading3 } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate'
import React from 'react'

function index() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Box className=" p-3 rounded-xl h-max md:col-span-2">
        <Heading3>Market Rate Chart</Heading3>
        <Flex>
          Chart
        </Flex>
      </Box>
      <Box className=" p-3 rounded-xl h-max">
          <Tabs css={{width:"inherit"}} defaultValue="BUY">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="BUY">Buy</TabsTrigger>
              <TabsTrigger value="SELL">Sell</TabsTrigger>
            </TabsList>
            <TabsContent value="BUY">
              Buy
              <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                <Button variant="green">Buy Now</Button>
              </Flex>
            </TabsContent>
            <TabsContent value="SELL">
              
                Sell
                <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                <Button variant="red">Sell Now</Button>
              </Flex>
            </TabsContent>
          </Tabs>

      </Box>
    </div>
  )
}

export default AnimatePage(index);


