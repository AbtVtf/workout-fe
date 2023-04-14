import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserExercises } from "../features/exercise/exerciseSlice";
import { useNavigate } from "react-router-dom";
import "react-dropdown/style.css";
import { getPublicExercises } from "../features/exercise/exerciseSlice";
import SearchExercise from "../components/SearchExercise";
import { createWorkout } from "../features/workout/workoutSlice";

const CreateExerciseContainer = styled.div`
  min-height: ${window.innerHeight - 62}px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  /* justify-content: center; */
  align-items: center;
`;
const ExerciseCardContainer = styled.div`
  width: 90%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 16px;
  color: #262729;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background: rgba(250, 238, 238, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid #b1b3b5;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  /* width: 288px; */
  padding: 5px;
  font-size: 18px;
`;

const CreateWorkout = () => {
  const dispatch = useDispatch();
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();
  const publicExercises = useSelector(
    (state) => state.exercise.publicExercises
  );
  const userExercises = useSelector((state) => state.exercise.userExercises);
  const [number, setNumber] = useState(0);
  const handleCreateExercise = () => {
    try {
      dispatch(
        createWorkout({
          name: name,
          isPublic: isPublic ? 1 : 0,
          exercises: selectedExercises,
        })
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dispatch(getPublicExercises());
    dispatch(getUserExercises());
  }, []);

  return (
    <CreateExerciseContainer>
      <ExerciseCardContainer style={{ width: "80vw" }}>
        <h1>Customize your own Workout</h1>
        <Input
          placeholder="Workout Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <span style={{ marginTop: "8px" }}>
          Set as public:{" "}
          <span
            style={{ fontSize: "22px", cursor: "pointer" }}
            onClick={() => setIsPublic(!isPublic)}
          >{`${isPublic ? "✔️" : "⛔"}`}</span>
        </span>
      </ExerciseCardContainer>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Array.from({ length: number }, (v, i) => i).map((index) => {
          return (
            <SearchExercise
              publicExercises={publicExercises}
              userExercises={userExercises}
              setSelectedExercises={setSelectedExercises}
              selectedExercises={selectedExercises}
            />
          );
        })}
      </div>
      <ExerciseCardContainer
        style={{
          paddingTop: "20px",
          width: "80vw",
        }}
      >
        <span
          style={{ fontSize: "22px", fontWeight: 700, zIndex: "-1" }}
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Add another exercise ➕
        </span>
      </ExerciseCardContainer>
      <ExerciseCardContainer
        style={{
          paddingTop: "20px",
          width: "80vw",
        }}
      >
        <span
          style={{ fontSize: "22px", fontWeight: 700, zIndex: "-1" }}
          onClick={handleCreateExercise}
        >
          Complete Workout
        </span>
      </ExerciseCardContainer>
    </CreateExerciseContainer>
  );
};

export default CreateWorkout;
