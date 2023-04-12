// src/features/store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import workoutSlice from "./workout/workoutSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    workout: workoutSlice,
  },
});

export default store;
