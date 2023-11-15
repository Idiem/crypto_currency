import { configureStore } from "@reduxjs/toolkit";
import cryptoCurrencyReducer from "./features/cryptoCurrencySlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

//create and configure store
export const store = configureStore({
  reducer: {
    cryptoCurrency: cryptoCurrencyReducer
  }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
