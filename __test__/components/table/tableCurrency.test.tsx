import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TableCurrency from "@/components/table/tableCurrency";

// Mock the HooksTable module
jest.mock("@/components/table/hooks", () => ({
  HooksTable: jest.fn(),
}));

// Mock the useAppDispatch and useAppSelector hooks
jest.mock("@/components/table/hooks", () => ({
  ...jest.requireActual("@/components/table/hooks"),
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock("@/redux/features/cryptoCurrencySlice", () => ({
  ...jest.requireActual("@/redux/features/cryptoCurrencySlice"),
  setCryptoCurrency: jest.fn(),
}));


describe("TableCurrency Component", () => {
  const mockStore = configureStore([]);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    // Mocking data for your test
    const mockData = [
      {
        name: "CurrencyName",
        symbol: "SYM",
        price_usd: "100",
        price_btc: "0.01",
      },
    ];

    // Setting up the mock behavior for HooksTable
    jest.mock("@/components/table/hooks", () => ({
      HooksTable: jest.fn(() => ({
        getDataView: jest.fn(() => mockData),
        handleSelectCurrency: jest.fn(),
        data: mockData,
      })),
      useAppDispatch: jest.fn(),
      useAppSelector: jest.fn(),
    }));

    // Create the mock store with an initial state
    const store = mockStore({
      cryptoCurrency: {
        data: mockData,
        filter: "",
      },
    });

    render(
      <Provider store={store}>
        <TableCurrency />
      </Provider>
    );

    // Verify that the table is rendered correctly
    expect(screen.getByText(/CurrencyName \(SYM\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Price \(USD\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Price \(Bitcoin\)/i)).toBeInTheDocument();
  });
});
