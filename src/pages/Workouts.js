import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  completeWorkout,
  getCurrentWorkout,
} from "../features/workout/workoutSlice";
import ExerciseCard from "../components/ExerciseCard";

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 30px 0;
`;

const CompleteButton = styled.button`
  height: 70px;
  font-weight: 400;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  align-self: center;
  /* letter-spacing: 1px; */
  border-radius: 10px;
  border: none;
  background-color: #208a16;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-bottom: "100px";
`;

const Workouts = () => {
  const dispatch = useDispatch();
  const workout = useSelector((state) => state.workout.currentWorkout);

  const handleFetchCurrentWorkout = () => {
    dispatch(getCurrentWorkout());
  };

  const handleFinishWorkout = () => {
    dispatch(completeWorkout(workout.workout_id));
  };

  useEffect(() => {
    handleFetchCurrentWorkout();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "30px",
      }}
    >
      <WorkoutContainer>
        {workout?.exercises.map((exercise, index) => {
          return <ExerciseCard props={exercise} key={index} />;
        })}
      </WorkoutContainer>
      <CompleteButton onClick={() => handleFinishWorkout()}>
        👊 Finish Workout 👊
      </CompleteButton>
    </div>
  );
};

export default Workouts;
