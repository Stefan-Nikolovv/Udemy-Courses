import { useSelector } from "react-redux";
import store from "../../store";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  console.log(store.getState());
  const balance = useSelector((store) => formatCurrency(store.account.balance));
  return <div className="balance">{balance}</div>;
}

export default BalanceDisplay;
