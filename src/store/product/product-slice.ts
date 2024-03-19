import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../../models/product";
import { TRootState } from "..";

interface IProductState {
  products: IProduct[];
}

const initialState: IProductState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.products.concat(action.payload);
    },
  },
});

export const selectProducts = (state: TRootState) => state.productReducer.products;

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
