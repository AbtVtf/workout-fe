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

const ExerciseCard = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 16px;
  padding: 20px 20px 50px 20px;
`;

const CenteredHeading = styled.h1`
  align-self: center;
`;

const Image = styled.img`
  width: 300px;
  align-self: center;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const WeightInput = styled.input`
  width: 75px;
  height: 20px;
`;

const CompleteButton = styled.button`
  height: 30px;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  align-self: center;
  letter-spacing: 2px;
`;

const Workouts = () => {
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
    <WorkoutContainer>
      {workouts?.exercises.map((exercise) => {
        return (
          <ExerciseCard>
            <CenteredHeading>{exercise.exercise_name}</CenteredHeading>
            <Image src={exercise.url} />
            <Row>
              <h1>Sets: {exercise.sets}</h1>
              <h1>Reps: {exercise.reps}</h1>
            </Row>
            <Row>
              {exercise.history.length > 0 ? (
                <div>
                  <h2>
                    Past weight:{" "}
                    {exercise.history.map((historyObject, index) => {
                      if (index + 1 === exercise.history.length) {
                        return <span>{historyObject.weight}</span>;
                      }
                    })}{" "}
                    Kg
                  </h2>
                </div>
              ) : (
                <h2>No past weight </h2>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "15px",
                  fontSize: "20px",
                }}
              >
                <h3>Weight</h3>
                <WeightInput
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </div>
            </Row>
            <CompleteButton
              onClick={() =>
                handleAddWeight(exercise.workout_id, exercise.exercise_id)
              }
            >
              Complete Exercise
            </CompleteButton>
          </ExerciseCard>
        );
      })}
    </WorkoutContainer>
  );
};

export default Workouts;
