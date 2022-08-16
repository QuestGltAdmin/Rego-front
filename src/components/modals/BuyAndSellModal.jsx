import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from 'components/styled/Dialog'
import { IconButton, Button } from 'components/styled/ui'
import React from 'react'

export default function BuyAndSellModal({ type, currency="USDT" }) {

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant={type==="BUY"?"green":"red"} >{type === "SELL" && `Sell ${currency.toUpperCase()}`}{type === "BUY" && `Buy ${currency.toUpperCase()}`}</Button>
					
				</DialogTrigger>
				<DialogContent>
					<DialogTitle>
						{type === "BUY" && `Buy ${currency.toUpperCase()}`}
						{type === "SELL" && `Sell ${currency.toUpperCase()}`}
					</DialogTitle>
					<DialogDescription>
						{type=== "BUY" && "Buying P2P is crazy"}
						{type=== "SELL" && `Selling P2P is crazy`}
					</DialogDescription>


					<DialogClose asChild>
						<IconButton>
							<Cross2Icon />
						</IconButton>
					</DialogClose>
				</DialogContent>
			</Dialog>
		</>
	)
}
