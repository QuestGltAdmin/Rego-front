import { Cross2Icon } from '@radix-ui/react-icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from 'components/styled/Dialog'
import { Button, IconButton } from 'components/styled/ui'
import React from 'react'

export default function BlogAndNewsModal() {
  return (
    <>
      <Dialog>
        {/* If we use this by passing a trigger component from parent than overlay trigger works */}
        {/* Or we can use normally using callback function as a prop */}
        <DialogTrigger asChild>
          <Button>BlogAndNews Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
            BlogAndNewsModal
          </DialogTitle>
          {/* Description goes here */}
          <DialogDescription>
            Some Descriptiton about the blog
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
