import React from 'react'
import AnimatePage from 'HOCs/Animate';
import { Box, Flex, Button, Heading3, Input, Text, Fieldset, Label } from 'components/styled/ui';
import { violet } from '@radix-ui/colors';


function Index() {
  return (
    <Box css={{borderColor:violet.violet8}} className="p-3 rounded-xl border">
        <Text css={{marginBottom:2}}>{"Invite Friends &"}</Text>
        <Heading3>{"Start Earning"}</Heading3>
        <Text>Invite a friend to rego and enjoy a lifetime of earnings from their activity.Earn</Text>
        <div className="flex flex-col lg:grid lg:grid-cols-3 p-3 gap-2">
        <div className="lg:col-span-2">Data</div>
        <Box css={{borderColor:violet.violet8}} className="rounded-xl p-3 border">
            <Flex  className='flex-col w-4/5 gap-3 mx-auto'>

            <Heading3 className="text-center">Your Default Campaign</Heading3>
            <Fieldset>
            <Label htmlFor='link' >Link</Label>
            <Input id="link" name="link" type="text" />
            </Fieldset>
            <Fieldset>
            <Label htmlFor="code" >Code</Label>
            <Input id="code" name="code" type="text" />
            </Fieldset>
            <Button>Share</Button>
            </Flex>
        </Box>
        </div>
    </Box>
  )
}

export default AnimatePage(Index);
