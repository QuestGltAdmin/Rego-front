import { Fieldset, Input, Label, Button, Tabs, TabsContent, TabsList, TabsTrigger} from 'components/styled/Tabs';
import AnimatePage from 'HOCs/Animate';
import React from 'react'
import {Box, Text, Flex} from 'components/styled/ui';

function index() {
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Box className='p-3 rounded-xl md:col-span-2 h-max'>
          hello
        </Box>
        <Box css={{}} className="p-3 h-max rounded-xl">
          <Tabs css={{width:"inherit"}} className="flex-col" defaultValue="DEPOSIT">
            <TabsList aria-label="Manage your account">
              <TabsTrigger className='' value="DEPOSIT">Deposit</TabsTrigger>
              <TabsTrigger value="SEND">Send</TabsTrigger>
            </TabsList>
            <TabsContent value="DEPOSIT">
              <Text>Make changes to your account here. Click save when you're done.</Text>
              <Fieldset>
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </Fieldset>
              <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                <Button variant="green">Save changes</Button>
              </Flex>
            </TabsContent>
            <TabsContent value="SEND">
              <Text>Change your password here. After saving, you'll be logged out.</Text>
              <Fieldset>
                <Label htmlFor="currentPassword">Current password</Label>
                <Input id="currentPassword" type="password" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="newPassword">New password</Label>
                <Input id="newPassword" type="password" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input id="confirmPassword" type="password" />
              </Fieldset>
              <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
                <Button variant="green">Change password</Button>
              </Flex>
            </TabsContent>
          </Tabs>
        </Box>
      </div>
    </>
  )
}

export default AnimatePage(index);
