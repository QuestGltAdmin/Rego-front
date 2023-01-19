import { Box, Flex, Button, Fieldset, Heading2, Input, Label, Text } from 'components/styled/ui'
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { violet } from '@radix-ui/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { singupSaga } from 'store/reducers/authReducer';



type FormValues = {
  name:string;
  email:string;
  phone_no:string;
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
    <Box css={{borderColor:violet.violet8}} className="w-full p-3 mx-4 border rounded-xl md:w-1/2 lg:w-1/3" >
      <Heading2 className="text-center">SIGNUP</Heading2>
      
        <Text>Welcome to Rego Exchange</Text>

        <form onSubmit={handleSubmit(signupFormSubmitHandler)}>

        <Fieldset>
          <Label htmlFor="fullname">Fullname</Label>
          <Input {...register("name")} required id="fullname" type="text" placeholder="Enter Fullname" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} required id="email" type="email" placeholder="Enter Email Address" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="phone_no">Phone Number</Label>
          <Input {...register("phone_no")} required id="phone_no" type="tel" placeholder="Enter Phone Number" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password">Password</Label>
          <Input {...register("password")} required minLength={8} id="passowrd" type="password" placeholder="Enter Password" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input {...register("confirmPassword")} required minLength={8} id="confirmPassword" type="password" placeholder='Confirm Password' />
        </Fieldset>
        <Flex className="justify-center my-4">
          <Button type="submit" disabled={isLoading} className="px-4">Signup</Button>
        </Flex>
        </form>
        <Flex className='gap-x-2'>
        <Text>Already have an acount?</Text>
        {/* <Link to="/auth/login">Login</Link> */}
        <Link to="/">Login</Link>
        </Flex>
    </Box>
    </div>
  )
}
