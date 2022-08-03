import AnimatePage from 'HOCs/Animate';
import React, { useEffect, useState } from 'react'
import { Box, Button, Fieldset, Flex, Heading2, Input, Label, Text } from "components/styled/ui"
import { Select, SelectTrigger, SelectValue, SelectIcon, SelectContent, SelectViewport, SelectItem, SelectItemIndicator, SelectItemText } from "components/styled/Select"
import { violet } from '@radix-ui/colors';
import { useSelector } from 'react-redux';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import api from 'lib/http/axios';
import docIcon from "assets/images/svg-icons/id-card.svg";



function Index() {
  const { user: { user, kycstatus } } = useSelector((state) => state.auth)
  const [frontImg, setFrontImg] = useState(null);
  const [backImg, setBackImg] = useState(null);
  const [panImg, setPanImg] = useState(null);
  const [kycDetails, setKycDetails] = useState([]);

  const [data, setData] = useState({
    fullname: "",
    dob: "",
    document_type: "PAN",
    pan_number: "",
    country: "",
    frontImgFile: null,
    backImgFile: null,
    panImgFile: null,
  })


  useEffect(() => {
    if (kycstatus) {
      getKycDetails();
    }
  }, [kycstatus])


  const getKycDetails = async () => {
    try {
      const url = "/exchange-getKycData";
      const payload = { email: user?.email }
      const res = await api.post(url, payload);
      if (res.status === 200) {
        setKycDetails(res?.data?.kyc);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const imageUpload = (event, changeState, formKey, setDataFn) => {
    const { files } = event.target;
    if (!files[0]) {
      changeState(null);
      return;
    }

    if (files[0].type.includes("image")) {
      const filename = files[0].name;
      const fileExtension = filename.substr(filename.lastIndexOf(".") + 1);

      if (
        fileExtension.toLowerCase() === "png" ||
        fileExtension.toLowerCase() === "jpg" ||
        fileExtension.toLowerCase() === "gif" ||
        fileExtension.toLowerCase() === "jpeg"
      ) {
        console.log(event.currentTarget.files);
        if (formKey === "front") {
          setDataFn({
            ...data,
            frontImgFile: event.currentTarget.files[0],
          });
        }
        if (formKey === "back") {
          setDataFn({
            ...data,
            backImgFile: event.currentTarget.files[0],
          });
        }
        if (formKey === "pan") {
          setDataFn({
            ...data,
            panImgFile: event.currentTarget.files[0],
          });
        }
        changeState(URL.createObjectURL(files[0]));
      }
    }

  }

  const submitKycHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      const files = [data.frontImgFile,data.backImgFile,data.panImgFile];
      formData.append("email", user?.email);
      formData.append("fullname", data?.fullname);
      formData.append("dob", user?.email);
      formData.append("document_type", user?.email);
      formData.append("pan_number", user?.email);
      formData.append("country", user?.email);
      formData.append("files", files);
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }

      const url = "exchange-kyc"
      const config={headers:{"Content-Type":"multipart/form-data"}}
      const res = api.post(url,formData,config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }


  if (kycstatus) {
    return (
      <Box css={{ borderColor: violet.violet8 }} className="p-3 rounded-xl border">
        <Text>KYC Details has been Submitted.</Text>
        <table className="w-full">
          <thead>
            <tr style={{ padding: 25 }} className='bg-violet-500'>
              <th style={{ width: "5%" }} className="text-start" scope="col">S.No</th>
              <th style={{ width: "25%" }} className="text-start" scope="col">Image</th>
              <th style={{ width: "10%" }} className="text-start" scope="col">Doc Type</th>
              <th style={{ width: "15%" }} className="text-start" scope="col">Doc No.</th>
              <th style={{ width: "15%" }} className="text-start" scope="col">Full Name</th>
              <th style={{ width: "20%" }} className="text-start" scope="col">Date Of Birth</th>
              <th style={{ width: "10%" }} className="text-start" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="hover:bg-violet-100 h-16"
            >
              <td>
                <p>{kycstatus && 1}</p>
              </td>
              <td>
                <img
                  src={kycDetails?.image ?? "Updating Balance...."}
                  alt=""
                  waith={100}
                  style={{ borderRadius: "6px" }}
                />
              </td>
              <td>
                <p>{kycDetails?.document_type}</p>
              </td>
              <td>
                <p>{kycDetails?.document_number}</p>
              </td>
              <td>
                <p>{kycDetails?.fullname}</p>
              </td>
              <td>
                <p>{kycDetails?.dob}</p>
              </td>
              <td>
                <p>{kycDetails?.status}</p>
              </td>
            </tr>

          </tbody>
        </table>
      </Box>
    )
  }




  return (
    <Box css={{ borderColor: violet.violet8 }} className='p-3 rounded-xl border'>
      <form onSubmit={submitKycHandler} >

      
      <Flex className='justify-between items-center'>

      <Heading2>1 Step KYC Process</Heading2>
      <Button variant="green" type="submit" >Submit</Button>
      </Flex>
      {/* <Text css={{marginBottom:0}}>Process Promptly with Automated Verification</Text> */}
      <Text>Upload an identiy document (Passport, Voter ID, Aadhar Card) and a copy of your PAN card.</Text>
        <Box css={{ borderColor: violet.violet10 }} className=" flex flex-col sm:flex-row gap-2 p-2 my-2 rounded-xl border">
          {/* <Flex className="flex-col gap-2"> */}
            <Fieldset>
              <Label>Full Name</Label>
              <Input type="text" required name="fullname" value={data.fullname} onChange={(e) => dataHandler(e)} />
            </Fieldset>
            <Fieldset>
              <Label>Date Of Birth</Label>
              <Input type="date" required name="dob" value={data.dob} onChange={(e) => dataHandler(e)} />
            </Fieldset>
            <Fieldset>
              <Label>Country</Label>
              <Select onValueChange={(e) => setData({...data,country:e})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                    <SelectIcon>
                      <ChevronDownIcon />
                    </SelectIcon>
                  </SelectTrigger>
                  <SelectContent >
                    <SelectViewport css={{width:"100%"}}>
                      <SelectItem value="India">
                        <SelectItemText>India</SelectItemText>
                        <SelectItemIndicator>
                          <CheckIcon />
                        </SelectItemIndicator>
                      </SelectItem>
                      <SelectItem value="Germany">
                        <SelectItemText>Germany</SelectItemText>
                        <SelectItemIndicator>
                          <CheckIcon />
                        </SelectItemIndicator>
                      </SelectItem>
                    </SelectViewport>
                  </SelectContent>
                </Select>
            </Fieldset>
            <Fieldset>
              <Label>Pan Number</Label>
              <Input type="text" required name="pan_number" value={data.pan_number} onChange={(e)=>dataHandler(e)} />
            </Fieldset>
          {/* </Flex> */}
        </Box>
      <Box className="flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-4" >
        <Box css={{ borderColor: violet.violet10 }} className=" p-2 rounded-xl border">
          <Label className="cursor-pointer" htmlFor='panImage'>
            <Text className="text-center font-bold">Upload Pan Card</Text>
            <img
              src={panImg || docIcon}
              className="h-40 w-72 object-cover"
            />
            <input
              type={"file"}
              id="panImage"
              name='pan'
              style={{ display: "none" }}
              onChange={(e) => imageUpload(e, setPanImg, "pan", setData)}
            />
          </Label>
        </Box>
        <Box css={{ borderColor: violet.violet10 }} className=" p-2 rounded-xl border">
          <Label className="cursor-pointer" htmlFor='frontImage'>
            <Text className="text-center font-bold">Upload Address Proof (Front)</Text>
            <img
              src={frontImg || docIcon}
              className="h-40 w-72 object-cover"
            />
            <input
              type={"file"}
              id="frontImage"
              name='front'
              style={{ display: "none" }}
              onChange={(e) => imageUpload(e, setFrontImg, "front", setData)}
            />
          </Label>
        </Box>
        <Box css={{ borderColor: violet.violet10 }} className=" p-2 rounded-xl border">
          <Label className="cursor-pointer" htmlFor='backImage'>
            <Text className="text-center font-bold">Upload Address Proof (Back)</Text>
            <img
              src={backImg || docIcon}
              className="h-40 w-72 object-cover"
            />
            <input
              type={"file"}
              id="backImage"
              name='back'
              style={{ display: "none" }}
              onChange={(e) => imageUpload(e, setBackImg, "back", setData)}
            />
          </Label>
        </Box>
      </Box>
      </form>
    </Box>
  )
}

export default AnimatePage(Index);
