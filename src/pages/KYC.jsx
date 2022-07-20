import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import kycIcon from "../assets/images/svg-icons/KYC_s2.svg";
import docIcon from "../assets/images/svg-icons/id-card.svg";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const KYC = () => {
  const {
    user: { user, kycstatus },
  } = useSelector((state) => state.auth);

  const [frontImg, setFrontImg] = useState(null);
  const [backImg, setBackImg] = useState(null);
  const [panImg, setPanImg] = useState(null);
  const [kycDetails, setKycDetails] = useState([]);

  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    document_type: "PAN",
    pan_number: "",
    country: "",
    frontImgFile: null,
    backImgFile: null,
    panImgFile: null,
  }); 

  const {
    fullname,
    dob,
    pan_number,
    document_type,
    frontImgFile,
    backImgFile,
    panImgFile,
    country,
  } = formData;

  const formInputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 


  const imageUpload = (event, changeState, formKey, setFormDataFn) => {
    const { files } = event.target;
    if (files[0]) {
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
            setFormDataFn({
              ...formData,
              frontImgFile: event.currentTarget.files[0],
            });
          }   
          if (formKey === "back") {
            setFormDataFn({
              ...formData,
              backImgFile: event.currentTarget.files[0],
            });
          }
          if (formKey === "pan") {
            setFormDataFn({
              ...formData,
              panImgFile: event.currentTarget.files[0],
            });
          }
          changeState(URL.createObjectURL(files[0]));
        }
      }
    } else {
      changeState(null);
    }
  };

  const submitKYC = async () => {
    console.log("submit")
    const formDataToSubmit = new FormData();
    const files = [];

    files.push(frontImgFile);
    files.push(backImgFile);
    files.push(panImgFile);

    formDataToSubmit.append("email", user.email);
    formDataToSubmit.append("fullname", fullname);
    formDataToSubmit.append("dob", dob);
    formDataToSubmit.append("document_type", document_type);
    formDataToSubmit.append("pan_number", pan_number);
    formDataToSubmit.append("country", country);

    for (let i = 0; i < files.length; i++) {
      formDataToSubmit.append("file", files[i]);
    }

    const res = await axios.post(
      "https://regoex.com/exchange-kyc",
      formDataToSubmit
    );
    console.log({res})
    if (res.data.status) {
      toast(res.data.message, {
        autoClose: 1500,
        pauseOnHover: false,
      })
      console.log(res.data);
    } else {
      toast(res.data.message, {
        autoClose: 1500,
        pauseOnHover: false,
      })
    }
  };

  const getKycDetails = async () => {
    const res = await axios.post("https://regoex.com/exchange-getKycData", {
      email: user.email,
    });

    if (res.status === 200) {
      setKycDetails(res.data.kyc);
    }
  };

  useEffect(() => {
    if (kycstatus) {
      getKycDetails();
    }
  }, [kycstatus]);

  if (kycstatus) {
    return (
      <div className="row">
        <div className="col-lg-12 ">kyc Details Has Been Submitted </div>
        <div className="col-lg-12 shadow-inner p-0">
          <div className="card-body table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="border-top-0">S.No</th>
                  <th className="border-top-0">Image</th>
                  <th className="border-top-0"> Doc Type</th>
                  <th className="border-top-0">Doc No.</th>
                  <th className="border-top-0">Full Name</th>

                  <th className="border-top-0">Date Of Birth</th>

                  <th className="border-top-0">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-top-0">{kycstatus && 1}</td>
                  <td className="border-top-0">
                    <img
                      src={`http://regoex.com/kyc/${kycDetails?.image}`}
                      alt=""
                      width={100}
                      style={{ borderRadius: "6px" }}
                    />
                  </td>
                  <td className="border-top-0">{kycDetails.document_type}</td>
                  <td className="border-top-0">{kycDetails.document_number}</td>
                  <td className="border-top-0">{kycDetails.fullname}</td>

                  <td className="border-top-0">{kycDetails.dob}</td>

                  <td className="border-top-0">{kycDetails.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-7 border">
        <div
          className="col-span-2"
          style={{ height: "530px", borderRight: "1px solid lightgray" }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <img src={kycIcon} height={100} width={100} />
            <div className="font-h4 color-secondary-dark mt-6 text-center">
              Upload an identiy document (Passport, Voter ID, Aadhar Card) and a
              copy of your PAN card
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="heading px-5 py-4">
            <div className="font-h4 color-secondary-dark mt-2">
              1 Step KYC Process
            </div>
            <span className="font-h5 color-secondary-hint mt-3">
              Process Promptly With Automated Verification
            </span>
          </div>
          <div className="document-images">
            <div className="row px-5 py-2">
              <div className="col-lg-4 justify-center h-40 w-40">
                <label className="mb-4">Upload PAN Card</label>
                <div className="form-control !flex items-center justify-center">
                  <label htmlFor="frontImage">
                    <div>
                      <img
                        src={frontImg || docIcon}
                        style={{
                          width: "298px",
                          height: "160px",
                          background: "object-fit",
                        }}
                      />
                      <input
                        type="file"
                        id="frontImage"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          imageUpload(e, setFrontImg, "front", setFormData)
                        }
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="col-lg-4  justify-center h-40 w-40">
                <label className="mb-4">
                  Upload Address Proof (Front Image)
                </label>
                <div className="form-control !flex items-center justify-center">
                  <label htmlFor="backImage">
                    <div>
                      <img
                        src={backImg || docIcon}
                        style={{
                          width: "298px",
                          height: "160px",
                          background: "object-fit",
                        }}
                      />
                      <input
                        type="file"
                        id="backImage"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          imageUpload(e, setBackImg, "back", setFormData)
                        }
                      />
                    </div>
                  </label>
                </div>{" "}
              </div>
              <div className="col-lg-4  justify-center h-40 w-40">
                <label className="mb-4">
                  Upload Address Proof (Back Image)
                </label>
                <div className="form-control !flex items-center justify-center">
                  <label htmlFor="pancard">
                    <div>
                      <img
                        src={panImg || docIcon}
                        style={{
                          width: "298px",
                          height: "160px",
                          background: "object-fit",
                        }}
                      />
                      <input
                        type="file"
                        id="pancard"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          imageUpload(e, setPanImg, "pan", setFormData)
                        }
                      />
                    </div>
                  </label>
                </div>{" "}
              </div>
            </div>
            <div className="row px-5 py-2" style={{ marginTop: "80px" }}>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    onChange={(e) => formInputHandler(e)}
                    value={fullname}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Date Of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    onChange={(e) => formInputHandler(e)}
                    value={dob}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Country</label>
                  <div className="box">
                    <select
                      className="form-control"
                      name="country"
                      id=""
                      value={country}
                      onChange={(e) => formInputHandler(e)}
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="France">France</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="form-group">
                  <label>PAN Number</label>
                  <input
                    type="text"
                    name="pan_number"
                    className="form-control"
                    onChange={(e) => formInputHandler(e)}
                    value={pan_number}
                  />
                </div>
              </div>
            </div>
            <div className="row px-5 py-2">
              <div className="col-lg-4 my-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => submitKYC()}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYC;
