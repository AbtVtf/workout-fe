// src/features/rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import workoutReducer from "./workout/workoutSlice";
import exerciseReducer from "./exercise/exerciseSlice";
// Import other reducers as needed

const rootReducer = combineReducers({
  auth: authReducer,
  workout: workoutReducer,
  exercise: exerciseReducer,
  // Add other reducers as needed
});

export default rootReducer;
