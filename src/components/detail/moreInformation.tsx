import { useAppSelector } from "@/redux/hooks";
import { namesDataCurrency } from "@/utils/titles";

export default function MoreInformation() {
  const { name, symbol, price_usd, id, nameid, ...rest } = useAppSelector(
    (state) => state.cryptoCurrency.cryptoCurrencySelected
  );

  return (
    <div className="currency__more__info">
      <table>
        <tbody>
          {Object.entries(rest)?.map(([key, value], index) => (
            <tr key={`${key}${index}`}>
              <td>{key ? namesDataCurrency[key] : ""}</td>
              <td className="currency__more__info__value">
                {value ? value : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
