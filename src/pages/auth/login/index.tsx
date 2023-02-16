import { Box, Flex, Button, Fieldset, Heading3,Heading2, Input, Label, Text } from 'components/styled/ui'
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blue, violet } from '@radix-ui/colors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginSaga } from 'store/reducers/authReducer';
import { toast } from 'react-toastify';

type FormValues = {
  email: string;
  password: string;
}

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const { register, handleSubmit } = useForm<FormValues>();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  // console.log(isAuthenticated);

  const loginFormSubmitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    dispatch(loginSaga({
      formData: data,
      toast,
    }))
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <Box css={{ borderColor: violet.violet8 }} className="w-full p-3 mx-4 border rounded-xl md:w-1/2 lg:w-1/3" >
        <Heading2 className="text-center">LOGIN</Heading2>

        <Text>Welcome to Rego Exchange</Text>
        <form onSubmit={handleSubmit(loginFormSubmitHandler)}>

          <Fieldset>
            <Label htmlFor="email">Email Address</Label>
            <Input {...register("email")} required id="email" type="email" placeholder="Enter Email Address" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="password">Password</Label>
            <Input {...register("password")} required minLength={6} id="password" type="password" placeholder="Enter Password" />
          </Fieldset>
          <Flex className="justify-center my-4 ">
            <Button type="submit" className="px-4 ">Login</Button>
          </Flex>
        </form>
        <Flex className="gap-x-2">
          <Text>Don't have an account?</Text>
          <Link to="/auth/signup">Signup</Link>
        </Flex>
      </Box>
    </div>
  )
}
