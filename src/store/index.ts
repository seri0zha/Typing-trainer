import { createStore } from "@reduxjs/toolkit";
import trainerReducer from "./reducers/trainerReducer";
import { combineReducers } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import statsReducer from "./reducers/statsReducer";

const rootReducer = combineReducers({
  trainer: trainerReducer,
  stats: statsReducer
});

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;