import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addWeight } from "../features/workout/workoutSlice";
import {
  ExerciseCardContainer,
  CenteredHeading,
  Image,
  Row,
  StatsContainer,
  StatsText,
  WeightContainer,
  WeightInput,
  CompleteButton,
  LastWeightHeading,
} from "./_style";

const ExerciseCard = ({ exercise, counter, setCounter }) => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const { exercise_name, sets, reps, url, history, workout_id, exercise_id } =
    exercise;

  const handleAddWeight = (workout_id, exercise_id) => {
    setIsDone(true);
    setCounter(counter + 1);
    dispatch(
      addWeight({
        workout_id: workout_id,
        exercise_id: exercise_id,
        weight: weight,
      })
    );
  };

  return (
    <>
      <ExerciseCardContainer>
        <CenteredHeading>{exercise_name}</CenteredHeading>
        <Row>
          <StatsContainer>
            <StatsText>🎯 S: {sets}</StatsText>
            <StatsText>🔁 R: {reps}</StatsText>
            <WeightContainer>
              <StatsText>⚖️ W: </StatsText>
              <WeightInput
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
            </WeightContainer>
          </StatsContainer>
          <Image src={url} />
        </Row>
        <Row>
          {history?.length > 0 ? (
            <div>
              <h2>
                🏋️ Last weight:{" "}
                {history.map((historyObject, index) => {
                  if (index + 1 === history.length) {
                    return <span key={index}>{historyObject.weight}</span>;
                  }
                })}{" "}
                Kg
              </h2>
            </div>
          ) : (
            <LastWeightHeading>No recorded weight</LastWeightHeading>
          )}
        </Row>

        <CompleteButton
          onClick={() => handleAddWeight(workout_id, exercise_id)}
        >
          {isDone ? "👏Done & Dusted👏" : "Complete exercise"}
        </CompleteButton>
      </ExerciseCardContainer>
    </>
  );
};

export default ExerciseCard;
