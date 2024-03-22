import { createApi, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

import { IResponseError } from "../models/app";

const BASE_URL = "https://dummyjson.com";

const transformErrorResponseBuilder = (dataTransform: (data: unknown) => string) => {
  return (response: FetchBaseQueryError): IResponseError => {
    let responseStatus = null;
    let responseError = "";

    if (typeof response.status === "number") {
      responseStatus = response.status;
      responseError = dataTransform(response.data);
    } else {
      responseError = response.error;
    }

    return {
      status: responseStatus,
      error: responseError,
    };
  };
};

const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({}),
});

export { baseApi, transformErrorResponseBuilder };
