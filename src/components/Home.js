import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { addWeight, getCurrentWorkout } from "../features/workout/workoutSlice";
import ExerciseCard from "./ExerciseCard";

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExerciseCardContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 16px;
  padding: 20px 20px 50px 20px;
  /* background-color: #27496d; */
  color: #262729;

  background: rgba(250, 238, 238, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid #b1b3b5;
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

  return (
    <HomeContainer>
      <ExerciseCardContainer />
    </HomeContainer>
  );
};

export default Home;
