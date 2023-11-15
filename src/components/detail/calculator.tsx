import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";

export default function CalculatorCurrency() {
  const [value, setValue] = useState<number | null>(null);
  const { name, price_usd } = useAppSelector(
    (state) => state.cryptoCurrency.cryptoCurrencySelected
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      return;
    }
    //if is 0 set empty
    setValue(Number(e.target.value) === 0 ? null : Number(e.target.value));
  };

  return (
    <div>
      <div className="info">How much {name} do you want convert to USD?</div>
      <input
        type="number"
        className="currency__input"
        style={{ marginTop: "10px" }}
        value={value || ""}
        onChange={handleChange}
      />
      <div className="value__dollar">
        {value} {name} = {((value ? value : 0) * Number(price_usd)).toFixed(2)}
        USD
      </div>
    </div>
  );
}
