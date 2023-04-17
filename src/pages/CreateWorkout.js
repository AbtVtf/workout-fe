import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserExercises } from "../features/exercise/exerciseSlice";
import { useNavigate } from "react-router-dom";
import "react-dropdown/style.css";
import { getPublicExercises } from "../features/exercise/exerciseSlice";
import SearchExercise from "../components/SearchExercise";
import { createWorkout } from "../features/workout/workoutSlice";
import {
  Card,
  PageContainer,
  Text,
  Title,
  TransparentInput,
} from "../styles/styles";

const CreateWorkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const publicExercises = useSelector(
    (state) => state.exercise.publicExercises
  );
  const userExercises = useSelector((state) => state.exercise.userExercises);

  const [selectedExercises, setSelectedExercises] = useState([]);
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    dispatch(getPublicExercises());
    dispatch(getUserExercises());
  }, []);

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

  return (
    <PageContainer>
      <Card style={{ marginTop: "20px" }}>
        <Title>Customize your own Workout</Title>
        <TransparentInput
          placeholder="Workout Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Text>
          Set as public:{" "}
          <Text onClick={() => setIsPublic(!isPublic)}>{`${
            isPublic ? "✔️" : "⛔"
          }`}</Text>
        </Text>
      </Card>

      <div style={{ zIndex: "1000" }}>
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

      <Card>
        <Text
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Add another exercise ➕
        </Text>
      </Card>

      <Card>
        <Text onClick={handleCreateExercise}>Complete Workout</Text>
      </Card>
    </PageContainer>
  );
};

export default CreateWorkout;
