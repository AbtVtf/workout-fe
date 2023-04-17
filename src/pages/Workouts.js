import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrent,
  getUserWorkouts,
  getWorkout,
} from "../features/workout/workoutSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Horizontal,
  Icon,
  PageContainer,
  Subtitle,
  Title,
} from "../styles/styles";
import task from "../assets/images/task.png";
import start from "../assets/images/start.png";

// Import libraries

// Import components

// Import styles

// Import interfaces/types

const Workouts = () => {
  // Destructure props
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userWorkouts = useSelector((state) => state.workout.userWorkouts);
  useEffect(() => {
    dispatch(getUserWorkouts());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Declare state and hooks

  // Declare functions

  // Render component
  return (
    <PageContainer>
      <Title>Select a workout:</Title>

      {userWorkouts?.length > 0 ? (
        userWorkouts?.map((workout, index) => {
          return (
            <Card
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
              <Horizontal>
                <Subtitle>{workout.name} </Subtitle>
                <Icon src={start} />
              </Horizontal>
            </Card>
          );
        })
      ) : (
        <Subtitle>Looks Like you dont have any workouts creted</Subtitle>
      )}
    </PageContainer>
  );
};

export default Workouts;
