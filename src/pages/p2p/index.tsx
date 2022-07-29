import { CocoonSubHeading } from 'components/Cocoon';
import AnimatePage from 'HOCs/Animate';
import React from 'react'

function index() {
  return (
    <>
    <CocoonSubHeading title="Binance P2P" subtitle="Buy/Sell Your Crypto Locally"/>
      P2P 
    </>
  )
}

export default AnimatePage(index);
