import { put, call } from "redux-saga/effects";
import axios from "lib/http/axios";
import { catchHandler } from "../../helperSaga";

import {
  historyStart,
  historySuccess,
  historyFail,
} from "../../reducers/historyReducer";   
export function* historySaga(action) {
  yield put(historyStart());
  try {
    console.log(action.payload);                
    const { email } = action.payload;
    const response = yield axios.post(`/users/history`, { email });
    // console.log(response.data.obj);
    if (response.data.status) {
      yield put(historySuccess(response.data.obj));
    } else {
      yield put(historyFail(response.data.message));
      // yield put(historyFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    yield call(catchHandler, error, historyFail);
  }
}
 