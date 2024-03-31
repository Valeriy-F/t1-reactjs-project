import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { applySorting } from "../../app/app-utils";
import {
  IProduct,
  IProductsFilterRequest,
  IProductsQueryParams,
  IProductsResponse,
  IProductsSearchRequest,
  isProductsResponseErrorType,
  TProducsSorting,
} from "../../models/product";
import { baseApi, transformErrorResponseBuilder } from "../api";

const generateSelectQueryParams = ({ limit = 0, skip = 0, select = [] }: IProductsQueryParams) => {
  return {
    limit,
    skip,
    select: select.join(","),
  };
};

const createProductResponseDataTransform = (fallbackMessage = "") => {
  return (data: unknown) => {
    if (typeof data === "string") {
      return data;
    }

    if (data && typeof data === "object" && isProductsResponseErrorType(data)) {
      return data.message;
    }

    return fallbackMessage;
  };
};

const productApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getProduct: build.query<IProduct, string>({
      query: (id) => ({ url: `products/${id}` }),
      transformErrorResponse: transformErrorResponseBuilder(
        createProductResponseDataTransform("Failed to fetch product")
      ),
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
      transformErrorResponse: transformErrorResponseBuilder(
        createProductResponseDataTransform("Failed to fetch products")
      ),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentState, newProductsResponse) => {
        if (newProductsResponse.skip === 0) {
          return newProductsResponse;
        }

        currentState.products.push(...newProductsResponse.products);
        currentState.limit = newProductsResponse.limit;
        currentState.total = newProductsResponse.total;

        return currentState;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
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
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentState, newProductsResponse) => {
        if (newProductsResponse.skip === 0) {
          return newProductsResponse;
        }

        currentState.products.push(...newProductsResponse.products);
        currentState.limit = newProductsResponse.limit;
        currentState.total = newProductsResponse.total;

        return currentState;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
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

        if (errors.length) {
          return { error: errors[0] };
        }

        const sorting = arg.queryParams?.sorting;

        return sorting
          ? { data: applySorting<IProduct, TProducsSorting>(productsByCategories, sorting) }
          : { data: productsByCategories };
      },
    }),
    putProduct: build.mutation<IProduct, IProduct>({
      query: ({ id, ...product }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: product,
      }),
      transformErrorResponse: transformErrorResponseBuilder(
        createProductResponseDataTransform("Failed to update product")
      ),
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
  usePutProductMutation,
} = productApi;
