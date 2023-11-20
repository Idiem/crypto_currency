import { setCryptoCurrency } from "@/redux/features/cryptoCurrencySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CryptoCurrencyI } from "@/redux/models/cryptoCurrencyModel";

//create hooks for table
export const HooksTable = () => {
  const { data, filter } = useAppSelector((state) => state.cryptoCurrency);
  const dispatch = useAppDispatch();

  //function for select currency
  const handleSelectCurrency = (currency: CryptoCurrencyI) => {
    dispatch(setCryptoCurrency(currency));
  };

  //function for get data view with filter
  const getDataView = () => {
    if (filter) {
      return data.filter((item) =>
        (item.name + item.symbol).toLowerCase().includes(filter.toLowerCase())
      );
    }
    return data;
  };
  return { getDataView, handleSelectCurrency, data };
};
