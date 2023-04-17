import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createExercise } from "../features/exercise/exerciseSlice";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "../components/Navbar";
import {
  Card,
  CompleteButton,
  Horizontal,
  Image,
  PageContainer,
  Title,
  TransparentInput,
} from "../styles/styles";
import Modal from "../components/Modal";

const CreateExercise = () => {
  const dispatch = useDispatch();
  const [postImage, setPostImage] = useState(null);
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleCreateExercise = () => {
    try {
      dispatch(
        createExercise({
          name: name,
          url: postImage,
          isPublic: isPublic ? 1 : 0,
        })
      );
      setShowModal(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <PageContainer>
      <Card style={{ marginTop: "20px" }}>
        <Title>Exercise Name:</Title>
        <TransparentInput
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Horizontal>
          <Title>Image Url:</Title>
          {postImage === null ? (
            <TransparentInput
              value={postImage}
              onChange={(event) => setPostImage(event.target.value)}
            />
          ) : (
            <Image src={postImage} />
          )}
        </Horizontal>

        <Title>
          Set Public:
          <Title onClick={() => setIsPublic(!isPublic)}>{`${
            isPublic ? "✔️" : "⛔"
          }`}</Title>
        </Title>

        <CompleteButton
          onClick={() => {
            handleCreateExercise();
          }}
        >
          Create Exercise
        </CompleteButton>
      </Card>
      {showModal && <Modal text={"Exercise successfully created"} />}
    </PageContainer>
  );
};

export default CreateExercise;
