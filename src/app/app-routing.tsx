import { Route, Routes } from "react-router-dom";

import { Error404Page, MainPage, ProductDetailsPage, ProductListPage } from "../pages";

const Routing = () => {
  return (
    <Routes>
      <Route path={`/products/:id`} element={<ProductDetailsPage />} />
      <Route path={`/products`} element={<ProductListPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default Routing;
