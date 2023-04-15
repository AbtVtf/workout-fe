import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addWeight } from "../features/workout/workoutSlice";
import {
  Image,
  Row,
  Column,
  Text,
  CompleteButton,
  Card,
  Title,
  TransparentInput,
} from "../styles/styles";

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
      <Card>
        <Title>{exercise_name}</Title>
        <Row>
          <Column>
            <Text>🎯 S: {sets}</Text>
            <Text>🔁 R: {reps}</Text>
            <Row>
              <Text>⚖️ W: </Text>
              <TransparentInput
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
            </Row>
          </Column>
          <Image src={url} />
        </Row>
        <Row>
          {history?.length > 0 ? (
            <h2>
              🏋️ Last weight:{" "}
              {history.map((historyObject, index) => {
                if (index + 1 === history.length) {
                  return <span key={index}>{historyObject.weight}</span>;
                }
              })}{" "}
              Kg
            </h2>
          ) : (
            <Title>No recorded weight</Title>
          )}
        </Row>

        <CompleteButton
          onClick={() => handleAddWeight(workout_id, exercise_id)}
        >
          {isDone ? "👏Done & Dusted👏" : "Complete exercise"}
        </CompleteButton>
      </Card>
    </>
  );
};

export default ExerciseCard;
