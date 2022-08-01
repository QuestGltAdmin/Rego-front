import { Box, Flex, Button, Fieldset, Heading3, Input, Label, Text } from 'components/styled/ui'
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blue, violet } from '@radix-ui/colors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginSaga } from 'store/reducers/authReducer';


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
    }))
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <Box css={{ borderColor: violet.violet8 }} className=" p-3 mx-4 rounded-xl w-full md:w-1/2 lg:w-1/3 border" >
        <Heading3>Login</Heading3>

        <Text>Welcome to Rego Exachange.</Text>
        <form onSubmit={handleSubmit(loginFormSubmitHandler)}>

          <Fieldset>
            <Label htmlFor="email">Email or Username</Label>
            <Input {...register("email")} required id="email" type="email" placeholder="Enter your email" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="password">Password</Label>
            <Input {...register("password")} required minLength={6} id="password" type="password" placeholder="Enter your password" />
          </Fieldset>
          <Flex className=" justify-center">
            <Button type="submit" variant="green" className="px-4 ">Login</Button>
          </Flex>
        </form>
        <Flex className="gap-x-2">
          <Text>New User?</Text>
          <Link to="/auth/signup">Signup</Link>
        </Flex>
      </Box>
    </div>
  )
}
