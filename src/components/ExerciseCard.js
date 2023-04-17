import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addWeight } from "../features/workout/workoutSlice";
import {
  Image,
  Row,
  CompleteButton,
  ExCard,
  Title,
  TransparentInput,
  Horizontal,
  Icon,
  ImageWrapper,
  Subtitle,
  Column,
  WeightWrapper,
  Shaker,
  IconNumber,
  Card,
} from "../styles/styles";
import weightIcon from "../assets/images/weight.png";
import setsIcon from "../assets/images/counter.png";
import repeatIcon from "../assets/images/repeat.png";
import historyIcon from "../assets/images/history.png";
import logo from "../assets/images/logo512.png";

const ExerciseCard = ({ exercise, counter, setCounter }) => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [noWeight, setNoWeight] = useState(false);
  const { exercise_name, sets, reps, url, history, workout_id, exercise_id } =
    exercise;

  const handleAddWeight = (workout_id, exercise_id) => {
    if (weight === 0) {
      setNoWeight(true);
    } else {
      setIsDone(true);
      setCounter(counter + 1);
      dispatch(
        addWeight({
          workout_id: workout_id,
          exercise_id: exercise_id,
          weight: weight,
        })
      );
    }
  };

  return (
    <>
      <Card>
        <Horizontal>
          <Title style={{ borderBottom: "1px solid black" }}>
            {exercise_name}
          </Title>
        </Horizontal>

        <Horizontal>
          <Column style={{ maxWidth: "150px" }}>
            <IconNumber>
              <Icon src={setsIcon} /> <Title>{sets}</Title>
            </IconNumber>
            <IconNumber>
              <Icon src={repeatIcon} /> <Title>{reps}</Title>
            </IconNumber>
            {history?.length > 0 ? (
              <IconNumber>
                <Icon src={historyIcon} />{" "}
                {history.map((historyObject, index) => {
                  if (index + 1 === history.length) {
                    return <Title key={index}> {historyObject.weight}</Title>;
                  }
                })}
              </IconNumber>
            ) : (
              <IconNumber>
                <Icon src={historyIcon} /> <Title>- - -</Title>
              </IconNumber>
            )}
            {noWeight ? (
              <Shaker onClick={() => setNoWeight(false)}>
                <Icon src={weightIcon} />
                <TransparentInput
                  style={{ fontWeight: 700, fontSize: "26px", width: "50px" }}
                  value={weight}
                  onChange={(event) => {
                    setWeight(event.target.value);
                  }}
                />
              </Shaker>
            ) : (
              <Horizontal>
                <Icon src={weightIcon} />
                <TransparentInput
                  style={{ fontWeight: 700, fontSize: "26px", width: "50px" }}
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </Horizontal>
            )}
          </Column>
          <Column style={{ gap: "20px" }}>
            <ImageWrapper>
              <Image src={url ? url : logo} />
            </ImageWrapper>
            <CompleteButton
              onClick={() => handleAddWeight(workout_id, exercise_id)}
              disabled={isDone}
            >
              {isDone ? "Exercise Completed" : "Complete Exercise"}
            </CompleteButton>
          </Column>
        </Horizontal>
      </Card>
    </>
  );
};

export default ExerciseCard;
