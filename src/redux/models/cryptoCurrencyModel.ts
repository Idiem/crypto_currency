//interface for crypto currency model
export type CryptoCurrencyI = {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
};

//initial state for crypto currency model
export const initialStateCurrency: CryptoCurrencyI = {
  id: "",
  symbol: "",
  name: "",
  nameid: "",
  rank: 0,
  price_usd: "",
  percent_change_24h: "",
  percent_change_1h: "",
  percent_change_7d: "",
  price_btc: "",
  market_cap_usd: "",
  volume24: 0,
  volume24a: 0,
  csupply: "",
  tsupply: "",
  msupply: "",
};

//interface for cryptoCurrency state
interface CryptoStateSliceI {
  data: CryptoCurrencyI[]; 
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  cryptoCurrencySelected: CryptoCurrencyI;
  count: number;
  filter: string;
}

//initial state for cryptoCurrency
export const initialStateSlice: CryptoStateSliceI = {
  data: [],
  status: "idle",
  error: null,
  cryptoCurrencySelected: initialStateCurrency,
  count: 1,
  filter: "",
};