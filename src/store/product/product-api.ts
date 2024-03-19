import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IProduct, IProductsResponse, IProductsSelectFilter, IProductsSelectQuery } from "../../models/product";

const BASE_URL = "https://dummyjson.com/products";

const transformResponse = (response: IProductsResponse) => response.products;

const generateSelectQueryParams = ({ limit = 0, skip = 0, select = [] }: IProductsSelectQuery) => {
  return {
    limit,
    skip,
    select: select.join(","),
  };
};

const productApi = createApi({
  reducerPath: "product/api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    searchProducts: build.query<
      IProductsResponse,
      { selectFilter: IProductsSelectFilter; selectQuery: IProductsSelectQuery }
    >({
      query: ({ selectFilter, selectQuery }) => {
        const params = generateSelectQueryParams(selectQuery);
        const url = selectFilter.category ? `category/${selectFilter.category}` : "";

        return {
          url,
          params,
        };
      },
    }),
    getProducsCategories: build.query<string[], null>({
      query: () => ({ url: `${BASE_URL}/categories` }),
    }),
  }),
});

export default productApi;

export const { useSearchProductsQuery, useGetProducsCategoriesQuery } = productApi;
