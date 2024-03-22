import { useState } from "react";

import { IProduct, IProductsQueryParams, IProductsSearch } from "../../models/product";
import { useDispatch, useSelector } from "../hooks";

import { useGetProductsBySearchQuery } from "./product-api";
import { productActions, searchProductsQueryDataInitialState, selectSearchProductsQueryData } from "./product-slice";

const useSearchProductsQuery = () => {
  const initialState = searchProductsQueryDataInitialState;
  const dataPerFetch = initialState.queryParams.limit || 9;
  const dispatch = useDispatch();
  const { search, queryParams } = useSelector(selectSearchProductsQueryData);
  const [productsQueryParams, setProductsQueryParams] = useState<IProductsQueryParams>(queryParams);
  const [productsSearch, setProductsSearch] = useState<IProductsSearch>(search);

  const {
    error,
    isError,
    isLoading,
    data: response,
  } = useGetProductsBySearchQuery({ search: productsSearch, queryParams: productsQueryParams });

  let products: IProduct[] = [];
  let isAllDataFetched = false;

  const fetchMoreData = () => {
    updateProductsQueryData({}, { limit: (productsQueryParams.limit || 0) + dataPerFetch });
  };

  const updateProductsQueryData = (
    search: IProductsSearch | null = {},
    queryParams: IProductsQueryParams | null = {}
  ) => {
    search = search === null ? initialState.search : Object.assign({}, productsSearch, search);
    queryParams = queryParams === null ? initialState.queryParams : Object.assign({}, productsQueryParams, queryParams);

    dispatch(productActions.setSearchProductsQueryData({ search, queryParams }));

    setProductsSearch(search);
    setProductsQueryParams(queryParams);
  };

  if (response) {
    products = response.products;
    isAllDataFetched = response.total === products.length;
  }

  return {
    error,
    isError,
    isLoading,
    products,
    productsSearch,
    isAllDataFetched,
    fetchMoreData,
    updateProductsQueryData,
  };
};

export { useSearchProductsQuery };
