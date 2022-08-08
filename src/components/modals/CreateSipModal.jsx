import { Separator } from '@radix-ui/react-dropdown-menu'
import { Cross2Icon, LayersIcon, UpdateIcon } from '@radix-ui/react-icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from 'components/styled/Dialog'
import { Button, Heading3, Heading4, Flex, IconButton, Input, Text } from 'components/styled/ui'
import React from 'react'

export default function CreateSipModal() {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
						<Button>Create Sip</Button>
				</DialogTrigger>
				<DialogContent>
					<div className="sm:w-[550px] md:w-[600px] lg:w-[700px] ">

					<DialogTitle asChild>
						<Flex className="items-center gap-2">
						<LayersIcon className="w-8 h-8" />
						Investing in Best Crypto Assets

						</Flex>
					</DialogTitle>
					<DialogDescription>
						Some Description about the product for better understanding
					</DialogDescription>
					{/* <div> */}
						<div className="px-2 h-7 mb-2 bg-indigo-100">
								<p className="text-base">Complete your transaction in 4:47, Before session Expires</p>
						</div>
						<h3 className="font-semibold text-base text-blue-800">Confirm Investment Amount</h3>
						<p className="text-sm">Min. Investment Amount:{" 281.00 "} <a className=" cursor-pointer font-semibold text-base text-blue-800">Learn more</a> </p>
						<div className="flex flex-col md:flex-row gap-4 my-2">
							<div className="flex flex-col gap-2 md:w-1/2">
								<div className="flex gap-1">
									<Input css={{width:24}}  />
									<Input css={{width:24}} />
								</div>
								<div>
									<Text>Next Installment will be due on {`${"May 17,2022"}`}<br/> You can edit anytime</Text>
								</div>
							</div>
							<div className="flex flex-col gap-2 md:w-1/2">
								<div className="flex items-center gap-1">
									<Input type="number" placeholder='Enter Amount' />
									<Button>Confirm Amount</Button>
								</div>
								<div className="flex items-center gap-1">
									<Button>+1000</Button>
									<Button>+2000</Button>
									<Button>+3000</Button>
								</div>
							</div>
						</div>
						<Separator className=" border border-blue-800 my-4" />
						<h3 className="font-semibold text-base text-blue-800">Review Orders</h3>
						<table className='w-full'>
							<thead >
								<tr>
									<th className="text-left text-base font-semibold text-gray-500 w-4/12">Constituents</th>
									<th className="text-left text-base font-semibold text-gray-500 w-2/12">Current Price($)</th>
									<th className="text-left text-base font-semibold text-gray-500 w-2/12">Weights(%)</th>
									<th className="text-left text-base font-semibold text-gray-500 w-2/12">Quantity</th>
									<th className="text-left text-base font-semibold text-gray-500 w-2/12">Order Type</th>
								</tr>
								<tr className="border-b border-gray-400">
								<hr className="my-2 border-none" />
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Nippon India Nifty 50 ETF</td>
									<td>189.5</td>
									<td>67.5</td>
									<td>1</td>
									<td>BUY</td>
								</tr>
								<tr className="border-b border-gray-300">
								<hr className="my-1 border-none" />
								</tr>
								<tr>
									<td>Nippon India Nifty 50 ETF</td>
									<td>189.5</td>
									<td>67.5</td>
									<td>1</td>
									<td>BUY</td>
								</tr>
							</tbody>
						</table>
						<Separator className=" border border-blue-800 my-4" />
						<div className="flex items-center justify-between">
							<div>
							<p className='text-base text-gray-500'>You will invest</p>
							<div className="flex items-center gap-2">

							<p className="text-black font-semibold text-xl ">{"$ 281.00 "}</p>
							<UpdateIcon className="w-4 h-4 text-gray-500" />
							</div>
							</div>
							<Button>Start Monthly Sip</Button>
						</div>
					
					
					{/* </div> */}


					<DialogClose asChild>
					<IconButton>
						<Cross2Icon />
					</IconButton>
					</DialogClose>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}
