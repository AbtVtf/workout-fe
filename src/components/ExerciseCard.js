import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { addWeight, getCurrentWorkout } from "../features/workout/workoutSlice";

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

const CenteredHeading = styled.h1`
  align-self: center;
  font-size: 28px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  /* border-bottom: 1px solid black; */
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`;

const Image = styled.img`
  width: 170px;
  align-self: center;
  border-radius: 20%;
  margin-bottom: 10px;
  border: 1px solid #666869;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-weight: 500;
`;

const WeightInput = styled.input`
  width: 35px;
  height: 27px;
  margin: 0;
  text-align: center;
  border: none;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 10px;
`;

const CompleteButton = styled.button`
  height: 40px;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  align-self: center;
  /* letter-spacing: 1px; */
  border-radius: 10px;
  border: none;
  background-color: #208a16;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "150px",
              justifyContent: "space-around",
            }}
          >
            <span style={{ fontSize: "22px", fontWeight: 600 }}>
              🎯 S: {sets}
            </span>
            <span style={{ fontSize: "22px", fontWeight: 600 }}>
              🔁 R: {reps}
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "15px",
                fontSize: "20px",
              }}
            >
              <span style={{ fontSize: "22px", fontWeight: 600 }}>⚖️ W: </span>
              <WeightInput
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
            </div>
          </div>
          <Image src={url} />
        </Row>
        <Row>
          {history?.length > 0 ? (
            <div>
              <h2>
                🏋️ Last weight:{" "}
                {history.map((historyObject, index) => {
                  if (index + 1 === history.length) {
                    return <span>{historyObject.weight}</span>;
                  }
                })}{" "}
                Kg
              </h2>
            </div>
          ) : (
            <h2 style={{ fontWeight: "400" }}>No recorded weight </h2>
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
