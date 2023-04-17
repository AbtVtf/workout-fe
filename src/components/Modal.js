import React from "react";
import { CompleteButton, Image, ModalContainer, Title } from "../styles/styles";
import winner from "../assets/images/winner.png";
import { useNavigate } from "react-router-dom";
// Import libraries

// Import components

// Import styles

// Import interfaces/types

const Modal = ({ text }) => {
  // Destructure props
  const navigate = useNavigate();
  // Declare state and hooks

  // Declare functions

  // Render component
  return (
    <ModalContainer>
      <Title style={{ textAlign: "center", fontSize: "35px" }}>{text}</Title>
      <Image src={winner} />
      <CompleteButton onClick={() => navigate("/")}>Return Home</CompleteButton>
    </ModalContainer>
  );
};

export default Modal;
