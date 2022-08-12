import { Button, Fieldset, Heading3, Input, Label, Textarea } from 'components/styled/ui'
import React from 'react'

export default function index() {
  return (
    /**
     * What we need in support page
     * Support form
     * 
     */
    <>
    {/* Support page ui goes here */}
    <div className="flex flex-col p-3 justify-center mt-6 border bg-white border-blue-800 rounded-lg w-96 mx-auto">
      <>
      <Heading3 className="text-center">Support</Heading3>
      <Fieldset>
        <Label htmlFor="support_subject" >Subject</Label>
        <Input id="support_subject" placeholder="Enter Subject" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="support_description">Description</Label>
        <Textarea className="p-2" rows={6} cols={50} placeholder='Explain about your issue in detail.' />
      </Fieldset>
      <Button>Submit</Button>
      </>
    </div>
    </>
  )
}
