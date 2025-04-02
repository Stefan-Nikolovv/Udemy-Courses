import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-600">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Stefan</p>
    </header>
  );
}

export default Header;
