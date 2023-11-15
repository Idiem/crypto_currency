"use client";

import CurrencyDetail from "@/components/detail";
import TableCurrency from "@/components/table/tableCurrency";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCryptoCurrency } from "@/redux/services/cryptoCurrencyApi";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.cryptoCurrency);

  //fetch the crypto currency data
  useEffect(() => {
    dispatch(getCryptoCurrency());
  }, [dispatch]);

  return (
    <main className="main">
      <div className="title">
        <h1>Crypto Currency</h1>
      </div>
      <section className="currency">
        <div className="currency__content">
          { status === "loading" || status === "idle" ? <div className="loading">Loading...</div> : null}
          <TableCurrency />
          <CurrencyDetail />
        </div>
      </section>
    </main>
  );
}
