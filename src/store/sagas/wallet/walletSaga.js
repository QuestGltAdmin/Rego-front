import { put, call } from "redux-saga/effects";
import axios from "lib/http/axios";
import { catchHandler } from "../../helperSaga";

import {
  getWalletStart,
  getWalletSuccess,
  getWalletFail,
} from "../../reducers/walletReducer";

export function* getWalletSaga(action) {
  yield put(getWalletStart());
  try {
    console.log(action.payload);
    const { email } = action.payload;
    const response = yield axios.post(`/users/get-CryptoBalance`, { email });
    console.log(response.data.obj);
    if (response.data.status) {
      yield put(getWalletSuccess(response.data.obj));
    } else {
      yield put(getWalletFail(response.data.message));
      // yield put(historyFail("Something went wrong! Please try again."));
    }    
  } catch (error) {
    yield call(catchHandler, error, getWalletFail);
  }
}
