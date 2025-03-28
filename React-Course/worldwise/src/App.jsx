import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index replace element={<Navigate to="cities" />}></Route>
          <Route path="cities" element={<CityList></CityList>}></Route>
          <Route path="cities/:id" element={<City />}></Route>
          <Route path="countries" element={<CountryList />}></Route>
          <Route path="form" element={<Form />}></Route>
        </Route>
        <Route path="*" element={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
