import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from 'components/styled/Dialog'
import { IconButton } from 'components/styled/ui'
import React from 'react'

export default function SearchModal() {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<MagnifyingGlassIcon className='h-6 w-6 text-gray-400 hover:text-blue-800 cursor-pointer' />
				</DialogTrigger>
				<DialogContent>
					<DialogTitle>
						Rego Search
					</DialogTitle>
					<DialogDescription>
						You can search anything here.
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
