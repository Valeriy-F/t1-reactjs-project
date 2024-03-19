import { useState } from "react";

import { IProduct, IProductsSelectFilter, IProductsSelectQuery } from "../../models/product";
import { useSearchProductsQuery as useSearchProductsQueryRedux } from "../../store/product/product-api";

const useSearchProductsQuery = (dataPerFetch = 9) => {
  const [selectQuery, setSelectQuery] = useState<IProductsSelectQuery>({ limit: dataPerFetch, skip: 0, select: [] });
  const [selectFilter, setSelectFilter] = useState<IProductsSelectFilter>({});
  const { isError, isLoading, data: response } = useSearchProductsQueryRedux({ selectFilter, selectQuery });

  let products: IProduct[] = [];
  let isAllDataFetched = false;

  if (response) {
    products = response.products;
    isAllDataFetched = response.total === products.length;
  }

  const fetchMoreData = () => {
    setSelectQuery((currentValue) =>
      Object.assign({}, currentValue, { limit: (currentValue?.limit || 0) + dataPerFetch })
    );
  };

  const resetSelectQuery = () => {
    setSelectQuery(() => ({ limit: dataPerFetch, skip: 0, select: [] }));
  };

  const updateSelectFilter = (filter: IProductsSelectFilter) => {
    setSelectFilter((currentValue) => Object.assign({}, currentValue, filter));
  };

  return {
    isError,
    isLoading,
    products,
    isAllDataFetched,
    fetchMoreData,
    updateSelectFilter,
    resetSelectQuery,
  };
};

export { useSearchProductsQuery };
