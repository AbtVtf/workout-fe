// src/features/workout/exerciseSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../apiCall";

export const createExercise = createAsyncThunk(
  "exercise/createExercise",
  async (exercise, { getState, rejectWithValue }) => {
    try {
      const response = await apiCall(
        `${process.env.REACT_APP_API_BASE_URL}/api/exercises/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: getState().auth.token,
          },
          body: JSON.stringify({
            name: exercise.name,
            url: exercise.url,
            isPublic: exercise.isPublic,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error creating exercise");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPublicExercises = createAsyncThunk(
  "workout/getPublicExercises",
  async (_, { rejectWithValue }) => {
    try {
      console.log("sec");
      const response = await apiCall(
        `${process.env.REACT_APP_API_BASE_URL}/api/exercises/public-exercises`
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

export const getUserExercises = createAsyncThunk(
  "workout/getUserExercises",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiCall(
        `${process.env.REACT_APP_API_BASE_URL}/api/exercises/user-exercises`
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

const initialState = {
  isLoading: false,
  error: null,
  publicExercises: [],
  userExercises: [],
};

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createExercise.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createExercise.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPublicExercises.fulfilled, (state, action) => {
        state.publicExercises = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserExercises.fulfilled, (state, action) => {
        state.userExercises = action.payload;
        state.isLoading = false;
      });
  },
});

export const {} = exerciseSlice.actions;

export default exerciseSlice.reducer;
