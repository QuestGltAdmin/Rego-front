import { createSlice } from "@reduxjs/toolkit";

const history = createSlice({
  name: "history",
  initialState: {
    isLoading: false,
    history: {},
    errorMsg: "",
  },
  reducers: {
    historySaga: (state) => {
      return { ...state };
    },

    historyStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    historySuccess: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,

        history: action.payload,
        errorMsg: "",
      };
    },
    historyFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    },
    clearHistory: (state, action) => {
      return {
        ...state,
        isLoading: false,
        history: {},
        errorMsg: "",
      };
    },
  },
});

export const {
  historySaga,
  historyStart,
  historySuccess,
  historyFail,
  clearHistory,
} = history.actions;
export default history.reducer;
