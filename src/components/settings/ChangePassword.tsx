import { Button, Fieldset, Input, Label } from 'components/styled/ui';
import api from 'lib/http/axios';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

type FormValues = {
	current_password: string;
	new_password: string;
	confirm_password:string;
}

export default function ChangePassword() {
	
	const { user } = useSelector((state:any)=>state.auth)
	const { register, handleSubmit, watch, formState:{errors} } = useForm<FormValues>();
	const password = useRef({});
	password.current = watch("new_password","");

	const changePasswordSubmitHandler: SubmitHandler<FormValues> = async (data_values) => {
		try {
			// console.log(data_values,user);
			const url = "/users/api/v1/user/change-password";
			const payload = {
				email: user?.email,
				current_password: data_values.current_password,
				new_password: data_values.new_password
			}
			const { data: { success, data, error } } = await api.post(url, payload);
			if (success) {
				toast.success(data.message);
			}

		} catch (err) {
			toast.error("Something went wrong.Try again!")
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit(changePasswordSubmitHandler)}>
				<Fieldset>
					<Label htmlFor="current_password" >Current Password</Label>
					<Input id="current_password" {...register("current_password",{
						required: "You must specify a password",
						minLength: {
							value: 6,
							message: "Password must have at least 8 characters"
						}
					})} type="password" placeholder="Enter Current Password" />
					{errors.current_password && <p>{errors.current_password.message}</p>}
				</Fieldset>
				<Fieldset>
					<Label htmlFor="new_password" >New Password</Label>
					<Input id="new_password" {...register("new_password",{
						required: "You must specify a password",
						minLength: {
							value: 8,
							message: "Password must have at least 8 characters"
						}
					})} type="password" placeholder="Enter New Password" />
					{errors.new_password && <p>{errors.new_password.message}</p>}
				</Fieldset>
				<Fieldset>
					<Label htmlFor="confirm_password" >Confirm password</Label>
					<Input id="confirm_password" {...register("confirm_password",{
						required: "You must specify a password",
						minLength: {
							value: 8,
							message: "Password must have at least 8 characters"
						},
						validate:value => value === password.current || "The passwords do not match"
					})} type="password" placeholder="Confirm Password" />
					{errors.confirm_password && <p>{errors.confirm_password.message}</p>}
				</Fieldset>
				<Button>Change Password</Button>
			</form>
		</div>
	)
}
