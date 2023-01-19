import axios from 'axios';
import RegoLoader from 'components/RegoLoader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/styled/Tabs';
import { Button } from 'components/styled/ui';
import AnimatePage from 'HOCs/Animate';
import api from 'lib/http/axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { historySaga } from 'store/reducers/historyReducer';

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, history } = useSelector((state) => state.history);

  useEffect(() => {
    getHistoryData();
  }, [])

  const getHistoryData = async () => {
    const payload = { email: user?.email }
    dispatch(historySaga(payload));
  }


  const withdrawHandler = async (item)=> {
    try {
      const url=`/users/close-stake`;
      const payload = {
        id:item?._id,
        email:user?.user?.email
      }
      const res = await api.post(url,payload);
      if(res.status === 200){
        alert("success");
      }else{
        alert("something went wrong");
      }
    } catch (err) {
      console.log(err)
    }
  }
  // console.log(user, history);

  return (
    <Tabs css={{}} className="flex-col" defaultValue="TRANSACTIONS">
      <TabsList>
        <TabsTrigger value="TRANSACTIONS">Transactions</TabsTrigger>
        <TabsTrigger value="FIXED_DEPOSIT">Fixed Deposit</TabsTrigger>
        <TabsTrigger value="EXCHANGES">Exchanges</TabsTrigger>
      </TabsList>
      <TabsContent value="TRANSACTIONS">
        <table className="w-full">
          <thead className="border-b border-gray-500 pb-2 h-10">
            <tr>
              <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Date & Time"}</th>
              <th style={{ width: "10%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Crypto Name"}</th>
              <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Asset Amount"}</th>
              <th style={{ width: "30%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Sender Address"}</th>
              <th style={{ width: "10%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Status"}</th>
              <th style={{ width: "10%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Transaction Type"}</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && history?.tansacion?.length<1 && <tr><th>{"No Data Available!!"}</th></tr>}
            {history?.tansacion?.map((item) => (
              <tr
                key={item?._id}
                className="hover:bg-violet-100 h-16"
              >
                <td>
                  <p className="px-1">{new Date(item?.created_at).toDateString()}</p>
                </td>
                <td>
                  <p className="px-1">{item?.crypto_name}</p>
                </td>
                <td>
                  <p className="px-1 max-w-20 md:max-w-40 lg:max-w-64 xl:max-w-96 overflow-x-auto">{item?.amount}</p>
                </td>
                <td>
                  <p className="px-1 max-w-20 md:max-w-40 lg:max-w-64 xl:w-96 overflow-x-auto">{item?.sender_wallet_address}</p>
                </td>
                <td>
                  <p className="px-1">{item?.status}</p>
                </td>
                <td>
                  <p className="px-1">{item?.transaction_type}</p>
                </td>
                {/* <td>
                      <div className="flex justify-between p-1">
                        <Button variant="green">Buy More</Button>
                      </div>
                    </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        {isLoading && <div className="pt-10">
            <RegoLoader loaderAutoResize={false} />
          </div>}
      </TabsContent>
      <TabsContent value="FIXED_DEPOSIT">
      <table className="w-full">
          <thead className="border-b border-gray-500 pb-2 h-10">
            <tr >
              <th style={{ width: "15%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Start Date"}</th>
              <th style={{ width: "15%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"End Date"}</th>
              <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Deposited"}</th>
              <th style={{ width: "15%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Payout"}</th>
              <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Balance"}</th>
              <th style={{ width: "15%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Interest"}</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && history?.Stakes?.length<1 && <tr><th>{"No Data Available!!"}</th></tr>}
            {history?.Stakes?.map((item) => (
              <tr
                key={item?._id}
                className="hover:bg-violet-100 h-16"
              >
                <td>
                  <p className="px-1">{new Date(item?.startdate).toDateString()}</p>
                </td>
                <td>
                  <p className="px-1">{new Date(item?.enddate).toDateString()}</p>
                </td>
                <td>
                  <p className="px-1">{item?.startingbalance}</p>
                </td>
                <td>
                  <p className="px-1">{item?.closingbalance}</p>
                </td>
                <td>
                  <p className="px-1">{item?.current_coin_balance}</p>
                </td>
                
                <td>
                      <div className="flex justify-between p-1">
                        {item?.status ==="active"?<p className="px-2 py-1 bg-green-200 rounded-lg">{item?.status}</p>:<Button variant="green" onClick={()=>withdrawHandler(item)}>Withdraw</Button>}
                      </div>
                    </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isLoading && <div className="pt-10">
            <RegoLoader loaderAutoResize={false} />
          </div>}
      </TabsContent>
      <TabsContent value="EXCHANGES">
      <table className="w-full">
          <thead className="border-b border-gray-500 pb-2 h-10">
            <tr >
              <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Date & Time"}</th>
              <th style={{ width: "10%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Type"}</th>
              <th style={{ width: "20%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Debit Amount"}</th>
              <th style={{ width: "30%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Credit Address"}</th>
              <th style={{ width: "10%" }} className="text-left text-base font-semibold text-gray-500" scope="col">{"Status"}</th>
              {/* <th style={{ width: "10%" }} className="text-start" scope="col">{"Updated Ledger Balance"}</th> */}
            </tr>
          </thead>
          <tbody>
            {!isLoading && history?.orders?.length<1 && <tr><th>{"No Data Available!!"}</th></tr>}
            {history?.orders?.map((item) => (
              <tr
                key={item?._id}
                className="hover:bg-violet-100 h-16"
              >
                <td>
                  <p className="px-1">{new Date(item?.created_at).toDateString()}</p>
                </td>
                <td>
                  <p className="px-1">{item?.order_Type}</p>
                </td>
                <td>
                  <p className="px-1">{item?.from_amount}</p>
                </td>
                <td>
                  <p className="px-1">{item?.to_amount}</p>
                </td>
                <td>
                  <p className="px-1">{item?.status}</p>
                </td>
                
                {/* <td>
                      <div className="flex justify-between p-1">
                        <Button variant="green">Buy More</Button>
                      </div>
                    </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        {isLoading && <div className="pt-10">
            <RegoLoader loaderAutoResize={false} />
          </div>}
      </TabsContent>
    </Tabs>
  )
}

export default AnimatePage(Index);