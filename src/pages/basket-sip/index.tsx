import { MagnifyingGlassIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import BasketCard from 'components/basket_sip/BasketCard';
import { Box, Button, Input, Text } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import React from 'react'

function Index() {

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5">
      <Box className="p-3 rounded-xl">
        <div className='flex flex-col sm:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2'>

          {Array.of(1, 2, 3, 4, 5, 6).map((item) => {
            return <BasketCard StartIcon={PlusCircledIcon} title={"Create Your basket"} description={"basket description"} />
          })}

        </div>

      </Box>
      <Box className="p-3 rounded-xl">
        <div className="flex flex-col gap-y-2 lg:gap-y-4">

          <h3 className='text-lg text-blue-800 font-semibold'>⬅ Create New SIP</h3>
          <div className="flex justify-around">
            {Array.of(1, 2, 3, 4, 5, 6).map((item) => {
              return <div className="bg-gray-200 rounded-full h-10 w-10 "></div>
            })}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h3 className="text-lg text-blue-800 font-semibold">Select your tokens</h3>
            <div className="relative items-center flex gap-2">
              <Input css={{ paddingInlineStart: 30 }} type="text" placeholder='Search Tokens' />
              <MagnifyingGlassIcon className="absolute text-gray-500 ml-1 left-0 w-6 h-6" />
            </div>
          </div>

          <div className="flex justify-around flex-wrap gap-5">
          {Array(16).fill("a").map((item) => {
              return (
                <div>
                  <div className="bg-gray-200 rounded-full h-12 w-12 "></div>
                  <p className="text-center">Text</p>
                </div>
              )
            })}
          </div>

          <div className="flex justify-end">
            <Button>Create Allocation</Button>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default AnimatePage(Index);
