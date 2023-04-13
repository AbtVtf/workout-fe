import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { addWeight, getCurrentWorkout } from "../features/workout/workoutSlice";
import ExerciseCard from "./ExerciseCard";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 30px 0;
`;

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const workouts = useSelector((state) => state.workout.currentWorkout);
  const [weight, setWeight] = useState(0);

  const handleFetchCurrentWorkout = () => {
    // dispatch(getCurrentWorkout());
  };

  useEffect(() => {
    handleFetchCurrentWorkout();
  }, []);

  return <HomeContainer></HomeContainer>;
};

export default Home;
