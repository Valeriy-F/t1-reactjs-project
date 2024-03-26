import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import {
  IProduct,
  IProductsFilterRequest,
  IProductsQueryParams,
  IProductsResponse,
  IProductsSearchRequest,
  isProductsResponseErrorType,
} from "../../models/product";
import { baseApi, transformErrorResponseBuilder } from "../api";

const generateSelectQueryParams = ({ limit = 0, skip = 0, select = [] }: IProductsQueryParams) => {
  return {
    limit,
    skip,
    select: select.join(","),
  };
};

const productApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getProduct: build.query<IProduct, string>({
      query: (id) => ({ url: `products/${id}` }),
      transformErrorResponse: transformErrorResponseBuilder((data: unknown) => {
        if (typeof data === "string") {
          return data;
        }

        if (data && typeof data === "object" && isProductsResponseErrorType(data)) {
          return data.message;
        }

        return "Failed to fetch product";
      }),
    }),
    getProductsByFilter: build.query<IProductsResponse, IProductsFilterRequest>({
      query: ({ filter, queryParams }) => {
        const params = generateSelectQueryParams(queryParams);
        const url = filter.category ? `products/category/${filter.category}` : "products";

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
          url: "products/search",
          params,
        };
      },
    }),
    getProducsCategories: build.query<string[], null>({
      query: () => ({ url: "products/categories" }),
    }),
    getProductsByCategories: build.query<IProduct[], { categories: string[]; queryParams?: IProductsQueryParams }>({
      async queryFn(arg, api, extraOptions, baseQuery) {
        const productsByCategories: IProduct[] = [];
        const errors: FetchBaseQueryError[] = [];

        const productsByCategoriesQueryResult = await Promise.all(
          arg.categories.map((category) => {
            return baseQuery({
              url: `products/category/${category}`,
              params: arg.queryParams ? generateSelectQueryParams(arg.queryParams) : undefined,
            });
          })
        );

        productsByCategoriesQueryResult.forEach((productsByCategoryQueryResult) => {
          if (productsByCategoryQueryResult.error) {
            errors.push(productsByCategoryQueryResult.error);
          }

          if (productsByCategoryQueryResult.data) {
            const productsResponse = productsByCategoryQueryResult.data as IProductsResponse;
            productsByCategories.push(...productsResponse.products);
          }
        });

        return errors.length ? { error: errors[0] } : { data: productsByCategories };
      },
    }),
  }),
});

export default productApi;

export const {
  useGetProductsByFilterQuery,
  useGetProductsBySearchQuery,
  useGetProducsCategoriesQuery,
  useGetProductQuery,
  useGetProductsByCategoriesQuery,
} = productApi;
