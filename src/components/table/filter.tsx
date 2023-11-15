import { setFilter } from "@/redux/features/cryptoCurrencySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Filter() {
  const { filter } = useAppSelector((state) => state.cryptoCurrency);
  const dispatch = useAppDispatch();

  //function handleInputChange and set filter in redux
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="currency__filter">
      <input
        onChange={handleInputChange}
        value={filter}
        type="text"
        className="currency__input"
        placeholder="Search..."
      />
    </div>
  );
}
