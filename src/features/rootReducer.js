// src/features/rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import workoutReducer from "./workout/workoutSlice";
// Import other reducers as needed

const rootReducer = combineReducers({
  auth: authReducer,
  workout: workoutReducer,
  // Add other reducers as needed
});

export default rootReducer;
