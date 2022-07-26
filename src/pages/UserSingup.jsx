import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { singupSaga } from '../store/reducers/authReducer';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function UserSingup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector(state => state.auth)
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email().typeError('Enter Valid Email id').required('Email id is required'),
        password: Yup.string()
            .matches("(?=.*?[A-Z])", "Must Contain One Uppercase",)
            .matches("(?=.*?[0-9])", "Must Contain One Number",)
            .matches("(?=.*?[#?!@$%^&*-])", "Must Contain Special Character",)
            .matches(".{8,}", "Minimum 8 Character",)
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password does not matched")
            .required("Confirm Password is required"),
    });
                       
    const submitBtnHandler = (values) => {
        dispatch(singupSaga({ values, toast, navigate }))  
    }
    return (

        <>         
        <section id='sign_up_sec'>
            <Formik
                initialValues={{
                    name: '',
                    email: '', 
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    submitBtnHandler(values);
                    console.log(values)
                }}
            >  
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    // isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                              <div className="col-md-6">
                                    <div className="card px-5 py-5 signup_form_box" id="form1">
                                        <h2 className='sign_up_head'>Welcome to Exchange</h2>
                                        <h2 className='sign_up_sign'>Sign Up</h2>
                                        <div className="form-data">
                                            <div className="forms-inputs mb-4">
                                                <span>Name</span>
                                                <input  
                                                    type="name"
                                                    placeholder="Enter Name"
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />  
                                                <div className="error-message">
                                                    {errors.name && touched.name && errors.name}
                                                </div>
                                            </div>           
                                            <div className="forms-inputs mb-4">
                                                <span>Email</span>
                                                <input
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                             />
                                                <div className="error-message">
                                             {errors.email && touched.email && errors.email}
                                                </div>
                                            </div>
                                            <div className="forms-inputs mb-4">
                                                <span>Password</span>
                                                <input
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <div className="error-message">
                                                    {errors.password && touched.password && errors.password}
                                                </div>
                                            </div>
                                            <div className="forms-inputs mb-4">
                                                <span>Confirm Password</span>
                                                <input
                                                    type="password"
                                                    placeholder="Enter Confirm Password"
                                                    name="confirmPassword"
                                                    value={values.confirmPassword}
                                                    onChange={handleChange} 
                                                    onBlur={handleBlur}
                                                />
                                                <div className="error-message">
                                                    {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button
                                                    className="btn signup_btn w-100"
                                                    type='submit'
                                                    disabled={isLoading}
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                            <span >
                                                <span>Already User ?</span>
                                                <span> 
                                                    <Link to="/" style={{ textDecoration: 'none',color:"#1a3390" ,fontWeight:"bold" }}>
                                                       &nbsp; Login
                                                    </Link>            
                                                </span>
                                            </span>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
            </section>
        </>
    )
}

export default UserSingup