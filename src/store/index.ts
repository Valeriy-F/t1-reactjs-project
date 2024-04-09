import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import productApi from "./product/product-api";
import { productReducer } from "./product/product-slice";

type TRootState = ReturnType<typeof store.getState>;
type TDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...[productApi.middleware]),
});

setupListeners(store.dispatch);

export { useDispatch, useSelector } from "./hooks";

export { type TDispatch, type TRootState };

export { store };
