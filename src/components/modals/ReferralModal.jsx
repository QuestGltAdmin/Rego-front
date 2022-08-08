import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from 'components/styled/Dialog'
import React from 'react'
import { IconButton } from 'components/styled/ui'
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

export default function ReferralModal({ onClose }) {
	return (
		<>
			<Dialog open={true}>
				<DialogContent>
					<DialogTitle>
						Share And Refer ...
					</DialogTitle>
					<DialogDescription>
						Some Description is required here.
					</DialogDescription>
					<div className="flex items-center gap-3">
						<FacebookShareButton
							url={'https://www.facebook.com/login/'}
							quote={'Facebook'}
						>
							<FacebookIcon size={40} round={true} onClick={() => onClose()} />
						</FacebookShareButton>
						<WhatsappShareButton
							url={'https://web.whatsapp.com/'}
						>
							<WhatsappIcon size={40} round={true} onClick={() => onClose()} />
						</WhatsappShareButton>
					</div>

					{/* <DialogClose > */}
					<IconButton onClick={() => onClose()} aria-label="Close">

						<Cross2Icon />
					</IconButton>
					{/* </DialogClose> */}
				</DialogContent>
			</Dialog>
		</>
	)
}
