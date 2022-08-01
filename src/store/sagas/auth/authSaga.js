import { put, call } from "redux-saga/effects";
import axios from "lib/http/axios";
import { catchHandler } from "../../helperSaga";

import {
  loginStart,
  loginSuccess,
  loginFail,
  singupStart,
  singupSuccess,
} from "../../reducers/authReducer";

function* setItemToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function* loginSaga(action) {
  yield put(loginStart());
  try {
    const { formData, toast, closeModalRef } = action.payload;
    const response = yield axios.post(`/users/login`, formData);
    console.log(response.status);
    if (response.data.status) {
      yield put(loginSuccess(response.data.data));
      if (toast) {
        toast.success("Login Successful", {
          autoClose: 2000,
          hideProgressBar: true,
        });                
      }
      if (closeModalRef) {
        closeModalRef.current.click();
      }
      // window.location.reload();
      // modalCloseRef.current.click();
      // window.location.pathname = "/dashboard-new";
    } else {
      yield put(loginFail(response.data.message));
      if (toast) {
        toast.error(response.data.message, {
          autoClose: 3500,
          hideProgressBar: true,
          position:"top-center",
        });
      }
      // yield put(loginFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    yield call(catchHandler, error, loginFail);
  }
}                
export function* singupSaga(action) {
  yield put(singupStart());  
  try {
    const { values, toast, navigate } = action.payload;
    console.log(values)
    const response = yield axios.post(`/users/signup`, values);
    console.log(response.status);
    if (response.data.status) {
      yield put(singupSuccess(response.data.data));
      if (toast) {
        toast.success("Singup Successful", {
          autoClose: 2000,     
          hideProgressBar: true,
        }); 
        navigate('/auth/login');
      }    
      // window.location.reload();
      // modalCloseRef.current.click();
      // window.location.pathname = "/dashboard-new";
    } else {
      yield put(loginFail(response.data.message));
      if (toast) {
        toast.error(response.data.message, {
          autoClose: 3500,
          hideProgressBar: true,
          position: "top-center",
        });
      }
      // yield put(loginFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    yield call(catchHandler, error, loginFail);
  }
}
