import { Box, Flex, Button, Fieldset, Heading3, Input, Label, Text } from 'components/styled/ui'
import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div className="flex items-center justify-center h-screen">
    <Box className=" p-3 mx-4 rounded-xl w-full md:w-1/2 lg:w-1/3" >
      <Heading3>Signup</Heading3>
      
        <Text>Welcome to Rego Exachange.</Text>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Password</Label>
          <Input id="passowrd" type="password" placeholder="Enter your password" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <Input id="confirm_password" type="password" placeholder='Confirm your password' />
        </Fieldset>
        <Flex className=" justify-center">
          <Button variant="green" className="px-4">Signup</Button>
        </Flex>
        <Flex className='gap-x-2'>
        <Text>Already User?</Text>
        <Link to="/auth/login">Login</Link>
        </Flex>
    </Box>
    </div>
  )
}
