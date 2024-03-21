import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  IProductsFilterRequest,
  IProductsQueryParams,
  IProductsResponse,
  IProductsSearchRequest,
} from "../../models/product";

const BASE_URL = "https://dummyjson.com/products";

const generateSelectQueryParams = ({ limit = 0, skip = 0, select = [] }: IProductsQueryParams) => {
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
    getProductsByFilter: build.query<IProductsResponse, IProductsFilterRequest>({
      query: ({ filter, queryParams }) => {
        const params = generateSelectQueryParams(queryParams);
        const url = filter.category ? `category/${filter.category}` : "";

        return {
          url,
          params,
        };
      },
    }),
    getProductsBySearch: build.query<IProductsResponse, IProductsSearchRequest>({
      query: ({ search, queryParams }) => {
        const params = Object.assign({ q: search.title }, generateSelectQueryParams(queryParams));

        return {
          url: "search",
          params,
        };
      },
    }),
    getProducsCategories: build.query<string[], null>({
      query: () => ({ url: "categories" }),
    }),
  }),
});

export default productApi;

export const { useGetProductsByFilterQuery, useGetProductsBySearchQuery, useGetProducsCategoriesQuery } = productApi;
