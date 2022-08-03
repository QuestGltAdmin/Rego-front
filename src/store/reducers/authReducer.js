import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    kycStatus: false,
    walletAddress: "",
    user: {},
    authToken: "",
    isAuthenticated: false,
    errorMsg: "",
    isRegistered: false,
  },
  reducers: {
    loginSaga: (state,action) => {
      return { ...state };
    },

    googleLoginSaga: (state, action) => {
      return { ...state };
    },
    
    loginStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    loginSuccess: (state, action) => {
      console.log(action.payload);
      localStorage.setItem('authToken', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.data.user))
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.data.user,
        authToken: action.payload.token,
        errorMsg: "",
      };
    },
    loginFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
        errorMsg: action.payload,
      };
    },
    logout: (state) => {
      localStorage.removeItem("persist:root");
      console.log("came in logout reducer");
      window.localStorage.clear();

      return {
        ...state,
        isLoading: false,
        user: {},
        authToken: "",
        isAuthenticated: false,
        errorMsg: "",
        kycStatus: false,
      };
    },

    changeKYCStatus: (state, action) => {
      localStorage.setItem("kycStatus", true);
      return {
        ...state,
        kycStatus: true,
      };
    },

    updateUserCryptoBalance: (state, action) => {
      console.log(action.payload);
      const { name, balance } = action.payload;
      // const {
      //   user: { cryptoWallet: allData } } = state;
      console.log(state.user.cryptoWallet)
      const index = state.user.cryptoWallet.findIndex(
        (item) => item.crypt_name === name
      );
      console.log(index)
      if (index !== -1) {
        console.log(index)
        state.user.cryptoWallet[index].balance =
          Number(state.user.cryptoWallet[index].balance) - Number(balance);
      }
      // console.log("daaaaaa", state.user.cryptoWallet[index].balance);
      console.log(typeof(index));
      return state;
    },

    singupSaga: (state, action) => {
      return { ...state };        
    },

    singupStart: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    singupSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    singupFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
    // login: (state, action) => {
    //   state.value = action.payload;
    // },
    // logout: (state) => {
    //   state.value = { user: {}, isAuthenticated: false };
    // },
  },
}); 
export const {
  loginSaga,
  loginStart,
  loginSuccess,
  loginFail,
  logout,
  changeKYCStatus,
  updateUserCryptoBalance,
  singupSaga,
  singupStart,
  singupSuccess,
  singupFail,
} = authSlice.actions;
export default authSlice.reducer;
