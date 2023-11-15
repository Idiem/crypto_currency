import { useAppSelector } from "@/redux/hooks";

export default function PrincipalInfo() {
  const { name, symbol, price_usd } = useAppSelector(
    (state) => state.cryptoCurrency.cryptoCurrencySelected
  );

  return (
    <div className="principal__info">
      <h1 className="info__title">{`${name} (${symbol})`}</h1>
      <h2 className="info__price">
        {price_usd} <span>USD</span>
      </h2>
    </div>
  );
}
