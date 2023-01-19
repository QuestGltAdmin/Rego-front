import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "redux";
import createSagaMiddleWare from "redux-saga";
import {
  watchAuthentication,
  watchHistory,
  watchWallet,
} from "./sagas/watcherSagasIndex";

import authReducer from "./reducers/authReducer";
import walletReducer from "./reducers/walletReducer";
import historyReducer from "./reducers/historyReducer";

const reducers = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
  history: historyReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistReducers = persistReducer(persistConfig, reducers);
const saga = createSagaMiddleWare();

const store = configureStore({
  reducer: persistReducers,
  middleware: [saga],
});

saga.run(watchAuthentication);
saga.run(watchHistory);
saga.run(watchWallet);

export default store;