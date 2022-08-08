import { Cross2Icon, ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose } from 'components/styled/Dialog'
import { Button,Text, IconButton,Flex } from 'components/styled/ui'
import React from 'react'

export default function BuySellWarningModal() {
	return (
		<>
			<Dialog >
				<DialogTrigger asChild>
					<Button>Show Warning</Button>
				</DialogTrigger>
				<DialogContent className="overflow-auto">
					<div className=""> 

					
					<DialogTitle>
						ATTENTION
					</DialogTitle>
					<DialogDescription>
						Some Description regarding warning!
					</DialogDescription>
					
					<ExclamationTriangleIcon className="mx-auto w-24 h-24 text-red-500 my-2" />
						<Text>
							Trading in Crypto Intruments involves a high degree of risk with potential for both great profits and significant lossess.
						</Text>
						<Text>
							Please be aware that in the event of extreme price movement, there is a chance that all your locaked balance may be liquidated. Before deciding to participate in the crypto Futures market, we advise you to carefully consider your investments objectives, level of experience and risk appetitt.
						</Text>
						<hr />
						<h3 className="my-2 font-semibold">I hereby confirm that i/we do not come under any restricted pr sanctioned list as outlined in the Customer Acceptance Term of the Regoex Policy.</h3>

						<Flex className="justify-center mt-2">

						<Button>I Understand/Agree</Button>
						</Flex>
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
