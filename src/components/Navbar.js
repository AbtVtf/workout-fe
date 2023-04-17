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
  Icon,
} from "../styles/styles";
import logoutIcon from "../assets/images/log-out.png";
import homeIcon from "../assets/images/home.png";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingOut = () => {
    dispatch(logout());
    navigate("/auth");
  };
  return (
    <NavbarContainer>
      <Icon onClick={() => navigate("/")} src={homeIcon} />

      <CenterWrapper onClick={() => navigate("/workouts")}>
        <LogoImage src={icon} />
      </CenterWrapper>
      <Icon onClick={handleSingOut} src={logoutIcon} />
    </NavbarContainer>
  );
};

export default Navbar;
