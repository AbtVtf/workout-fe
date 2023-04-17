import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  Card,
  Column,
  CompleteButton,
  Horizontal,
  Subtitle,
  Text,
  Title,
  TransparentInput,
} from "../styles/styles";
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
    <Card>
      {!isLocked ? (
        <>
          {text ? (
            <Title>{text}</Title>
          ) : (
            <>
              <TransparentInput
                type="text"
                placeholder={"Select or search an exercise"}
                value={searchQuery || text}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </>
          )}
          {text === null && (
            <>
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
                  className="myClassName"
                />
              ) : (
                <Column
                  style={{
                    minHeight: "200px",
                    maxHeight: "200px",
                    overflowY: "scroll",
                    gap: "10px",
                  }}
                >
                  {filteredExercises.length !== 0 ? (
                    filteredExercises.map((item) => {
                      return (
                        <Text
                          onClick={() => {
                            setSelected(item.id);
                            setSearchQuery("");
                            setText(item.name);
                          }}
                        >
                          {item.name}
                        </Text>
                      );
                    })
                  ) : (
                    <Text style={{ width: "60vw" }}>No exercise found</Text>
                  )}
                </Column>
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
            </>
          )}
          {text !== null && (
            <>
              <Horizontal>
                <Subtitle>Sets: </Subtitle>
                <TransparentInput
                  value={sets}
                  onChange={(e) => setSets(e.target.value)}
                />

                <Subtitle>Reps: </Subtitle>
                <TransparentInput
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                />
              </Horizontal>
              <CompleteButton onClick={handleLockIn}>Lock In</CompleteButton>
            </>
          )}
        </>
      ) : (
        <>
          <>
            <Subtitle
              onClick={() => {
                setIsLocked(false);
                setText(null);
                setSearchQuery("");
                setReps(0);
                setSets(0);
              }}
              style={{ position: "absolute", right: "15px", top: "10px" }}
            >
              ❌
            </Subtitle>
          </>
          <Title>
            Locked in: <br />
            {text}
          </Title>
          <Subtitle>
            {sets} sets / {reps} reps
          </Subtitle>
        </>
      )}
    </Card>
  );
};

export default SearchExercise;
