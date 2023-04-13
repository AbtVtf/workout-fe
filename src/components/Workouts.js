import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { addWeight, getCurrentWorkout } from "../features/workout/workoutSlice";
import ExerciseCard from "./ExerciseCard";

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 30px 0;
`;

const Workouts = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const workouts = useSelector((state) => state.workout.currentWorkout);
  const [weight, setWeight] = useState(0);

  const handleFetchCurrentWorkout = () => {
    dispatch(getCurrentWorkout());
  };

  useEffect(() => {
    handleFetchCurrentWorkout();
  }, []);

  return (
    <WorkoutContainer>
      {workouts?.exercises.map((exercise) => {
        return <ExerciseCard props={exercise} />;
      })}
    </WorkoutContainer>
  );
};

export default Workouts;
