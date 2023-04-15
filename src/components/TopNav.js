import React from "react";
import styled from "styled-components";
import empty from "../assets/images/dumbbell-empty.png";
import full from "../assets/images/dumbbell-full.png";
import { useNavigate } from "react-router-dom";
import { LogoImage, NavbarContainer } from "../styles/styles";

const TopNav = ({ counter, length }) => {
  return (
    <NavbarContainer>
      {Array.from({ length }).map((_, index) => {
        if (index < counter) {
          return <LogoImage src={full} key={`full-${index}`} />;
        } else {
          return <LogoImage src={empty} key={`empty-${index}`} />;
        }
      })}
    </NavbarContainer>
  );
};

export default TopNav;
