import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    loading: false,
    errorMsg: "",
    userWallet: {
      InrwalletObj: [],
      array: [],
    },
  },
  reducers: {
    getWalletSaga: (state, action) => { },
    getWalletStart: (state, action) => {
      return {
        ...state,
        loading: true,
        userWallet: {
          InrwalletObj: [],
          array: [],
        },
      };
    },
    getWalletSuccess: (state, action) => {
      localStorage.setItem('InrwalletObj', action.payload.InrwalletObj)
      localStorage.setItem('array', action.payload.array)
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        errorMsg: "",
        userWallet: {
          InrwalletObj: action.payload.InrwalletObj,
          array: action.payload.array,
        },
      };
    },
    getWalletFail: (state, action) => {
      return {
        ...state,
        loading: false,
        errorMsg: action.payload.message || "Error With Fetching Wallet",
        userWallet: {
          InrwalletObj: [],
          array: [],
        },
      };
    },

    getWallet: (state, action) => {
      return {
        ...state,
        userWallet: {
          InrwalletObj: action.payload.InrwalletObj,
          array: action.payload.array,
        },
      };
    },

    clearWalletState: (state) => {
      return {
        ...state,
        loading: false,
        errorMsg: "",
        userWallet: {
          InrwalletObj: [],
          array: [],
        },
      };
    },
    updateWalletBalance: (state, action) => {
      console.log(action.payload)
      const { name, balance } = action.payload;
      const {
        userWallet: { array: cryptoWallet },
      } = state;
      const index = state.userWallet.array.findIndex(
        (item) => item.name === name
      );
      if (index !== -1) {
        state.userWallet.array[index].balance =
          Number(state.userWallet.array[index].balance) - Number(balance);
      }

      console.log(state.userWallet.array);
      return state;
    },

    updateINRBalance: (state, action) => {
      console.log(action.payload);
      const { balance } = action.payload;
      console.log(balance)
      state.userWallet.InrwalletObj.Balance = Number(state.userWallet.InrwalletObj.Balance) - Number(balance);
      // console.log(state.userWallet.InrwalletObj.Balance);
      return state;
    },

    // updateBTCBalance: (state, action) => {
    //   console.log(action.payload);
    //   const { balance } = action.payload;
    //   console.log(balance)
    //   state.userWallet.InrwalletObj.Balance = Number(state.userWallet.InrwalletObj.Balance) + Number(balance);
    //   // console.log(state.userWallet.InrwalletObj.Balance);
    //   return state;
    // }
  },
});

export const {
  getWallet,
  updateWalletBalance,
  clearWalletState,
  getWalletSaga,
  getWalletStart,
  getWalletSuccess,
  getWalletFail,
  updateINRBalance,
  // updateBTCBalance,
} = walletSlice.actions;
export default walletSlice.reducer;
