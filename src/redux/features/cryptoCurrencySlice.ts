import { createSlice } from "@reduxjs/toolkit";
import {
  initialStateCurrency,
  initialStateSlice,
} from "../models/cryptoCurrencyModel";
import { getCryptoCurrency } from "../services/cryptoCurrencyApi";

//create slice for cryptoCurrency
export const cryptoCurrencySlice = createSlice({
  name: "cryptoCurrency",
  initialState: initialStateSlice,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`

    //function for set cryptoCurrency and reset cryptoCurrencyCount
    setCryptoCurrency: (state, action) => {
      if (!action.payload) {
        state.cryptoCurrencySelected = initialStateCurrency;
        state.count = 1;
        return;
      }
      state.cryptoCurrencySelected = { ...action.payload };
      state.count = 1;
      state.filter = "";
    },

    //function for set cryptoCurrencyCount
    setCryptoCurrencyCount: (state, action) => {
      state.count = action.payload;
    },

    //function for set filter
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCryptoCurrency.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload.data;
    });
    builder.addCase(getCryptoCurrency.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getCryptoCurrency.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { setCryptoCurrency, setCryptoCurrencyCount, setFilter } =
  cryptoCurrencySlice.actions;
export default cryptoCurrencySlice.reducer;
