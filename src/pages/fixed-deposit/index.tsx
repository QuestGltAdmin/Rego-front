import { Box, Button } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import React, { useState } from 'react'
import { violet } from '@radix-ui/colors';
import { coins as AllCoins } from 'assets/coins/coins';
import { upperCase } from 'lodash'


function Index() {

  const [coins, setCoins] = useState(AllCoins);


  return (
    <Box css={{ borderColor: violet.violet8 }} className="p-2 rounded-xl border">
      <table className="w-full">
        <thead>
          <tr style={{padding:25}} className='bg-violet-500'>
            <th style={{ width: "25%" }} className="text-start" scope="col">Token</th>
            <th style={{ width: "20%" }} className="text-start" scope="col">Est. APY</th>
            <th style={{ width: "30%" }} className="text-start" scope="col">Duration(days)</th>
            <th style={{ width: "25%" }} className="text-start" scope="col">Minimum Locked Amount</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((item: any) => (
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
  )
}

export default AnimatePage(Index);
