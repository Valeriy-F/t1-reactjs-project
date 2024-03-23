import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductsFilterRequest, IProductsSearchRequest } from "../../models/product";
import { TRootState } from "..";

interface IProductState {
  filterProductsQueryData: IProductsFilterRequest;
  searchProductsQueryData: IProductsSearchRequest;
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
  },
});

export const selectFilterProductsQueryData = (state: TRootState) => state.productReducer.filterProductsQueryData;
export const selectSearchProductsQueryData = (state: TRootState) => state.productReducer.searchProductsQueryData;

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;

export { filterProductsQueryDataInitialState, searchProductsQueryDataInitialState };
