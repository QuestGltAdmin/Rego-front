import { all, takeLatest } from "redux-saga/effects";
import { loginSaga, singupSaga } from "./auth/authSaga";
import { historySaga } from "./history/historySaga";
import { getWalletSaga } from "./wallet/walletSaga";

export function* watchAuthentication() {
  yield all([takeLatest("auth/loginSaga", loginSaga)]);
  yield all([takeLatest("auth/singupSaga", singupSaga)]);
}
export function* watchHistory() {
  yield all([takeLatest("history/historySaga", historySaga)]);
}
export function* watchWallet() {
  yield all([takeLatest("wallet/getWalletSaga", getWalletSaga)]);
}
 