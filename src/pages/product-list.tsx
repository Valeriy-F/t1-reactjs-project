import { debounce } from "../app/app-utils";
import { ISearchFormData } from "../components/molecules/search-form/search-form";
import { ProductListTemplate, TProductListTemplateProps } from "../components/templates";
import { IResponseError } from "../models/app";
import { useSearchProductsQuery } from "../store/product";

const ProductList = () => {
  const { products, error, isLoading, isFetching, isAllDataFetched, fetchMoreData, updateProductsQueryData } =
    useSearchProductsQuery();

  const isLoadingState = isLoading || isFetching;

  const productListData: TProductListTemplateProps["productListData"] = products
    ? {
        products,
        isAllDataFetched,
        isLoading: isLoadingState,
        onShowMoreClick: () => {
          fetchMoreData();
        },
      }
    : {};

  const searchFormData: TProductListTemplateProps["searchFormData"] = {
    isLoading: isLoadingState,
    onFormSubmit: (formData: ISearchFormData) => {
      updateProductsQueryData({ title: formData.inputValue }, null);
    },
    onInputValueChange: debounce((value: string) => {
      updateProductsQueryData({ title: value }, null);
    }, 300),
  };

  return (
    <ProductListTemplate
      productListData={productListData}
      searchFormData={searchFormData}
      isLoading={isLoadingState}
      error={error as IResponseError}
      data-testid={"product-list-page"}
    />
  );
};

export default ProductList;
