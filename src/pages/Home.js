import React from "react";
import styled from "styled-components";
import {
  Card,
  Icon,
  PageContainer,
  Subtitle,
  Text,
  Title,
  Horizontal,
  Column,
} from "../styles/styles";
import { useNavigate } from "react-router-dom";
import task from "../assets/images/task.png";
import start from "../assets/images/start.png";
import { useDispatch } from "react-redux";
import { getCurrentWorkout } from "../features/workout/workoutSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    dispatch(getCurrentWorkout());
    navigate("/workout");
  };
  return (
    <PageContainer>
      <Card style={{ marginTop: "20px" }}>
        <Title>
          Track your progress, access personalized workout plans, and stay
          motivated with our easy-to-use gym app.
        </Title>
      </Card>
      <Card
        onClick={() => {
          navigate(`/create-workout`);
        }}
        style={{ cursor: "pointer" }}
      >
        <Horizontal>
          <Subtitle>Create a workout</Subtitle>
          <Icon src={task} />
        </Horizontal>
      </Card>
      <Card
        onClick={() => {
          navigate(`/create-exercise`);
        }}
        style={{ cursor: "pointer" }}
      >
        <Horizontal>
          <Subtitle>Create an exercise</Subtitle>
          <Icon src={task} />
        </Horizontal>
      </Card>
      <Card onClick={handleGetStarted} style={{ cursor: "pointer" }}>
        <Horizontal>
          <Title>Get Started</Title>
          <Icon src={start} />
        </Horizontal>
        <Horizontal>
          <Text>Follow a premade path</Text>
        </Horizontal>
      </Card>
    </PageContainer>
  );
};

export default Home;
