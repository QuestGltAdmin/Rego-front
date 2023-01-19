import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function BasketCard({ StartIcon, title, description }) {
	
	
	return (
		<>
			<div className="border-2 rounded-lg p-6 border-blue-800 group cursor-pointer hover:bg-blue-800">
				<div className="flex" >
					{/* <div>{StartIcon}</div> */}
					<div className="mr-3 " >
						<PlusIcon className="h-8 w-8 text-white  bg-blue-800 group-hover:text-blue-800 group-hover:bg-white rounded-full"/>
					</div>
					<div className="flex flex-col " >
						<div className="font-semibold text-lg group-hover:text-white" >{title}</div>
						<div className="text-base text-gray-500 group-hover:text-gray-200" >{description}</div>
					</div>
				</div>
			</div>
		</>
	)
}
