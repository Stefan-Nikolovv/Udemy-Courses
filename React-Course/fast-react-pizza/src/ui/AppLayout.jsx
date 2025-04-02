import Header from "./header";
import CartOverview from "../features/cart/CartOverview";
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
        <CartOverview></CartOverview>
      </main>
    </div>
  );
}

export default AppLayout;
