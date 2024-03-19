import { Route, Routes } from "react-router-dom";

import { ErrorPage, MainPage, ProductDetailsPage, ProductListPage } from "./pages";

const Routing = () => {
  return (
    <Routes>
      <Route path={`/products/:name`} element={<ProductDetailsPage />} />
      <Route path={`/products`} element={<ProductListPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routing;
