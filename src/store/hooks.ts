import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";

import { TDispatch, TRootState } from ".";

const useDispatch: () => TDispatch = useReduxDispatch;
const useSelector: TypedUseSelectorHook<TRootState> = useReduxSelector;

export { useDispatch, useSelector };
