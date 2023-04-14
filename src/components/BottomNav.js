import React from "react";
import styled from "styled-components";
import icon from "../assets/images/logo512.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import {
  NavbarContainer,
  NavbarItem,
  LogoContainer,
  LogoImage,
} from "./_style";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingOut = () => {
    dispatch(logout());
    navigate("/auth");
  };
  return (
    <NavbarContainer>
      <NavbarItem onClick={() => navigate("/")}>
        <h1>Home</h1>
      </NavbarItem>
      <NavbarItem>
        <LogoContainer onClick={() => navigate("/workouts")}>
          <LogoImage src={icon} />
        </LogoContainer>
      </NavbarItem>
      <NavbarItem onClick={handleSingOut}>
        <h1>Sign Out</h1>
      </NavbarItem>
    </NavbarContainer>
  );
};

export default BottomNavbar;
