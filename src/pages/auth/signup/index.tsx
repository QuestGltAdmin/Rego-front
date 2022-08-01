import { Box, Flex, Button, Fieldset, Heading3, Input, Label, Text } from 'components/styled/ui'
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { violet } from '@radix-ui/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { singupSaga } from 'store/reducers/authReducer';



type FormValues = {
  name:string;
  email:string;
  password:string;
  confirmPassword:string;
}

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector((state:any) => state.auth)
  
  const { register, handleSubmit } = useForm<FormValues>();
  
  useEffect(()=>{
    if(isAuthenticated){
      navigate("/dashboard");
    }
  },[isAuthenticated]);


  const signupFormSubmitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    dispatch(singupSaga({values:data,toast:null,navigate}))
  }
  


  return (
    <div className="flex items-center justify-center h-screen">
    <Box css={{borderColor:violet.violet8}} className=" p-3 mx-4 rounded-xl w-full md:w-1/2 lg:w-1/3 border" >
      <Heading3>Signup</Heading3>
      
        <Text>Welcome to Rego Exachange.</Text>

        <form onSubmit={handleSubmit(signupFormSubmitHandler)}>

        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <Input {...register("name")} required id="name" type="text" placeholder="Enter your name" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} required id="email" type="email" placeholder="Enter your email" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Password</Label>
          <Input {...register("password")} required minLength={8} id="passowrd" type="password" placeholder="Enter your password" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input {...register("confirmPassword")} required minLength={8} id="confirmPassword" type="password" placeholder='Confirm your password' />
        </Fieldset>
        <Flex className=" justify-center">
          <Button type="submit" disabled={isLoading} variant="green" className="px-4">Signup</Button>
        </Flex>
        </form>
        <Flex className='gap-x-2'>
        <Text>Already User?</Text>
        <Link to="/auth/login">Login</Link>
        </Flex>
    </Box>
    </div>
  )
}
