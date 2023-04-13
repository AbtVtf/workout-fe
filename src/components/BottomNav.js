import React from "react";
import styled from "styled-components";
import icon from "../assets/images/logo512.png";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #333;
  color: white;
  color: #262729;

  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomNavbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavbarItem onClick={() => navigate("/")}>
        <h1>Home</h1>
      </NavbarItem>
      <NavbarItem>
        <LogoContainer onClick={() => navigate("/workouts")}>
          <img src={icon} style={{ width: "50px", height: "50px" }} />
        </LogoContainer>
      </NavbarItem>
      <NavbarItem>
        <h1>Profile</h1>
      </NavbarItem>
    </NavbarContainer>
  );
};

export default BottomNavbar;
