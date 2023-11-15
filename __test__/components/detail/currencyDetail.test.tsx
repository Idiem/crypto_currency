import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { setCryptoCurrency } from "@/redux/features/cryptoCurrencySlice";
import CurrencyDetail from "@/components/detail";

//mock the crypto currency data
const mockCryptoCurrency = {
  name: "Bitcoin",
  symbol: "BTC",
  price_usd: "50000",
};

describe("CurrencyDetail Component", () => {
  it("renders the title and price based on hook logic", () => {
    //config the redux state with a specific value
    store.dispatch(setCryptoCurrency(mockCryptoCurrency));

    //render the component
    render(
      <Provider store={store}>
        <CurrencyDetail />
      </Provider>
    );

    // Verify that the title and price are displayed correctly
    const expectedTitle = new RegExp(
      `${mockCryptoCurrency.name} \\(${mockCryptoCurrency.symbol}\\)`
    );
    const expectedPrice = new RegExp(`${mockCryptoCurrency.price_usd}`);

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(expectedPrice)).toBeInTheDocument();
  });

  it("displays additional data based on the hook logic", () => {
    //config the redux state with a specific value
    const mockCryptoCurrency = {
      name: "Ethereum",
      symbol: "ETH",
      price_usd: "3000",
      market_cap: "100000000",
    };

    store.dispatch(setCryptoCurrency(mockCryptoCurrency));

    //render the component
    render(
      <Provider store={store}>
        <CurrencyDetail />
      </Provider>
    );

    //verify that the additional data is displayed correctly
    const expectedMarketCap = `Market capitalization`;
    const expectedMarketCapValue = `${mockCryptoCurrency.market_cap}`

    expect(screen.getByText(expectedMarketCap)).toBeInTheDocument();
    expect(screen.getByText(expectedMarketCapValue)).toBeInTheDocument();
  });
});
