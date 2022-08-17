import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import AnimatePage from 'HOCs/Animate';
import React, { useState } from 'react'
import { indigo } from '@radix-ui/colors';
import { Box, Flex, Text, Heading3, Fieldset, Input, Label, Button } from 'components/styled/ui'
import ChangePassword from 'components/settings/ChangePassword';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { updateFormSaga } from 'store/reducers/authReducer';

function Index() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log(user);
  const [initialValues, setInitialValues] = useState({
    name: user ? user.name : '',
    country: user ? user.country : '',
    mobile_no: user ? user.mobile_no : '',
    email: user ? user.email : '',
  });
  const [profilePicURL, setProfilePicURL] = useState('');
  const [profilePic, updatePhoto] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().trim().required('Name is required'),
    country: Yup.string().trim().required('Country is required'),
    mobile_no: Yup.number().required(),
    email: Yup.string().email().typeError(''),
  });

  const getImage = evt => {
    const { files } = evt.target;
    if (files[0]) {
      if (files[0].type.includes('image')) {
        const filename = files[0].name;
        const fileExtension = filename.substr(filename.lastIndexOf('.') + 1);
        if (
          fileExtension.toLowerCase() === 'png' ||
          fileExtension.toLowerCase() === 'jpg' ||
          fileExtension.toLowerCase() === 'gif' ||
          fileExtension.toLowerCase() === 'jpeg'
        ) {
          updatePhoto(files[0]);
          setProfilePicURL(URL.createObjectURL(files[0]));
        }
      }
    }
  };

  const submitBtnHandler = values => {
    console.log({ values })

    const formData = {
      full_name: values.name,
      country: values.country,
      mobile_no: values.mobile_no,
      email: values.email,
    }
    if (typeof profilePic === 'object') {
      formData.profile_pic = profilePic;
    }
    console.log({ formData })
    // return;
    dispatch(updateFormSaga({ formData }));
  };

  console.log({ profilePic })
  console.log({ profilePicURL })
  return (
    /**
     * Setting Page Requirements
     * 
     * edit name
     * 
     * 
     */
    <>
      {/* <Box css={{ borderColor: indigo.indigo8 }} className='p-3 rounded-xl h-max border'>
        <Heading3>Settings</Heading3> */}
      <Tabs className="flex-col w-full" defaultValue='PROFILE' >
        <TabsList className="flex gap-5 justify-around">
          <TabsTrigger css={{
            marginBottom: 10,
            padding: 10,
            borderRadius: 6,
            '&:hover': { backgroundColor: indigo.indigo3 },
            justifyContent: "center",
            height: "fit-content",
            maxHeight: "1.5rem",

          }} value="PROFILE">
            <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
              {/* <img src={coin?.url} /> */}
              {/* <coin.url /> */}
              <p className='text-gray-500 text-lg font-semibold'>{"Profile"}</p>
            </Flex>
          </TabsTrigger>
          <TabsTrigger css={{
            marginBottom: 10,
            padding: 10,
            borderRadius: 6,
            '&:hover': { backgroundColor: indigo.indigo3 },
            justifyContent: "center",
            height: "fit-content",
            maxHeight: "1.5rem"

          }} value="SECURITY">
            <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
              {/* <img src={coin?.url} /> */}
              {/* <coin.url /> */}
              <p className='text-gray-500 text-lg font-semibold'>{"Security"}</p>
            </Flex>
          </TabsTrigger>
          <TabsTrigger css={{
            marginBottom: 10,
            padding: 10,
            borderRadius: 6,
            '&:hover': { backgroundColor: indigo.indigo3 },
            justifyContent: "center",
            height: "fit-content",
            maxHeight: "1.5rem"

          }} value="OTHER">
            <Flex css={{ backgroundColor: "transparent" }} className="items-center gap-2 justify-items-start">
              {/* <img src={coin?.url} /> */}
              {/* <coin.url /> */}
              <p className='text-gray-500 text-lg font-semibold'>{"Other"}</p>
            </Flex>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="PROFILE">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              submitBtnHandler(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 max-w-[600px] mx-auto p-4 border border-blue-800 rounded-xl">
                  <div className="sm:flex gap-3">
                    <Fieldset>
                      <Label htmlFor="fullname" >Name</Label>
                      <Input
                        id="fullname"
                        placeholder="Fullname"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={e => {
                          handleChange(e);
                          setInitialValues({
                            ...initialValues,
                            name: e.target.value,
                          });
                        }}
                        onBlur={handleBlur}
                      />
                      <div>
                        {errors.name &&
                          touched.name &&
                          errors.name}
                      </div>
                    </Fieldset>
                    <Fieldset>
                      <Label htmlFor="email" >Email</Label>
                      <Input
                        disabled='true'
                        id="email"
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={e => {
                          handleChange(e);
                          setInitialValues({
                            ...initialValues,
                            email: e.target.value,
                          });
                        }}
                        onBlur={handleBlur}
                      />
                      <div>
                        {errors.email &&
                          touched.email &&
                          errors.email}
                      </div>
                    </Fieldset>
                  </div>
                  <div className="sm:flex gap-3">
                    <Fieldset>
                      <Label htmlFor="phone_no" >Phone Number</Label>
                      <Input
                        id="phone_no"
                        placeholder="Phone Number"
                        type="number"
                        name="mobile_no"
                        value={values.mobile_no}
                        onChange={e => {
                          handleChange(e);
                          setInitialValues({
                            ...initialValues,
                            mobile_no: e.target.value,
                          });
                        }}
                        onBlur={handleBlur}
                      />
                      <div>
                        {errors.mobile_no &&
                          touched.mobile_no &&
                          errors.mobile_no}
                      </div>
                    </Fieldset>
                    <Fieldset>
                      <Label htmlFor="country" >Country</Label>
                      <Input
                        id="country"
                        placeholder="country"
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={e => {
                          handleChange(e);
                          setInitialValues({
                            ...initialValues,
                            country: e.target.value,
                          });
                        }}
                        onBlur={handleBlur}
                      />
                      <div>
                        {errors.country &&
                          touched.country &&
                          errors.country}
                      </div>
                    </Fieldset>
                  </div>
                  <div className="sm:flex items-center w-fit gap-4">
                    <Fieldset>
                      <Label>Preview</Label>
                      {profilePic !== null ? (
                        <img
                          src={
                            profilePicURL !== '' ? profilePicURL : `${profilePic}`
                          }
                          className=" h-24 w-24"
                          alt="user"
                        />
                      ) : (
                        <img
                          src={require("E:/quest glt/Rego ty new/rego-front/src/assets/images/other/profile.png")}
                          className=" h-24 w-24"
                          alt="user"
                        />
                      )}
                      {/* <img src={"/images/profile.png"} className=" h-24 w-24" /> */}
                    </Fieldset>
                    <Fieldset>
                      <Label>Upload Profile Pic</Label>
                      <input
                        type="file"
                        accept="image/x-png ,image/png, image/jpeg, images/gif"
                        onChange={e => getImage(e)}
                        placeholder='Upload' />
                    </Fieldset>
                  </div>
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            )}
          </Formik>
        </TabsContent>
        <TabsContent value="SECURITY">
          <div className="flex flex-col gap-2 max-w-96 mx-auto p-4 border border-blue-800 rounded-xl">
            <ChangePassword />
          </div>
        </TabsContent>
        <TabsContent value="OTHER">
          Other
        </TabsContent>
      </Tabs>
      {/* </Box> */}
    </>
  )
}

export default AnimatePage(Index);