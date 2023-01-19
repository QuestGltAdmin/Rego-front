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
					
					<div className=" h-96 w-64 lg:w-96">
						<div className="relative flex items-center " >
							<input className="p-2 pl-10 w-full rounded-full border border-blue-800" placeholder="Rego Search" />
							<MagnifyingGlassIcon className='absolute ml-2 left-0 h-6 w-6 text-gray-400 hover:text-blue-800 cursor-pointer' />
						</div>

					</div>

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
