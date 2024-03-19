import { ProductListTemplate } from "../components/templates";
import { useSearchProductsQuery } from "../store/product";

import { ErrorPage } from ".";

const ProductList = () => {
  const { isError, isLoading, products, fetchMoreData, isAllDataFetched } = useSearchProductsQuery();

  if (isError) {
    return <ErrorPage />;
  }

  const productListData = products
    ? {
        products,
        isAllDataFetched,
        onShowMoreClick: () => {
          fetchMoreData();
        },
      }
    : {};

  return <ProductListTemplate productListData={productListData} isLoading={isLoading} />;
};

export default ProductList;
