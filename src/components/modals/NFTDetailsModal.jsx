import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from 'components/styled/Dialog'
import { Button, IconButton } from 'components/styled/ui'
import React from 'react';

export default function NFTDetailsModal({imageSrc="",title="", description="",onClose}) {
  return (
    <>
      <Dialog open={true}>
        {/* <DialogTrigger>
          <Button>
            NFTDetailsModal
          </Button>
        </DialogTrigger> */}
        <DialogContent>
          <DialogTitle>
            {title || "A Dog NFT"}
          </DialogTitle>
          <DialogDescription>
            {description || "A wise man's best friend is a dog."}
          </DialogDescription>
          <div className="flex flex-col justify-center gap-2">
            <div className='aspect-square'>
              <img src={imageSrc||"/rego-logo.png"} className="h-96 w-96" />
            </div>
            <div className="flex justify-between">
              <Button>Save For Later</Button>
              <Button>Buy Now</Button>
            </div>
          </div>
          <DialogClose asChild>
            <IconButton onClick={onClose}>
              <Cross2Icon/>
            </IconButton>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}
