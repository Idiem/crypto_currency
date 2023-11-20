import "@/styles/detailStyles.css";
import CalculatorCurrency from "./calculator";
import PrincipalInfo from "./principalInfo";
import { useAppSelector } from "@/redux/hooks";
import MoreInformation from "./moreInformation";

export default function CurrencyDetail() {
  const { name } = useAppSelector(
    (state) => state.cryptoCurrency.cryptoCurrencySelected
  );

  if (!name) {
    return null;
  }
  return (
    <div className="currency__info">
      <PrincipalInfo />
      <MoreInformation />
      <CalculatorCurrency />
    </div>
  );
}
