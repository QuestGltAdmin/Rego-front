import { Cross1Icon } from '@radix-ui/react-icons'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from 'components/styled/Dialog'
import { Button, IconButton } from 'components/styled/ui'
import React from 'react'

export default function LogoutModal({onClose,onLogout}) {
  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogTitle>
      <div>

          Logging Out!!
      </div>
        </DialogTitle>
        <DialogDescription>
          Are you sure, want to Log Out?
        </DialogDescription>
        <div className="flex items-center justify-around">
          
        <Button css={{width:120}} onClick={()=>onLogout()}>Yes</Button>
        <Button css={{width:120}} className onClick={()=>onClose()}>No</Button>
        </div>
        <IconButton onClick={()=>onClose()}>
          <Cross1Icon/>
        </IconButton>
      </DialogContent>
    </Dialog>
  )
}
