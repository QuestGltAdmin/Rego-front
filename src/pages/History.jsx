import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/UI/Spinner";
import svgImages from "../assets/images/svg-icons/svgImages";
import { historySaga } from "../store/reducers/historyReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./History.module.css";
import { useNavigate } from "react-router-dom";


const History = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, history } = useSelector((state) => state.history);
  // const [transactions, setTransactions] = useState(null);

  const getData = async () => {
    const payload = { email: user.user.email };
    dispatch(historySaga(payload));
  };   

  const saleNowHandler = async (item) => {
    try {
      console.log("item.stake_id", item._id);
      const res = await axios.post("http://localhost:3001/users/close-stake", {
       id: item._id,   
        email: user.user.email,
      });
      console.log("res", res);
      if (res.status === 200) {
        toast.success("Transaction Successfull");
        setTimeout(() => {
          navigate("/history"); 
        }, 2000); 
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error.message);
      // toast.error("Something went wrong", {
      //   position: "top-center",
      // });
    }
  };
  const ActionComponent = ({ item }) => {
    if (item.status === "Inactive") {         
      return (
        <button
          className="btn btn-primary"
          onClick={() => saleNowHandler(item)}
        >
          Withdraw
        </button>
      );
    }

    return <p>{item.status}</p>;
  };

  useEffect(() => {
    getData();
  }, []);
  
  console.log({ isLoading, history });
  return (
    <div className="history-section">
      <div className="row">
        <div className="col-lg-3 shadow-inner p-0">
          <ul className="nav nav-tabs  flex-column" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="active-tab"
                data-toggle="tab"
                href="#active"
                role="tab"
                aria-controls="active"
                aria-selected="true"
              >
                <img src={svgImages.transactionActive} alt="" />
                Transactions
              </a>
            </li>    
            <li className="nav-item">
              <a
                className="nav-link"
                id="fd-tab"
                data-toggle="tab"
                href="#fd"
                role="tab"
                aria-controls="fd"
                aria-selected="false"
              >
                <img src={svgImages.fd_active} alt="" />
                Fixed Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="tab3"
                data-toggle="tab"
                href="#exchange"
                role="tab"
                aria-controls="pending"
                aria-selected="false"
              >
                <img src={svgImages.exchangeActive} alt="" />
                Exchanges
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-9 shadow-inner py-3">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="active"
              role="tabpanel"
              aria-labelledby="active-tab"
            >
              <div className="row">
                {isLoading ? (
                  "Loading ..."
                ) : (
                  <div className="table-responsive whitespace-nowrap">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Date & Time</th>
                          <th>Crypto Name</th>
                          <th>Asset Amount</th>
                          <th>Sender Address</th>
                          <th>Status</th>
                          <th>Transaction Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history.tansacion &&
                          history.tansacion.length > 0 &&
                          history.tansacion?.map((item, index) => (
                            <tr key={index}>
                              <td> 
                                {new Date(item.created_at).toDateString()}
                              </td>
                              <td>{item.crypto_name}</td>
                              <td>{item.amount}</td>
                              <td>{item.sender_wallet_address?.substr(-12)}</td>
                              <td>{item.status}</td>
                              <td>{item.transaction_type}</td>   
                            </tr>         
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {!isLoading &&
                  history.tansacion &&
                  history.tansacion.length < 1 &&
                  "No Data Available"}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="fd"
              role="tabpanel"
              aria-labelledby="fd-tab"
            >
              <div className="row">
                <div className="table-responsive whitespace-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Deposited</th>
                        <th>Payout</th>
                        <th>Balance</th>
                        <th>Interest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.Stakes &&
                        history.Stakes.length > 0 &&
                        history.Stakes?.map((item, index) => (
                          <tr key={index}>
                            <td>{new Date(item.startdate).toDateString()}</td>
                            <td>{new Date(item.enddate).toDateString()}</td> 
                            <td>{item.startingbalance}</td>
                            <td>{item.closingbalance}</td>
                            <td>{item.current_coin_balance}</td>
                            {/* <td>{item.interest_rate}</td> */} 
                            <td>{<ActionComponent item={item} />}</td>
                          </tr>
                        ))}         
                    </tbody>
                  </table>
                  {!isLoading &&
                    history.Stakes &&
                    history.Stakes.length < 1 &&
                    "No Data Available"}
                </div>
              </div>
            </div>  
            <div
              className="tab-pane fade"
              id="exchange"
              role="tabpanel"
              aria-labelledby="exchange-tab"
            >
              <div className="row">
                <div className="table-responsive whitespace-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date & Time</th>
                        <th>Type</th>
                        <th>Debit Amount</th>
                        <th>Credit Amount</th>
                        <th>Status</th>
                        {/* <th>Updated Ledger Balance</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {history.orders &&
                        history.orders.length > 0 &&
                        history.orders?.map((item, index) => (
                          <tr key={index}>
                            <td>{new Date(item.created_at).toDateString()}</td>
                            <td>{item.order_Type}</td>
                            <td>{item.from_amount}</td>
                            <td>{item.to_amount}</td>
                            <td>{item.status}</td>
                            {/* <td>0.0000</td> */}
                          </tr>
                        ))}                
                    </tbody>
                  </table>
                  {!isLoading &&
                    history.orders &&
                    history.orders.length < 1 &&
                    "No Data Available"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
