import { Box } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import React from 'react'

function index() {
  return (
    <div className="flex md:grid grid-cols-3 gap-5">
      <Box className="p-3 rounded-xl col-span-2">
      Basket Sip

      </Box>
      <Box className="p-3 rounded-xl">
        Sip
      </Box>
    </div>
  )
}

export default AnimatePage(index);
