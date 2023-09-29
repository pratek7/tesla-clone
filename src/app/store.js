import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/carSclice/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
