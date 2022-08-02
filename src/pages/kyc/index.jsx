import AnimatePage from 'HOCs/Animate';
import React from 'react'
import { Box, Text } from "components/styled/ui"
import { violet } from '@radix-ui/colors';

function index() {
  return (
    <Box css={{borderColor:violet.violet8}} className='p-3 rounded-xl border'>
      
    </Box>
  )
}

export default AnimatePage(index);
