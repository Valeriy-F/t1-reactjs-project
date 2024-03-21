import { useState } from "react";

import { IProduct, IProductsFilter, IProductsQueryParams } from "../../models/product";
import { useDispatch, useSelector } from "../hooks";

import { useGetProductsByFilterQuery } from "./product-api";
import { filterProductsQueryDataInitialState, productActions, selectFilterProductsQueryData } from "./product-slice";

const useFilterProductsQuery = () => {
  const initialState = filterProductsQueryDataInitialState;
  const dataPerFetch = initialState.queryParams.limit || 9;
  const dispatch = useDispatch();
  const { filter, queryParams } = useSelector(selectFilterProductsQueryData);
  const [productsQueryParams, setProductsQueryParams] = useState<IProductsQueryParams>(queryParams);
  const [productsFilter, setProductsFilter] = useState<IProductsFilter>(filter);

  const {
    isError,
    isLoading,
    data: response,
  } = useGetProductsByFilterQuery({ filter: productsFilter, queryParams: productsQueryParams });

  let products: IProduct[] = [];
  let isAllDataFetched = false;

  const fetchMoreData = () => {
    updateProductsQueryData({}, { limit: (productsQueryParams.limit || 0) + dataPerFetch });
  };

  const updateProductsQueryData = (
    filter: IProductsFilter | null = {},
    queryParams: IProductsQueryParams | null = {}
  ) => {
    filter = filter === null ? initialState.filter : Object.assign({}, productsFilter, filter);
    queryParams = queryParams === null ? initialState.queryParams : Object.assign({}, productsQueryParams, queryParams);

    dispatch(productActions.setFilterProductsQueryData({ filter, queryParams }));

    setProductsFilter(filter);
    setProductsQueryParams(queryParams);
  };

  if (response) {
    products = response.products;
    isAllDataFetched = response.total === products.length;
  }

  return {
    isError,
    isLoading,
    products,
    productsFilter,
    isAllDataFetched,
    fetchMoreData,
    updateProductsQueryData,
  };
};

export { useFilterProductsQuery };
