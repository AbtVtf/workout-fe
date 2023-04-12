import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { getCurrentWorkout } from "../features/workout/workoutSlice";
import { useEffect } from "react";
const Card = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Workouts = () => {
  const dispatch = useDispatch();

  const handleFetchCurrentWorkout = () => {
    dispatch(getCurrentWorkout());
  };
  useEffect(() => {
    console.log("irna");
    handleFetchCurrentWorkout();
  }, []);
  return <Card></Card>;
};

export default Workouts;
