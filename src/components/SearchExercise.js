import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// Import libraries

// Import components

// Import styles

// Import interfaces/types
const ExerciseSelectionContainer = styled.div`
  width: 80vw;
  margin-bottom: 20px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 16px;
  color: #262729;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
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
  padding: 5px;
  font-size: 18px;
  margin-bottom: 40px;
`;

const CompleteButton = styled.label`
  height: 30px;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  align-self: center;
  border-radius: 10px;
  border: none;
  background-color: #208a16;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 1.2px;
`;

const SearchExercise = ({
  publicExercises,
  userExercises,
  selectedExercises,
  setSelectedExercises,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredExercises, setFilteredExercises] = useState(null);
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState(null);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  // Destructure props

  // Declare state and hooks

  const handleLockIn = () => {
    let obj = { id: selected, sets: sets, reps: reps };
    setSelectedExercises([...selectedExercises, obj]);
    setIsLocked(true);
  };

  useEffect(() => {
    searchQuery !== null &&
      setFilteredExercises(
        publicExercises.filter((exercise) =>
          exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
  }, [searchQuery]);
  // Declare functions

  // Render component
  return (
    <ExerciseSelectionContainer>
      {!isLocked ? (
        <>
          {" "}
          <h3>Select or search an exercise:</h3>
          <Input
            type="text"
            placeholder={text}
            value={searchQuery || text}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {text === null && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                zIndex: "10",
              }}
            >
              {searchQuery === "" ? (
                <Dropdown
                  options={publicExercises?.map((element) => {
                    return { value: element.id, label: element.name };
                  })}
                  onChange={(event) => {
                    setSelected(event.value);
                    setText(event.label);
                  }}
                  placeholder="Select a public exercise"
                />
              ) : (
                <div
                  style={{
                    maxHeight: "100px",
                    overflow: "scroll",
                    width: "70vw",
                    textAlign: "left",
                    paddingLeft: "10px",
                  }}
                >
                  {filteredExercises.length !== 0 ? (
                    filteredExercises.map((item) => {
                      return (
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSelected(item.id);
                            setSearchQuery("");
                            setText(item.name);
                          }}
                        >
                          {item.name}
                        </p>
                      );
                    })
                  ) : (
                    <p>No exercise found</p>
                  )}
                </div>
              )}
              <Dropdown
                options={userExercises?.map((element) => {
                  return { value: element.id, label: element.name };
                })}
                onChange={(event) => {
                  setSelected(event.value);
                  setText(event.label);
                }}
                placeholder="Select a private exercise"
              />
            </div>
          )}
          {text !== null && (
            <div>
              <div
                style={{
                  display: "flex",
                  // justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <h2>Sets: </h2>
                <Input
                  style={{
                    width: "50px",
                    height: "20px",
                    fontSize: "26px",
                    marginBottom: 0,
                  }}
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  //   justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <h2>Reps: </h2>
                <Input
                  style={{
                    width: "50px",
                    height: "20px",
                    fontSize: "26px",
                    marginBottom: 0,
                  }}
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                />
              </div>
              <CompleteButton onClick={handleLockIn}>Lock In</CompleteButton>
            </div>
          )}
        </>
      ) : (
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              fontSize: "25px",
              justifyContent: "flex-end",
            }}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsLocked(false);
                setText(null);
                setSearchQuery("");
              }}
            >
              ❌
            </span>
          </div>
          <h1 style={{ marginTop: "60px" }}>
            Locked in: <br />
            {text}
          </h1>
          <h2>
            {sets} sets / {reps} reps
          </h2>
        </div>
      )}
    </ExerciseSelectionContainer>
  );
};

export default SearchExercise;
