import React from "react";
import styled from "styled-components";
import empty from "../assets/images/dumbbell-empty.png";
import full from "../assets/images/dumbbell-full.png";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  color: white;
  color: #262729;
  z-index: 10;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0 0 10px 10px;
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

const TopNav = ({ counter, length }) => {
  return (
    <NavbarContainer>
      {Array.from({ length }).map((_, index) => {
        if (index < counter) {
          return (
            <img src={full} style={{ height: "30px" }} key={`full-${index}`} />
          );
        } else {
          return (
            <img
              src={empty}
              style={{ height: "30px" }}
              key={`empty-${index}`}
            />
          );
        }
      })}
    </NavbarContainer>
  );
};

export default TopNav;
