import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { addWeight, getCurrentWorkout } from "../features/workout/workoutSlice";

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ExerciseCardContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 16px;
  padding: 20px 20px 50px 20px;
  background-color: #27496d;
  color: white;
`;

const CenteredHeading = styled.h1`
  align-self: center;
  font-size: 28px;
  transform: skew(-12deg);
  margin-bottom: "20px";
`;

const Image = styled.img`
  width: 200px;
  align-self: center;
  border-radius: 20%;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-weight: 500;
`;

const WeightInput = styled.input`
  width: 35px;
  height: 20px;
  margin: 0;
  text-align: center;
  border: none;
  font-size: 20px;
  font-weight: 500;
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
  letter-spacing: 2px;
  border-radius: 10px;
  border: none;
  background-color: #00a8cc;
  color: white;
  font-weight: 500;
`;

const ExerciseCard = ({ props }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const workouts = useSelector((state) => state.workout.currentWorkout);
  const [weight, setWeight] = useState(0);

  const handleFetchCurrentWorkout = () => {
    dispatch(getCurrentWorkout());
  };

  const handleAddWeight = (workout_id, exercise_id) => {
    dispatch(
      addWeight({
        workout_id: workout_id,
        exercise_id: exercise_id,
        weight: weight,
      })
    );
  };

  useEffect(() => {
    handleFetchCurrentWorkout();
  }, [token]);

  return (
    <ExerciseCardContainer>
      <CenteredHeading>{props.exercise_name}</CenteredHeading>
      <Image src={props.url} />
      <Row>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span style={{ fontSize: "22px" }}>S: {props.sets}</span>
          <span style={{ fontSize: "22px" }}>R: {props.reps}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            fontSize: "20px",
          }}
        >
          <span style={{ fontSize: "22px" }}>Weight</span>
          <WeightInput
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
        </div>
      </Row>
      <Row>
        {props.history.length > 0 ? (
          <div>
            <h2>
              Past weight:{" "}
              {props.history.map((historyObject, index) => {
                if (index + 1 === props.history.length) {
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
        onClick={() => handleAddWeight(props.workout_id, props.exercise_id)}
      >
        Complete Exercise
      </CompleteButton>
    </ExerciseCardContainer>
  );
};

export default ExerciseCard;
