import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import QR from "../assets/images/bitcoinqr.png";

import { coins } from "../assets/coins/coins";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../components/UI/Spinner";
import {
  getWalletSaga,
  updateWalletBalance,
} from "../store/reducers/walletReducer";
import { toast } from "react-toastify";
import axiosMain from "../http/axios/axios_main";

export default function Wallet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { InrwalletObj,
    array: cryptowalletObj
  } = useSelector((state) => state.wallet.userWallet);
  const { loading, errorMsg } = useSelector((state) => state.wallet);

  const [coinSelected, setCoinSelected] = useState(false);
  const [selectedCoinValue, setSelectedCoinValue] = useState(null);
  const [openCoinDrop, setOpenCoinDrop] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const [testing, setTesting] = useState()

  const [formData, setFormData] = useState({
    cryptoAmount: "",
    wallet_address: "",
  });
  console.log(InrwalletObj.Balance);
  const { cryptoAmount, wallet_address } = formData;

  const sellFormInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  console.log({ loading });

  console.log(user)
  const getWalletData = async () => {
    const payload = { email: user.user.email };
    dispatch(getWalletSaga(payload));
    // return;
    // const res = await axios.post(
    //   "http://3.128.190.203:3001/users/get-CryptoBalance",
    //   {
    //     email: user.user.email,
    //   }
    // );

    // if (res.data.status === false) {
    //   toast.error("Wallet Fetching Error");
    // }
  };

  const sendButtonHandler = async () => {
    setApiLoading(true);
    const payload = {
      email: user.user.email,
      network: selectedCoinValue.name.toUpperCase(),
      cryptoAmount,
      wallet_address,
    };

    if (selectedCoinValue.name === "btc") {
      toast.error("BTC will be coming soon");
      return;
    }
    const res = await axios.post(
      "http://3.128.190.203:3001/users/transfer",
      payload
    );
    // console.log({ resStatus: res });
    if (res.data.status) {
      dispatch(
        updateWalletBalance({
          name: selectedCoinValue.name,
          balance: +cryptoAmount,
        })
      );
      toast.success("Transaction Successfull");
      setTimeout(() => {
        navigate("/history");
      }, 2000);
    } else {
      toast.error(res.data.message);
    }
    setApiLoading(false);
  };

  const coinOptions = coins
    .map((item) => {
      return { id: item.id, name: item.name, value: item.name, url: item.url };
    })
    .filter((item) => item.name !== "inr");

  useEffect(() => {
    if (cryptowalletObj?.length === 0) {
      getWalletData();
    } else {
      getWalletData();
    }
  }, []);

  // useEffect(() => {
  //   const payload = { email: user.user.email };
  //   dispatch(getWalletSaga(payload));
  // }, [])


  console.log(InrwalletObj.Balance);
  return (
    <div className="row main-row">
      <div className="col-lg-8" style={{ padding: "30px" }}>
        <div className="fiat-section">
          <div className="currency">Fiat</div>
          <Table size="sm">
            <thead>
              <tr>
                <th className="color-secondary-hint">Asset Type</th>
                <th className="color-secondary-hint">Balance</th>
                {/* <th className="color-secondary-hint">Available Balance</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coins?.map((item) => {
                if (item.type === "currency") {
                  return (
                    <tr
                      key={item.id}
                      className={`hover:shadow-lg hover:border-l-4 hover:border-l-indigo-500 ${coinSelected && selectedCoinValue?.id === item.id
                          ? "border-l-4 border-l-blue-500 shadow-md"
                          : ""
                        }`}
                      onClick={() => {
                        if (coinSelected && selectedCoinValue?.id === item.id) {
                          setCoinSelected(false);
                          setSelectedCoinValue(null);
                          return;
                        }
                        setCoinSelected(true);
                        setSelectedCoinValue(item);
                      }}
                    >
                      <td className="text-uppercase flex items-center">
                        <img src={item.url} /> {item.name}
                      </td>
                      <td className="align-middle">{InrwalletObj.Balance}</td>
                      {/* <td className="align-middle">0.00</td> */}
                      <td className="flex align-top gap-1">
                        <img src={item.imps} /> &nbsp;
                        <img src={item.rtgs} />
                        &nbsp;
                        <img src={item.neft} />
                        &nbsp;
                        <img src={item.upi} />
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
        <div className="crypto-section">
          <div className="currency">Crypto</div>
          <div className="h-96"> 
          {/* overflow-scroll */}
            {loading && cryptowalletObj?.length === 0 && <Spinner />}
            {!loading &&
              cryptowalletObj !== undefined &&
              cryptowalletObj?.length !== 0 && (
                <Table size="sm">
                  <thead>
                    <tr>
                      <th className="color-secondary-hint">Asset Type</th>
                      <th className="color-secondary-hint">Total Balance</th>
                      <th className="color-secondary-hint">Asset Value</th>
                      {/* <th className="color-secondary-hint">
                        Available Balance
                      </th> */}
                      <th className="color-secondary-hint">Interest Earned</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cryptowalletObj?.length > 0 &&
                      cryptowalletObj?.map((item, index) => {
                        if (!loading)
                          return (
                          
                            <tr
                              key={index}
                              className={`hover:shadow-lg hover:border-l-8 hover:border-l-indigo-500 ${coinSelected &&
                                  selectedCoinValue?.name.toLowerCase() ===
                                  item.name
                                  ? "border-l-8 border-l-blue-500  shadow-md"
                                  : ""
                                }`}
                              onClick={() => {
                                if (
                                  coinSelected &&
                                  selectedCoinValue?.name.toLowerCase() ===
                                  item.name
                                ) {
                                  setCoinSelected(false);
                                  setSelectedCoinValue(null);
                                  return;
                                }
                                setCoinSelected(true);
                                setSelectedCoinValue(item);
                              }}
                            >
                              <td className="text-uppercase flex items-center">
                                <img src={item.image} />{" "}
                                {item.crypt_name.toUpperCase()}
                              </td>
                              <td>{item.balance || "0.0000"}</td>
                              <td>0.00000</td>
                              {/* <td>0.000</td> */}
                              <td>{item.interest_earned}</td>
                            </tr>
                          );
                      })}
                  </tbody>
                </Table>
              )}
          </div>
        </div>
      </div>
      <div className="col-lg-4" style={{ padding: "30px" }}>
        <div style={{ display: "block" }}>
          <Tabs defaultActiveKey="first" className="justify-content-around">
            <Tab eventKey="first" title="Deposit">
              {coinSelected ? (
                <div className="deposit-tab">
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div className="token">
                      <div>Selected Token</div>
                      {/* <CoinDropDown list={coinOptions} /> */}
                      <div className="mt-3 relative flex items-center">
                        <img
                          src={selectedCoinValue.image || coinOptions[0].url}
                          alt=""
                        />
                        <span className="text-uppercase">
                          {selectedCoinValue?.name || coinOptions[0].name}
                        </span>
                      </div>
                    </div>
                    <div
                      className="qr-code"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      Scan QR
                      <img src={QR} />
                    </div>
                  </div>
                  <div className="crypto-address" style={{ marginTop: "30px" }}>
                    <h3 className="font-h4" style={{}}>
                      Address
                    </h3>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={selectedCoinValue?.wallet_address || ""}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="flex flex-col items-center"
                  style={{ marginTop: "196px" }}
                >
                  <img
                    src={
                      require("../assets/images/svg-icons/deposit_inactive_wallet.svg")
                        .default
                    }
                    height={60}
                    width={60}       
                    alt=""
                  />
                  <div className="font-h3">Select Token to Deposit</div>
                </div>
              )}
            </Tab>
            <Tab eventKey="second" title="Send">
              {coinSelected ? (
                <>
                  <div
                    className="send-tab"
                    style={{ display: "flex", padding: "10px" }}
                  >
                    <div className="token">
                      <div className="">Selected Token</div>
                      <div className="mt-3 relative flex items-center">
                        <img
                          src={selectedCoinValue.image || coinOptions[0].url}
                          alt=""
                        />
                        <span className="text-uppercase">
                          {selectedCoinValue?.name || coinOptions[0].name}
                        </span>
                      </div>
                      <div>
                        <div className="mt-3 relative ">
                          {openCoinDrop && (
                            <ul
                              className="p-0 text-uppercase z-10 mt-1 w-full bg-white shadow-lg h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-scroll focus:outline-none sm:text-sm scrollbar:!w-1.5"
                              tabIndex="-1"
                              role="listbox"
                              aria-labelledby="listbox-label"
                              aria-activedescendant="listbox-option-3"
                            >
                              {coinOptions.map((item) => (
                                <li
                                  key={item.id}
                                  className="text-gray-900 cursor-default select-none absolute py-2 pl-3 pr-9"
                                  id="listbox-option-0"
                                  role="option"
                                >
                                  <div className="flex items-center">
                                    <img src={item.url} />

                                    <span className="font-normal block truncate">
                                      {item.name}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sending-amount">
                    Amount
                    <div className="bg-white shadow-md flex items-center p-1">
                      <div className="selected-token text-uppercase flex items-center w-25">
                        <img
                          src={selectedCoinValue.image || coinOptions[0].url}
                        />
                        {selectedCoinValue.name || coinOptions[0].name}
                      </div>
                      <div className="amount ml-auto border-0">
                        <input
                          type="text"
                          name="cryptoAmount"
                          value={cryptoAmount}
                          onChange={(e) => sellFormInput(e)}
                          id=""
                          placeholder="Enter Amount"
                          className="focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="amount-percentage flex justify-content-end mt-2">
                      <div className="bg-white text-gray-400 m-1 p-1  shadow-md">
                        25%
                      </div>
                      <div className="bg-white text-gray-400 m-1 p-1 shadow-md">
                        50%
                      </div>
                      <div className="bg-white text-gray-400 m-1 p-1 shadow-md">
                        75%
                      </div>
                      <div className="bg-white text-gray-400 m-1 p-1 shadow-md">
                        100%
                      </div>
                    </div>
                  </div>
                  <div
                    className="receiver-address"
                    style={{ marginTop: "50px" }}
                  >
                    Receiver's Wallet Address
                    <div>
                      <div className="amount  shadow-md">
                        <input
                          type="text"
                          className="focus:outline-none w-full p-2"
                          placeholder="Enter Wallet Address"
                          name="wallet_address"
                          value={wallet_address}
                          onChange={(e) => sellFormInput(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="bg-blue-400 p-2 text-white mt-5 text-center rounded buy_now_btn w-100"
                    onClick={() => sendButtonHandler()}
                    disabled={apiLoading}
                  >
                    {apiLoading ? "Please Wait" : "Send"}
                  </button>
                </>
              ) : (
                <div
                  className="flex flex-col items-center"
                  style={{ marginTop: "196px" }}
                >
                  <img
                    src={
                      require("../assets/images/svg-icons/send_inactive_wallet.svg")
                        .default
                    }
                    height={60}
                    width={60}
                    alt=""
                  />
                  <div className="font-h3">Select Token to Send</div>
                </div>
              )}
            </Tab>
            {/* <Tab eventKey="third" title="Loan">
              {coinSelected ? (
                <Tabs defaultActiveKey="first" className="px-5 mt-4 border-0">
                  <Tab eventKey="first" title="Take Loan" className="p-0">
                    <div className="sending-amount my-4">
                      Required Amount
                      <div className="bg-white shadow-md flex items-center p-1 mt-2">
                        <div className="selected-token text-uppercase flex items-center w-25">
                          <img src={coinOptions[0].url} />
                          {coinOptions[0].name}
                        </div>
                        <div className="amount ml-auto border-0">
                          <input
                            type="text"
                            name="amount"
                            id=""
                            placeholder="Enter Amount"
                            className="focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="collateral-amount my-4">
                      Collateral Amount
                      <div className="bg-white shadow-md flex items-center p-1 mt-2">
                        <div className="selected-token text-uppercase flex items-center w-25">
                          <img src={coinOptions[1].url} />
                          {coinOptions[1].name}
                        </div>
                        <div className="amount ml-auto border-0">
                          <input
                            type="text"
                            name="amount"
                            id=""
                            placeholder="Enter Amount"
                            className="focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="amount-percentage flex justify-content-end mt-2">
                        <div className="bg-white text-gray-400 m-1 p-1  shadow-md">
                          25%
                        </div>
                        <div className="bg-white text-gray-400 m-1 p-1 shadow-md">
                          50%
                        </div>
                        <div className="bg-white text-gray-400 m-1 p-1 shadow-md">
                          75%
                        </div>
                        <div className="bg-white text-gray-400 m-1 p-1 shadow-md">
                          100%
                        </div>
                      </div>
                    </div>

                    <div className="card-button bg-blue-400 p-2 text-white mt-5 text-center rounded">
                      Take Loan
                    </div>
                  </Tab>
                  <Tab eventKey="second" title="View Loans">
                    <div className="top mt-3">
                      <input type="checkbox" name="" id="showLoan" />
                      <label htmlFor="showLoan">Show All Loans</label>
                    </div>
                    <div className="h-24 p-5 text-center mt-4">
                      You do not have any loans
                    </div>
                  </Tab>
                </Tabs>
              ) : (
                <div
                  className="flex flex-col items-center"
                  style={{ marginTop: "196px" }}
                >
                  <img
                    src={
                      require("../assets/images/svg-icons/takeLoan_inactive_wallet.svg")
                        .default
                    }
                    height={60}
                    width={60}
                    alt=""
                  />
                  <div className="font-h3">Select Token to Take Loan</div>
                </div>
              )}
            </Tab> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
