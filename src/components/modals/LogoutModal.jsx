import { Cross1Icon } from '@radix-ui/react-icons'
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from 'components/styled/Dialog'
import { Button, IconButton } from 'components/styled/ui'
import React from 'react'

export default function LogoutModal({onClose,onLogout}) {
  return (
    <Dialog open={true}>
      <DialogContent>
        <div className="w-76">

        <DialogTitle>
          Logging Out!!
      
        </DialogTitle>
        <DialogDescription>
          Are you sure, want to Log Out?
        </DialogDescription>
        <div className="flex items-center justify-around gap-4">
          
        <Button css={{width:120}} onClick={()=>onLogout()}>Yes</Button>
        <Button css={{width:120}} className onClick={()=>onClose()}>No</Button>
        </div>
        <DialogClose asChild>

        <IconButton onClick={()=>onClose()}>
          <Cross1Icon/>
        </IconButton>
        </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
