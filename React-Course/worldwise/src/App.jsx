import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
//import Login from "./pages/Login";
// import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element></Route>
          <Route path="cities" element={<CityList></CityList>}></Route>
          <Route path="countries" element></Route>
          <Route path="form" element></Route>
        </Route>
        <Route path="*" element={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
