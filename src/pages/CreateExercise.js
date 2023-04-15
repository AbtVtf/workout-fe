import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createExercise } from "../features/exercise/exerciseSlice";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "../components/Navbar";
import {
  Card,
  CompleteButton,
  PageContainer,
  TransparentInput,
} from "../styles/styles";

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

const Label = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ImageLabel = styled(Label)`
  height: 170px;
  display: flex;
  align-items: center;
`;

const ImageInput = styled(Input)`
  margin-left: 10px;
`;

const PublicLabel = styled(Label)`
  display: flex;
  align-items: center;
`;

const PublicCheckbox = styled.span`
  font-size: 26px;
  margin-left: 5px;
  cursor: pointer;
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
    <PageContainer>
      <Card>
        <Label>Exercise Name:</Label>
        <TransparentInput
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <ImageLabel>
          Image Url:
          {postImage === null ? (
            <TransparentInput
              value={postImage}
              onChange={(event) => setPostImage(event.target.value)}
            />
          ) : (
            <Image src={postImage} />
          )}
        </ImageLabel>

        <PublicLabel>
          Set Public:
          <PublicCheckbox onClick={() => setIsPublic(!isPublic)}>{`${
            isPublic ? "✔️" : "⛔"
          }`}</PublicCheckbox>
        </PublicLabel>

        <CompleteButton
          onClick={() => {
            handleCreateExercise();
          }}
        >
          Create Exercise
        </CompleteButton>
      </Card>
    </PageContainer>
  );
};

export default CreateExercise;
