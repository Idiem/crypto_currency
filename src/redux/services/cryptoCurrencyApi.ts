import { createAsyncThunk } from '@reduxjs/toolkit';
import { CryptoCurrencyI } from '../models/cryptoCurrencyModel';

//define the response type
type GetCryptoCurrencyResponse = {
  data: CryptoCurrencyI[];
  info: {
    coins_num: number;
    time: number;
  };
};

//define the logic for fetching data
export const getCryptoCurrency = createAsyncThunk<GetCryptoCurrencyResponse, void>(
  'cryptoCurrency/getCryptoCurrency',
  async () => {
    const baseUrl = 'https://api.coinlore.net/api';
    const endpoint = '/tickers/';
    
    try {
      const response = await fetch(`${baseUrl}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      
      const data: GetCryptoCurrencyResponse = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
);