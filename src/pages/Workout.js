import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  completeWorkout,
  getCurrentWorkout,
} from "../features/workout/workoutSlice";
import ExerciseCard from "../components/ExerciseCard";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import loader from "../assets/images/loader.gif";
import { CompleteButton, Image, PageContainer } from "../styles/styles";

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 30px 0;
  min-height: ${window.innerHeight - 60}px;
`;

const Workout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.workout.isLoading);
  const workout = useSelector((state) => state.workout.currentWorkout);
  const [doneCounter, setDoneCounter] = useState(0);

  const handleFinishWorkout = () => {
    dispatch(completeWorkout(workout.workout_id));
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      {isLoading ? (
        <Image src={loader} />
      ) : (
        <>
          {" "}
          <TopNav counter={doneCounter} length={workout?.exercises.length} />
          <WorkoutContainer>
            {workout?.exercises?.map((exercise, index) => {
              return (
                <ExerciseCard
                  exercise={exercise}
                  setCounter={setDoneCounter}
                  counter={doneCounter}
                  key={index}
                />
              );
            })}
          </WorkoutContainer>
          <CompleteButton onClick={() => handleFinishWorkout()}>
            👊 Finish Workout 👊
          </CompleteButton>
        </>
      )}
    </PageContainer>
  );
};

export default Workout;
