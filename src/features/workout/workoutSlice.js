// src/features/workout/workoutSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../apiCall";

const initialState = {
  currentWorkout: null,
  isLoading: false,
  error: null,
};

// Add the async actions for your API routes here
export const addWeight = createAsyncThunk(
  "workout/addWeight",
  async (
    { workout_id, exercise_id, weight },
    { getState, rejectWithValue }
  ) => {
    try {
      const response = await apiCall(
        `${process.env.REACT_APP_API_BASE_URL}/api/workouts/weight`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: getState().auth.token,
          },
          body: JSON.stringify({ workout_id, exercise_id, weight }),
        }
      );

      if (!response.ok) {
        throw new Error("Error adding weight");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentWorkout = createAsyncThunk(
  "workout/getCurrentWorkout",
  async (_, { getState, rejectWithValue }) => {
    try {
      console.log("2");
      const response = await apiCall(
        `${process.env.REACT_APP_API_BASE_URL}/api/workouts/current`
      );

      if (!response.ok) {
        throw new Error("Error fetching current workout");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const completeWorkout = createAsyncThunk(
  "workout/completeWorkout",
  async (workout_id, { getState, rejectWithValue }) => {
    try {
      const response = await apiCall(
        `${process.env.REACT_APP_API_BASE_URL}/api/workouts/complete`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: getState().auth.token,
          },
          body: JSON.stringify({ workout_id }),
        }
      );

      if (!response.ok) {
        throw new Error("Error completing workout");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    getCurrentWorkoutRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getCurrentWorkoutSuccess: (state, action) => {
      state.isLoading = false;
      state.currentWorkout = action.payload;
      state.error = null;
    },
    getCurrentWorkoutFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addWeight.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addWeight.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCurrentWorkout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentWorkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentWorkout = action.payload;
        state.error = null;
      })
      .addCase(getCurrentWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(completeWorkout.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(completeWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  getCurrentWorkoutRequest,
  getCurrentWorkoutSuccess,
  getCurrentWorkoutFailure,
} = workoutSlice.actions;

export default workoutSlice.reducer;
