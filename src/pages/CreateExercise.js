import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ImageUploader from "../components/ImageUploader";
import { createExercise } from "../features/exercise/exerciseSlice";
import { useNavigate } from "react-router-dom";

const CreateExerciseContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ExerciseCardContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 16px;
  padding: 20px 20px 50px 20px;
  color: #262729;
  background: rgba(250, 238, 238, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid #b1b3b5;
  gap: 30px;
`;

const Image = styled.img`
  min-width: 170px;
  height: 170px;
  width: 170px;
  border-radius: 20%;
  margin-bottom: 10px;
  border: 1px solid #666869;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
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
  /* letter-spacing: 1px; */
  border-radius: 10px;
  border: none;
  background-color: #208a16;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 1.2px;
`;

const CreateExercise = () => {
  const dispatch = useDispatch();
  const [postImage, setPostImage] = useState(null);
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();

  const handleCreateExercise = () => {
    try {
      dispatch(
        createExercise({
          name: name,
          url: postImage,
          isPublic: isPublic ? 1 : 0,
        })
      );
      navigate("/auth");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CreateExerciseContainer>
      <ExerciseCardContainer>
        <span style={{ fontSize: "20px", fontWeight: 600 }}>
          Exercise Name:
        </span>
        <Input value={name} onChange={(event) => setName(event.target.value)} />

        <div style={{ height: "170px", display: "flex", alignItems: "center" }}>
          {" "}
          {postImage === null ? (
            <>
              <span style={{ fontSize: "20px", fontWeight: 600 }}>
                Image Url:
              </span>
              <Input
                value={postImage}
                onChange={(event) => setPostImage(event.target.value)}
              />
            </>
          ) : (
            <Image src={postImage} />
          )}
        </div>
        <span style={{ fontSize: "20px", fontWeight: 600 }}>
          {`Set Public: `}
          <span
            style={{ fontSize: "26px" }}
            onClick={() => setIsPublic(!isPublic)}
          >{`${isPublic ? "✔️" : "⛔"}`}</span>
        </span>
        <CompleteButton
          onClick={() => {
            handleCreateExercise();
          }}
        >
          Create Exercise
        </CompleteButton>
      </ExerciseCardContainer>
    </CreateExerciseContainer>
  );
};

export default CreateExercise;
