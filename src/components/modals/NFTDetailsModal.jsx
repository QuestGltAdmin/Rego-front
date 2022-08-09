import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from 'components/styled/Dialog'
import { Button, IconButton } from 'components/styled/ui'
import React from 'react'

export default function NFTDetailsModal() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>
            NFTDetailsModal
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
            A Dog NFT
          </DialogTitle>
          <DialogDescription>
            A wise man's best friend is a dog.
          </DialogDescription>

          <DialogClose asChild>
            <IconButton>
              <Cross2Icon/>
            </IconButton>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}
