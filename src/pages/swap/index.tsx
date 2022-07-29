import { Box, Flex, Heading2, Heading4, Text } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import React from 'react'

function index() {
  return (
    <Box className=" p-3 w-4/6 mx-auto rounded-xl">
      <Heading4 css={{marginBottom:2}} className="text-center">Bitshares to Tether Price</Heading4>
      <Heading2 className="text-center" >BTS To USDT Converter</Heading2>
      <Flex className="justify-between px-4">
        <Flex className="flex-col">
          <Text css={{marginBottom:2}} className="font-medium">1 BTS equals to</Text>
          <Heading2>0.0002 USDT</Heading2>
        </Flex>
        <Flex className="flex-col">
          <Text css={{marginBottom:2}} className="font-medium text-right">1 USDT equals to</Text>
          <Heading2>0.0002 BTS</Heading2>
        </Flex>
      </Flex>
      Swap
    </Box>
  )
}

export default AnimatePage(index);