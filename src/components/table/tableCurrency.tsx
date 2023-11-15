import "./style.css";
import Filter from "./filter";
import { HooksTable } from "./hooks";

export default function TableCurrency() {
  const { getDataView, handleSelectCurrency } = HooksTable();

  const dataArray = getDataView() || [];

  return dataArray.length > 0 ? (
    <div>
      <Filter />
      <div data-testid="table-container" className="container__table">
        <div className="table">
          <div className="header row">
            <div className="cell">Name (symbol)</div>
            <div className="cell">Price (USD)</div>
            <div className="cell">Price (Bitcoin)</div>
          </div>
          {dataArray.map((item, index) => (
            <div
              key={index}
              className="row rowClick"
              onClick={() => handleSelectCurrency(item)}
            >
              <div className="cell">
                {item.name} ({item.symbol})
              </div>
              <div className="cell">{item.price_usd}</div>
              <div className="cell">{item.price_btc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="info">Select a currency to see more information</div>
    </div>
  ) : null;
}
