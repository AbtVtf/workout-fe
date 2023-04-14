import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrent,
  getUserWorkouts,
  getWorkout,
} from "../features/workout/workoutSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Import libraries

// Import components

// Import styles

// Import interfaces/types

const ExerciseCardContainer = styled.div`
  width: 80vw;
  display: flex;
  border: 1px solid black;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px 20px 50px 20px; */
  /* background-color: #27496d; */
  color: #262729;
  padding-left: 20px;
  padding-right: 20px;
  background: rgba(250, 238, 238, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid #b1b3b5;
`;
const Workouts = () => {
  // Destructure props
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userWorkouts = useSelector((state) => state.workout.userWorkouts);
  useEffect(() => {
    dispatch(getUserWorkouts());
  }, []);

  // Declare state and hooks

  // Declare functions

  // Render component
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        alignItems: "center",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <h1>Select a workout:</h1>
      <ExerciseCardContainer
        style={{ display: "flex" }}
        onClick={() => {
          navigate(`/create-workout`);
        }}
      >
        <h2>Create a workout</h2>
        <h1>⚗️</h1>
      </ExerciseCardContainer>
      {userWorkouts?.length > 0 ? (
        userWorkouts?.map((workout, index) => {
          return (
            <ExerciseCardContainer
              style={{ display: "flex" }}
              onClick={() => {
                try {
                  dispatch(clearCurrent());
                  dispatch(getWorkout(workout.id));
                  navigate(`/workout/${workout.id}`);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <h2>{workout.name} </h2>
              <h1>▶️</h1>
            </ExerciseCardContainer>
          );
        })
      ) : (
        <h2>Looks Like you dont have any workouts creted</h2>
      )}
    </div>
  );
};

export default Workouts;
