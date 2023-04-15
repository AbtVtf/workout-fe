import React from "react";
import styled from "styled-components";
import icon from "../assets/images/logo512.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import {
  NavbarContainer,
  CenterWrapper,
  LogoImage,
  Title,
} from "../styles/styles";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingOut = () => {
    dispatch(logout());
    navigate("/auth");
  };
  return (
    <NavbarContainer>
      <Title onClick={() => navigate("/")}>Home</Title>
      <CenterWrapper onClick={() => navigate("/workouts")}>
        <LogoImage src={icon} />
      </CenterWrapper>
      <Title onClick={handleSingOut}>Sign Out</Title>
    </NavbarContainer>
  );
};

export default Navbar;
