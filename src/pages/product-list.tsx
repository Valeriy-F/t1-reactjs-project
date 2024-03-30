import { debounce } from "../app/app-utils";
import { ISearchFormData } from "../components/molecules/search-form/search-form";
import { ProductListTemplate, ResponseErrorTemplate, TProductListTemplateProps } from "../components/templates";
import { IResponseError } from "../models/app";
import { useSearchProductsQuery } from "../store/product";

const ProductList = () => {
  const { products, error, isError, isLoading, isAllDataFetched, fetchMoreData, updateProductsQueryData } =
    useSearchProductsQuery();

  if (isError) {
    return <ResponseErrorTemplate response={error as IResponseError} />;
  }

  const productListData: TProductListTemplateProps["productListData"] = products
    ? {
        products,
        isAllDataFetched,
        onShowMoreClick: fetchMoreData,
      }
    : {};

  const searchFormData: TProductListTemplateProps["searchFormData"] = {
    onFormSubmit: (formData: ISearchFormData) => {
      updateProductsQueryData({ title: formData.inputValue });
    },
    onInputValueChange: debounce((value: string) => {
      updateProductsQueryData({ title: value });
    }, 300),
  };

  return (
    <ProductListTemplate
      productListData={productListData}
      searchFormData={searchFormData}
      isLoading={isLoading}
      data-testid={"product-list-page"}
    />
  );
};

export default ProductList;
