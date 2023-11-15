import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Providers from "@/redux/providers";
import { act } from "react-dom/test-utils";
import { getCryptoCurrency } from "@/redux/services/cryptoCurrencyApi";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

describe("Home Component", () => {
  it("renders correctly", async () => {
    await act(async () => {
      render(
        <Providers>
          <Home />
        </Providers>
      );
    });

    expect(screen.getByText("Crypto Currency")).toBeInTheDocument();
  });
});


const middlewares = [thunk];
const mockStore = configureStore<{}, ThunkDispatch<{}, undefined, AnyAction>>(
  middlewares
);

describe("getCryptoCurrency action", () => {
  it("creates FULFILLED action when fetching data is successful", async () => {
    const mockData = {
      data: [
        {
          id: 1,
          name: "Bitcoin",
          symbol: "BTC",
        },
      ],
      info: {
        coins_num: 1,
        time: 1636452249,
      },
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const store = mockStore();

    await store.dispatch(getCryptoCurrency());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(getCryptoCurrency.pending.type);
    expect(actions[1].type).toEqual(getCryptoCurrency.fulfilled.type);
    expect(actions[1].payload).toEqual(mockData);
  });

  it("creates REJECTED action when fetching data fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });

    const store = mockStore();

    await store.dispatch(getCryptoCurrency());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(getCryptoCurrency.pending.type);
    expect(actions[1].type).toEqual(getCryptoCurrency.rejected.type);
    expect(actions[1].error.message).toEqual("Failed to fetch data");
  });
});
