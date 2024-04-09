import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct, IProductsFilterRequest, IProductsSearchRequest } from "../../models/product";
import { TRootState } from "..";

interface IProductState {
  filterProductsQueryData: IProductsFilterRequest;
  searchProductsQueryData: IProductsSearchRequest;
  searchProductsResults: IProduct[];
}

const filterProductsQueryDataInitialState = {
  filter: {
    category: null,
  },
  queryParams: {
    limit: 9,
    skip: 0,
    select: [],
  },
};

const searchProductsQueryDataInitialState = {
  search: {
    title: "",
  },
  queryParams: {
    limit: 9,
    skip: 0,
    select: [],
  },
};

const initialState: IProductState = {
  filterProductsQueryData: filterProductsQueryDataInitialState,
  searchProductsQueryData: searchProductsQueryDataInitialState,
  searchProductsResults: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilterProductsQueryData(state, action: PayloadAction<IProductsFilterRequest>) {
      state.filterProductsQueryData = action.payload;
    },
    setSearchProductsQueryData(state, action: PayloadAction<IProductsSearchRequest>) {
      state.searchProductsQueryData = action.payload;
    },
    setSearchProductsResults(state, action: PayloadAction<IProduct[]>) {
      state.searchProductsResults = action.payload;
    },
    addSearchProductsResults(state, action: PayloadAction<IProduct[]>) {
      state.searchProductsResults.push(...action.payload);
    },
  },
});

export const selectFilterProductsQueryData = (state: TRootState) => state.productReducer.filterProductsQueryData;
export const selectSearchProductsQueryData = (state: TRootState) => state.productReducer.searchProductsQueryData;
export const selectSearchProductsResult = (state: TRootState) => state.productReducer.searchProductsResults;

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;

export { filterProductsQueryDataInitialState, searchProductsQueryDataInitialState };
